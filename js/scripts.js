function Order(name, pizza, topping, crust, boxes, delivery) {
  this.customerName = name;
  this.selectedPizza = pizza;
  this.selectedTopping = topping;
  this.selectedCrust = crust;
  this.numberOfBoxes = boxes;
  this.deliveryOption = delivery;
}

function Address(city, estate, mobileNumber){
  this.cityName = city;
  this.estateName = estate;
  this.customerMobile = mobileNumber;
}

function Price(pizzaPrice, toppingPrice, crustPrice){
  this.priceForSelectedPizza = pizzaPrice;
  this.priceForSelectedTopping = toppingPrice;
  this.priceForSelectedCrust = crustPrice;
}

Price.prototype.subtotal = function(){
  return this.priceForSelectedPizza + this.priceForSelectedTopping + this.priceForSelectedCrust;
}

function Bill(subtotal, boxes){
  this.subtotalGotten = subtotal;
  this.orderedBoxes = boxes;
}

Bill.prototype.total = function(){
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


  burger.addEventListener('click',()=>{
    nav.classList.toggle('navi-active');

    navLinks.forEach((navLink, index)=>{
      if(navLink.style.animation){
        navLink.style.animation=``;
      }
      else{
          navLink.style.animation = `naviFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
    });
    burger.classList.toggle('toggle');

    moto.classList.toggle('moto-unseen');
  });
}

navSlide();


function switchTopping() {
  if (document.getElementById('toppings')) {

      if (document.getElementById('toppings').style.display == 'none') {
          document.getElementById('toppings').style.display = 'block';
          document.getElementById('classic').style.display = 'none';
          document.getElementById('deluxe').style.display = 'none';
      }
      else {
          document.getElementById('toppings').style.display = 'block';
          document.getElementById('classic').style.display = 'none';
          document.getElementById('deluxe').style.display = 'none';
      }
    }
  }

function switchClassic() {
if (document.getElementById('classic')) {

    if (document.getElementById('classic').style.display == 'none') {
        document.getElementById('toppings').style.display = 'none';
        document.getElementById('classic').style.display = 'block';
        document.getElementById('deluxe').style.display = 'none';
    }
    else {
        document.getElementById('toppings').style.display = 'none';
        document.getElementById('classic').style.display = 'block';
        document.getElementById('deluxe').style.display = 'none';
    }
  }
}

function switchDeluxe() {
  if (document.getElementById('deluxe')) {

      if (document.getElementById('deluxe').style.display == 'none') {
          document.getElementById('toppings').style.display = 'none';
          document.getElementById('classic').style.display = 'none';
          document.getElementById('deluxe').style.display = 'block';
      }
      else {
          document.getElementById('toppings').style.display = 'none';
          document.getElementById('classic').style.display = 'none';
          document.getElementById('deluxe').style.display = 'block';
      }
    }
  }


$(document).ready(function(){
  $('form#new-order').submit(function(event){
    event.preventDefault();


    var inputtedName = $('input#name').val();
    var selectedPizza = parseInt($('select#pizza').val());
    var toppingSelected = parseInt($('select#topping').val());
    var crustSelected = parseInt($('select#crust').val());
    var noOfBoxes = parseInt($('input#boxes').val());
    var selectedDeliveryOption = parseInt($('select#delivery').val());
    var inputtedNumber = $('#mobile').val();

    var crusts = ['Thick', 'Thin'];
    var toppings = ['Pepperoni', 'Mushroom', 'Sausage', 'Onions', 'Bacon', 'Chicken'];
    var pizzas = ['Veg Tikka: SMALL', 'Veg Tikka: MEDIUM', 'Veg Tikka: LARGE', 'Chicken Tikka: SMALL', 'Chicken Tikka: MEDIUM', 'Chicken Tikka: LARGE', 'Peri Peri Chicken: SMALL', 'Peri Peri Chicken: MEDIUM', 'Peri Peri Chicken: LARGE', 'BBQ Steak: SMALL', 'BBQ Steak: MEDIUM', 'BBQ Steak: LARGE', 'Boerewors: SMALL', 'Boerewors: MEDIUM', 'Boerewors: LARGE', 'Hawaiian: SMALL', 'Hawaiian: MEDIUM', 'Hawaiian: LARGE' ];
    var deliveryOptions = ['Collect', 'Deliver'];

    var pizzaPrices = [400, 600, 1000, 600, 800, 1200, 650, 850, 1250, 500, 700, 1100, 550, 750, 1150, 700, 900, 1300];
    var toppingPrices = [0, 100, 200, 200, 50, 250, 300];
    var crustPrices = [200, 0];


    var priceOfSelectedPizza = pizzaPrices[selectedPizza-1];
    var priceOfToppingSelected = toppingPrices[toppingSelected];
    var priceOfCrustSelected = crustPrices[crustSelected-1];

    var nameOfPizza = pizzas[selectedPizza-1];
    var nameOfTopping = toppings[toppingSelected-1];
    var nameOfCrust = crusts[crustSelected-1];
    var nameOfDeliveryOption = deliveryOptions[selectedDeliveryOption-1];


    var newOrder = new Order(inputtedName, nameOfPizza, nameOfTopping, nameOfCrust, noOfBoxes, nameOfDeliveryOption);
    var newPrices = new Price(priceOfSelectedPizza, priceOfToppingSelected, priceOfCrustSelected);
    var newSubtotal = newPrices.subtotal();
    var newBill = new Bill(newSubtotal, noOfBoxes);
    var newTotal = newBill.total();



    if (selectedDeliveryOption == "2"){
      $('#address').show();

    }
    else{
      document.getElementById('order-summary').value = newOrder.selectedPizza + ' * ' + newOrder.numberOfBoxes + ' = ' + newPrices.priceForSelectedPizza * newOrder.numberOfBoxes + '\n' + newOrder.selectedTopping + ' topping * ' + newOrder.numberOfBoxes + ' = ' + newPrices.priceForSelectedTopping * newOrder.numberOfBoxes + '\n' + newOrder.selectedCrust + ' crust * ' + newOrder.numberOfBoxes + ' = ' + newPrices.priceForSelectedCrust * newOrder.numberOfBoxes + '\n' + 'Total: ' + newTotal;
    }

    $('form#delivery-address').submit(function(event){
      event.preventDefault();


      document.getElementById('order-summary').value = newOrder.selectedPizza + ' * ' + newOrder.numberOfBoxes + ' = ' + newPrices.priceForSelectedPizza * newOrder.numberOfBoxes + '\n' + newOrder.selectedTopping + ' topping * ' + newOrder.numberOfBoxes + ' = ' + newPrices.priceForSelectedTopping * newOrder.numberOfBoxes + '\n' + newOrder.selectedCrust + ' crust * ' + newOrder.numberOfBoxes + ' = ' + newPrices.priceForSelectedCrust * newOrder.numberOfBoxes + '\n' + 'Total: ' + newTotal;
    });

    $('form#checkout-form').submit(function(event){
      event.preventDefault();

      var inputtedCity = $('input#city').val();
      var inputtedEstate = $('input#estate').val();
      var inputtedNumber = $('#mobile').val();

      var newAddress = new Address(inputtedCity, inputtedEstate, inputtedNumber);

      if(selectedDeliveryOption == "2"){

        alert(newOrder.customerName + '. Your order will be delivered to ' + newAddress.estateName + ', ' + newAddress.cityName + ' in the next 30 minutes. We will call this number (' + newAddress.customerMobile + ') when we get there. Thank you for being a loyal l-unico customer');
      }
      else{
        alert(newOrder.customerName +', your order will be ready for collection in 25 minutes.  Thank you for being a loyal customer');
      }

      document.getElementById("checkout-form").reset();
      document.getElementById("new-order").reset();
      document.getElementById("delivery-address").reset();
      $('#address').hide();
    });
  });
});
