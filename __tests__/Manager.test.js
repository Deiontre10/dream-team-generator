const Manager = require("../lib/Manager");

describe("Manager", () => {

    it("Can set the officeNumber from constructer", () => {
        const num = 1;
        const employee = new Manager("Ash", 10, "ash@ketchum.com", num);
        expect((employee.officeNumber)).toBe(num);
    });
    
    it("Can get the officeNumber from getOfficeNumber()", () => {
        const num = 1;
        const employee = new Manager("Ash", 10, "ash@ketchum.com", num);
        expect(employee.getOfficeNumber()).toBe(num);
    });

    it("Can get the role from getRole() and return Intern", () => {
        const testRole = "Manager";
        const employee = new Manager("Ash", 10, "ash@ketchum.com", 1);
        expect(employee.getRole()).toBe(testRole);
    });
});

