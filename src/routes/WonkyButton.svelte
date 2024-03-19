<script>
	export let value = 0;
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function bruh() {
        dispatch('custom_event')
    }

	function increment() {
		value += Math.floor(Math.random() * 10);
	}
</script>

<button on:click={increment} on:click={bruh}>
	{#if value % 15 == 0}
		FizzBuzz {value.toString()}
	{:else if value % 3 == 0}
		Fizz {value}
	{:else if value % 5 == 0}
		Buzz {value.toString()}
	{:else}
		{value.toString()}
	{/if}
</button>
