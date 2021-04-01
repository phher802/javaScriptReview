
// var msg = 'Hello World'
// console.log(msg);

function sumZero(arr){
    let left = 0;
    let right = arr.lenghth - 1;

    while(left < right){
        let sum = arr[left] + arr[right];

        if (sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            return right--;
        }else{
            return left++;
        }
    }

}

var arr = [-4,-3,-2,-1, 0, 2, 3, 4];
console.log(sumZero(arr));


