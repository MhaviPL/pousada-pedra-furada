'use client';

import React from "react";

export default function RelatoriosPage() {
    const estatisticas = {
        total: 10,
        concluidas: 6,
        emAndamento: 3,
        pendentes: 1,
    };
    
    return (
        <section>
            <h2>Relatórios de Desempenho</h2>
            <ul>
                <li>Total de tarefas: {estatisticas.total}</li>
                <li>Concluídas: {estatisticas.concluidas}</li>
                <li>Em andamento: {estatisticas.emAndamento}</li>
                <li>Pendentes: {estatisticas.pendentes}</li>
            </ul>
        </section>
    );
}

