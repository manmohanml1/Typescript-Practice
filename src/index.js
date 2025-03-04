const menu = [
  { name: "margherita", price: 9 },
  { name: "veggie", price: 10 },
  { name: "paneer tikka", price: 12 },
  { name: "cheese", price: 8 },
];

let cashInRegsiter = 100;
const orderQueue = [];
let nextOrderId = 1;
let pizzaObject = {
  name: "",
  price: 0,
};

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegsiter += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}

addNewPizza({ name: "Paneer Makhani", price: 12 });
addNewPizza({ name: "Calbrese", price: 18 });
addNewPizza({ name: "Sicilian", price: 11 });

placeOrder("Calbrese");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegsiter);
console.log("Order queue:", orderQueue);
