import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import Wonk from './Wonk.svelte';

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

it('should render the correct buttons with fizz triggers', async () => {
    const { component } = render(Wonk);
    const fizzTrigger = vi.fn();
    component.$on("fizz", fizzTrigger);

    const buttons  = screen.getAllByRole('button');
    await fireEvent.click(buttons[0]);
    expect(buttons[0].textContent).toStrictEqual('1');

    for (const _ of range(2)) await fireEvent.click(buttons[1]);
    expect(buttons[1].textContent).toStrictEqual('2');
    expect(fizzTrigger, 'The fizz event must be emitted.').toHaveBeenCalledOnce();
    expect(fizzTrigger.mock.calls[0][0].detail, 'The sum passed to the 1st fizz event must be 3.').toEqual(3);

    // expect(component.emitted().fizz[0]).toEqual({detail: 3});

    for (const _ of range(3)) await fireEvent.click(buttons[2]);
    expect(buttons[2].textContent).toStrictEqual('Fizz 3');
    expect(fizzTrigger.mock.calls[1][0].detail).toEqual(6);
    expect(fizzTrigger).toBeCalledTimes(2);

    for (const _ of range(15)) await fireEvent.click(buttons[3]);
    expect(buttons[3].textContent).toStrictEqual('FizzBuzz 15');
    expect(fizzTrigger.mock.calls[2][0].detail).toEqual(9);
    expect(fizzTrigger.mock.calls[3][0].detail).toEqual(12);
    expect(fizzTrigger.mock.calls[4][0].detail).toEqual(18);
    expect(fizzTrigger.mock.calls[5][0].detail).toEqual(21);
    expect(fizzTrigger).toBeCalledTimes(6);

    for (const _ of range(5)) await fireEvent.click(buttons[4]);
    expect(buttons[4].textContent).toStrictEqual('Buzz 5');
    expect(fizzTrigger.mock.calls[6][0].detail).toEqual(24);

    expect(fizzTrigger).toBeCalledTimes(7); // 3 to 24 (out of 26) skipping 15
});
