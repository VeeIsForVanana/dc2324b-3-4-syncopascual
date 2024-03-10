import { afterEach, beforeEach, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import WonkyButton from './WonkyButton.svelte';

const original = Math.random;
beforeEach(() => {
    Math.random = () => 0.1;
});
afterEach(() => {
    Math.random = original;
});

/** @param {number} n */
function* range(n) {
    for (let i = 0; i < n; ++i) yield i;
}

it('should render the correct fizzbuzz with props', async () => {
    render(WonkyButton, { value: 1 });
    const button  = screen.getByRole('button');
    expect(button.textContent).toStrictEqual('1');

    for (const _ of range(2)) await fireEvent.click(button);
    expect(button.textContent).toStrictEqual('Fizz 3');

    for (const _ of range(2)) await fireEvent.click(button);
    expect(button.textContent).toStrictEqual('Buzz 5');

    for (const _ of range(10)) await fireEvent.click(button);
    expect(button.textContent).toStrictEqual('FizzBuzz 15');
});
