import { expect, it } from 'vitest';
import createStore from '$lib';
import { get } from 'svelte/store';

it('should use arguments as default states', () => {
    const { darkMode, fontSize } = get(createStore({ darkMode: false, fontSize: 16 }));
    expect(darkMode).toStrictEqual(false);
    expect(fontSize).toStrictEqual(16);
});
