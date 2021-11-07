const Manager = require('../lib/Manager')

test("creates an manager object", () => {
  const manager = new Manager("Dave", "1", "emp@email.com", "123");

  expect(manager.name).toBe("Dave");
  expect(manager.id).toBe("1");
  expect(manager.email).toBe("emp@email.com");
});

test("gets manager's name", () => {
  const manager = new Manager("Dave", "1", "emp@email.com", "123");

  expect(manager.getName()).toBe("Dave");
});

test("gets manager's email", () => {
  const manager = new Manager("Dave", "1", "emp@email.com", "123");

  expect(manager.getEmail()).toBe("emp@email.com");
});

test("gets manager's id", () => {
  const manager = new Manager("Dave", "1", "emp@email.com", "123");

  expect(manager.getId()).toBe("1");
});

test("gets manager's role", () => {
  const manager = new Manager("Dave", "1", "emp@email.com", "123");

  expect(manager.getRole()).toBe("Manager");
});

test("gets manager's office number", () => {
  const manager = new Manager("Dave", "1", "emp@email.com", "123");

  expect(manager.getOffice()).toBe("123");
});