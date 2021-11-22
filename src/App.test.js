
jest.mock("text-annotation-graphs", () => {});
import App from "./App";

test("Smoke test for App", () => {
    renderer.create(<App />);
});
