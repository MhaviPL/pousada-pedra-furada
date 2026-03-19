import { render, screen } from "@testing-library/react";
import LoginPage from "@/app/login/page";
import TarefasPage from "@/app/tarefas/page";
import RelatoriosPage from "@/app/relatorios/page";

describe("Routes - Validar páginas corretas por rota", () => {
    it("rota /login deve renderizar a página de Login", () => {
        render(<LoginPage />);
        expect(screen.getByText("Login")).toBeInTheDocument();
        expect(screen.getByLabelText("Usuário:")).toBeInTheDocument();
        expect(screen.getByLabelText("Senha:")).toBeInTheDocument();
    });
    it("rota /tarefas deve renderizar a página de Tarefas", () => {
        render(<TarefasPage />);
        expect(screen.getByText("Tarefas do Dia")).toBeInTheDocument();
        expect(screen.getByText(/Arrumar quarto 101|Lavar pátio/)).toBeInTheDocument();
    });
    it("rota /relatorios deve renderizar a página de Relatórios", () => {
        render(<RelatoriosPage />);
        expect(screen.getByText(/Relatórios|Total de tarefas/)).toBeInTheDocument();
        expect(screen.getByText(/Total de tarefas|Concluídas/)).toBeInTheDocument();
    });
});
