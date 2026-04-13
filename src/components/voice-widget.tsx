"use client";

import { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";
import { WIDGET_URL, COMPANY_NAME } from "@/lib/demo-data";

export default function VoiceWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "plumber-widget-minimize") {
        setIsOpen(false);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-4 right-4 z-50 max-sm:left-4 sm:bottom-6 sm:right-6">
        {isOpen && (
          <div className="mb-4 max-sm:w-full max-sm:h-[calc(100vh-7rem)] sm:w-[380px] sm:h-[600px] rounded-2xl overflow-hidden">
            <iframe
              src={WIDGET_URL}
              className="w-full h-full border-0"
              allow="microphone"
              title={`${COMPANY_NAME} AI Voice Assistant`}
            />
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-[#F0C040] hover:bg-[#D4A830] text-black shadow-lg transition-all duration-200 cursor-pointer"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <PhoneCall size={24} strokeWidth={2.2} />
          )}
        </button>
      </div>
    </>
  );
}
