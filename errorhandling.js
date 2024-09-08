function divideNumbers(a, b) {
    try {
        
        if (b === 0) {
            
            throw new Error("Division by zero is not allowed.");
        }
        let result = a / b;
        console.log("Result:", result);
    } catch (error) {
        
        console.error("An error occurred:", error.message);
    } finally {
        console.log("Division attempt finished.");
    }
}


divideNumbers(10, 2); 
divideNumbers(10, 0); 


console.log("Without finally:")


function divideNumbers(a, b) {
    try {
        
        if (b === 0) {
            
            throw new Error("Division by zero is not allowed.");
        }
        let result = a / b;
        console.log("Result:", result);
    } catch (error) {
        
        console.error("An error occurred:", error.message);
    }
}


divideNumbers(10, 2); 
divideNumbers(10, 0); 

