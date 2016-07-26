// we need to reference the elements in our HTML markup in order to manipulate the contents
var tacoDiv = document.getElementById('taco');

var dateElement = document.getElementById('date');
var currentDate = new Date();
changeInnerHTML(dateElement, currentDate);

var receipt = document.getElementById('receipt');
var totalSpan = document.getElementById('total');
changeInnerHTML(totalSpan, 1.91);

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
  ingredients: ['cheese', 'meat', 'sour cream'],
  shell: 'soft',
  price: 2.99
};

softShellTaco = createNewTaco(softShellTacoProperties);
softShellTacoInMarkup = createTacoInMarkup(softShellTaco);

var tacos = [softShellTacoInMarkup];
tacos.map(addTacoToReceipt);
// addTacoToReceipt(softShellTacoInMarkup);

// helper function to change the HTML of an element.
function changeInnerHTML(element, contents) {
  element.innerHTML = contents;
}

// we'll change the HTML of an element without creating a variable for it
changeInnerHTML(document.getElementById('numberOfTacos'), tacos.length);
