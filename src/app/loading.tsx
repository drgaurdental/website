/** Shown while a route segment is loading. */
export default function Loading() {
  return (
    <div role="status" className="section grid place-items-center">
      <span className="size-10 animate-spin rounded-full border-4 border-brand-100 border-t-brand-700" aria-hidden />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
