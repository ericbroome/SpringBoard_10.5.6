/* Takes a variable number of arguments and filters out odd numbers */
const filterOutOdds = (...args) => {
    return args.filter(arg => arg % 2 === 0);
}

/* Takes a variable number of arguments and returns the smallest number */
const findMin = (...args) => {
    return Math.min(...args);
}

/* Takes two objects and returns a new object which contains all of the keys and values of the first and second object */
const mergeObjects = (obj1, obj2) => {
    return ({...obj1, ...obj2});
}

/* Takes an array and a variable number of args returns a new array after appending the new items then doubling all items */
const doubleAndReturnArgs = (arr, ...args) => {
    return [...arr, ...args].map(element => element * 2);
}

/* remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
    let index = Math.floor(Math.random() * items.length);
    let result = [...items];
    result.splice(index, 1);
    return result;
};

/* Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {
    return [...array1, ...array2];
};

/* Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    let result = {...obj};
    result[key] = val;
    return result;
};

/* Return a new object with a key removed. */
const removeKey = (obj, key) => {
    let result = {...obj};
    delete result[key];
    return result;
};

/* Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({...obj1, ...obj2});

/* Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    let result = {...obj};
    result[key] = val;
    return result;
};