import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "@/app/login/page";

jest.mock("next/navigation", () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

test("deve exibir alerta se usuário ou senha estiverem vazios", () => {
    window.alert = jest.fn();
    render(<LoginPage />);
    fireEvent.click(screen.getByText("Entrar"));
    expect(window.alert).toHaveBeenCalledWith("Por favor, preencha usuário e senha.");
});

test("deve redirecionar ao preencher login corretamente", () => {
    window.alert = jest.fn();
    render(<LoginPage />);
    fireEvent.change(screen.getByLabelText("Usuário:"), {
        target: {
            value: "Maria"
        }
    });
    fireEvent.change(screen.getByLabelText("Senha:"), {
        target: { value: "123" }
    });
    fireEvent.click(screen.getByText("Entrar"));
    expect(window.alert).toHaveBeenCalledWith("Bem-vindo, Maria!");
}); 