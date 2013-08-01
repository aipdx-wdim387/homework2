var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function search(lastName){  
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if(lastName == contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
}

function add(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
}

var firstName = prompt("First Name:", "");
var lastName = prompt("Last Name:", "");
var phoneNumber = prompt("Phone Number:", "");
var email = prompt("Email:", "");

contacts[contacts.length] = new add(firstName, lastName, phoneNumber, email);

list();
