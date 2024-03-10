# Assignment 2: Wonky Stores

## Part 1:  More Wonky Buttons

Take your `WonkyButton.svelte` from the previous assignment. This time, we create a new component called `Wonk.svelte` that internally contains five instances of the `WonkyButton.svelte` component. Now we play the same game as last week—with a twist!

Let `sum` be the sum of all the `value` props of the internal `WonkyButton.svelte` components inside `Wonk.svelte`.

* If `sum` is divisible by 3, emit the event `fizz` with the `sum` as its payload.
* If `sum` is divisible by 5, emit the event `buzz` with the `sum` as its payload.
* If `sum` is divisible by 3 and 5, only emit the event `fizzbuzz` with the `sum` as its payload.
* Otherwise, do nothing.

> [!IMPORTANT]
> You will only need to edit two files in this part: `src/routes/Wonk.svelte` and `src/routes/WonkyButton.svelte`. Keep the other files untouched.

## Part 2: Parametrized Custom Store

In this part, you will be implementing your own [custom store](https://learn.svelte.dev/tutorial/custom-stores) that saves some user preferences. The first setting (`darkMode`) remembers whether or not the user prefers dark mode. The second setting (`fontSize`) remembers the user's preferred font size.

> [!NOTE]
> You can check out the JSDoc types and the test code for clarifications regarding the assignment specifications.


Edit the contents of `src/lib/index.js` and implement a factory function that returns a [writable store](https://learn.svelte.dev/tutorial/writable-stores) that satisfies the following interface below. Note that the factory function must accept a single argument: a `state` object that represents the default values of the settings store.

1. The returned store must contain an object with properties `darkMode` (`boolean`) and `fontSize` (`number`).
1. The default value of the custom store must be in accordance with the provided arguments to the factory function.
1. The custom store must have a `toggleDarkMode` method that toggles the `darkMode` property.
1. The custom store must have a `incrementFontSize` method that increments the `fontSize` property by `4`.
1. The custom store must have a `decrementFontSize` method that decrements the `fontSize` property by `4`.
1. The custom store must have a `reset` method that resets the current value in the custom store back to its default value (as provided by the arguments to the factory function).

[!IMPORTANT] You will only need to edit `src/lib/index.js` for this part. However, feel free to create an additional component that you can import to `src/routes/+page.svelte` for testing your custom store. 