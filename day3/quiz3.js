function add(num1, num2){
    return console.log(num1+ num2) 
}

function subtract(num1, num2){
    return console.log(num1 - num2)
}

function calculate(num1,num2,operation){
    switch(operation){
        case add : {add(num1,num2); break;}  
        case subtract : {subtract(num1,num2); break;}
    }
}

calculate(5, 3, add);
calculate(5, 3, subtract); 