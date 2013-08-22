// note to Dan: I went through and pasted each of the steps on this cash register thing
// so that I could note where I was confused or not confused (as the case may be)

// ========================================================== Part one:

//Create the object called cashRegister 
//and initialize its total property
var cashRegister = {
    total: 0
}

//Using dot notation change the total property
cashRegister.total = 2.99;

// NOTE: for the item above, I got confused and at first I tried to make it a function and not an object. 


// ========================================================== Part two:
// NOTE: this made sense to me (we just did the middle where we called each of the items)

var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};

//call the add method for our items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);

//Show the total bill
console.log('Your bill is '+cashRegister.total);


// ========================================================== Part three:
// NOTES: this also makes sense - switch case does seem to
// although the instructions didn't have us put anything in for a default case
// but what if you try to add in something that's not in there...
// really SHOULD have a default option of some sort!

var cashRegister = {
    total:0,
//insert the add method here    
    add: function(itemCost){
        this.total+=itemCost;
    },
    
    scan: function(item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        //Add other 2 items here
        case "magazine":
            this.add(4.99);
            break;
        
        case "chocolate":
            this.add(0.45);
            break;
        }
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");

//Show the total bill
console.log('Your bill is '+cashRegister.total);


// ========================================================== Part four:
// This was actually pretty self explanatory

var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);
cashRegister.scan("chocolate", 4);

//Show the total bill
console.log('Your bill is '+cashRegister.total);


// ========================================================== Part five:
// and this as well - fairly easy since we just added a "void it"

var cashRegister = {
    total:0,
    //Dont forget to add your property
    add: function(itemCost, lastTransactionAmount) {
        this.total += itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function() {
        this.total -= this.lastTransactionAmount
    }
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);

//Show the total bill
console.log('Your bill is '+cashRegister.total);


// ========================================================= Part six:
// still getting a bit mixed up on constructors and methods and classes and objects I need a new brain

// create a constructor for the StaffMember class
var StaffMember = function(name, discountPercent) { 
    this.name = name;
    this.discountPercent = discountPercent;
};

var sally = new StaffMember("Sally", 5); 
var bob = new StaffMember("Bob", 10);

//Create a StaffMember for yourself called me
var me = new StaffMember("Me", 20);


// ========================================================= Part seven - final part:
// NOTE: see staff discount area for my note

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally", 5);
var bob = new StaffMember("Bob", 10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Me", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction: function() {
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee) {
        this.total -= (this.total * (employee.discountPercent/100)); // I only half follwed what I did here... 
        // part of the problem I'm having is I read everything from left to right very literally
        // and that confuses what I need to do (although maybe I've got that wrong too?)
    }
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
