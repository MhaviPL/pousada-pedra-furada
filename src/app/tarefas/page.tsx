'use client';

import React, { useState } from "react";
export default function TarefasPage() {
    const [tarefas, setTarefas] = useState([
        { id: 1, nome: "Arrumar quarto 101", status: "Atribuída" },
        { id: 2, nome: "Lavar pátio", status: "Concluída" },
    ]);
    const atualizarStatus = (id: any) => {
        setTarefas((prev) =>
            prev.map((t) =>
                t.id === id
                    ? {
                        ...t,
                        status:
                            t.status === "Atribuída"
                                ? "Em andamento"
                                : t.status === "Em andamento"
                                    ? "Concluída"
                                    : "Concluída",
                    }
                    : t
            )
        );
    };
    return (
        <section>
            <h2>Tarefas do Dia</h2>
            <ul>
                {tarefas.map((t) => (
                    <li key={t.id}>
                        {t.nome} — <strong>{t.status}</strong>{" "}
                        <button onClick={() => atualizarStatus(t.id)}>Atualizar</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}