# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 15 (App Router) configured for Static Export (`output: 'export'`), Tailwind CSS, Framer Motion, Sanity.io / Payload CMS (build-time fetch for static generation), PostHog.

## Users

Consumers scanning QR codes on water bottles.
Brand Partners and Businesses evaluating the advertising platform.

## Product Purpose

Free Drops is a disruptive ad-revenue water company. It gives away water for free, paid for by brands who place their messaging on the bottles. The product aims to deliver instant, high-conversion landing pages to users when they scan the QR code on a bottle.

## Positioning

"Free to You, Paid by Brands" model. Premium, anti-slop, technically engineered aesthetic compared to generic ad platforms.

## Operating Context

Users holding a water bottle in one hand, scanning with their mobile phone. Needs mobile-first, one-handed usability (Bento layouts) and extreme speed (sub 200ms load times).

## Capabilities and Constraints

- **Static Hosting Constraint (Inferred):** Must be a static website hosted on GitHub Pages. This precludes server-side edge functions for routing. Dynamic QR redirection must happen at build time (`generateStaticParams`) or client-side.
- **Dynamic QR Engine:** `/scan/[brand_id]` redirecting to the brand landing page.
- **Multi-Drop Portal:** If multiple brands are on a bottle, users select the offer.
- **Brand Partner Portal:** Direct-to-Buy, Email capture (Claim Offer modal), Sustainability Impact widget.
- **B2B Marketing Page:** Features an ROI calculator for prospective brands.

## Brand Commitments

- **Aesthetic:** Swiss Design (International Typographic Style) and Modern Brutalism. "Anti-slop".
- **Typography:** Oversized grotesque typography (Inter Tight or Neue Haas Grotesk), high-contrast.
- **Layout:** Strict 12-column grid, Bento layouts with thin 1px border lines, ink-trap details.
- **Imagery:** High-resolution, raw photography of aluminum bottles and water textures. No 3D glassmorphism or generic AI art.
- **Color:** Monochrome palette with a single high-visibility accent color (#00F0FF 'Electric Drop').

## Evidence on Hand

[None provided in brief; mock content will be used unless provided].

## Product Principles

1. **Performance Above All:** Lighthouse 100, 0 CLS, instant perceived load time.
2. **Authority Through Typography:** Rely on rigorous Swiss typographic discipline rather than generic graphics.
3. **Engineered Precision:** Strict grids and 1px borders to project a technical, non-floaty feel.
4. **Frictionless Conversion:** Mobile-optimized, instant engagement paths for consumers holding the product.

## Accessibility & Inclusion

Must maintain high color contrast (monochrome + high-visibility accent) and hit Lighthouse 100 on accessibility.
