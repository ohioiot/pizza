var pizzapi = require('pizzapi'); // or without payment option use require('pizzapi');
var myStore = new pizzapi.Store(0);
myStore.ID = XXXX;

myStore.getFriendlyNames(
	function(storeData){

		let data = storeData.result;
		data.forEach(function(elem) {
			
			for (var keys in elem) {
				
				let str = "\t";
				let el = elem[keys];
				str += el.Code;

				for (var i = 15 - str.length; i>0; i--) {
					str += " ";
				}

				str += el.Name;

				for (var i = 70 - str.length; i>0; i--) {
					str += " ";
				}

				str += el.Price;

				console.log(str);
			}
		})
	}
);