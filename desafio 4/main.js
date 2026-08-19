import Order from "./entitty/Order.js";
import { total } from "./service/OrderService.js";

const input = document.getElementById("orderInput");

const data = input.value.trim().split(/\r?\n/);

const order = new Order(
    Number(data[0]),
    Number(data[1]),
    Number(data[2])
);

const totalValue = total(order);

console.log(`
    Código do Pedido: ${order.code}
    Valor Total: ${totalValue.toFixed(2)}
`);