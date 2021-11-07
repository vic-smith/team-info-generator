const Intern = require('../lib/Intern')

test("creates an intern object", () => {
  const intern = new Intern("Dave", "1", "emp@email.com", "Trilogy");

  expect(intern.name).toBe("Dave");
  expect(intern.id).toBe("1");
  expect(intern.email).toBe("emp@email.com");
});

test("gets intern's name", () => {
  const intern = new Intern("Dave", "1", "emp@email.com", "Trilogy");

  expect(intern.getName()).toBe("Dave");
});

test("gets intern's email", () => {
  const intern = new Intern("Dave", "1", "emp@email.com", "Trilogy");

  expect(intern.getEmail()).toBe("emp@email.com");
});

test("gets intern's id", () => {
  const intern = new Intern("Dave", "1", "emp@email.com", "Trilogy");

  expect(intern.getId()).toBe("1");
});

test("gets intern's role", () => {
  const intern = new Intern("Dave", "1", "emp@email.com", "Trilogy");

  expect(intern.getRole()).toBe("Intern");
});

test("gets intern's school", () => {
  const intern = new Intern("Dave", "1", "emp@email.com", "Trilogy");

  expect(intern.getSchool()).toBe("Trilogy");
});