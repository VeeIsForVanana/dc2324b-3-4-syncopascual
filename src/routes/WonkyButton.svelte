<script>
	export let value = 0;

	function increment() {
		value += Math.floor(Math.random() * 10);
	}
</script>

<button on:click={increment}>
	{#if value % 15 == 0}
		FizzBuzz {value}
	{:else if value % 3 == 0}
		Fizz {value}
	{:else if value % 5 == 0}
		Buzz {value}
	{:else}
		{value}
	{/if}
</button>
