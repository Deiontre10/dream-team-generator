const Employee = require("../lib/Employee");

describe("Employee", () => {

    it("Can create a test object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    it("Can set the name from constructer", () => {
        const name = "Ash";
        const employee = new Employee(name);
        expect((employee.name)).toBe(name);
    });
    
    it("Can get the name from getName()", () => {
        const testName = "Ash";
        const employee = new Employee(testName);
        expect(employee.getName()).toBe(testName);
    });

    it("Can set the id from constructer", () => {
        const id = 10;
        const employee = new Employee("ash", id);
        expect((employee.id)).toBe(id);
    });

    it("Can get the id from getId", () => {
        const testId = 10;
        const employee = new Employee("ash", testId);
        expect(employee.getId()).toBe(testId);
    });

    it("Can set the email from constructer", () => {
        const email = "ask@ketchum.com";
        const employee = new Employee("ash", 10, email);
        expect((employee.email)).toBe(email);
    });
    
    it("Can get the email from getEmail()", () => {
        const testEmail = "ask@ketchum.com";
        const employee = new Employee("ash", 10, testEmail);
        expect(employee.getEmail()).toBe(testEmail);
    });

    it("Can get the role from getRole() and return Employee", () => {
        const testRole = "Employee";
        const employee = new Employee("ash", 10, "ash@ketchum.com");
        expect(employee.getRole()).toBe(testRole);
    });
});
