var bob = {
    firstName: "Bob",
    lastName: "Jones",
    
    phoneNumber: "(650) 777 - 7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    
    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var items = contacts.length;
    for (i=0;i<items;i++) {
        printPerson(contacts[i])
    }
}

list()

function search(lastName) {
     var items = contacts.length;
     for (i=0;i<items;i++) {
        if (lastName === contacts[i].lastName)
        printPerson(contacts[i])
     }
};

search("Jones")

function add(firstName,lastName,email,telephone) {
    var newContact = {
        firstName: firstName,
        lastName: lastName,
        
        phoneNumber: telephone,
        email: email
    }; 
    contacts[contacts.length] = newContact;
};

add(prompt('First'),prompt('Last'), prompt('Email'),prompt('Phone'))