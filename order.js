var pizzapi = require('dominos');

// Address

var address = new pizzapi.Address('XXXX STREET XXX, XXX CITY XXX, XX, XZIPZ');   // <-- EDIT


// Customer

var customer = new pizzapi.Customer({
	address,
	firstName: 'XXXXXXXXX',			// <-- EDIT
	lastName: 'XXXXXXX',			// <-- EDIT
	phone: 'XXXXXXXXXX',			// <-- EDIT
	email: 'XXXXXX@XXXXX.com'		// <-- EDIT
});


// Order

var order = new pizzapi.Order({
	customer,
	storeID: XXXX,					// <-- EDIT
	deliveryMethod: 'Delivery' 
});


// Add Item

order.addItem(
	new pizzapi.Item(
		{
			code: 'P12IPAPX',		// <-- EDIT
			options: [],
			quantity: 1
		}
	)
);


// console.log("order: ", order);

var cardNumber = 'XXXXXXXXXXXXXXXX';	// <-- EDIT

var cardInfo = new order.PaymentObject();	// doesn't work if you pass an object as a parameter

cardInfo.Number = cardNumber;
cardInfo.CardType = order.validateCC(cardNumber);
cardInfo.Expiration = 'XXXX';		// <-- EDIT    	convert 12/29 to 1229
cardInfo.SecurityCode = 'XXX';		// <-- EDIT
cardInfo.PostalCode = 'XXXX'; 		// <-- EDIT		billing zip


//	validate / price / order

order.validate(
	function(result) {
		let data = result.result.Order;
		if (data.Status != -1) {
			order.price(
				function(result) {
					let data = result.result.Order;
					if (data.Status != -1) {
						cardInfo.Amount = order.Amounts.Customer;
						order.Payments.push(cardInfo);
						// order.place(								// uncomment this section when you are ready to order
						// 	function(result) {
						// 		let data = result.result.Order;
						// 		if (data.Status != -1) {
						// 			console.log(result.result.Order);
						// 			console.log("\nORDER PLACED!");
						// 		} else {
						// 			console.log("order failed");
						// 		}
						// 	}
						// );
					} else {
						console.log("failed to price");
					}
				}
			);
		} else {
			console.log("order failed validation");
		}
	}
)
