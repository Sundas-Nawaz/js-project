const obj1 ={1:"a",2:"b"}

console.log(obj1);

console.log(obj1.hasOwnProperty('1'))

const obj2={}

const obj3 ={...obj1}
console.log(obj3)
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));


const course={
    courseName:"js in detail",
    price:3000,
    courseInstructor:"sundas"
}

console.log(course.courseName);

const {price} = course

console.log(price);