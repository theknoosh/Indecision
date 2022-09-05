console.log("utils.js is running");

export const square = (x) => x * x;

export  const add = (a, b) => a + b;

// export { square, add };
export const isAdult = (age) => {
    if (age > 17) {
        return true;
    } else {
        return false;
    }
}
