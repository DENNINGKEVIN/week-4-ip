function Order(name, pizza, topping, crust, boxes, delivery) {
  this.customerName = name;
  this.selectedPizza = pizza;
  this.selectedTopping = topping;
  this.selectedCrust = crust;
  this.numberOfBoxes = boxes;
  this.deliveryOption = delivery;
}
function Address(city, estate, mobileNumber) {
  this.cityName = city;
  this.estateName = estate;
  this.customerMobile = mobileNumber;
}
function Price(pizzaPrice, toppingPrice, crustPrice) {
  this.priceForSelectedPizza = pizzaPrice;
  this.priceForSelectedTopping = toppingPrice;
  this.priceForSelectedCrust = crustPrice;
}
function Bill(subtotal, boxes) {
  this.subtotalGotten = subtotal;
  this.orderedBoxes = boxes;
}
Price.prototype.subtotal = function () {
  return this.priceForSelectedPizza + this.priceForSelectedTopping + this.priceForSelectedCrust;
}
Bill.prototype.total = function () {
  return this.subtotalGotten * this.orderedBoxes;
}

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navi');
  const navLinks = document.querySelectorAll('.navi li');
  const moto = document.querySelector('#moto');
  const history = document.querySelector('.history');
  const aboutTitle = document.querySelector('.about-title');
  const forms = document.querySelector('#forms');


  burger.addEventListener('click', () => {
    nav.classList.toggle('navi-active');

    navLinks.forEach((navLink, index) => {
      if (navLink.style.animation) {
        navLink.style.animation = ``;
      }
      else {
        navLink.style.animation = `naviFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
    });
    burger.classList.toggle('toggle');

    moto.classList.toggle('moto-unseen');
  });
}
