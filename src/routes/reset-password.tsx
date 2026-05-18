import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/reset-password")({
  component: ResetPassword,
});

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function save() {
    setLoading(true);

    const { error } =
      await supabase.auth.updateUser({
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Senha alterada!");
    navigate({ to: "/" });
  }

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1>Nova senha</h1>

      <input
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Nova senha"
      />

      <button onClick={save}>
        {loading ? "Salvando..." : "Salvar"}
      </button>
    </div>
  );
}