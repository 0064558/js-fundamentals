import Order from "../entitty/Order.js";
import { shipment } from "./ShippingService.js";

export function total(order) {
    const basicValue = order.basicValue;
    const discount = basicValue * (order.discount / 100);
    const totalValue = basicValue - discount + shipment(order);
    return totalValue;
}