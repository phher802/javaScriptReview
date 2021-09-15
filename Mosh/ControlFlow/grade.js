//calcuate the grade of a student and return a letter
const marks = [80, 80, 50];

//avg of marks array is 70
//grade: 0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A


function calculateGrade(marks){
    var sum = 0;

    for(let mark of marks){
        sum += mark;
    }
    
    var avg = sum / marks.length;

    if(avg < 60) return "F";
    else if(60 >= avg < 70) return "D";
    else if(70 >= avg < 80) return "C";
    else if(80 >= avg <= 89) return "B";
    else return "A"

}

console.log(calculateGrade(marks));
