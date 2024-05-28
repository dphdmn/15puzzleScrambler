function getScramble(n) {
    let arr = Array.from({ length: n * n - 1 }, (_, i) => i + 1), parity = false;
    for (let i = 0; i < n * n - 3; i++) {
        let t = Math.floor(Math.random() * (n * n - 1 - i)) + i;
        if (i !== t) parity = !parity;
        [arr[i], arr[t]] = [arr[t], arr[i]];
    }
    if (parity) [arr[n * n - 3], arr[n * n - 2]] = [arr[n * n - 2], arr[n * n - 3]];
    arr.push(0);
    let g = n * n - 1, d = Math.floor(Math.random() * n), r = Math.floor(Math.random() * n);
    for (let i = 0; i < d; i++, g -= n) [arr[g], arr[g - n]] = [arr[g - n], arr[g]];
    for (let i = 0; i < r; i++, g -= 1) [arr[g], arr[g - 1]] = [arr[g - 1], arr[g]];
    return arr.join(" ").replace(new RegExp(`(\\d+\\s){${n - 1}}\\d+\\s`, 'g'), match => match.trim() + "/");
}

/*

USE CODE BELLOW IF YOU NEED BETTER RANDOM (IMPLEMENT IT YOURSELF)
// Function to generate a secure random integer between min (inclusive) and max (exclusive)
    function getRandomInt(min, max) {}

function getScrambleCustomRNG(n) {
    let arr = Array.from({ length: n * n - 1 }, (_, i) => i + 1), parity = false;
    for (let i = 0; i < n * n - 3; i++) {
        let t = getRandomInt(i, n * n - 1);
        if (i !== t) parity = !parity;
        [arr[i], arr[t]] = [arr[t], arr[i]];
    }
    if (parity) [arr[n * n - 3], arr[n * n - 2]] = [arr[n * n - 2], arr[n * n - 3]];
    arr.push(0);
    let g = n * n - 1, d = getRandomInt(0, n), r = getRandomInt(0, n);
    for (let i = 0; i < d; i++, g -= n) [arr[g], arr[g - n]] = [arr[g - n], arr[g]];
    for (let i = 0; i < r; i++, g -= 1) [arr[g], arr[g - 1]] = [arr[g - 1], arr[g]];
    return arr.join(" ").replace(new RegExp(`(\\d+\\s){${n - 1}}\\d+\\s`, 'g'), match => match.trim() + "/");
}
*/
