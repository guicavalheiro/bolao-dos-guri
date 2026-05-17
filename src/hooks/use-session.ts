import { useEffect, useState } from "react";
import { currentUser, subscribe, type User } from "@/lib/store";

export function useSession(): { user: User | null; ready: boolean } {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setUser(currentUser());
    setReady(true);
    return subscribe(() => setUser(currentUser()));
  }, []);
  return { user, ready };
}
