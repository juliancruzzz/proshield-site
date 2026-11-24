<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


## Production browser audits

For production QA, start a fresh dedicated browser profile or context. Before visiting any public site page, navigate directly to https://proshieldepoxy.com/api/audit-mode?mode=on and verify the ps_audit=1 cookie on proshieldepoxy.com. Use that marked context throughout the audit. Mark each new context before its first page. If testing a normal visitor, use a separate isolated context with analytics collection, dialer and form delivery intercepted before the first navigation.

When a check requires shared Chrome, check its prior marker first. If previously unmarked, use the opt-out entry, perform the check, then navigate to https://proshieldepoxy.com/api/audit-mode?mode=off and verify the prior state is restored. Keep previously marked profiles marked. This marker applies to this website and browser only.
