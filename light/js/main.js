var yourBudget 	= prompt ("Ваш бюджет?");
var nameStore 	= prompt ("Название Вашего магазина?");
var mainList 		= {};
var open 				= 'open';
var shopGoods 	= [];
shopGoods[0] 		= prompt ("Какой тип товаров будем продавать?");
shopGoods[1] 		= prompt ("Какой тип товаров будем продавать?");
shopGoods[2] 		= prompt ("Какой тип товаров будем продавать?");

mainList = {
	yourBudget,
	nameStore,
	shopGoods,
	open: true,
	employers: {
		name: 'Ivan',
		name2: 'Sergey'
	}
};

console.log(mainList);
alert('Ваш бюджет на 1 день' + yourBudget/30);*







