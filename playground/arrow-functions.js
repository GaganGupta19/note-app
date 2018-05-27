let square = x => x * x;
console.log(square(6));

//testing $this keyword

let user = {
    name: 'Gagan',
    sayHi: () => {
        //calling $this will fail over here.
        console.log(`Hi. I'm ${this}.`);
    },
    //this is an alternate way of solving this problem
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm alternate ${this}.`);
    }
};

user.sayHiAlt(1, 2, 3, 4);