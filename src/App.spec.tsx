import { describe } from "vitest";
import App from "./App.tsx";
import { render } from "@testing-library/react";

describe("App", () => {
  it("should render", () => {
    const view = render(<App/>);
    expect(view.container.innerHTML).toMatch("Template");
  });
});
