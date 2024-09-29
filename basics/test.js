const accountId=1234
let accEmail="prachi.com"
let accState;
var accPassword = "1234"
accCity = "Chandausi"
// accountId =2 not allowed
// accEmail="yahoo"
// accPassword="0989"
// accCity="Delhi"

// console.log(accountId);
console.table([accountId,accEmail,accPassword,accCity,accState])
/*
prefer not to use var
because of issue in block scope and functional scope
let change accoring to scope 
scope means={}
but var change its value everywhere
*/