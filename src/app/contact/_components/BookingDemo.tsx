"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { RotateCcw } from "lucide-react";

/** Placeholder at the scene's own size, so nothing shifts when it loads. */
function SceneSkeleton() {
  return <div aria-hidden className="aspect-[358/390] w-full rounded-3xl bg-brand-50 min-[440px]:aspect-square" />;
}

// The animation library only runs in the browser and isn't needed for the first paint.
const BookingScene = dynamic(() => import("./BookingScene"), { ssr: false, loading: SceneSkeleton });

/** Animated preview of what happens after a patient sends the booking form. */
export function BookingDemo() {
  const [run, setRun] = useState(0);

  return (
    <figure className="w-full max-w-[30rem]">
      <div role="img" aria-label="Example chat: a patient sends their booking details on WhatsApp and the clinic replies confirming the appointment.">
        <BookingScene key={run} />
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-slate-600">
        <span>Your details arrive pre-written — just tap send.</span>
        <button
          type="button"
          onClick={() => setRun((n) => n + 1)}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-200 px-3 py-1.5 font-semibold text-brand-700 transition hover:bg-brand-50"
        >
          <RotateCcw className="size-4" aria-hidden /> Replay
        </button>
      </figcaption>
    </figure>
  );
}
