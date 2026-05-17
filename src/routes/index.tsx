import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useState } from "react";
import { loginUser, registerUser } from "@/lib/store";
import { useSession } from "@/hooks/use-session";
import logo from "@/assets/wc2026-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bolão da Copa 2026" },
      {
        name: "description",
        content: "Bolão entre amigos para a Copa do Mundo FIFA 2026.",
      },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { user, ready } = useSession();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (ready && user) {
    return <Navigate to="/apostas" replace />;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      if (mode === "register") {
        if (name.trim().length < 2) {
          throw new Error("Informe seu nome");
        }

        if (password.length < 4) {
          throw new Error("Senha muito curta");
        }

        await registerUser(name, email, password);
      } else {
        await loginUser(email, password);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, transparent 0, var(--background) 70%)",
        }}
      />

      <div className="relative mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-2">
        <section className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="relative">
            <div
              className="absolute -inset-10 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-fifa)" }}
            />

            <img
              src={logo}
              alt="FIFA World Cup 2026"
              className="relative h-72 w-auto drop-shadow-2xl md:h-96"
            />
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-display">
            BOLÃO{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-fifa)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              DA COPA
            </span>
          </h1>

          <p className="mt-3 max-w-md text-muted-foreground">
            Aposte com seus amigos em cada jogo da Copa do Mundo FIFA 2026 —
            México · EUA · Canadá.
          </p>
        </section>

        <section className="mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-border bg-card/70 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex rounded-lg bg-muted p-1">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition ${
                  mode === "login"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                Entrar
              </button>

              <button
                type="button"
                onClick={() => setMode("register")}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition ${
                  mode === "register"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                Cadastrar
              </button>
            </div>

            <form onSubmit={submit} className="space-y-4">
              {mode === "register" && (
                <Field label="Nome">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="input"
                    placeholder="Como vão te chamar"
                  />
                </Field>
              )}

              <Field label="E-mail">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input"
                  placeholder="voce@email.com"
                />
              </Field>

              <Field label="Senha">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input"
                  placeholder="••••••"
                />
              </Field>

              {error && (
                <p className="rounded-md bg-destructive/15 px-3 py-2 text-sm text-destructive">
                  {error}
                </p>
              )}

              <button
                disabled={loading}
                className="w-full rounded-lg px-4 py-3 font-semibold text-primary-foreground shadow-lg transition hover:opacity-90 disabled:opacity-50"
                style={{
                  background: "var(--gradient-fifa)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                {loading
                  ? "Aguarde..."
                  : mode === "login"
                    ? "Entrar no bolão"
                    : "Criar conta"}
              </button>
            </form>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Seus dados ficam armazenados com segurança no Supabase.
          </p>
        </section>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--border);
          background: oklch(1 0 0 / 0.05);
          padding: 0.625rem 0.875rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.15s;
        }

        .input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px oklch(0.72 0.19 145 / 0.2);
        }

        .input::placeholder {
          color: var(--muted-foreground);
        }
      `}</style>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground/80">
        {label}
      </span>

      {children}
    </label>
  );
}