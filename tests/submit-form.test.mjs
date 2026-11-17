import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import ts from 'typescript'
const compiled = ts.transpileModule(readFileSync(new URL('../src/lib/submit-form.ts', import.meta.url), 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 } }).outputText
const { submitForm } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)

test('quote details use the free form payload and failures never report success', async () => {
 const fetchBefore = globalThis.fetch, keyBefore = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
 process.env.NEXT_PUBLIC_WEB3FORMS_KEY = 'test-only'
 try {
  let payload, headers
  globalThis.fetch = async (_, options) => { payload = options.body; headers = options.headers; return { ok: true, json: async () => ({ success: true }) } }
  assert.deepEqual(await submitForm({ name: 'Test', subject: 'untrusted', access_key: 'untrusted' }, 'Quote Request'), { ok: true })
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
