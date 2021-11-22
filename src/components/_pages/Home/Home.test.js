
jest.mock("text-annotation-graphs", () => {});
import Home from "./Home";

test("Smoke test for Home", () => {
    renderer.create(<Home />);
});