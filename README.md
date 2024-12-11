# Loose Equality Comparisons in JavaScript

This repository demonstrates a common pitfall in JavaScript: the unexpected behavior of loose equality (==) when comparing special values like NaN, 0, -0, null, and undefined.

The `bug.js` file contains a function that uses loose equality to compare two values.  The results are not always intuitive.

The `bugSolution.js` file shows how to use strict equality (===) to avoid these issues.

## Usage

1. Clone this repository.
2. Run `node bug.js` to see the unexpected results.
3. Run `node bugSolution.js` to see the corrected behavior.

## Explanation

Loose equality (==) performs type coercion before comparison, which can lead to unexpected results in certain cases.  Strict equality (===) does not perform type coercion and is generally preferred for reliability.  It directly compares the values and their types.