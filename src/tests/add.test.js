const add = (a, b) => {
  return a + b;
};
const generateGreeting = (name = "Anonymous") => {
  return `Hello ${name}!`;
};

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should return a greeting", () => {
  const name = generateGreeting("Sergio");
  expect(name).toBe(`Hello Sergio!`);
});

test("Should generate greeting for no name", () => {
  const name = generateGreeting();
  expect(name).toBe("Hello Anonymous!");
});
