import Order from "../entitty/Order.js";

export function shipment(order) {
    let shipping;
    let basicValue = order.basicValue;

    if (basicValue < 100.00) {
        shipping = 20.00;
    } else if (basicValue >= 100.00 && basicValue <= 200.00) {
        shipping = 12.00;
    } else {
        shipping = 0.00;
    }

    return shipping;
}