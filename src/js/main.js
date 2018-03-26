var yourBudget = prompt ("Ваш бюджет?");
var nameStore = prompt ("Название Вашего магазина?");
var shopGoods = [];
shopGoods[0] = prompt ("Какой тип товаров будем продавать?");
shopGoods[1] = prompt ("Какой тип товаров будем продавать?");
shopGoods[2] = prompt ("Какой тип товаров будем продавать?");

mainList = {
	yourBudget,
	nameStore,
	shopGoods,
	open: 'open',
	employers: {
		name: 'Ivan',
		name2: 'Sergey'
	}
}

console.log(mainList);
alert('Ваш бюджет на 1 день' + yourBudget/30);
document.write('Ваш бюджет на 1 день' +  yourBudget/30);
document.write('Ваш бюджет' +  yourBudget);
document.write("Название Вашего магазина" +  nameStore);
document.write("Какой тип товаров будем продавать" +  shopGoods);


