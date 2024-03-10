import { expect, it } from 'vitest';
import createStore from '$lib';
import { get } from 'svelte/store';

it('should toggle darkMode and reset darkMode to default', () => {
    const store = createStore({ darkMode: false, fontSize: 16 });
    expect(get(store)).toStrictEqual({ darkMode: false, fontSize: 16 });

    store.toggleDarkMode();
    expect(get(store)).toStrictEqual({ darkMode: true, fontSize: 16 });

    store.reset();
    expect(get(store)).toStrictEqual({ darkMode: false, fontSize: 16 });

    store.toggleDarkMode();
    expect(get(store)).toStrictEqual({ darkMode: true, fontSize: 16 });
});
