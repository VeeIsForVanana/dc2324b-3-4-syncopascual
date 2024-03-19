<script>
    import WonkyButton from './WonkyButton.svelte';
    import { createEventDispatcher } from 'svelte';
    
    let v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0;
    let values = [v1, v2, v3, v4, v5];
    const dispatch = createEventDispatcher();

    let sum;
    function handleSum() {
        sum = values[0] + values[1] + values[2] + values[3] + values[4];
        if (sum % 15 == 0) {
            dispatch('fizzbuzz', sum)
            //console.log('FIZZBUZZ')
        }
        else if (sum % 3 == 0) {
            dispatch('fizz', sum)
            //console.log('FIZZ')
        }
        else if (sum % 5 == 0) {
            dispatch('buzz', sum)
            //console.log('BUZZ')
        }
    }
</script>

<div>
    {#each values as v}
        <WonkyButton on:custom_event={handleSum} bind:value={v}/>
    {/each}
</div>
