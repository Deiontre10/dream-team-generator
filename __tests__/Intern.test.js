const Intern = require("../lib/Intern");

describe("Intern", () => {

    it("Can set the school account from constructer", () => {
        const school = "Duke";
        const employee = new Intern("Ash", 10, "ash@ketchum.com", school);
        expect((employee.school)).toBe(school);
    });
    
    it("Can get the school account from getSchool()", () => {
        const testSchool = "Duke";
        const employee = new Intern("Ash", 10, "ash@ketchum.com", testSchool);
        expect(employee.getSchool()).toBe(testSchool);
    });

    it("Can get the role from getRole() and return Intern", () => {
        const testRole = "Intern";
        const employee = new Intern("Ash", 10, "ash@ketchum.com", "Duke");
        expect(employee.getRole()).toBe(testRole);
    });
});
