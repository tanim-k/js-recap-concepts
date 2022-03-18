//  mother function for bank
// const bank = owner => {
//     balance = 0;
//     return amount => {
//             balance += amount;
//         // balance = balance + amount ;
//             return balance;
//     }
// }        

const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            balance += amount;
            // balance = balance + amount ;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            // balance = balance - amount ;
            return balance;
        }
    }
}
const MofizBank = bank('mofij');
console.log(MofizBank.deposit(5));
console.log(MofizBank.deposit(00));
console.log(MofizBank.deposit(400));
console.log(MofizBank.balance);
console.log(MofizBank.deposit(300));
console.log(MofizBank.withdraw(300));
console.log(MofizBank.withdraw(100));