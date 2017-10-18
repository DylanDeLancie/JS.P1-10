//write first method
function sleep_in(weekday,vacation) {

    if(weekday && vacation){
        return true;
    }
    if(!weekday && !vacation){
        return true;
    }
    if(weekday && !vacation){
        return false;
    }
    if(!weekday && vacation){
        return true;
    }

    return false;
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile == b_smile) {
        return true;
    } else {
        return false;
    }
}

function string_times(word,x){
    var combine = ""
    for(var i = 0; i < x; i++){
            combine = combine + word;
        }
        return combine;

}

function front_times(word,n){
    var front = word.substring(0,3)
    var solution = ""
    for(var i = 0; i < n; i++){
        solution = solution + front
    }
    return solution;
}

function string_bits(word){
    var solution = ""
    for(var i = 0; i < word.length; i ++){
        solution = solution + word[i]
        i++
    }
    return solution;
}

function caughtSpeeding(speed, birthday){
    if ( birthday == true ){
        speed = speed - 5
    }
    if ( speed <= 60){
        return 0;
    }
    if ( speed > 61 && speed <= 80){
        return 1;
    }
    if ( speed >= 81){
        return 2;
    }

}

function fizz_buzz (number){
    var Fizz = "Fizz"
    var Buzz = "Buzz"
    var FizzBuzz = "FizzBuzz"
    if (number % 3 == 0 && number % 5 == 0){
        return FizzBuzz;
    }
    if (number % 3 != 0 && number % 5 == 0){
        return Buzz;
    }
    if (number % 3 == 0 && number % 5 != 0){
        return Fizz;
    }
    return number + "!";
}

function teaParty (tea, candy){
    if(tea < 5 || candy < 5){
        return 0;
    }
    if(tea / candy >= 2 || candy / tea >= 2){
        return 2;
    }else{
        return 1;
    }

}

function blackjack (num1, num2){
    var check1 = 21 - num1
    var check2 = 21 - num2
    var int1 = num1
    var int2 = num2
    if (check1 < 0 && check2 < 0){
        return 0;
    }
    if (check1 < 0){
        return int2;
    }
    if (check2 < 0){
        return int1;
    }
    if (check1 > check2){
        return int2;
    }
    if (check2 > check1){
        return int1;
    }
}

function loneSum (num1, num2, num3){
    var one = num1
    var two = num2
    var three = num3
    var sum = num1 + num2 + num3
    if(num1 == num2 && num2 == num3){
        return 0;
    }
    if (num1 == num2){
        return three;
    }
    if (num2 == num3){
        return one;
    }
    if (num1 == num3){
        return two;
    }else{
        return sum;
    }
}
function tester() {

    document.getElementById("output").innerHTML = sleep_in(true, false);
    document.getElementById("output2").innerHTML = monkey_trouble(true, false);
    document.getElementById("output3").innerHTML = string_times(true, 5);
    document.getElementById("output4").innerHTML = front_times(false, 6);
    document.getElementById('output5').innerHTML = string_bits(true);
    document.getElementById('output6').innerHTML = caughtSpeeding(65, true);
    document.getElementById('output7').innerHTML = fizz_buzz(5);
    document.getElementById('output8').innerHTML = teaParty(7, 12);
    document.getElementById('output8').innerHTML = blackjack(7, 12);
    document.getElementById('output9').innerHTML = loneSum(7, 12, 14);
}
