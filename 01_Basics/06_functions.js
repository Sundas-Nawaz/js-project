function calculateCartPrice(...num1)  //we call it rest operator it will retuen a bulk of numbers in array
{

    return num1;

}

function calculatePrice(val1, val2, ...num2)
{
 return num2;
}

console.log(calculateCartPrice(200,300,400,4000,"abs"));

console.log(calculatePrice(300,400,500,600));  // return [500, 600]

const array1 = [200, 300, 400]
function returnSecondNum(array1){
    return array1[1];
}

console.log(returnSecondNum(array1));

