# Arifur Rahman — Personal Portfolio Website PRD
Version 1.0 • Prepared September 22, 2026
Deliverable: requirements for a client-focused, frontend-only portfolio. This document does not build, deploy, or publish the website.

## 1. Product purpose

Create a personal portfolio that helps potential clients understand what Arifur Rahman builds, assess relevant work, and start a useful project conversation.

Positioning: a full-stack developer helping founders and businesses plan, build, and improve SaaS products, mobile applications, and custom web applications across industries.

Primary audience: startup founders, business owners, product leaders and agency partners.
Target regions: USA, UK, Australia, Europe, Latin America and the Middle East.
Primary language: clear English.
Primary conversion: an intentional project inquiry through WhatsApp or email.
Secondary conversion: viewing a relevant project or service.

The experience must feel considered, personal and credible, with strong typography, real work and restrained animation. Mobile visitors must be able to assess services and make contact as easily as desktop visitors.

## 2. Confirmed decisions and working defaults

| Item | Requirement / decision |
|---|---|
| Public brand name | Arifur Rahman; compact wordmark may use Arifur |
| Professional title | Full-Stack Developer |
| Main services | SaaS, mobile apps, custom web applications |
| Framework | Next.js App Router with TypeScript |
| Styling and motion | Tailwind CSS and GSAP |
| Scope | Frontend only; no application backend, database, authentication or admin panel |
| Theme | Light and dark with an accessible toggle |
| Pages | Home, About, Services, Projects and Contact |
| Projects and screenshots | User will supply later; design supports draft content |
| Design references | User will supply later; initial design direction is provisional |
| Primary WhatsApp | +8801756601431 |
| Alternative WhatsApp | +8801707991750 |
| Email | arifur.fullstack@gmail.com |
| Booking URL | Not supplied; booking UI hidden until configured |
| Domain and social URLs | Not supplied; configurable and absent from public UI until set |

The first phone number is designated primary as a reversible working default. Both remain visible on the Contact page.
Never display “Arif” alone in the portfolio branding.
Use a single Next.js application. Do not add a separate Vite build pipeline.

## 3. Scope and release boundary

Release one includes:
- Five main pages and a reusable project case-study template.
- Responsive navigation, footer and contact CTAs.
- Both themes and preference persistence.
- Local editable profile, services and project data.
- Project filtering when there is enough real content to make it useful.
- Client-side inquiry composition with email/WhatsApp handoff.
- Search metadata, social previews, sitemap and robots configuration.
- Mobile, keyboard, reduced-motion and cross-browser verification.
- Source files, content-editing instructions and build/deployment documentation.

Future additions, outside release one:
- A CMS, admin dashboard, authentication or database.
- A submission service, stored lead inbox or automated email delivery.
- A blog/insights section, downloadable resources or newsletter.
- Online scheduling integration beyond an external booking link.
- Multilingual site versions, paid advertising or advanced tracking.

No invented testimonials, client logos, project outcomes, ratings, numerical achievements, response-time guarantees or availability claims.

## 4. Brand and copy direction

Tone: direct, knowledgeable, approachable and casual. Explain what the work helps someone accomplish.

Suggested hero copy:
Eyebrow: Arifur Rahman · Full-Stack Developer
Headline: SaaS, mobile apps, and web applications built around your business.
Supporting line: I help founders and businesses turn ideas into practical software, improve existing products, and simplify everyday workflows.
Primary CTA: Discuss your project
Secondary CTA: Explore my services
When credible projects are published, secondary CTA may become View selected work.

Suggested contact headline: Tell me what you're building.
Suggested contact supporting text: Share your idea, the problem you're solving, or the part of your current product that needs attention.

Use first-person singular for personal work. If a project was built by a team, state Arifur's actual role.
Do not imply physical offices in target countries. Target markets do not establish an existing client history.
Describe any hypothetical project or interface explicitly as a concept.

## 5. Information architecture

| URL | Purpose | Primary action |
|---|---|---|
| / | Introduce positioning, selected work, services and process | Discuss your project |
| /about/ | Explain working approach and relevant background | Start a conversation |
| /services/ | Help buyers identify a suitable engagement | Discuss this service |
| /projects/ | Browse credible work and inspect relevant examples | Open case study |
| /projects/[slug]/ | Explain a specific project's problem, role and implementation | Discuss a similar project |
| /contact/ | Offer direct contact and a structured inquiry composer | Open WhatsApp / Open email draft |
| /404.html | Explain a missing page with useful navigation | Return home |

Use normal crawlable links for navigation. Project routes exist only for published records with complete required content.
Service categories link to anchored sections in release one. Individual service pages can be added later when each has substantive content.

## 6. Shared layout and navigation

Desktop:
- Wordmark on the left.
- Home, About, Services, Projects and Contact navigation.
- Visible light/dark toggle and compact project CTA.
- Current page indicated without relying only on color.
- Header can become sticky, with sufficient contrast in both themes.

Mobile:
- Wordmark, theme control and menu button fit at 320px without overlap.
- Menu supports keyboard navigation and Escape dismissal.
- If implemented as a modal drawer, trap focus, prevent background scrolling and restore focus to its trigger.
- Close after selecting a destination.
- Contact action remains easy to find; any bottom bar must respect safe areas and must not obscure content or the keyboard.

Footer:
- Name and concise service line.
- Main navigation.
- Email and primary WhatsApp link.
- Alternative WhatsApp available on Contact.
- Social links only when real URLs are supplied.
- Current copyright year.
- No empty social icons, fake legal links or dead booking buttons.

## 7. Home page requirements

Use a deliberate sequence with varied layouts rather than identical cards for every section.

1. Hero
- Communicate the service offering immediately.
- Show a user-supplied professional portrait when available.
- Use a confident typographic composition and a restrained accent.
- Keep the main message and action visible without waiting for animation.
- On mobile, place the text and CTAs before the portrait unless later references justify another accessible arrangement.

2. Selected work
- Show up to three published projects with meaningful visuals, a short problem statement, category and role.
- Link each to its case study.
- If there are no published projects, omit this home section and retain useful service content. Do not present mock projects as completed work.

3. Services overview
- Present SaaS, mobile app development and custom web applications.
- Show a concise outcome-oriented description and a link to the relevant Services section.
- Include existing-product improvements as a supporting service.

4. Working process
- Understand the business and users.
- Define scope and priorities.
- Design, develop and review.
- Prepare launch and handover.
- Improve through an agreed support scope.
- Present these as the intended engagement approach, without invented past-project narratives.

5. About preview
- Use concise personal introduction and verified information only.
- Link to About.

6. FAQ
- Answer common scope questions: first version planning, web versus mobile, existing products, budget drivers, international collaboration and post-launch support.
- Use short direct answers followed by helpful nuance.
- Avoid universal prices or timelines.

7. Closing contact section
- Repeat one useful invitation.
- Primary contact CTA links to /contact/.
- A direct WhatsApp link is permitted as a secondary option.

## 8. About page requirements

- Name, professional title, short introduction and supplied portrait.
- Explain the connection between technical execution and practical business needs.
- Describe working principles: clear scope, regular communication, usable interfaces, maintainable implementation and explicit handover.
- Show technical capabilities as readable groups, not skill-percentage meters.
- The portfolio website's own Next.js stack is confirmed. List broader personal technologies only from user-approved profile content.
- Reserve optional structured fields for employment, education, awards and downloadable CV; hide empty fields.
- Do not add personal family or health information.
- Finish with a relevant project conversation CTA.

## 9. Services page requirements

| Service | Buyer need | Examples of scoped capabilities |
|---|---|---|
| SaaS application development | Launch or improve a subscription/software product | Workspaces, roles, dashboards, billing flows and integrations |
| Mobile application development | Deliver a useful mobile product | Onboarding, account flows, API integration, notifications and device-aware workflows |
| Custom web applications | Support a specific business workflow | Booking systems, portals, marketplaces and operational tools |
| MVP planning and development | Turn an idea into a focused first release | Discovery, user journeys, feature priorities, implementation and release planning |
| Existing application improvements | Resolve limitations in a current product | Workflow fixes, integrations, UX improvements, performance review and modernization |

For each service include:
- The problem it helps address.
- Typical deliverables, with scope-dependent language.
- A short engagement outline.
- Relevant published work, when available.
- A “Discuss this service” action that preselects the service in the inquiry composer.

Industries section:
Use e-commerce, service/booking businesses, education, real estate, hospitality, logistics and creator platforms as illustrative possible application areas. Clearly describe these as use cases; do not claim projects or regulated-domain expertise that has not been supplied.

Avoid fixed pricing packages until real packages are approved. State that scope depends on requirements, integrations and delivery expectations.

## 10. Projects index and case studies

Projects index:
- Provide All, SaaS, Mobile Apps and Web Applications filters when supported by the content.
- Use accessible buttons, a visible active state and a clear no-results message.
- Hide filters if there are too few records for them to help.
- Each card includes an image, title, category, short problem/solution description and role.
- Preserve image aspect ratios; avoid unexplained crops that hide the product.
- External demo links must be real. Hide unavailable links instead of using #.

Case study template:
- Project title and category.
- Hero screenshot with useful alt text.
- Project context and intended users.
- Problem, constraints and scope.
- Arifur's role and team attribution where applicable.
- Key workflows and implementation decisions.
- Technology list supplied for that project.
- Screenshots with explanatory captions.
- Outcomes only when documented; otherwise describe delivered capabilities.
- Live URL or repository URL only when provided and shareable.
- Related service, optional related project and project inquiry CTA.

Content states:
- draft: visible only in an explicitly enabled development preview.
- published: complete, approved and publicly accessible.
- demo/concept: permitted if clearly labeled throughout the card and case study.
- Missing image: intentional neutral placeholder in preview, not broken media.
- No published work: Projects page gives a short honest message such as “Selected project details are being prepared. Tell me what you're building and I can discuss relevant work.” Keep it noindex until substantive work is published.

Real projects can be added later without redesigning the page.

## 11. Contact and inquiry behavior

Exact contact configuration:
- Email: arifur.fullstack@gmail.com
- Primary WhatsApp: +8801756601431
- Alternative WhatsApp: +8801707991750

Links:
- mailto:arifur.fullstack@gmail.com
- https://wa.me/8801756601431
- https://wa.me/8801707991750

Display both numbers in international format. Label them Primary WhatsApp and Alternative WhatsApp without inventing different departments or ownership.
A plain click-to-chat opens the selected WhatsApp destination. Any prefilled message must be URL-encoded.
Suggested initial message: “Hi Arifur, I'd like to discuss a software project.”

Contact layout:
- Invitation and direct contact options first.
- Structured inquiry composer second.
- Visible email text and a copy action as fallback.
- No booking CTA until a booking URL is configured.

Inquiry composer:
- Name: required.
- Reply email: optional for WhatsApp; validate its format when entered.
- Project type: required; SaaS, mobile app, web application, existing-app improvement, other.
- Project summary: required, with a reasonable length limit such as 1,000 characters.
- Budget range: optional free text.
- Desired timing: optional free text.
- No attachment upload.

Actions:
- “Open email draft” creates a mailto subject/body using the entered information.
- “Continue in WhatsApp” opens a draft to the primary number; an alternative-number choice may be shown.
- Neither action sends automatically.
- Beside the actions, state: “This opens a draft in your email app or WhatsApp. Review it and send it there.”
- Never show “Message sent” or pretend the website has received an inquiry.
- If no email handler is available, retain the information and offer “Copy project brief.”
- Clipboard success feedback appears only after success; on failure, show selectable text.
- Keep draft fields in memory only; do not put the brief in analytics, logs, or local storage.
- The service query parameter may preselect a known service. Do not put personal inquiry text in the portfolio's URL.
- Show inline errors with labels and accessible error associations.

This scope deliberately supplies real contact functionality without requiring a submission server.

## 12. Light and dark themes

- On first visit, follow the operating-system preference.
- Header control switches between light and dark explicitly.
- Persist a manual choice locally and apply it before paint where feasible.
- When no manual choice exists, system changes can update the theme.
- Handle unavailable browser storage gracefully.
- Theme must stay consistent across navigation and reloads.
- Toggle has an accessible name such as “Switch to dark theme”; icon-only appearance still requires a label.
- Avoid hydration warnings and a visible flash of the wrong theme.
- Use shared semantic color variables, never isolated hard-coded light colors in components.
- Verify surfaces, borders, forms, errors, filters, navigation, overlays and focus indicators in both modes.

Provisional design tokens, to be validated and refined when references arrive:

| Token | Light | Dark |
|---|---|---|
| Page background | #F7F7F4 | #101114 |
| Raised surface | #FFFFFF | #191B20 |
| Primary text | #15171A | #F4F5F7 |
| Secondary text | #52565E | #B5BAC4 |
| Accent | #1D4ED8 | #93C5FD |
| Decorative border | #D9DCE2 | #353A45 |
| Filled accent button text | #FFFFFF | #101114 |

Decorative borders are not automatically suitable as the sole boundary of inputs; validate functional control contrast separately.

## 13. Visual system and responsive behavior

Design direction:
- Editorial typography, generous spacing, intentional asymmetry where useful and large product visuals.
- One restrained accent color.
- Recognizable personal portrait rather than stock imagery.
- Distinct section compositions.
- No emoji icons, fake graphs, random glowing decorations or repeated generic card grids.
- Avoid heavy 3D scenes and decorative elements that compete with project evidence.
- Later references refine visual styling without removing established functional requirements.

Typography:
- Start with one high-quality, self-hosted variable sans-serif family, such as Manrope, subject to license and reference fit.
- Optional restrained monospace labels.
- Fluid heading sizes; body text approximately 16–18px with comfortable line height.
- Prose width approximately 60–75 characters.
- Do not apply all-caps styling to long copy.

Layout:
- Content width approximately 1,200–1,280px on large displays.
- Mobile gutters 16–20px; tablet 24–32px; desktop 40–64px.
- Fluid spacing and natural wrapping rather than device-specific fixed heights.
- One-column mobile layouts; larger grids only when content fits.
- Project cards: typically one mobile column and two desktop columns.

Buttons:
- Clear primary, secondary and text-link variants.
- Visible hover, focus, active and disabled states.
- Minimum design target of 44px in each touch dimension.
- Icons supplement text; essential actions cannot depend on hover.
- External-link behavior is communicated where it matters.

Verification widths:
320, 375, 390, 768, 1024, 1440 and 1920px, plus a landscape phone.
No horizontal page scrolling, clipped headline, overlapping header, inaccessible CTA or fixed element covering content.

## 14. Animation requirements

GSAP is for a small number of deliberate sequences:
- A restrained hero entrance.
- Subtle one-time section or image reveals.
- Optional desktop image movement only when it does not interfere with reading.
- Fast menu opening and closing.

Use CSS for simple hover, focus and color transitions.
Typical motion targets: 150–250ms for microinteractions and 350–650ms for section reveals.
Animation must not delay access to text or contact actions.
Keep initial content visible if JavaScript or motion setup fails.
Respect prefers-reduced-motion: disable nonessential transforms, parallax and stagger effects.
No scroll hijacking, mandatory preloader, custom cursor dependency or pinned horizontal reading section.
Scope GSAP setup to its component, clean up animations on unmount and handle breakpoint changes. GSAP matchMedia supports breakpoint and reduced-motion conditions [S3].

## 15. Technical implementation

Use compatible stable releases at implementation time and commit a dependency lockfile. Record Node and package-manager requirements in the README.

Core:
- Next.js App Router.
- TypeScript.
- Tailwind CSS with shared tokens.
- GSAP and its React integration for scoped motion.
- A lightweight SVG icon set with individual imports.

Rendering and delivery:
- Generate public pages at build time using Next.js static export.
- Generate published project slugs ahead of time.
- Deliver the exported files through static hosting.
- The static export has no request-time application server; runtime features must respect that boundary.
- Use optimized local media with dimensions and an image strategy compatible with static export. The default runtime image optimizer cannot be assumed.
- Default media plan: precompress assets and use responsive image sources without a server optimizer. A custom loader is an alternative if a real image service is added.
- No Server Actions, runtime database access or email endpoints in this scope.
- Essential page content must be present in generated HTML.

Next.js static-export and route-generation documentation are the implementation references [S1, S2].
Default to the smallest necessary client components: theme control, mobile menu, filters, composer and animation wrappers.
No separate Vite setup, global state framework or duplicate animation framework is required.

Suggested organization:
- app/: routes, layouts and page metadata.
- components/layout/: header, footer and mobile navigation.
- components/ui/: shared controls.
- components/sections/: page sections.
- components/projects/: cards, filters and case-study views.
- content/: profile, services and projects.
- lib/: formatting, validation and contact-link construction.
- public/: images, icons and supplied documents.
- styles/: tokens and global styling.

## 16. Editable content contract

Profile:
displayName, shortName, role, summary, portrait, portraitAlt, email, whatsappPrimary, whatsappAlternative, bookingUrl, socialLinks, siteUrl.

Service:
id, slug, title, summary, buyerProblem, capabilities, process, relatedProjectIds, ctaLabel.

Project:
id, slug, title, category, industry, summary, status, isConcept, featured, thumbnail, thumbnailAlt, screenshots, problem, scope, role, teamAttribution, approach, features, technologies, outcomes, demoUrl, repositoryUrl, seoTitle, seoDescription.

Rules:
- Centralize contact values so no page can diverge from configuration.
- Validate required published project fields and unique slugs.
- Exclude draft content from public exports, internal links and sitemap.
- Missing optional content hides its component.
- Owner can add projects through data/content edits and a rebuild.
- No dashboard is implied.
- README explains every field and includes one clearly labeled draft example.
- Optional future MDX articles may be added separately; release one does not need an MDX pipeline solely for simple records.

## 17. SEO, GEO and AEO requirements

- Unique title and description for every substantive page.
- One descriptive main heading and sensible nested headings.
- Crawlable links and readable text in the exported HTML.
- Canonical URLs based on a configured production domain.
- Social preview image, title and description.
- Descriptive filenames, image dimensions and appropriate alt text.
- Sitemap includes only published, indexable routes.
- Preview environments and placeholder-only pages stay noindex.
- Require the real domain before generating production canonical and sitemap URLs; never ship example.com.
- Include accurate Person and website structured data where appropriate, matching visible content.
- Add verified social profiles only when provided.
- No fake ratings, local offices, client claims or unsupported schema fields.
- FAQs answer actual buyer questions directly.
- Project pages show context, contribution and evidence.
- Keywords follow the topic naturally: SaaS development, mobile application development, custom web applications and MVP development.
- Avoid duplicate country-targeted pages without meaningful localized content.
- No promise of rankings or AI citations.

Google's guidance says normal SEO practices apply to its AI search features; special AI markup is unnecessary and inclusion is not guaranteed [S6].

## 18. Accessibility and performance

Accessibility target: WCAG 2.2 AA, plus reduced-motion support.
- Keyboard access to navigation, filters, theme and inquiry actions.
- Visible focus and a skip-to-content link.
- Semantic headings, buttons, links and landmarks.
- Labels and error associations for inputs.
- Normal text contrast at least 4.5:1; qualifying large text at least 3:1.
- Relevant non-text control indicators at least 3:1.
- Meet contrast independently in both themes [S4, S5].
- Keep content usable at 200% zoom and check reflow.
- No essential information conveyed only by color or motion.

Performance targets, to be measured rather than promised:
- Mobile Lighthouse Performance at least 90 under a recorded test setup.
- Accessibility and SEO audits at least 95, with manual checks supplementing automated scores.
- Field goals where sufficient traffic exists: LCP at most 2.5s, INP at most 200ms, CLS at most 0.1 at the 75th percentile.
- Early development uses lab proxies; field INP cannot be claimed from an empty new site.
- Target initial compressed JS around 200KB or lower where practical; investigate heavier pages.
- Prioritize the actual hero/LCP image and lazy-load below-the-fold assets.
- Reserve media dimensions, subset fonts and avoid unnecessary third-party embeds.
- No autoplay background video in release one.

## 19. Verification and acceptance criteria

Release passes when:
1. All five main pages and published case-study routes render correctly and survive direct navigation and refresh on the chosen host.
2. A production static build succeeds and exported output is tested.
3. Theme follows initial system preference, persists manual choice and has no conspicuous flash or hydration error.
4. Both WhatsApp destinations and the exact email are correct in every rendered location.
5. Inquiry actions open correctly encoded drafts; no automatic-send or fake-success claim appears.
6. Missing email handler and clipboard failure leave a usable contact fallback.
7. Booking and social links stay hidden without real URLs.
8. Draft projects cannot leak into production routes or sitemap.
9. Filters work, empty states are readable and all real project links have been checked.
10. Both themes remain usable at the specified widths and at zoom.
11. Keyboard navigation, menu focus and reduced-motion behavior work.
12. Essential content is readable before animations initialize.
13. No invented work, testimonials or numerical claims appear.
14. Metadata and social previews are correct; missing production domain is explicitly flagged before public release.
15. README explains adding a project, changing contacts, replacing the portrait, building and deployment.

Verification approach:
- Manual visual checks for representative pages in both themes.
- Focused browser checks for navigation, theme persistence, project filtering and contact composition.
- Inspect generated links and draft text; do not send test messages to the supplied phone numbers or email.
- Audit one representative mobile page and a case study with real imagery.
- Fix failures that affect acceptance rather than adding broad tests for static decorative text.

## 20. Delivery phases and owner inputs

Phase 1: Establish tokens, responsive shell, navigation, themes and content contracts.
Phase 2: Build Home, About, Services and Contact.
Phase 3: Build Projects, case-study template and preview-only draft content.
Phase 4: Add restrained motion, search metadata and responsive polish.
Phase 5: Run acceptance checks, document setup and prepare a reviewable preview.

Inputs that can arrive later:
- Portrait and design-reference screenshots/URLs.
- Project names, screenshots, descriptions, role and live URLs.
- Brand colors or logo if desired.
- Social profile URLs.
- Booking URL.
- Production domain.
- Approved optional biography, CV and testimonials.

Missing materials do not block structural implementation. They do limit which content may be published as real proof.
This PRD authorizes planning only; creating this document does not itself publish a website.

## 21. Sources

Technical guidance checked September 22, 2026:
[S1] Next.js static exports: https://nextjs.org/docs/app/guides/static-exports
[S2] Next.js generateStaticParams: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
[S3] GSAP matchMedia: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/
[S4] W3C text contrast: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
[S5] W3C non-text contrast: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[S6] Google AI features and websites: https://developers.google.com/search/docs/appearance/ai-features

Design tokens, copy, layout choices and performance budgets in this PRD are proposed product requirements, not claims of completed implementation or verified site performance.

