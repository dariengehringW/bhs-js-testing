function sleep_in(weekday,vacation){
    if(weekday == true && vacation == false){
        return false;
    }
    if (weekday == true && vacation == true) {
        return true;
    }
    if (weekday == false && vacation == false ) {
        return true;
    }
    if (weekday == false && vacation == true) {
        return true; 
    }
}

function monkey_trouble(a_smile,b_smile) {

    if (a_smile == b_smile) {
        return true;
    } else {
        return false;
    }

}

function string_times(str,num){
let answer = "";
for (let i = 0; i < num; i++) {
answer = answer + str;
  }
  return answer;
}
function front_times(str, n) {
  let front = str.substring(0, 3);
  let result = "";

  for (let i = 0; i < n; i++) {
    result += front;
  }
  return result;
}

function string_bits(str){
  let result = "";
  for (let i = 0; i < str.length; i += 2) {
    result += str[i];
  }
  
  return result;
}
function caughtSpeeding(speed, isBirthday) { //bday speed limit differs from normal one
  const allowance = isBirthday ? 5 : 0;
  if (speed <= 60 + allowance) {
    return 0;
  } else if (speed <= 80 + allowance) {
    return 1;
  } else {
    return 2;
  }
}
function fizz_buzz(num) {
  if (num % 3 == 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0) {
    return "Buzz";
  } else {
    return num+"!";
  }
}
function specialEleven(num) {
  return num % 11 == 0 || num % 11 == 1;
}
function withoutDoubles(die1, die2, noDoubles) {
  if (noDoubles && die1 == die2) {
    die1 = die1 == 6 ? 1 : die1 + 1;
  }
  return die1 + die2;
}
function left2 (s) {
    return s.substring(2) + s.substring(0, 2);
}
