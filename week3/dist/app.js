"use strict";
// Source code here
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(code, name, isActive) {
        this.empCode = code;
        this.name = name;
        this.isActive = isActive;
    }
    getSalary(empCode) {
        return this.name + " Salary is : " + 5000;
    }
    getEmployeeStatus(empCode) {
        if (this.isActive == true)
            return true;
        else
            return false;
    }
    getLastVacationDate(empCode) {
        let date = new Date();
        return date;
    }
    getEmployeeWorkingDays(arg0) {
        return new Array("Monday", "Tuesday", "Thursday");
    }
}
exports.Employee = Employee;
let emp = new Employee(1, "Mohammad", true);
console.log(emp.getSalary(emp.empCode));
console.log(emp.getLastVacationDate(emp.empCode));
console.log(emp.getEmployeeStatus(emp.empCode));
