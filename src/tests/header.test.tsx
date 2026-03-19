import { render, screen } from "@testing-library/react";
import Header from "@/components/header";
test("deve renderizar os links de navegação", () => {
    render(<Header />);
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Tarefas")).toBeInTheDocument();
    expect(screen.getByText("Relatórios")).toBeInTheDocument();
});