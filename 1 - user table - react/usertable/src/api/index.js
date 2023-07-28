/* The line `import Chance from "chance";` is importing the `Chance` module from the "chance" package.
This package provides a library for generating random data in JavaScript. */
import Chance from "chance";

 const chance = Chance();
export const fakeUserData = () => {
    console.log(chance.name({middle: true}));
return chance.name({middle: true})
}
