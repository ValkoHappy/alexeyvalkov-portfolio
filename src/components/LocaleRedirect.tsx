"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const preferenceKey = "portfolio-locale";

function getBrowserLocale(): "ru" | "en" {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages[0]?.toLowerCase().startsWith("en") ? "en" : "ru";
}

function getLocalePath(pathname: string, locale: "ru" | "en") {
  const path = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return locale === "en" ? `/en${path === "/" ? "" : path}` : path;
}

export function LocaleRedirect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currentLocale = pathname.startsWith("/en") ? "en" : "ru";
    document.documentElement.lang = currentLocale;

    const savedLocale = window.localStorage.getItem(preferenceKey) as "ru" | "en" | null;
    if (savedLocale === "ru" || savedLocale === "en") return;

    if (pathname !== "/") {
      window.localStorage.setItem(preferenceKey, currentLocale);
      return;
    }

    const detectedLocale = getBrowserLocale();
    window.localStorage.setItem(preferenceKey, detectedLocale);
    if (detectedLocale !== currentLocale) router.replace(getLocalePath(pathname, detectedLocale));
  }, [pathname, router]);

  return null;
}

export { preferenceKey, getLocalePath };
