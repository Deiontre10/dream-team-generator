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
});
