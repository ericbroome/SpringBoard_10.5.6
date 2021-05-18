
describe("filterOutOdds", () => {
    it("Takes a variable number of arguments and filters out odd numbers", () => {
        let args = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(filterOutOdds(...args)).toEqual([2, 4, 6, 8]);
    })
});

describe("findMin", () => {
    it("Takes a variable number of arguments and returns the smallest number", () => {
        let args = [17, 25, 4, 9];
        expect(findMin(...args)).toEqual(4);
    })
});

describe("mergeObjects", () => {
    it("Takes two objects and returns a new object which contains all of the keys and values of the first and second object", () => {
        let obj1 = {a:1, b:2};
        let obj2 = {c:3, d:4};
        expect(mergeObjects(obj1, obj2)).toEqual({a:1, b:2, c:3, d:4});
    })
});

describe("doubleAndReturnArgs", () => {
    it("Takes an array and a variable number of args returns a new array after appending the new items then doubling all items", () => {
        let arr = [1, 2, 3, 4];
        let args = [5, 6, 7, 8];
        expect(doubleAndReturnArgs(arr, ...args)).toEqual([2, 4, 6, 8, 10, 12, 14, 16]);
    })
});

describe("removeRandom", () => {
    it("Remove a random element in the items array and return a new array without that item", () => {
        let items = [1, 2, 3, 4];
        expect(removeRandom(items).length).toEqual(items.length - 1);

    })
});

describe("removeKey", () => {
    it("Return a new object with a key removed", () => {
        let obj = {a:1, b:2, c:3};
        expect(removeKey(obj, 'b')).toEqual({a:1, c:3});
    })
});

describe("extend", () => {
    it("Return a new array with every item in array1 and array2", () => {
        let array1 = [1, 2, 3, 4];
        let array2 = [5, 6, 7, 8];
        expect(extend(array1, array2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);

    })
});

describe("addKeyVal", () => {
    it("Return a new object with all the keys and values from obj and a new key/value pair", () => {
        let obj = {a:1, b:2, c:3};
        expect(addKeyVal(obj, 'd', 4)).toEqual({a:1, b:2, c:3, d:4});

    })
});

describe("combine", () => {
    it("Combine two objects and return a new object", () => {
        let obj1 = {a:1, b:2};
        let obj2 = {c:3, d:4};
        expect(combine(obj1, obj2)).toEqual({a:1, b:2, c:3, d:4});
    })
});

describe("update", () => {
    it("Return a new object with a modified key and value", () => {
        let obj = {a:1, b:2, c:3};
        expect(update(obj, 'b', -2)).toEqual({a:1, b:-2, c:3});
    })
});
