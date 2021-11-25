jest.mock("text-annotation-graphs", () => {});
import Tag from "./Tag";

test("Smoke test for Tag", () => {
    renderer.create(<Tag />);
});