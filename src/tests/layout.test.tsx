import { render, screen } from "@testing-library/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

test("deve renderizar o Header e Footer", () => {
    render(<Header />);
    expect(screen.getByText("Pousada Pedra Furada")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
});

test("deve renderizar o Footer", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
}); 
