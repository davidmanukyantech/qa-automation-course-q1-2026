// getters and setters 

class ChaseBankAccount {
    #balance; // private field

    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

get balance() {
    return this.#balance;
}

set balance(amount){
    if(amount >= 0){
        this.#balance = amount;
    } else {
        console.error("Balance cannot be negative"
        )
    }
}
}


