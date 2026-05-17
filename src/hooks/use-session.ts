import { useEffect, useState } from "react";
import {
  currentUser,
  loadCurrentUser,
  subscribe,
  type User,
} from "@/lib/store";

export function useSession(): {
  user: User | null;
  ready: boolean;
} {
  const [user, setUser] =
    useState<User | null>(null);

  const [ready, setReady] =
    useState(false);

  useEffect(() => {
    let mounted = true;

    async function init() {
      const u =
        await loadCurrentUser();

      if (!mounted) return;

      setUser(u);
      setReady(true);
    }

    init();

    const unsubscribe =
      subscribe(() => {

        // força leitura nova
        const u =
          currentUser();

        setUser(u);
        setReady(true);

      });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  return {
    user,
    ready,
  };
}