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

it('should render the correct buttons with buzz triggers', async () => {
    const { component } = render(Wonk);
    const buzzTrigger = vi.fn();
    component.$on("buzz", buzzTrigger);

    const buttons  = screen.getAllByRole('button');
    await fireEvent.click(buttons[0]);
    expect(buttons[0].textContent).toStrictEqual('1');

    for (const _ of range(2)) await fireEvent.click(buttons[1]);
    expect(buttons[1].textContent).toStrictEqual('2');

    for (const _ of range(3)) await fireEvent.click(buttons[2]);
    expect(buttons[2].textContent).toStrictEqual('Fizz 3');
    expect(buzzTrigger, 'The buzz event must be emitted.').toHaveBeenCalledOnce();
    expect(buzzTrigger.mock.calls[0][0].detail, 'The sum passed to the 1st buzz event must be 5.').toEqual(5);

    for (const _ of range(15)) await fireEvent.click(buttons[3]);
    expect(buttons[3].textContent).toStrictEqual('FizzBuzz 15');
    expect(buzzTrigger.mock.calls[1][0].detail).toEqual(10);
    expect(buzzTrigger.mock.calls[2][0].detail).toEqual(20);
    expect(buzzTrigger).toBeCalledTimes(3); // 5 to 20 skipping 15s

    for (const _ of range(5)) await fireEvent.click(buttons[4]);
    expect(buttons[4].textContent).toStrictEqual('Buzz 5');
    expect(buzzTrigger.mock.calls[3][0].detail).toEqual(25);

    expect(buzzTrigger).toBeCalledTimes(4); // 5 to 25 (out of 26) skipping 15
});
