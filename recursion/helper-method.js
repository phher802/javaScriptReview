
//recursion helper method
//has two functions: outer and inside function that calls itself recursively
//example one:

function outer (input) {
	
	var outerScopedVariable = [];
	
	function helper (helperInput){
		//modify the outterScopedVariable
		helper(helperInput--);
}

	helper(input)

	return outerScopedVariable;
}


//example 2:

function collectOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1));
    }

    helper (arr);
    return result;
}

