import { expect } from 'chai';
import 'mocha';
import { Employee } from './app';

let emp = new Employee(1, "Mohammad", true);

describe('test app.ts file', () => {
    it('should output the employee status', () => {
        const employee1 = new Employee(1, "Mohammad", true);

        expect(employee1.isActive).to.be.equal(true);
    });

    it('should output the employee salary', () => {
        const employee1 = new Employee(1, "Mohammad", true);
        let salary = employee1.getSalary(employee1.empCode);

        expect(salary).to.be.equal(employee1.name + " Salary is : " + 5000);
    });

});