// JavaScript Getter

// Create an object:

let person = {
    firstName: "John",
    lastName: "Watt",
    language: "en",
    get lang(){
        return this.language;
    }
};

document.getElementById("demo").innerHTML = person.lang;