import { render, screen, fireEvent } from "@testing-library/react";
import TarefasPage from "@/app/tarefas/page";

test("deve atualizar o status da tarefa ao clicar no botão", () => {
    render(<TarefasPage />);
    const botao = screen.getAllByText("Atualizar")[0];
    fireEvent.click(botao);
    expect(screen.getByText(/Em andamento|Concluída/)).toBeInTheDocument();
}); 