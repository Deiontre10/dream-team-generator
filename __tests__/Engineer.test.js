const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    it("Can set the GitHub account from constructer", () => {
        const github = "AshKetchum";
        const employee = new Engineer("Ash", 10, "ash@ketchum.com", github);
        expect((employee.github)).toBe(github);
    });
    
    it("Can get the GitHub account from getGithub()", () => {
        const testGithub = "AshKetchum";
        const employee = new Engineer("Ash", 10, "ash@ketchum.com", testGithub);
        expect(employee.getGithub()).toBe(testGithub);
    });

    it("Can get the role from getRole() and return Engineer", () => {
        const testRole = "Engineer";
        const employee = new Engineer("Ash", 10, "ash@ketchum.com", "AshKetchum");
        expect(employee.getRole()).toBe(testRole);
    });
});
