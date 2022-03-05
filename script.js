// 1) Class Movie  

class movie {
    constructor(title, studio, rating = "PG") {
        this.title = title
        this.studio = studio
        this.rating = rating
    }
    getPG(arr) {
        var result = [];
        arr.filter(movie => {
            if (movie.rating === "PG") {
                result.push(movie.title)
            }
        })
        return result;
    }
    getData() {
        return `
Movie Name  : ${this.title}
Studio      : ${this.studio}
Rating      : ${this.rating}`
    }
}
var movie1 = new movie("Casino Royale", "Eon Productions", "PG13");
var movie2 = new movie("The Airport", "ACB Company", "PG");
var movie3 = new movie("Air Force One", "American Films", "PG8");

var moviearr = [movie1, movie2, movie3];

console.log(movie1.getPG(moviearr));
// Output: movie {title: 'The Airport', studio: 'ACB Company', rating: 'PG'}

console.log(movie1.getData());
// Output: Movie Name  : Casino Royale
//         Studio      : Eon Productions
//         Rating      : PG13




// 2) Class Circle

class circle {
    constructor(radius, color) {
        this.radius = radius
        this.color = color
    }
    getRadius() {
        return `Radius of Circle : ${this.radius}`;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return `Color of Circle : ${this.color}`;
    }
    setColor(color) {
        this.color = color;
    }
    getArea() {
        return `Area of Circle : ${Math.PI * Math.sqrt(this.radius)}`;
    }
    getCircumference() {
        return `Circumference of Circle : ${2 * Math.PI * this.radius}`;
    }
}
var circle1 = new circle(2, "Red");

console.log(circle1.getRadius());
// Output: Radius of Circle : 2

console.log(circle1.getColor());
// Output: Color of Circle : Red

console.log(circle1.getArea());
// Output: Area of Circle : 4.442882938158366

console.log(circle1.getCircumference());
// Output: Circumference of Circle : 12.566370614359172

circle1.setRadius(5);
circle1.setColor("Green");

console.log(circle1.getRadius());
// Output: Radius of Circle : 5

console.log(circle1.getColor());
// Output: Color of Circle : Green

console.log(circle1.getArea());
// Output: Area of Circle : 7.024814731040727

console.log(circle1.getCircumference());
// Output: Circumference of Circle : 31.41592653589793




// 3) Class Person

class person {
    constructor(fname, lname, age, gender, designation, email, contact) {
        this.fname = fname
        this.lname = lname
        this.age = age
        this.gender = gender
        this.designation = designation
        this.email = email
        this.contact = contact
    }
    getDetails() {
        return `
        First Name  : ${this.fname}
        Last Name   : ${this.lname}
        Age         : ${this.age}
        Gender      : ${this.gender}
        Designation : ${this.designation}
        Email ID    : ${this.email}
        Contact No. : ${this.contact}`
    }
}
var person1 = new person("Sam", "Jesu", 30, "Male", "Design Engineer", "samjesu@gmail.in", "9856237412")

console.log(person1.getDetails());
// Output: First Name  : Sam
//         Last Name   : Jesu
//         Age         : 30
//         Gender      : Male
//         Designation : Design Engineer
//         Email ID    : samjesu@gmail.in
//         Contact No. : 9856237412




// 4) Class Price Calculation

class price {
    constructor(distance, price) {
        this.distance = distance
        this.price = price
    }
    getPrice() {
        return this.distance * this.price
    }
}

var taxi1 = new price(20, 150)

console.log(taxi1.getPrice());
// Output: 3000
