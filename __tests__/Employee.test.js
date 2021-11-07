const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Dave", "1", "emp@email.com");

  expect(employee.name).toBe("Dave");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("emp@email.com");
});

test("gets employee's name", () => {
  const employee = new Employee("Dave", "1", "emp@email.com");

  expect(employee.getName()).toBe("Dave");
});

test("gets employee's email", () => {
  const employee = new Employee("Dave", "1", "emp@email.com");

  expect(employee.getEmail()).toBe("emp@email.com");
});

test("gets employee's id", () => {
  const employee = new Employee("Dave", "1", "emp@email.com");

  expect(employee.getId()).toBe("1");
});

test("gets employee's role", () => {
  const employee = new Employee("Dave", "1", "emp@email.com");

  expect(employee.getRole()).toBe("Employee");
});
