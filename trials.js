/////////////////////////////////////////////////////////
// PART 1

/////////////////////////////////////////////////////////
// Show Profile Info

// Add function to prnt profile info
function showProfile(name, catchphrase, location) {
    console.log('PROFILE:');
    console.log('Name: ' + name);
    console.log('Catchphrase: ' + catchphrase);
    console.log('Location: ' + location);
}

/////////////////////////////////////////////////////////
// Display Likes
const interests = [
    'being annoying',
    'seeds',
    'staring at human food'
];

// Add function to print interests
function showLikes(like) {
    console.log('THINKS I LIKE:');

    for (let item = 0; item < like.length; item += 1) {
        console.log(like[item]);
    }
}


/////////////////////////////////////////////////////////
// Display Favorites
const favorites = {
    // Add more favorites
    'food': 'pebbles',
    'tree': 'palm',
    'quote': 'Bock bock bock'
};

// Add function to print favorites
function showFavorites(favorites) {
    console.log('FAVORITES:');

    for (let key of Object.keys(favorites)) {
        console.log(`${key}: ${favorites[key]}`);
    }
}


/////////////////////////////////////////////////////////
// PART 2

/////////////////////////////////////////////////////////
// Add Transactions

// Add function to add transaction
function addTransaction(date, amount, currentTransactions) {
    currentTransactions[date] = amount;
}
// Create object to hold transactions
let transactions = {};

// Add transactions to object
addTransaction('may2', -500, transactions)
addTransaction('may13', 1200, transactions)
addTransaction('may15', -100, transactions)

/////////////////////////////////////////////////////////
// Get Balance Status

// Add function to calculate balance status
function getBalanceStatus(balance) {
    if (balance < 0) {
        console.log('YOU ARE OVERDRAWN');
    } else if (balance < 20) {
        console.log('Warning! Your balance is almost 0!');
    } else {
        console.log('Normal')
    }
}


/////////////////////////////////////////////////////////
// Calculate Current Balance

// Add function to calculate and return current balance
function getCurrentBalance(balance, transactions) {
    for (let key of Object.keys(transactions)) {
        balance += transactions[key];
        if (balance < 0) {
            balance -= 25;
        }
    }

    return balance;
}

/////////////////////////////////////////////////////////
// Show Account Activity

// Add function to print account activity
function showAcctActivity(balance, transactions) {
    console.log('TRANSACTIONS:');
    for (let key of Object.keys(transactions)) {
        console.log(`${key}: ${transactions[key]}`)
    }

    let currentBalance = getCurrentBalance(balance, transactions);

    console.log('CURRENT BALANCE: ' + currentBalance);

    console.log('CURRENT STATUS: ');
    getBalanceStatus(currentBalance);
}


/////////////////////////////////////////////////////////
// Creating a User Object
let user = {
    'name': 'melon',
    catchphrase: 'woot!',
    location: 'San Francisco',
    interests: interests,
    favorites: favorites,
    transactions: transactions,
    start_balance: 100
};

// Add user object

// Add function to print user dashboard
function printDashboard(userObj) {
    console.log(userObj);
}


/////////////////////////////////////////////////////////
// PART 3

// Add object that keeps track of premium members

// Add function to return emails of premium members



/////////////////////////////////////////////////////////
// PART 4

// Add function to assign interns to workdays

// Add a function to generate customer support hours