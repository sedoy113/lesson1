//мой 
/*var yourBudget 	= prompt ("Ваш бюджет?");
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
alert('Ваш бюджет на 1 день' + yourBudget/30);*/

//Иван
		let money 			= prompt ("Ваш бюджет?");
		let name 				= prompt ("Название Вашего магазина?");



	let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		open: false,
		employers: {
			name: 'Ivan',
			name2: 'Sergey'
		}
	};
	mainList.shopGoods[0] = prompt ("Какой тип товаров будем продавать?");
	mainList.shopGoods[1] = prompt ("Какой тип товаров будем продавать?");
	mainList.shopGoods[2] = prompt ("Какой тип товаров будем продавать?");

	console.log(mainList);
	alert('Ваш бюджет на 1 день' + mainList.budget / 30);







