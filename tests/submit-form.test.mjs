import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import ts from 'typescript'
function asModule(path, dependencies = {}) {
 let source = readFileSync(new URL(path, import.meta.url), 'utf8')
 for (const [specifier, url] of Object.entries(dependencies)) source = source.replace(JSON.stringify(specifier), JSON.stringify(url))
 const js = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 } }).outputText
 return 'data:text/javascript;base64,' + Buffer.from(js).toString('base64')
}
const sourceModule = asModule('../src/lib/lead-source.ts')
const { getVisitSource } = await import(sourceModule)
const { submitForm } = await import(asModule('../src/lib/submit-form.ts', { './lead-source': sourceModule }))

test('channel labels distinguish Maps, paid, search and unknown', () => {
 const landing = query => new URL('https://proshieldepoxy.com/' + query)
 assert.equal(getVisitSource(landing('?utm_source=google&utm_medium=organic&utm_campaign=gbp'), ''), 'Google Business Profile')
 assert.equal(getVisitSource(landing('?gclid=example'), 'https://google.com'), 'Paid traffic')
 assert.equal(getVisitSource(landing(''), 'https://www.google.com/search?q=garage'), 'Search referral')
 assert.equal(getVisitSource(landing(''), 'https://chatgpt.com/'), 'AI referral')
 assert.equal(getVisitSource(landing(''), ''), undefined)
})

test('quote details use the free form payload and failures never report success', async () => {
 const fetchBefore = globalThis.fetch, keyBefore = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
 process.env.NEXT_PUBLIC_WEB3FORMS_KEY = 'test-only'
 try {
  let payload, headers
  globalThis.fetch = async (_, options) => { payload = options.body; headers = options.headers; return { ok: true, json: async () => ({ success: true }) } }
  assert.deepEqual(await submitForm({ name: 'Test', subject: 'untrusted', access_key: 'untrusted' }, 'Quote Request'), { ok: true })
  assert.equal(payload.get('Visit source'), 'Unknown')
  assert.match(payload.get('Website inquiry ID'), /^[a-f0-9-]{36}$/)
  assert.equal(payload.get('access_key'), 'test-only')
  assert.equal(payload.get('subject'), 'New Quote Request — ProShield Epoxy Website')
  assert.equal(headers['Content-Type'], undefined)
  assert.deepEqual(await submitForm({name:'Without photos'}, 'Quote Request'), {ok:true})
  assert.equal([...payload.values()].filter(x=>x instanceof File).length,0)
  for (const failure of [
   async () => ({ ok: false, json: async () => ({ success: true }) }),
   async () => ({ ok: true, json: async () => ({ success: false }) }),
   async () => ({ ok: true, json: async () => { throw new SyntaxError('Malformed JSON') } }),
   async () => { throw new TypeError('Offline') },
   async () => { throw new DOMException('Timeout', 'TimeoutError') },
  ]) { globalThis.fetch = failure; assert.deepEqual(await submitForm({name:'Test'}, 'Quote Request'), {ok:false}) }
  delete process.env.NEXT_PUBLIC_WEB3FORMS_KEY
  assert.deepEqual(await submitForm({}, 'Quote Request'), {ok:false})
 } finally { globalThis.fetch = fetchBefore; if(keyBefore===undefined) delete process.env.NEXT_PUBLIC_WEB3FORMS_KEY; else process.env.NEXT_PUBLIC_WEB3FORMS_KEY=keyBefore }
})
