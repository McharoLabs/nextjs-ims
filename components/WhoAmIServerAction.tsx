'use client';
import { useState, useEffect } from "react";

export default function WhoAmIServerAction({
  onGetUserAction,
}: {
  onGetUserAction: () => Promise<string | null>;
}) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    onGetUserAction().then((user) => setUser(user));
  }, []);

  return <div className="mt-5">Who Am I (server action): {user}</div>;
}
