export default class TaxService {
    tax(amount) {
      return amount * (20 / 100)
    }
}