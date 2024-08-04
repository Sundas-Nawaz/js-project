const array1 = [11,12,13,14,15,16]
const arraynum = array1.forEach((item)=>{return item})
console.log(arraynum) //undefined because forEach will not return anything

const arrayfil = array1.filter((item)=>(item >15))
//const arrayfil = array1.filter((item)=>{ return item})
console.log(arrayfil);

const arrayN = array1.forEach((item, index, array1)=>{
    return console.log(item,index,array1)
})

const arrayOfObjects = 
    [{
    name: "oop",
    price: 3000
    },
    {
        name: "c++",
        price:800
    },
    {
        name: "java",
        price:5000
    },
]
const nn = arrayOfObjects.forEach((item)=>{
    return console.log(item.name)
})