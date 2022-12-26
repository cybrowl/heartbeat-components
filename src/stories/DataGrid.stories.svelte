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
                cycles_balance: 3100000000000,
                memory_in_mb: 0,
                heap_in_mb: 0,
                name: 'Explore',
                time: 1672054626199920000,
                id: 'qvhpv-4qaaa-aaaaa-aaagq-cai'
            }
        ],
        columns: ['id', 'time', 'name', 'cycles_balance', 'memory_in_mb', 'heap_in_mb']
    }}
/>
