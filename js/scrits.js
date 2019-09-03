function Order(name, pizza, topping, crust, boxes, delivery) {
  this.customerName = name;
  this.selectedPizza = pizza;
  this.selectedTopping = topping;
  this.selectedCrust = crust;
  this.numberOfBoxes = boxes;
  this.deliveryOption = delivery;
}