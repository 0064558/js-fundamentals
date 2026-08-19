import Employee from "./Employee.js";
import SalaryService from "./SalaryService.js";

const input = document.getElementById("grossSalaryInput");

const data = input.value.trim().split(/\r?\n/);

const employee = new Employee(
    data[0].trim(),
    Number(data[1])
);

const salaryService = new SalaryService();

const netSalary = salaryService.netSalary(employee);

console.log(`
Funcionário: ${employee.name}
Salário bruto: ${employee.grossSalary.toFixed(2)}
Salário líquido: ${netSalary.toFixed(2)}
`);