# Calculator

## Activity Directions

**GOAL**: We are going to build a calculator application that can perform basic addition using state and event handlers.

**Create State and Render Buttons**

**In** `App.js`:

1. Import `useState` from the React library.
2. Create a state of `calc` and a state setter function called `setCalc`. Using the `useState` hook, set `calc` equal to an object with the following key/value pairs:
   - `sign`: Will store the current sign pressed on the calculator (`+`, `-`, etc.). Initialize it as an empty string.
   - `num`: Will store the current number the user is typing that will be displayed on the screen. Initialize it with the number `0`.
   - `res`: Will store the previous value typed. For example, if we want to do 4 + 6, then `res` would store 4 as we type the next value. Initialize it with the number `0`.
3. A `<Screen/>` component is already rendered for you, give it a prop of `value` and pass it the value of `calc.num`.
4. An array of `btnValues` has been declared that represents each of the buttons we want rendered. Inside `<div className = "buttonBox">`, map through `btnValues` array and return a `<Button/>` element with a prop of `value` set to the array value. You should see empty buttons appear.
5. The equals sign should be styled a little differently. Inside the `.map()` function, give a `className` prop of `"equals"` if the button value is `=`, otherwise set it equal to an empty string.

```javascript
<Button
  className={arrayValue === "SOMETHING" ? "classIfTrue" : "classIfFalse"}
/>
```

**In** `Screen.js`:

1. Destructure the `value` prop and replace `VALUE_HERE` with the current value. You should see the number 0 displayed.

**In** `Button.js`:

1. Destructure the `value` and `className` props.
2. Replace `VALUE_HERE` with the current value. You should see all the buttons appear.

**In** `App.js`:

1. Inside the `<button>` element, add a `className` equal to the value stored in the `className` prop. The equals sign should be formatted slightly larger and be colored orange.

numClickHandler()

GOAL: We need to handle as they click on each number and update state as a result. For example, if they press 1 then 3 then 8, the screen should update to show 138.

In App.js:

Declare a function called numClickHandler that accepts the event as an argument.

Prevent the default behavior.

Get the value that was typed by calling event.target.value and store it in a variable called typedValue.

Call setCalc() and do the following:

Spread the previous value of calc into the object.

The value of num is dependent on a few conditions:

If the current calc.num is 0 and the value typed is "0", then num is equal to "0".

If the current calc.num is 0, then num is equal to the value typed. This will prevent a long string of zeros from being printed.

If the previous condition is false, then the new value of calc.num should be calc.num + typedValue.

Set res based on the following conditions:

If there is no calc.sign, then set res to 0.

Otherwise, set res to calc.sign. This will ensure that the current math operand is maintained as you type!

Inside the map function that returned the <Button/> elements, add a prop of onClick and pass it the numClickHandler function.

In Button.js:

Add onClick to the destructured props.

Inside the <button> element, add an onClick event and pass it the onClick prop.

Your numbers should now display on the screen as you press the buttons!

signClickHandler()

PROBLEM: When we click on the operands they get added to the screen! We need to update the sign state when they press +, -, X, and /.

In App.js:

Create a function called signClickHandler that accepts the event as an argument.

Prevent the default behavior.

Get the value from the page (i.e. the sign) and store in a variable called typedSign

Call setCalc() and do the following:

Spread the previous value of calc into the object.

Set sign to the value of typedSign.

Set res to the value of calc.num.

Set num back to 0.

Inside the map function that returned the <Button/> elements onClick, check if the array value is equal to "+", "-", "X", or "/". If it does, then pass it the signClickHandler. Otherwise, pass it the numClickHandler.

The screen should now be able to accept a second number after you press the "+" sign.

equalsClickHandler()

PROBLEM: We need to get our answer when we press "=". We need a function to output the result of pressing the "=" sign.

In App.js:

Create a function called equalsClickHandler.

Do the following if calc.sign and calc.num are truthy:

Create a function called math that accepts a and b as parameters and returns the sum of these values. We are writing a function here so that the bonus exercises will be easier.

Outside the math function, but inside the if statement call setCalc and do the following:

Spread the previous value of calc in.

Set num equal to the result of calling math with the values of calc.res and calc.num. Be sure to pass both values into math as Numbers and set num to a String.

Set res to 0

Set sign back to "".

Inside the map function that returned the <Button/> elements onClick, check if the array value is equal to "=". If it does, then pass it the equalsClickHandler. Otherwise, pass it the correct handler based on previous logic.

You should be able to add two numbers together!

NOTE: The current program requires you to add two numbers and then press equal before typing the next + sign in order to get the correct response (e.g. 2 + 5 = 7 + 2 = 9 works, but 2 + 5 + 2 = 9 doesn’t work). You can fix this as part of the stretch problems!

Run your code.

View your application

Test your code.
