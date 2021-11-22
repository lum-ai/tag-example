jest.mock("text-annotation-graphs", () => {});
import Tag from "./tag";

test("Smoke test for Tag", () => {
    renderer.create(<Tag />);
});