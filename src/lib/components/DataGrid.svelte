<script>
    import {createEventDispatcher} from 'svelte';

    export let data = [];
    export let columns = [];

    const dispatch = createEventDispatcher();

    function itemClick(column, row) {
        dispatch('itemClick', {column, row});
    }
</script>

<table>
    <tr>
        {#each columns as column}
            <th>
                {column}
            </th>
        {/each}
    </tr>
    {#each data as row}
        <tr>
            {#each columns as column}
                {#if column === 'id'}
                    <td
                        class="idColumn"
                        on:click={() => itemClick(column, row)}
                        on:keypress={() => console.log('key pressed')}>{row[column]}</td
                    >
                {:else}
                    <td on:click={() => itemClick(column, row)} on:keypress={() => console.log('key pressed')}
                        >{row[column]}</td
                    >
                {/if}
            {/each}
        </tr>
    {/each}
</table>

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    td,
    th {
        border: 1px solid #444;
        color: #b6affc;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #333;
    }

    tr:nth-child(odd) {
        background-color: #222;
    }

    th {
        background-color: #555;
        color: white;
    }

    .idColumn {
        @apply cursor-pointer;
    }
</style>
