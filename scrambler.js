function getScramble(N) {
    randomNumbers = []
    let maxN = N * N;
    for (let i = 1; i <= maxN; i++) {
        randomNumbers[i - 1] = i;
    }
    randomNumbers[maxN - 1] = 0
    randomNumbers = shuffleNumbers([...randomNumbers], N);
    let rmoves = getRandomInt(N);
    let dmoves = getRandomInt(N);
    blankid = N * N;
    for (let i = 1; i <= rmoves; i++) {
        newx = linToX(N, blankid) - 1;
        newy = linToY(N, blankid);
        newt = XYtolin(N, newx, newy);
        tmp = randomNumbers[newt - 1];
        randomNumbers[newt - 1] = randomNumbers[blankid - 1];
        randomNumbers[blankid - 1] = tmp;
        blankid = newt;
    }
    for (let i = 1; i <= dmoves; i++) {
        newx = linToX(N, blankid);
        newy = linToY(N, blankid) - 1;
        newt = XYtolin(N, newx, newy);
        tmp = randomNumbers[newt - 1];
        randomNumbers[newt - 1] = randomNumbers[blankid - 1];
        randomNumbers[blankid - 1] = tmp;
        blankid = newt;
    }
    regstring = ""
    for (let i = 1; i <= N; i++) {
        regstring += "[^ ]+ "
    }
    rg = new RegExp("(" + regstring.substring(0, regstring.length - 1) + ") ", "g")
    return randomNumbers.join(' ').replace(rg, '$1/');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function XYtolin(N, X, Y) {
    return Y * N + X + 1;
}


function linToX(N, lin) {
    return (lin - 1) % N;
}

function linToY(N, lin) {
    return Math.floor((lin - 1) / N);
}

function getRandomInt2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function shuffleNumbers(array, N) {
    let maxN = N * N;
    let lastI = maxN - 3;
    let swapsAmount = 0;
    for (let i = 0; i <= lastI; i++) {

        randomInt = getRandomInt2(i, maxN - 1);
        if (i != randomInt) {
            swapsAmount++;
            tmp = array[i];
            array[i] = array[randomInt];
            array[randomInt] = tmp;
        }
    }
    if (swapsAmount % 2 != 0) {
        tmp = array[0]
        array[0] = array[1];
        array[1] = tmp;
    }
    return array;
}
