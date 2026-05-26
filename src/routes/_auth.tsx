import {
  createFileRoute,
  Outlet,
  Link,
  Navigate,
} from "@tanstack/react-router";

import { useState } from "react";
import { useSession } from "@/hooks/use-session";
import { BolaoSettingsProvider } from "@/hooks/use-bolao-settings";
import { logoutUser } from "@/lib/store";

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
});

function AuthLayout() {
  const { user, ready } = useSession();
  const [forceLogout, setForceLogout] = useState(false);

  if (!ready) return null;

  if (!user || forceLogout) {
    return <Navigate to="/" replace />;
  }

  return (
    <BolaoSettingsProvider userId={user.id}>
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/apostas" className="font-display text-2xl tracking-wide">
            BOLÃO{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-fifa)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              2026
            </span>
          </Link>

          <nav className="flex items-center gap-2 text-sm">
            <Link
              to="/apostas"
              className="rounded-md px-3 py-1.5 hover:bg-muted"
              activeProps={{
                className: "rounded-md px-3 py-1.5 bg-muted text-foreground",
              }}
            >
              Apostas
            </Link>

            <Link
              to="/groups"
              className="rounded-md px-3 py-1.5 hover:bg-muted"
              activeProps={{
                className:
                  "rounded-md px-3 py-1.5 bg-muted"
              }}
            >
              Grupos
            </Link>

            {user.isAdmin && (
              <Link
                to="/admin"
                className="rounded-md px-3 py-1.5 hover:bg-muted"
                activeProps={{
                  className: "rounded-md px-3 py-1.5 bg-muted text-foreground",
                }}
              >
                Admin
              </Link>
            )}

            <span className="hidden sm:inline ml-2 text-muted-foreground">
              Olá, <b className="text-foreground">{user.name}</b>
            </span>

            <button
              type="button"
              onClick={() => {
                setForceLogout(true);

                logoutUser().catch((error) => {
                  console.error("Erro ao sair:", error);
                });
              }}
              className="ml-2 rounded-md border border-border px-3 py-1.5 text-muted-foreground hover:bg-muted"
            >
              Sair
            </button>
          </nav>
        </div>
      </header>

      <Outlet />
    </div>
    </BolaoSettingsProvider>
  );
}