"use client";

import { useRef, useState, useSyncExternalStore } from "react";

export default function GoogleFormEmbed({ src, title }: { src: string; title: string }) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [submitted, setSubmitted] = useState(false);
  const loads = useRef(0);
  const wrapper = useRef<HTMLDivElement>(null);

  function handleLoad() {
    loads.current += 1;
    if (loads.current > 1) {
      setSubmitted(true);
      wrapper.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div
      ref={wrapper}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
    >
      {mounted && (
        <iframe
          src={src}
          title={title}
          onLoad={handleLoad}
          className={`block w-full ${
            submitted ? "h-[560px]" : "h-[3100px] md:h-[2700px]"
          }`}
        >
          Loading…
        </iframe>
      )}
    </div>
  );
}
