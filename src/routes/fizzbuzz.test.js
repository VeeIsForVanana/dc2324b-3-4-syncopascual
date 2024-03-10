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

it('should render the correct buttons with fizzbuzz triggers', async () => {
    const { component } = render(Wonk);
    const fizzbuzzTrigger = vi.fn();
    component.$on("fizzbuzz", fizzbuzzTrigger);

    const buttons  = screen.getAllByRole('button');
    await fireEvent.click(buttons[0]);
    expect(buttons[0].textContent).toStrictEqual('1');

    for (const _ of range(2)) await fireEvent.click(buttons[1]);
    expect(buttons[1].textContent).toStrictEqual('2');

    for (const _ of range(3)) await fireEvent.click(buttons[2]);
    expect(buttons[2].textContent).toStrictEqual('Fizz 3');

    for (const _ of range(15)) await fireEvent.click(buttons[3]);
    expect(fizzbuzzTrigger, 'The fizzbuzz event must be emitted.').toHaveBeenCalledOnce();
    expect(fizzbuzzTrigger.mock.calls[0][0].detail).toEqual(15);

    for (const _ of range(5)) await fireEvent.click(buttons[4]);
    expect(buttons[4].textContent).toStrictEqual('Buzz 5');
    expect(fizzbuzzTrigger).toBeCalledTimes(1); // 15 (out of 26)
});
