/**
 * Finally, we will test your wit and angineering mindset.
 */

// You have a bunch of bank accounts:
// Bank of America, with 500 EUR,
// Bank of Tirana, with 1000 EUR,
// Bank of England, with 69 EUR,
// HSBC with 100 EUR,
// Bank of Italy with 200 EUR.

// You want to keep track of your money. To do that:
// 1. Store all the information in the most appropriate JS data structure you can think of.
// Note: You may want to add a unique identifier to each account.

const accounts = [
    {
        id: 1,
        bank: 'Bank of America',
        amount: 500
    },
    {
        id: 2,
        bank: 'Bank of Tirana',
        amount: 1000
    },
    {
        id: 3,
        bank: 'Bank of England',
        amount: 69
    },
    {
        id: 4,
        bank: 'HSBC',
        amount: 100
    },
    {
        id: 5,
        bank: 'Bank of Italy',
        amount: 200
    }
]

// Now, without directly typing the data:
// 2. Find a way to find out how much money is in a selected account.

function getMoneyByAccount(bank) {
    for (const account of accounts) {
        if (account.bank === bank) {
            return `${account.amount} Euro`
        }
    }
}

getMoneyByAccount('Bank of Italy')

// 3. Find a way to find out how much money you have in total.
function getTotal() {
    let total = 0
    accounts.map(account => total += account.amount)
    return `${total} Euro`
}
getTotal()
// 4. Find a way to add money to a selected account.
// 4.1 And subtract too.

function addOrSubtractMoneyByAccount(bank, addOrSubtract, amount) {
    for (const account of accounts) {
        if (account.bank === bank && addOrSubtract === 'add') { return `${account.amount + amount} Euro` }
        else if (account.bank === bank && addOrSubtract === 'subtract') { return `${account.amount - amount} Euro` }

    }
}

addOrSubtractMoneyByAccount('Bank of Italy', 'subtract', 100)

// 5. Each bank account has an account number. For this exercise, an account number is a 5 digit integer.
// Find a way to add that information into the existing shape.

function addAccountNr(bank, number) {
    let newNr = String(number).length

    for (const account of accounts) {
        if (account.bank === bank && newNr === 5) {
            return account.accountNumber = number
        }
    }
    return `Doesn't work`
}

console.log(addAccountNr('Bank of Italy', 123456))
