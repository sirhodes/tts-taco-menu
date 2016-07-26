// we need to reference the elements in our HTML markup in order to manipulate the contents
var tacoDiv = document.getElementById('taco');

var dateElement = document.getElementById('date');
var currentDate = new Date();
changeInnerHTML(dateElement, currentDate);

var receipt = document.getElementById('receipt');

function currencyFormatter(currency) {
  return '$' + currency;
}

function createTacoInMarkup(tacoObj) {
  // create an empty li element
  var liElem = document.createElement('li');
  // add classes to the li element
  liElem.className = 'taco-in-receipt col s12 l4';

  var tacoCard = document.createElement('div');
  tacoCard.className = 'card-panel orange';

  var tacoTitle = document.createElement('h6');
  changeInnerHTML(tacoTitle, tacoObj.menuTitle);

  var priceSpan = document.createElement('b');
  changeInnerHTML(priceSpan, tacoObj.price);

  var description = document.createElement('span');
  changeInnerHTML(description, tacoObj.menuDescription);

  // place the description and price inside the card
  tacoCard.appendChild(tacoTitle);
  tacoCard.appendChild(description);
  tacoCard.appendChild(priceSpan);
  // place the card into the li element
  liElem.appendChild(tacoCard);
  return liElem;
}

function Taco(obj) {
  this.ingredients = obj.ingredients;
  this.shell = obj.shell;
  this.price = obj.price;
  this.menuTitle = obj.menuTitle;
  this.menuDescription = obj.menuDescription;
}

function addTacoToReceipt(tacoInMarkup) {
  receipt.appendChild(tacoInMarkup);
}

function createNewTaco(newTaco) {
  return new Taco(newTaco);
}

function printContentsOf(obj) {
  return JSON.stringify(obj, null, 4);
}

var softShellTacoProperties = {
  menuDescription: 'Delicious starting point. ',
  menuTitle: 'Soft Shell Taco',
  price: 2.99
};


var softShellTaco = createNewTaco(softShellTacoProperties);
var softShellTacoInMarkup = createTacoInMarkup(softShellTaco);

var carnitasProperties = {
  menuDescription: 'Local braised pork goodness. ',
  menuTitle: 'Carnitas',
  price: 3.99
};

var carnitasTaco = createNewTaco(carnitasProperties);
var carnitasTacoInMarkup = createTacoInMarkup(carnitasTaco);

var lenguaProperties = {
  menuDescription: 'Beef tongue. ',
  menuTitle: 'Lengua',
  price: 3.49
};

var lenguaTaco = createNewTaco(lenguaProperties);
var lenguaTacoInMarkup = createTacoInMarkup(lenguaTaco);


var tacos = [
  softShellTacoInMarkup,
  carnitasTacoInMarkup,
  lenguaTacoInMarkup
];
tacos.map(addTacoToReceipt);

// we'll change the HTML of an element without creating a variable for it
changeInnerHTML(document.getElementById('numberOfTacos'), tacos.length);

// helper function to change the HTML of an element.
function changeInnerHTML(element, contents) {
  element.innerHTML = contents;
}
