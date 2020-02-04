// Source code here

interface IEmployee {
    empCode: number;
    name: string;
    isActive: boolean;

    getSalary: (arg0: number) => string;
    getLastVacationDate: (arg0: number) => Date;
    getEmployeeStatus: (arg0: number) => boolean;
    getEmployeeWorkingDays(arg0: number);
}

class Employee implements IEmployee {
    empCode: number;
    name: string;
    isActive: boolean;

    constructor(code: number, name: string, isActive: boolean) {
        this.empCode = code;
        this.name = name;
        this.isActive = isActive;
    }

    getSalary(empCode: number): string {
        return this.name + " Salary is : " + 5000;
    }

    getEmployeeStatus(empCode: number): boolean {
        if (this.isActive == true) return true;
        else return false;
    }

    getLastVacationDate(empCode: number): Date {
        let date: Date = new Date();
        return date;
    }

    getEmployeeWorkingDays(arg0: number) { }
}

let emp = new Employee(1, "Mohammad", true);

console.log(emp.getSalary(emp.empCode));
console.log(emp.getLastVacationDate(emp.empCode));
console.log(emp.getEmployeeStatus(emp.empCode));