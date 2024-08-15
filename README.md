# To Do App

## Activity Directions

**GOAL**: In this exercise, you will create a To-Do list, with the ability to add/remove items. The following components have been provided:

- Edit the pre-existing `ToDo` component in `./src/ToDo.js`.
- Edit the pre-existing `App` component in `./src/App.js`.

**Display Array of Todos**

1. There is a pre-existing array of `originalTodos` in the `App` component.
2. Initialize a new piece of state, naming it `[todos, setTodos]` with a `useState` hook (you'll have to import `useState` above). Set the initial value to `originalTodos` from above.
3. In the `#todos` section of the JSX, `.map()` over the todos and display the title of each todo in a div.
4. Run your code.
5. View your application. You should see a list of todos!
6. Run the tests. **This should PASS one test**.

\*_ToDo Component_

1. Move your `todo.title` from the above step into the pre-existing `ToDo` component.
2. The `ToDo` component should accept a prop, `todo`, and render the `props.todo.title` in the div.
3. Render the `<ToDo/>` component in the `<App/>` component, passing in `todo={todo}` as a prop.
4. In the `ToDo` component, on the div, conditionally add the `className=”complete”` if the `todo.complete` is true.
5. Run your code.
6. View your application. There should be a StrikeThrough on any complete todos.
7. Run the tests. **This should PASS another test (total of 2 passing)**.

**Form State**

1. In the `App` component, create 2 new pieces of state, `title` (set initially to `''`) and `complete` (set initially to `false`)
2. For each input (text and checkbox), hook up the `onChange` and `value` (or checked) properties.
3. Run your code.
4. View your application. **There isn't any visible difference on the app, but you should** `console.log` **the value of** `title` **and** `complete` **right under the** `useState`**, to confirm the values whenever the user types in the input or checks the box.**

**Submit Handler**

1. In the `App` component, write a `handleSubmit` function and hook it up to the `onSubmit` prop of the form.
2. Prevent the default form behavior
3. Now, `setTodos` and add the newest todo to the array. **Remember that React expects a completely new value**, replacing `todos` with a new array. So spread in the current todos array and add the new todo in the array.
4. The final step: We should `setTitle` and `setComplete` to their original values, so the form gets cleared out.
5. Run your code.
6. View your application. If a user types in the input and clicks submit, the new todo gets added to the list below.
7. Run the tests. **This should PASS the third and final test**.
