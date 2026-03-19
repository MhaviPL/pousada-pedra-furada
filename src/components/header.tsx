import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header
            style={{
                background: "#234",
                color: "#fff",
                padding: "1rem",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Link href="/"><h1>Pousada Pedra Furada</h1></Link>
            <nav>
                <Link href="/login" style={{
                    color: "#fff", marginRight: "1rem"
                }}>Login</Link>
                <Link href="/tarefas" style={{
                    color: "#fff", marginRight: "1rem"
                }}>Tarefas</Link>
                <Link href="/relatorios" style={{ color: "#fff" }}>Relatórios</Link>
            </nav>
        </header>
    );
}