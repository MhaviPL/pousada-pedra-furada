'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (usuario && senha) {
      alert(`Bem-vindo, ${usuario}!`);
      router.push("/tarefas");
    } else {
      alert("Por favor, preencha usuário e senha.");
    }
  };

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Usuário:
          <input type="text" value={usuario} onChange={(e) =>
            setUsuario(e.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={senha} onChange={(e) =>
            setSenha(e.target.value)} />
        </label>
        <br />
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}

