<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import DataGrid from '../lib/components/DataGrid.svelte';
</script>

<Meta
    title="Heartbeat/DataGrid"
    component={DataGrid}
    argTypes={{
        onClick: {action: 'onClick'},
        onClose: {action: 'onClose'}
    }}
/>

<Template let:args>
    <DataGrid {...args} on:click={args.onClick} />
</Template>

<Story
    name="Default"
    args={{
        data: [
            {
                id: 'sbzkb-zqaaa-aaaaa-aaaiq-cai',
                memory_in_mb: 0,
                cycles_balance: 1000000000000,
                name: 'ImageAssets',
                time: 1672054718331547000,
                heap_in_mb: 0
            },
            {
                id: 'qvhpv-4qaaa-aaaaa-aaagq-cai',
                memory_in_mb: 0,
                cycles_balance: 3100000000000,
                name: 'Explore',
                time: 1672054718331547000,
                heap_in_mb: 0
            },
            {
                id: 'q3fc5-haaaa-aaaaa-aaahq-cai',
                memory_in_mb: 1,
                cycles_balance: 2100000000000,
                name: 'FavoriteMain',
                time: 1672054718331547000,
                heap_in_mb: 0
            }
        ],
        columns: ['id', 'time', 'name', 'cycles_balance', 'memory_in_mb', 'heap_in_mb']
    }}
/>
