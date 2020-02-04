"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const app_1 = require("./app");
let emp = new app_1.Employee(1, "Mohammad", true);
describe('test app.ts file', () => {
    it('should output the employee status', () => {
        const employee1 = new app_1.Employee(1, "Mohammad", true);
        chai_1.expect(employee1.isActive).to.be.equal(true);
    });
    it('should output the employee salary', () => {
        const employee1 = new app_1.Employee(1, "Mohammad", true);
        let salary = employee1.getSalary(employee1.empCode);
        chai_1.expect(salary).to.be.equal(employee1.name + " Salary is : " + 5000);
    });
});
