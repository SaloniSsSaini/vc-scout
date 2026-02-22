"use client";

import { useEffect } from "react";

export function useGlobalSearch(inputId: string) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // ignore if user typing in input/textarea
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (isTyping) return;

      // press "/" to focus search
      if (e.key === "/") {
        e.preventDefault();
        const el = document.getElementById(inputId);
        el?.focus();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [inputId]);
}