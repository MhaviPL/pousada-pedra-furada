import { render, screen } from "@testing-library/react";
import LoginPage from "@/app/login/page";
import TarefasPage from "@/app/tarefas/page";
import RelatoriosPage from "@/app/relatorios/page";

// Mock do useRouter do Next.js
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

describe("Routes - Validar páginas corretas por rota", () => {
  it("rota /login deve renderizar a página de Login", () => {
    render(<LoginPage />);
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByLabelText("Usuário:")).toBeInTheDocument();
    expect(screen.getByLabelText("Senha:")).toBeInTheDocument();
  });

  it("rota /relatorios deve renderizar a página de Relatórios", () => {
    render(<RelatoriosPage />);

    // <h2> isolado, getByText simples funciona
    expect(screen.getByText("Relatórios de Desempenho")).toBeInTheDocument();

    // Cada <li> tem texto + número juntos, usa matcher por textContent
    expect(
      screen.getByText((_, el) =>
        el?.textContent?.trim() === "Total de tarefas: 10"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText((_, el) =>
        el?.textContent?.trim() === "Concluídas: 6"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText((_, el) =>
        el?.textContent?.trim() === "Em andamento: 3"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText((_, el) =>
        el?.textContent?.trim() === "Pendentes: 1"
      )
    ).toBeInTheDocument();
  });

  it("rota /tarefas deve renderizar a página de Tarefas", () => {
    render(<TarefasPage />);

    expect(screen.getByText("Tarefas do Dia")).toBeInTheDocument();

    // Busca pelo textContent completo do <li>, que inclui nome + status
    expect(
      screen.getAllByText((_, el) =>
        el?.textContent?.includes("Arrumar quarto 101") ?? false
      )[0]
    ).toBeInTheDocument();

    expect(
      screen.getAllByText((_, el) =>
        el?.textContent?.includes("Lavar pátio") ?? false
      )[0]
    ).toBeInTheDocument();

    // Valida os status individualmente (aparecem dentro de <strong>)
    expect(screen.getByText("Atribuída")).toBeInTheDocument();
    expect(screen.getByText("Concluída")).toBeInTheDocument();
  });
});