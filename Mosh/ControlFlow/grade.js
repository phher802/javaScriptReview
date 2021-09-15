//calcuate the grade of a student and return a letter
const marks = [80, 80, 50];

//avg of marks array is 70
//grade: 0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A


function calculateGrade(marks){
  
    const avg = calculateAverage(marks);

    if(avg < 60) return "F";
    if(avg < 70) return "D";
    if(avg < 80) return "C";
    if(avg < 89) return "B";
    return "A"

}


function calculateAverage(array){
    var sum = 0;
    for(let value of array)
        sum += value;
    
    return sum / array.length;
}

console.log(calculateGrade(marks));

