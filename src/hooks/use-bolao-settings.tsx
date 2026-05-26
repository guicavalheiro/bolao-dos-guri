import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  initBolaoSettings,
  isBolaoSettingsLoaded,
  refreshBolaoSettings,
  subscribe,
  subscribeBolaoSettingsRealtime,
} from "@/lib/store";

const BolaoSettingsContext = createContext({
  ready: false,
  version: 0,
});

export function BolaoSettingsProvider({
  children,
  userId,
}: {
  children: ReactNode;
  userId: string | undefined;
}) {
  const [ready, setReady] = useState(isBolaoSettingsLoaded());
  const [version, setVersion] = useState(0);

  useEffect(() => {
    if (!userId) {
      setReady(false);
      return;
    }

    let cancelled = false;

    initBolaoSettings()
      .then(() => {
        if (!cancelled) setReady(true);
      })
      .catch((error) => {
        console.error("Erro ao carregar configurações do bolão:", error);
      })
      .finally(() => {
        if (!cancelled) setVersion((v) => v + 1);
      });

    const unsubLocal = subscribe(() => {
      setReady(isBolaoSettingsLoaded());
      setVersion((v) => v + 1);
    });

    const unsubRealtime = subscribeBolaoSettingsRealtime(() => {
      setReady(isBolaoSettingsLoaded());
      setVersion((v) => v + 1);
    });

    const poll = setInterval(() => {
      refreshBolaoSettings()
        .then(() => {
          if (!cancelled) setReady(true);
        })
        .catch((error) => console.error("Erro ao atualizar bolao_settings:", error))
        .finally(() => {
          if (!cancelled) setVersion((v) => v + 1);
        });
    }, 30_000);

    return () => {
      cancelled = true;
      unsubLocal();
      unsubRealtime();
      clearInterval(poll);
    };
  }, [userId]);

  return (
    <BolaoSettingsContext.Provider value={{ ready, version }}>
      {children}
    </BolaoSettingsContext.Provider>
  );
}

/** Garante re-render quando as configurações globais mudam (Supabase). */
export function useBolaoSettings() {
  const { ready, version } = useContext(BolaoSettingsContext);

  return { ready, version };
}
