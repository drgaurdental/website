# Booking demo: rehearsal notes

Scene: `BookingScene.tsx` (+ `booking-demo.css`), shown by `BookingDemo.tsx` on `/contact`.
Kit: vendored Stageshow kit in `src/components/stageshow/` (excluded from lint; it ships its own inline styles).

**Gold copied:** `messages` (phone pinned to the bottom, composer, bubble formed from the field, receipt, typing → reply).
**Changed:** clinic purple for sent bubbles and send button; composer holds the pre-written request (matches what the site's form sends to WhatsApp) and eases back to one line on send; one earlier clinic message for context; a clinic reply as the payoff; `play="once"` with a Replay button; even 40px gutter (wide) / 16px (compact).

**Filmed (headless Chrome):**
- Playground, wide 480×480 and compact 358×390 at 390px: `--gate` passed.
- Production build `/contact` at 1280 and 390: whole sequence, plus `--reduced` poster (confirmed booking).

**Known film lines, not fixed:**
- `settle snap` 0.7–1.7px on thread rows and the receipt: also reported on the unmodified gold `messages` example, so it comes from the kit's Thread/Receipt.
- `kit override` on `.ss-phone__*` on the real site only: false positive. The checker skips CSS by `/kit/` in the URL, and Next bundles the kit's own `phone.css` into `/_next/static/chunks/`. No site CSS touches those selectors.

**Not checked:** Safari / Firefox (the composer's height ease uses `interpolate-size`, Chrome-only; elsewhere it collapses without easing), a real touch device, dark mode (the site has none).
