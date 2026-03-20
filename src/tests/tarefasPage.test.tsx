import { render, screen, fireEvent } from "@testing-library/react";
import TarefasPage from "@/app/tarefas/page";

test("deve atualizar o status da tarefa ao clicar no botão", () => {
  render(<TarefasPage />);

  // Confirma status inicial
  expect(screen.getByText("Atribuída")).toBeInTheDocument();

  // Clica no botão da primeira tarefa
  const botao = screen.getAllByText("Atualizar")[0];
  fireEvent.click(botao);

  // Confirma que o status mudou para "Em andamento"
  expect(screen.getByText("Em andamento")).toBeInTheDocument();
  expect(screen.queryByText("Atribuída")).not.toBeInTheDocument();
});