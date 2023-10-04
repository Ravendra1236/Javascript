const account_Id = 12111;
let account_Email = "ravendra@gmai.com";
var account_Pass = "12345";
account_City = "Kota";  // Dont use this but this is possible

// account_Id = 2; Not allowed

account_Email = "hello@gmail.com";
account_Pass  = "232112";
account_City = "Jaipur";
let account_State;

// console.log(account_Id);

console.table([account_Id,account_Email , account_Pass,account_City , account_State]);

//  Prefer not to use var
//  because of issue of block scope and functional scope