function firstLast6 (num){
    if (num[0] == 6 || num[num.length-1] == 6){
        return true;
    }else{
        return false;
    }
}

function has23 (num){
    if (num[0]==2 || num[1]==3){
        return true;
    }
    if (num[0]==3 || num[1]==3){
        return true;
    }
    return false;
}

function fix23 (num){
    var array = num;
    if (num[0] == 2 && num[1] == 3){
        num.index[1] = 0
    }
    if (num[1] == 2 && num[2] == 3){
        num.index[2] = 0
    }else{
        return array;
    }
}

function countYZ (word1){
    word1 =word1.toLowerCase()
    var sum = 0;
    for(var i = 0 ; i < word1.length-1; i++) {
        if (word1[i] == " " && (word1[i - 1] == 'y' || word1[i - 1] == 'z')) {
            sum++;

        }

    }
    if (word1[word1.length - 1] == "y" || word1[word1.length - 1] == "z") {
        sum++;
    }
    return sum;
}

function endOther (st1, st2) {
    st1 = st1.toLowerCase();
    st2 = st2.toLowerCase();
    var check = st1.endsWith(st2);
    var check2 = st2.endsWith(st1);
    if (check == true || check2 == true) {
        return true;
    } else {
        return false;
    }
}

function starOut (words){
    var end = "";
    for(var i = 0 ; i < words.length; i++) {
        if (words[i] != "*" && words[i+1] != "*" && words[i-1] != "*"){
            end = end + words[i]
        }

    }
    return end;
}

function getSandwich(thing){
    var end = "";
    var bread1 = thing.indexOf("bread");
    var bread2 = thing.lastIndexOf("bread");
    if(bread1 == -1){
        return end;
    }
    if (bread1 == bread2){
        return end;
    }
    return thing.substring(bread1 + 5, bread2);
}

function canBalance (ints) {
    var sum = 0;
    var sum2 = 0;
    for (var i = 0; i < ints.length; i++) {
        sum += ints[i];

        for (var n = i + 1; n < ints.length; n++) {
            sum2 += ints[n]
        }
        if (sum == sum2) {
            return true;
        }
        sum2 = 0;
    }
    return false;
}

function countClumps (arr){
    var clump = 0;

    for(var i = 0; i < arr.length; i++){
        if (arr[i] == arr[i+1] && arr[i] != arr[i+2]){
            clump++;
        }
    }
    return clump;
}

function evenlySpaced (a,b,c){
    if((a-b == b-c) || (b-a == c-b) || (a-b == c-a) || (a-c == c-b) ){
        return true;
    }
    return false;
}








function tester() {

    document.getElementById("output").innerHTML = firstLast6(6,5,4,3,2,1,0);
    document.getElementById("output2").innerHTML = has23(1,3);
    document.getElementById("output3").innerHTML = countYZ("!!day--yaz!!");
    document.getElementById("output4").innerHTML = fix23(1,2,3);
    document.getElementById("output5").innerHTML = endOther("ABc", "Efabc");
    document.getElementById("output6").innerHTML = starOut("hahah*hahah");
    document.getElementById("output7").innerHTML = getSandwich("breadhghghhgbread");
    document.getElementById("output8").innerHTML = canBalance(1,1,1,2,1);
    document.getElementById("output9").innerHTML = countClumps(1,1,3,2,1);
    document.getElementById("output10").innerHTML = evenlySpaced(1,3,5);
}
