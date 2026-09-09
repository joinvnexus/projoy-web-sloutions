# LocalLeads Audit Report

**Audit date:** 5 September 2026  
**Scope:** Source tree, application configuration, API routes, forms, legal pages, README, package metadata, ignore rules, and GitHub Actions workflow.  
**Assessment level:** Source-code review. This is not a legal opinion, penetration test, dependency certification, or proof of the security of third-party accounts and hosting.

## Executive Summary

The project has a reasonable Next.js App Router structure, strict TypeScript settings, escaped HTML email templates, environment-based public-site configuration, security response headers, and a useful SEO schema foundation. It is not yet ready to be described as legally complete or production-hardened.

The highest-priority actions are:

1. Revoke the GitHub Personal Access Token previously exposed in chat and rotate any related credentials.
2. Decide whether this is proprietary software or an open-source project, then add an intentional license and copyright notice.
3. Add server-side validation, request-size limits, rate limiting or bot protection, and abuse monitoring to `/api/contact` and `/api/audit`.
4. Make the privacy policy match the actual analytics, email-provider, retention, cookie, and deletion implementations.
5. Replace unverified claims and placeholder content before publishing.
6. Add automated dependency, secret, license, and workflow security checks to CI.

## Severity Summary

| Severity | Finding | Status |
|---|---|---|
| Critical | A GitHub PAT was exposed in the conversation. | Immediate rotation required |
| High | Public form endpoints have no server-side schema validation or rate limiting. | Open |
| High | No `LICENSE`, `NOTICE`, or copyright policy exists. | Open |
| High | Privacy policy claims operational controls that are not evidenced in code. | Open/legal review |
| Medium | Personal contact details and personal profile URLs are published in source and JSON-LD. | Confirm intentional disclosure |
| Medium | No automated test suite, dependency audit, secret scan, or license scan is configured. | Open |
| Medium | Marketing and legal claims may be unverified or inconsistent. | Review before launch |
| Low | README is a good starter document but does not document env vars, architecture, security, licensing, or CI/CD. | Improve |

## 1. Ownership and Licensing

### Current state

No `LICENSE`, `LICENCE`, `COPYING`, or `NOTICE` file was found. `package.json` marks the package as `private: true`, but that does not grant ownership, prevent copying, or define rights for users, contractors, clients, or contributors. No copyright header or contribution policy was found.

Copyright normally exists automatically in original source code when created, but proving ownership and controlling reuse is much easier when the repository contains a dated copyright notice, an explicit license or proprietary terms, contributor agreements where relevant, and a clean chain of title for images, fonts, logos, text, and client materials.

### Which license is best?

There is no universally best license; the correct choice depends on the business model:

- **Proprietary / All Rights Reserved:** Best when the goal is to keep this agency website and its source closed, prevent reuse, and retain exclusive commercial control. Do not publish MIT, Apache, or GPL terms accidentally. Add a custom commercial license or terms reviewed by a qualified lawyer. `private: true` alone is not enough.
- **Apache-2.0:** Best general open-source choice when commercial use, modification, redistribution, and explicit patent protection are acceptable. It preserves copyright and requires license/notice preservation, but it does not prevent competitors from using the code.
- **MIT:** Best for maximum adoption and minimal friction. It is permissive and simple, but gives recipients broad rights and has fewer explicit patent and notice protections than Apache-2.0.
- **GPLv3:** Best when derivative distributed software must remain GPL and source must be provided under the copyleft terms. It is usually a poor fit for a proprietary agency starter or a client-delivery codebase. For a hosted service where network copyleft matters, AGPLv3 is the more relevant license, but it has stronger obligations.

**Recommendation:** If the project is a commercial LocalLeads asset, use a proprietary license or clearly drafted “All Rights Reserved” terms and keep the repository private. If the intention is genuinely to build an open-source starter, choose Apache-2.0 over MIT when patent protection and preserved notices matter. Have counsel review the final terms, especially client ownership and third-party assets.

### Ownership risks to resolve

- Confirm who created each source file, design, logo, image, testimonial, case study, and content item.
- Obtain written IP assignment agreements from employees and contractors.
- Confirm client consent and releases for case studies, logos, metrics, testimonials, and screenshots.
- Record the license for every third-party image, font, icon, npm package, and copied snippet.
- Replace or verify any personal LinkedIn, GitHub, portfolio, phone, and email details before public release.

## 2. Security and Privacy

### Secret scan result

No live API key, password, database credential, or token was found in the scanned source files. `.env.example` contains placeholders only, and the current ignore rules exclude `.env`, `.env.local`, `.env.*.local`, `.next`, `node_modules`, and build metadata.

However, a GitHub PAT was supplied in the conversation. Treat it as compromised even if it was not committed to this repository. Revoke it in GitHub immediately, create a replacement with the minimum required repository permission, and remove any credential-manager entry that cached it. Never put a token in a remote URL, shell history, chat, issue, log, or workflow output.

A source scan cannot prove that secrets are absent from old Git commits, GitHub Actions secrets, Vercel environment variables, Windows Credential Manager, shell history, backups, or developer machines.

### API endpoint findings

The contact and audit routes in [app/api/contact/route.ts](app/api/contact/route.ts) and [app/api/audit/route.ts](app/api/audit/route.ts) accept JSON and forward user-controlled values to Resend. They currently lack:

- Server-side schema validation for type, format, and maximum length.
- A request body size limit.
- Rate limiting, CAPTCHA/Turnstile, honeypot, or bot detection.
- Explicit origin/CSRF policy for browser submissions.
- Abuse monitoring, alerting, idempotency, and delivery quotas.
- A documented deletion and retention mechanism.

The email templates escape interpolated fields in [components/emails/ContactEmail.tsx](components/emails/ContactEmail.tsx) and [components/emails/AuditEmail.tsx](components/emails/AuditEmail.tsx), which is a good control against HTML injection in the generated email body. Keep this escaping even after adding validation.

The routes expose a public email-sending capability. An attacker can repeatedly submit arbitrary messages to consume Resend quota, fill the mailbox, or cause operational denial of service even without obtaining the API key.

### Personal and telemetry data

The code publishes a business email, phone number, location, founder name, GitHub, LinkedIn, and portfolio URLs through constants and structured data. This may be intentional, but verify consent and whether each profile represents the person or the organization.

The privacy policy states that analytics are anonymised, data is encrypted, and contact data is deleted after 24 months. The source does not demonstrate all of those controls. Google Analytics and Microsoft Clarity are conditionally loaded from [app/layout.tsx](app/layout.tsx), and form data is sent to Resend. Update the policy to describe the real providers, cookies, lawful basis/consent approach, international transfers, processor roles, retention, access/deletion workflow, and breach contact. Do not promise controls that are not actually implemented.

### AI training platform / DataFactor risk

Uploading the repository to any AI model training, code indexing, or analytics platform can create risks even when the code contains no current secret:

- The platform may retain prompts, repository files, embeddings, logs, or derived outputs.
- Public contact details, founder profiles, customer/case-study information, and unpublished business logic may be processed.
- `.env.local`, credentials, Git history, editor metadata, build artifacts, and ignored files can be uploaded accidentally if the wrong directory is selected.
- Third-party license terms may restrict sending code or assets to a platform for training or commercial analysis.
- A platform may use data for model improvement unless an enterprise no-training/retention setting is enabled.

Before upload: use a clean export, exclude `.git`, `.env*`, `node_modules`, `.next`, backups, logs, client data, and private assets; remove secrets from Git history; read the provider's retention/training/subprocessor terms; use an enterprise no-training contract where available; and obtain client consent where client materials are included.

## 3. Code Quality and Best Practices

### Strengths

- Clear Next.js App Router separation between routes, components, data, constants, schemas, and shared UI.
- Strict TypeScript configuration with `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`.
- Shared constants and schema builders reduce repeated SEO configuration.
- Server-only Resend calls keep the API key out of client components.
- Email HTML fields are escaped.
- Security headers include `X-Content-Type-Options`, frame protection, referrer policy, and permissions policy.
- `.github/workflows/ci-cd.yml` provides a basic type-check/build gate and an opt-in Vercel deployment path.

### Gaps and inconsistencies

- There are no automated unit, integration, route, accessibility, or end-to-end tests.
- The README advertises `npm run lint`, but the project should verify that the installed Next.js version still supports the configured `next lint` command. Modern Next versions have changed lint integration; use the supported ESLint command explicitly if needed.
- `npm audit`, secret scanning, dependency review, license review, and static security scanning are not part of CI.
- Form validation is duplicated in client components and absent on the server. Client validation is never a security boundary.
- `SchemaMarkup` uses `dangerouslySetInnerHTML`, which is appropriate for JSON-LD only when the object is generated by trusted code. Never pass user-controlled HTML or untrusted schema strings into it.
- The current headers omit a Content Security Policy. A CSP should be designed alongside the Google Analytics, Clarity, fonts, Resend/API, and any future third-party integrations rather than copied blindly.
- `X-XSS-Protection` is obsolete in modern browsers; it is harmless in many deployments but should not be treated as a meaningful XSS control.
- The project contains placeholder UI and blog content markers, plus several performance, project-count, review, and guarantee claims. Verify every claim with evidence or label it as an example.
- The privacy policy and terms contain legal and operational assertions that require business/legal confirmation.

## 4. README Assessment

The current [README.md](README.md) is a useful starter README: it explains the product, stack, basic setup, scripts, deployment direction, and project structure. It is not yet a professional release-grade README because it does not document:

- License and copyright status.
- Required and optional environment variables with safe placeholder examples.
- Data flow: browser form -> Next.js API route -> Resend -> business mailbox.
- Security policy and responsible disclosure contact.
- CI/CD workflow, required GitHub variables/secrets, and deployment environments.
- Supported Node/npm versions and reproducible install expectations.
- Testing/status badges, build status, and known limitations.
- Third-party assets and license attribution.
- Content ownership, client-material rules, and contribution policy.
- A clear distinction between demo/placeholder content and verified production claims.

The README also still describes backend form integration as future work even though contact and audit API routes are present. That section should be corrected to reflect the actual implementation and its prerequisites.

## 5. Ordered Remediation Plan

### Step 1: Revoke and rotate credentials now

1. Revoke the exposed GitHub PAT in GitHub Settings -> Developer settings -> Personal access tokens.
2. Remove cached GitHub credentials from Windows Credential Manager.
3. Check GitHub Actions, Vercel, Resend, and local `.env` values for reuse of that token or related secrets.
4. Create a least-privilege replacement only after confirming repository write access.
5. Keep the remote URL token-free:

```powershell
git remote set-url origin https://github.com/joinvnexus/projoy-web-sloutions.git
git push origin master
```

Authenticate with GitHub CLI/browser login or Git Credential Manager; never paste the token into chat or the URL.

### Step 2: Decide and document the license

For a closed commercial project, add a reviewed proprietary license. For a real open-source release, choose Apache-2.0 or MIT deliberately and add the exact upstream license text. Then add a copyright notice such as:

```text
Copyright (c) 2026 LocalLeads / Projoy Naidu
All rights reserved.
```

Do not claim ownership of third-party dependencies or client-provided materials. Keep a `THIRD_PARTY_NOTICES.md` file for assets and copied code.

### Step 3: Add server-side input validation

Use a maintained schema validator such as Zod (or equivalent), validate every field after parsing JSON, reject unknown/oversized input, and return generic errors. At minimum enforce:

- Name/business: bounded strings.
- Email: valid email format and bounded length.
- Website: valid `https` URL when provided.
- Subject/service: allowlisted values.
- Message/challenge: bounded length and non-empty requirements.

Do not trust the client-side validators in `ContactForm.tsx` or `AuditForm.tsx` as security controls.

### Step 4: Protect public form endpoints

Add a provider-backed rate limit keyed by IP and route, a honeypot or Cloudflare Turnstile, request size limits, and monitoring for Resend failures. Add an origin check if the endpoint is intended only for this site. Avoid logging submitted message bodies or email addresses unnecessarily.

### Step 5: Correct privacy operations

1. Inventory Google Analytics, Clarity, Resend, Vercel, fonts, Calendly, and social embeds.
2. Decide whether consent is required for each region and implement a consent mechanism where required.
3. Document processors, international transfers, retention, deletion requests, cookies, lawful basis, and contact details.
4. Implement the promised retention/deletion workflow or remove the promise.
5. Update the “last updated” date only after the policy is reviewed.

### Step 6: Verify content and ownership

Replace or substantiate all project-count, PageSpeed, review, response-time, testimonial, case-study, and guarantee claims. Obtain written consent for client names, logos, metrics, and testimonials. Confirm that every social URL is real and belongs to the stated entity.

### Step 7: Improve CI/CD

Add these non-secret checks to GitHub Actions:

```yaml
- run: npm ci
- run: npm run type-check
- run: npm audit --omit=dev --audit-level=high
- run: npx secretlint "**/*" --no-fix
```

Also enable GitHub secret scanning and push protection, dependency alerts/Dependabot, and a license review job. Keep Vercel deployment gated behind protected environment secrets and a deliberate production approval policy.

### Step 8: Add tests before calling it production-ready

Add tests for both API routes covering valid input, malformed JSON, missing fields, oversized values, invalid email/URL, provider failure, and success. Add an end-to-end test confirming that user input is escaped in generated email HTML. Add accessibility and smoke tests for the main routes.

### Step 9: Verify locally and inspect history

```powershell
npm ci
npm run type-check
npm run build
npm audit --omit=dev --audit-level=high
git grep -n -I -E "(github_pat_|ghp_|sk-[A-Za-z0-9]|RESEND_API_KEY=|PASSWORD=|BEGIN .* PRIVATE KEY)" -- ':!package-lock.json'
git log --all -S "github_pat_" --oneline -- .
git status --short
```

Run a history purge with GitHub's documented secret-removal procedure if a secret appears in any commit. Do not rely on deleting the current file alone.

### Step 10: Final release gate

Release only after: legal owner and license are confirmed; secrets are rotated; dependency and license scans pass; API abuse controls are live; privacy text matches actual operations; claims are evidenced; tests/build pass; production environment variables are configured; and a human reviews the final public pages.

## Final Assessment

This is a solid application foundation, but it is currently best classified as **pre-production with open legal, abuse-prevention, privacy-governance, and verification work**. The most urgent issue is the exposed GitHub PAT, followed by public email endpoints without server-side validation/rate limiting and the absence of an intentional license. Address those before sharing the repository with an AI training platform or treating the site as a fully production-hardened commercial system.
