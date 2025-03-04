"use client";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "@/auth/helpers";

const AuthButtonClient = () => {
  const session = useSession();
  return session?.data?.user ? (
    <Button
      onClick={async () => {
        await signOut();
        await signIn();
      }}
    >
      {session.data?.user?.name} : Sign out
    </Button>
  ) : (
    <Button onClick={async () => await signIn()}>Sign In</Button>
  );
};

export default AuthButtonClient;
