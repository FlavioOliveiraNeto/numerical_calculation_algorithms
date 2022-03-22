//Algorithm made by Flavio de Oliveira Neto that uses the fixed-point method to find roots of functions
//This method needs:
//2 functions, one to find the root of it (that we'll call f(x)) and the other to calculate the next approximate 'x' (that we'll call g(x)); 
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
        console.log("---------------------------------");

        nxt_x = gx_calculate(nxt_x); //switch the value of the variable nxt_x to the next value of 'x', calculate by the g(x) function

        iteration++; //add +1 to the iteration variable 
    }while(fx_calculate(nxt_x) > precision); //do this protocol while the value of f(x) is smaller than the precision
}

//function to calculate the value of f(x) function used to compare with the precision, takes actual 'x' value as paramether
function fx_calculate(x_value) {
    return (Math.pow(Math.E, x_value) - (4 * (Math.pow(x_value, 2))));
}

//function to calculate the value of the next value of 'x' used in the f(x) function, takes actual 'x' value as paramether
function gx_calculate(x_value) {
    return (0.5 * (Math.pow(Math.E, (x_value / 2))));
}

main(0.5, 0.0001); //call main function to execute the algorithm. Here I can assume the initial value of 'x' and precision value.