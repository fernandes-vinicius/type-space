"use client";

import { ClerkProvider, SignIn, useAuth } from "@clerk/nextjs";
import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import type { ReactNode } from "react";
import { FullscreenLoader } from "@/components/common/fullscreen-loader";

// biome-ignore lint/style/noNonNullAssertion: <>
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    // biome-ignore lint/style/noNonNullAssertion: <>
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <div className="flex min-h-screen flex-col items-center justify-center">
            <SignIn routing="hash" />
          </div>
        </Unauthenticated>
        <AuthLoading>
          <FullscreenLoader>Auth loading...</FullscreenLoader>
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
