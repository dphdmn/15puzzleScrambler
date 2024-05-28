function evenPermutation(n) {
    if (n <= 2) throw new Error("n must be greater than 2");
    let arr = Array.from({ length: n }, (_, i) => i + 1), parity = false;

    for (let i = 0; i < n - 2; i++) {
        let t = Math.floor(Math.random() * (n - i)) + i;
        if (i !== t) parity = !parity;
        [arr[i], arr[t]] = [arr[t], arr[i]];
    }
    if (parity) [arr[n - 2], arr[n - 1]] = [arr[n - 1], arr[n - 2]];
    return arr;
}

function getScramble(n) {
    if (n <= 1) throw new Error("n must be greater than 1");
    let arr = [...evenPermutation(n * n - 1), 0], g = n * n - 1;
    let d = Math.floor(Math.random() * n), r = Math.floor(Math.random() * n);

    for (let i = 0; i < d; i++, g -= n) [arr[g], arr[g - n]] = [arr[g - n], arr[g]];
    for (let i = 0; i < r; i++, g -= 1) [arr[g], arr[g - 1]] = [arr[g - 1], arr[g]];

    return arr.join(" ").replace(new RegExp(`(\\d+\\s){${n - 1}}\\d+\\s`, 'g'), match => match.trim() + "/");
}
