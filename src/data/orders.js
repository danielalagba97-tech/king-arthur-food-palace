export const getOrders = () => {
  const data = localStorage.getItem("orders");
  return data ? JSON.parse(data) : [];
};

export const addOrder = (order) => {

  const existingOrders = getOrders();

  const newOrder = {
    id: Date.now(),
    status: "Pending",
    ...order
  };

  const updatedOrders = [...existingOrders, newOrder];

  localStorage.setItem("orders", JSON.stringify(updatedOrders));
};

export const updateOrderStatus = (id, status) => {

  const orders = getOrders().map((order) =>
    order.id === id ? { ...order, status } : order
  );

  localStorage.setItem("orders", JSON.stringify(orders));
};