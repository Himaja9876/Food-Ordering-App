import { sum } from "../sum";

test("Sum function should caculate the sum of two numbers", () => {
  const result = sum(3, 2);

  //Assertion
  expect(result).toBe(5);
});