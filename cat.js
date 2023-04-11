//question 1
let food = "eating";
function foods(food){
    let diet = food.reverse();
    console.log(diet);

}
foods()

//question 2
function mergeSort(num){
    if(num.length<=1){
        return num
    }
    let middle = Math.floor(num.length/2);
    let left = num.slice(0,middle);
    let right = num.slice(middle);
    return mergeSorted(mergeSort(left),mergeSort(right));
}
function mergeSorted(left,right){
    let newNum = [];
    while(left.length && right.length){
        if (left[0]<right[0]){
            newNum.push(left.shift());
        }
        else {
            newNum.push(right.shift());
        }
    }
    console.log({newNum});
    return[...newNum,...left,...right]
}


function binary(num,target){
    let left = 0;
    let right = num.length-1;
    while(left<=right){
        let middle = Math.floor(left+right/2);
        if(num[middle]===target){
            return middle
        }
        else if (num[middle]>target){
            right= middle-1
        }
        else{
            left = middle + 1
        }

    }
    return null
}
let num = [2,8,0,23,5,45,76];
console.log(mergeSort(num));
let target = 23;
console.log(binary(num,target))

//question 5
let numArray = [12,87,45,75,23,64,73];
function numbers(){
numArray.forEach(element => {
    return numArray*4   
    });
    
  console.log(numArray);  
}
numbers();

//question 6
let arrStrings = ["10","24","45","56","67"];
function arrString(){
    let digits = arrStrings.values();
    console.log(digits);
}
arrString()


