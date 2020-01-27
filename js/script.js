var budjet = +prompt('Ваш бюджет?', '1000');
var nameOfShop = prompt('Название вашего магазина?', '');
var obj = {};
var shopGoods = [];
var employers = {};
var isOpen = true;
// shopGoods = [goods1, goods2, goods3];
shopGoods[0] = prompt('Назовите первый товар, который будете продавать', '');
shopGoods[1] = prompt('Назовите второй товар, который будете продавать', '');
shopGoods[2] = prompt('Назовите третий товар, который будете продавать', '');

// console.log(shopGoods[1]);

obj = {
  budjet,
  nameOfShop,
  shopGoods,
  employers,
  isOpen,
};

budjetToDay = budjet / 30;
alert ('Ваш бюджет на день ' + budjetToDay + ' руб.');

