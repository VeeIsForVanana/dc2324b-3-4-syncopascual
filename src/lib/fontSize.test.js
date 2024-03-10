import { expect, it } from 'vitest';
import createStore from '$lib';
import { get } from 'svelte/store';

it('should increment and decrement fontSize by 4 and reset to default', async () => {
    const store = createStore({ darkMode: false, fontSize: 16 });
    expect(get(store)).toStrictEqual({ darkMode: false, fontSize: 16 });

    store.incrementFontSize();
    expect(get(store)).toStrictEqual({ darkMode: false, fontSize: 20 });
    store.incrementFontSize();
    expect(get(store)).toStrictEqual({ darkMode: false, fontSize: 24 });

    store.decrementFontSize();
    expect(get(store)).toStrictEqual({ darkMode: false, fontSize: 20 });

    store.reset();
    expect(get(store)).toStrictEqual({ darkMode: false, fontSize: 16 });

    store.decrementFontSize();
    expect(get(store)).toStrictEqual({ darkMode: false, fontSize: 12 });
});
