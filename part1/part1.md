# Lab 4, part 1
1. The length of `prices` would be printed to the console, because `i` is a function-level variable.
2. The last price in `prices` multiplied by `(1-discount)` would be printed to the console, because `i` is a function-level variable.
3. The last price in `discounted` would be printed to the console, because `finalPrice` is a function-level variable.
4. The function would return `[50, 100, 150]`, because each of the prices in `prices` would be multiplied by `0.5`, be multiplied by `100`, rounded to the nearest integer, then divided by `100`, then be stored in `discounted`, which is returned after all the prices are discounted.
5. There would be an error: `i` is not defined outside of the `for` loop.
6. There would be an error: `discountedPrice` is not defined outside of the `for` loop.
7. The last price in `discounted` would be printed to the console, because `finalPrice` is a function-level variable.
8. The function would return `[50, 100, 150]`, because each of the prices in `prices` would be multiplied by `0.5`, be multiplied by `100`, rounded to the nearest integer, then divided by `100`, then be stored in `discounted`, which is returned after all the prices are discounted.
9. There would be an error: `i` is not defined outside of the `for` loop.
10. There would be an error: `discountedPrice` is not defined outside of the `for` loop.
11. `0` would be printed to the console: the constant value `finalPrice` is set to `0`.
12. The function would return an empty array: the constant value `discounted` is set to `[]`.
13. Notations: 
    ```javascript
    // A.
    student.name
    // B.
    student["grad year"]
    // C.
    student.greeting
    // D.
    student["Favorite Teacher"].name
    // E.
    student.courseLoad[0]
    ```
14. Arithmetic:
    ```javascript
    // A.
    5   // '3' becomes a number 3
    // B.
    1   // '3' becomes a number 3
    // C.
    3   // null is converted to 0
    // D.
    3   // '3' becomes a number 3, null is converted to 0
    // E.
    4   // true is converted to 1
    // F.
    0   // false is converted to 0, null is converted to 0
    // G.
    NaN // "3" becomes a number 3, undefined is converted to NaN
    // H.
    NaN // "3" becomes a number 3, undefined is converted to NaN
    ```
15. Comparison:
    ```javascript
    // A.
    true    // '2' becomes a number 2
    // B.
    true    // '2' becomes a number 2, '12' becomes a number 12
    // C.
    true    // '2' becomes a number 2
    // D.
    false   // 2 and '2' are different types
    // E.
    false   // true is converted to 1
    // F.
    true    // Boolean(2) is an explicit conversion to true
    ```
16. The `==` operator converts the values to numbers first when comparing two values of different types, while `===` compares directly without type conversion.
17. `How are you?` gets printed, because boolean conversion happens in logical operators, in which any numerical value not equal to `0` becomes true
18. See [part1-question16.js](part1-question18.js)
19. The result would be `[6, 8, 10]`. For each value `i` in the array, `i`, along with `function` that returns its input times 2, is passed into the callback function (`doSomething`). `doSomething` then passes the number plus 2 into its callback function (`functino`), then returns the value that is returned. That value is then pushed into `newArr`. Essentially, for each value in the array, add 2 to the number, double it, then push it to a new array, then return that array.
20. See [part1-qustion20.js](part1-question20.js)
21. `1234`  