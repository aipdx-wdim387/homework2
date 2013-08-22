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

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var contactsLength = contacts.length;
    for (var j = 0; j < contactsLength; j++) {
        if ( contacts[j].lastName === lastName ) {
            printPerson(contacts[j]);
        }
    }
}
// search("Jones");

function add(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
    firstName:firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber
    };
}

// in step three it says "Add this new contact object to the contacts array
// not sure what they mean - do i go up to the contacts array and do it manually?
// does calling the function with the parameters actually do this or??? I'm confused

add("John", "Doe", "jdoe@adeer.com", "123-321-4567");

list();