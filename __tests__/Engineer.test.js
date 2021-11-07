const Engineer = require('../lib/Engineer')

test("creates an engineer object", () => {
  const engineer = new Engineer("Dave", "1", "emp@email.com");

  expect(engineer.name).toBe("Dave");
  expect(engineer.id).toBe("1");
  expect(engineer.email).toBe("emp@email.com");
});

test("gets engineer's name", () => {
  const engineer = new Engineer("Dave", "1", "emp@email.com");

  expect(engineer.getName()).toBe("Dave");
});

test("gets engineer's email", () => {
  const engineer = new Engineer("Dave", "1", "emp@email.com");

  expect(engineer.getEmail()).toBe("emp@email.com");
});

test("gets engineer's id", () => {
  const engineer = new Engineer("Dave", "1", "emp@email.com");

  expect(engineer.getId()).toBe("1");
});

test("gets engineer's role", () => {
  const engineer = new Engineer("Dave", "1", "emp@email.com");

  expect(engineer.getRole()).toBe("Engineer");
});