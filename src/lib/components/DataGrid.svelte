<script>
    export let data = [];
    export let columns = [];
</script>

<table>
    <tr>
        {#each columns as column}
            <th on:resize={e => (e.target.style.width = `${e.target.offsetWidth}px`)}>
                {column}
            </th>
        {/each}
    </tr>
    {#each data as row}
        <tr>
            {#each columns as column}
                <td>{row[column]}</td>
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
</style>
