<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import dayjs from 'dayjs';

    import CanisterChart from '../lib/components/CanisterChart.svelte';
    import metrics_data from './data/metrics.json';

    // NOTE: all data must be specific for each canister
    function transform_for_bar_chart(metrics_data) {
        function convert_timestamp_to_date(timestamp) {
            const dt = dayjs(timestamp / 1000000).toISOString();
            return dt;
        }

        let metrics_converted = metrics_data.map(metric => {
            let all_metrics = [];

            // loop over metric.metrics
            for (const [key, value] of metric.metrics) {
                // explore key cycles_balance
                if (key !== 'cycles_balance') {
                    all_metrics.push({
                        group: key,
                        date: convert_timestamp_to_date(metric.time),
                        value: value
                    });
                }
            }

            return all_metrics;
        });

        return metrics_converted.flat();
    }

    function transform_for_meters(metrics_data) {
        let all_metrics = [];

        const last_elem = metrics_data[metrics_data.length - 1];

        for (const [key, value] of last_elem.metrics) {
            if (key == 'memory_in_mb' || key == 'heap_in_mb') {
                all_metrics.push({
                    group: key,
                    value: value
                });
            }
        }

        return all_metrics;
    }

    function get_cycles_metric(metrics_data) {
        const last_elem = metrics_data[metrics_data.length - 1];

        for (const [key, value] of last_elem.metrics) {
            if (key == 'cycles_balance') {
                return {
                    group: key,
                    value: value
                };
            }
        }
    }

    const last_elem = metrics_data[metrics_data.length - 1];

    console.log('last_elem(): ', last_elem);
</script>

<Meta
    title="Heartbeat/CanisterChart"
    component={CanisterChart}
    argTypes={{
        onClick: {action: 'onClick'},
        title: {control: 'text'},
        metrics_data: {control: 'object'}
    }}
/>

<Template let:args>
    <CanisterChart {...args} on:click={args.onClick} />
</Template>

<Story
    name="CanisterChart"
    args={{
        title: 'Canister Metrics',
        name: last_elem.name,
        child_canister_id: last_elem.child_canister_id,
        parent_canister_id: last_elem.parent_canister_id,
        metrics_data: transform_for_bar_chart(metrics_data),
        meters_data: transform_for_meters(metrics_data),
        cycles_data: get_cycles_metric(metrics_data)
    }}
/>
