import { render, screen } from "@testing-library/react";
import  Home  from "../app/page"

describe("Página inicial", () => {

    it("deve renderizar o título principal", () => {
    render(<Home />);
    expect(screen.getByText("Bem-vindo à Pousada Pedra Furada")).toBeInTheDocument()  });
}); 
