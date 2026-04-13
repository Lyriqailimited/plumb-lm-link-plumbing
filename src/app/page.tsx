"use client";

import { useEffect } from "react";
import { renderCanvas } from "@/components/ui/canvas";
import VoiceWidget from "@/components/voice-widget";

export default function Page() {
  useEffect(() => {
    try {
      renderCanvas();
    } catch {
      /* canvas element not mounted on this page */
    }
  }, []);

  return (
    <>
    <VoiceWidget />
    </>
  );
}
