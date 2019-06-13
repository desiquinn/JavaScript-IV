// CODE here for your Lambda Classes

class Person {
    constructor(attr) {

        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    };

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    };
};

class Instructor extends Person {
    constructor(iAttr) {
        super(iAttr);

        this.specialty = iAttr.specialty;
        this.favLanguage = iAttr.favLanguage;
        this.catchPhrase = iAttr.catchPhrase;
    };

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    };

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    };

};

class Student extends Person {
    constructor(sAttr) {
        super(sAttr);

        this.previousBackground = sAttr.previousBackground;
        this.className = sAttr.className;
        this.favSubjects = sAttr.favSubjects;
    };

    listsSubjects() {
        console.log(this.favSubjects);
    };

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    };

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    };
};


class PMs extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);

        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    };

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    };

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };

};

const hermione = new Student({
    name: 'Hermione Granger', 
    location: 'London', 
    age: 13,
    previousBackground: 'Muggle Born',
    className: 'Gryffindor',
    favSubjects: {
       0: 'potions',
       1: 'broom riding', 
       2: 'history of magic',
    },
});

const george = new Student({
    name: 'George Weasley', 
    location: 'London', 
    age: 13,
    previousBackground: 'Witch Family',
    className: 'Gryffindor',
    favSubjects: {
       0: 'lunch',
       1: 'broom riding', 
       2: 'defense against the dark arts',
    },
});

const harry = new Student({
    name: 'Harry Potter', 
    location: 'London', 
    age: 13,
    previousBackground: 'The Boy Who Lived',
    className: 'Gryffindor',
    favSubjects: {
       0: 'divinations',
       1: 'broom riding', 
       2: 'defense against the dark arts',
    },
});

const snape = new Instructor({
    name: 'Severous Snape',
    location: 'Diagon Alley',
    age: 38,
    favLanguage: 'JavaScript',
    specialty: 'Potions',
    catchPhrase: 'I can teach you how to bottle fame, brew glory, even stopper death...',
});

const minerva = new Instructor({
    name: 'Minerva McGonagall',
    location: 'hogsmeade',
    age: 45,
    favLanguage: 'CSS5',
    specialty: 'Transfiguration',
    catchPhrase: 'We teachers are rather good at magic you know.',
});

const percy = new PMs({
    name: 'Percy Weasley',
    location: 'London',
    age: 18, 
    gradClassName: 'Class of 1994',
    favInstructor: 'Prof. McGonagall',
});

console.log(hermione.name);
console.log(george.favSubjects);
console.log(harry.previousBackground);
console.log(snape.catchPhrase);
console.log(minerva.specialty);
console.log(percy.standUp('Fun Channel'));
console.log(percy.debugsCode(hermione, 'Postions'));
console.log('favorite subjects' + hermione.listsSubjects);