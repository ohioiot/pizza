var pizzapi = require('dominos'); // or without payment option use require('pizzapi');

pizzapi.Util.findNearbyStores(
	'XXXX South XXXX Street, XXXXX, OH, XXXXX',
	'Delivery',
	function(storeData){
		
		let data = storeData.result.Stores;

		data.forEach(function(elem) {
			let str = "\t";
			str += elem.StoreID;
			
			str += "\t";
			
			let index = elem.AddressDescription.indexOf("\n");

			let a = elem.AddressDescription.slice(0,index);
			let b = elem.AddressDescription.slice(index+1);

			if (b.indexOf("\n")) b = b.slice(0,b.indexOf("\n"));

			str += a;
			str += ", ";
			str += b;

			for (var i = 52 - str.length; i>0; i--) {
				str += " ";
			}

			str += elem.Phone;

			str += "\t";
			str += elem.MaxDistance;
			str += " miles";

			console.log(str);
		})

	}
);



















