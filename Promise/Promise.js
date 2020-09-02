// var a = new Promise(function(success, failure) {
// 	setTimeout(function(){
// 		success();
// 		success();
// 		failure();
// 	}, 2000);


// });

// console.log('a is >>>', a);

// function success(data) {
// 	console.log('Success in promise >>>', data);
// };

// function failure(err) {
// 	console.log('failure in promise', err);
// };

// a

// 	.then(success) //recommended to use for success only
// 	.catch(failure)
// 	.finally(function(){
// 		console.log('promise is settled');
// 	})


const askMoney = (amt) => {
	var a = new Promise(function(resolve, reject) {
	 	setTimeout(function() {
	 		resolve(amt + 1000);
	 	}, 2000);
	});
	return a;
};

console.log('i want to buy mobile');
console.log(`i don't have money so asked with parent`);
var res = askMoney(1234567);
res
	.then(function(data){
		console.log('Success in promise', data);
		console.log('i have money now');
	})
	.catch(function(err) {
		console.log('Error in promise', err);
		console.log(`i don't have money`);
	});
	console.log('Now blocking work');
