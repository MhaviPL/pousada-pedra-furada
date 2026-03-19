import { render, screen } from "@testing-library/react";
import RelatoriosPage from "@/app/relatorios/page";

test("deve renderizar os dados do relatório", () => {
    render(<RelatoriosPage />);
    expect(screen.getByText("Total de tarefas: 10")).toBeInTheDocument();
    expect(screen.getByText("Concluídas: 6")).toBeInTheDocument();
}); 