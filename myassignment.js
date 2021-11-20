function seerToMon(seer) {
    if (seer < 0) {
    return "please give a positive number";
    } else if (typeof seer == "string") {
    return "please give a number as a input value";
    } else if (typeof seer == "boolean") {
    return "please give a number as a input value";
    }
    const mon = seer / 40;
    return "the result is " + mon;
    }
    const mySeers = 40;
    const mon = seerToMon(mySeers);
    console.log('mySeers in mon', mon);