// There are 2 definition of objects one is OOPS wala object and second is object as a variable.

const me = {
    firstName: "Yogesh",
    lastName: "Yadav",
    age: 22,
    company: "Pinelabs",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }

};

console.log("Details about me :-");
console.log(me.fullName());
console.log(me.age);
console.log(me.company);