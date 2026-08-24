"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_mock_key", {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
      person_profiles: "identified_only", // or 'always' to create profiles for anonymous users
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    });
  }, []);

  return <>{children}</>;
}
