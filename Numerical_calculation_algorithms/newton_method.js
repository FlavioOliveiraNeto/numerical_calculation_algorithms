//Algorithm made by Flavio de Oliveira Neto that uses the Newton method to find roots of functions
//This method needs:
//1 function and it derivate; 
//an interval to find the approximate 'x' between this interval; 
//an initial 'x'; 
//a precision constant to compare the approximate 'x'. 

//Main function that takes an inicial value for 'x' and the precision that you want to run the algorithm
function main(initial_x, precision) {
    var nxt_x = initial_x; //nxt_x variable takes the initial_x value passed by paramether
    var iteration = 0; //iteration variable created to count how many iterations needs to find the approximate root of the function

    do {
        //print the values on console
        console.log("---------------------------------");
        console.log('Iterações: ' + iteration); //print the number of the actual iteration
        console.log('X barra: ' + nxt_x); //print the actual value of 'x'
        console.log('F de X barra: ' + fx_calculate(nxt_x)); //print the actual value of f(x) function with the actual 'x'
        console.log('Derivada de F de X barra: ' + fx_derivate_calculate(nxt_x)); //print the actual value of f(X) derivate with the actual 'x'
        console.log("---------------------------------");

        var condition = 'True'; //variable condition to make the protocol run until condition turns 'False'

        if(Math.abs(fx_calculate(nxt_x)) <= precision) {
            condition = 'False';
        }

        nxt_x = newton_formula(nxt_x, fx_calculate(nxt_x), fx_derivate_calculate(nxt_x)); //switch the value of the variable nxt_x to the next value of 'x', calculate by the Newton formula

        iteration++; //add +1 to the iteration variable 
    }while(condition == 'True'); //do this protocol while the value of condition is True
}

//function to calculate the value of f(x) function used to compare with the precision, takes actual 'x' value as paramether
function fx_calculate(x_value) {
    return (Math.pow(Math.E, x_value) - (4 * (Math.pow(x_value, 2))));
}

//function to calculate the derivate of the function using the value of 'x', takes actual 'x' value as paramether
function fx_derivate_calculate(x_value) {
    return (Math.pow(Math.E, x_value) - (8 * x_value));
}

//function to calculate the next value of 'x' using Newton formula
function newton_formula(x_value, fx_value, fx_derivate_value) {
    return ((x_value) - ((fx_value)/(fx_derivate_value)));
}

main(0.5, 0.0001); //call main function to execute the algorithm. Here I can assume the initial value of 'x' and precision value.