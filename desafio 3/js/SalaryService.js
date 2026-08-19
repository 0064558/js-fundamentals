import Employee from "./Employee.js";
import TaxService from "./TaxService.js";
import PensionService from "./PensionService.js";

export default class SalaryService {
    constructor() {
        this.taxService = new TaxService();
        this.pensionService = new PensionService();
    }
    netSalary(employee) {

        const grossSalary = employee.grossSalary;

        const tax = this.taxService.tax(grossSalary);
        const pensionService = this.pensionService.discount(grossSalary);

        return grossSalary - tax - pensionService;
    }
}