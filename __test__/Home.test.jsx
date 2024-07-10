import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Page", () => {
   it('renders a heading with the main title', () => {
    render(<Home />)

    const mainHeading = screen.getByRole('heading', { level: 2, name: /Crea il tuo curriculum in pochi minuti e scaricalo gratuitamente!/i })

    expect(mainHeading).toBeInTheDocument()
  })
  it("render heading with subtitle", () => {
    render(<Home />);

    const subHeading = screen.getByRole("heading", {
      level: 2,
      name: /Scegli tra i migliori modelli e personalizza/i,
    });

    expect(subHeading).toBeInTheDocument();
  });
});
