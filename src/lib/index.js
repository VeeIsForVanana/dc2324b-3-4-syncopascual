import { writable } from 'svelte/store';
/**
 * @template T
 * @typedef {import('svelte/store').Writable<T>} Writable
 */

/**
 * @typedef Settings
 * @property {boolean} darkMode Whether dark mode is turned on or off.
 * @property {number} fontSize Current font size (in `pt`).
 */

/**
 * @typedef SettingsStore
 * @property {Writable<Settings>['subscribe']} subscribe Subscribes to the custom Svelte store.
 * @property {() => void} toggleDarkMode Toggles the dark mode on and off.
 * @property {() => void} incrementFontSize Increments the font size by 4.
 * @property {() => void} decrementFontSize Decrements the font size by 4.
 * @property {() => void} reset Resets the store back to the original default value.
 */

/**
 * @param {Settings} state The default settings of the store.
 * @returns {SettingsStore}
 */
export default function(state) {
    const { subscribe, set, update } = writable(state);
    const original = {
        darkMode: state.darkMode,
        fontSize: state.fontSize
    }
    
    return {
        subscribe,
        toggleDarkMode: () => update((state) => {state.darkMode = !state.darkMode; return state}),
        incrementFontSize: () => update((state) => {state.fontSize += 4; return state}),
        decrementFontSize: () => update((state) => {state.fontSize -= 4; return state}),
        reset: () => set(original)
    }
}