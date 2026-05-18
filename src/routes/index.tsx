import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useState } from "react";
import { forgotPassword, loginUser, registerUser } from "@/lib/store";
import { useSession } from "@/hooks/use-session";
import logo from "@/assets/2026-FIFA-Logo.png";

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

type AuthMode = "login" | "register" | "forgot";

function AuthPage() {
  const { user, ready } = useSession();

  const [mode, setMode] = useState<AuthMode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  if (ready && user) {
    return <Navigate to="/apostas" replace />;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (mode === "forgot") {
        if (!email.trim()) {
          throw new Error("Informe seu e-mail");
        }

        await forgotPassword(email);

        setSuccess("Enviamos um link de recuperação para o seu e-mail.");
        return;
      }

      if (mode === "register") {
        if (name.trim().length < 2) {
          throw new Error("Informe seu nome");
        }

        if (password.length < 4) {
          throw new Error("Senha muito curta");
        }

        await registerUser(name, email, password);
        return;
      }

      await loginUser(email, password);
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
        <section className="flex flex-col items-center text-center">
          <div className="relative mb-8 flex items-center justify-center">
            <div
              className="absolute h-[520px] w-[760px] rounded-full blur-[95px] opacity-90"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,.85) 0%, rgba(255,255,255,.65) 28%, rgba(255,170,40,.55) 42%, rgba(40,210,120,.45) 58%, rgba(0,185,255,.45) 72%, transparent 100%)",
              }}
            />

            <img
              src={logo}
              alt="FIFA"
              className="relative z-10 h-[390px] w-auto object-contain drop-shadow-2xl"
            />
          </div>

          <h1 className="text-5xl font-display md:text-7x2">
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

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Aposte com seus amigos em cada jogo da Copa do Mundo
            <br />
            FIFA 2026 — México · EUA · Canadá.
          </p>
        </section>

        <section className="mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-border bg-card/70 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex rounded-lg bg-muted p-1">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition ${mode === "login"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
                  }`}
              >
                Entrar
              </button>

              <button
                type="button"
                onClick={() => setMode("register")}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition ${mode === "register"
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

              {mode !== "forgot" && (
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
              )}

              {error && (
                <p className="rounded-md bg-destructive/15 px-3 py-2 text-sm text-destructive">
                  {error}
                </p>
              )}

              {success && (
                <p className="rounded-md bg-primary/15 px-3 py-2 text-sm text-primary">
                  {success}
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
                    : mode === "register"
                      ? "Criar conta"
                      : "Enviar link de recuperação"}
              </button>
            </form>

            <div className="mt-4 text-center">
              {mode === "forgot" ? (
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Voltar para login
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setMode("forgot")}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Esqueci minha senha
                </button>
              )}
            </div>
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