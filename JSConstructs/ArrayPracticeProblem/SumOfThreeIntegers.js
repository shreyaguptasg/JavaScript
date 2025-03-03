function findTriplets(arr) {
    let n = arr.length;
    let found = false;
    let result = [];

    for (let i = 0; i < n - 2; i++) {
        let seen = new Set();
        for (let j = i + 1; j < n; j++) {
            let x = -(arr[i] + arr[j]);
            if (seen.has(x)) {
                result.push([x, arr[i], arr[j]]);
                found = true;
            } else {
                seen.add(arr[j]);
            }
        }
    }

    return found ? result : "No triplets found";
}

let arr = [0, -1, 2, -3, 1, -2, 3];
console.log("Triplets that sum to zero:", findTriplets(arr));
