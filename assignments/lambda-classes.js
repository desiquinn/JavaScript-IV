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
        console.log(`${student.name} has submitted a PR for ${subject}`)
    };

    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    };
};


class PMs extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);

        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    };

    standUp(channel) {
        console.log(`${PMs.name} announces to ${channel}, @channel standy times!​​​​​`);
    };

    debugsCode(student, subject) {
        console.log(`${PMs.name} debugs ${student.name}'s code on ${subject}`);
    };

};

const hermione = new Student({
    
})

