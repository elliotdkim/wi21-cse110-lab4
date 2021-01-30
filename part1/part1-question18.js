for (let key in statistics) {
    // Property starts with letter r
    if (key.charAt(0) == "r") {
        console.log(statistics.key);
    }
    // Value of property is odd
    else if (statistics.key / 2 != 0) {
        console.log(statistics.key);
    }
}