let orders = [];

export function addOrder(order) {
  orders.push({ ...order, id: Date.now() });
}

export function getOrders() {
  return orders;
}
