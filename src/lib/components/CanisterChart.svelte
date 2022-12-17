<script>
    import {BarChartSimple} from '@carbon/charts-svelte';
    import {MeterChart} from '@carbon/charts-svelte';

    import '@carbon/styles/css/styles.css';
    import '@carbon/charts/styles.css';

    export let child_canister_id = '';
    export let meters_data = [];
    export let metrics_data = [];
    export let cycles_data = {};
    export let name = '';
    export let parent_canister_id = '';
    export let title = '';
</script>

<div class="canisterChart">
    <BarChartSimple
        data={metrics_data}
        theme="g90"
        options={{
            title: `${title} : ${name}`,
            axes: {
                left: {
                    mapsTo: 'value'
                },
                bottom: {
                    mapsTo: 'date',
                    scaleType: 'time'
                }
            },
            bars: {
                maxWidth: 20
            },
            height: '500px'
        }}
    />
    <div class="canisterDetails">
        <span class="meters">
            {#each meters_data as meter_data}
                <MeterChart
                    theme="g90"
                    data={[meter_data]}
                    options={{
                        title: `${meter_data.group}`,
                        height: '130px',
                        meter: {
                            peak: 1800,
                            proportional: {
                                total: 2000,
                                unit: 'MB'
                            },
                            status: {
                                ranges: [
                                    {
                                        range: [0, 800],
                                        status: 'success'
                                    },
                                    {
                                        range: [800, 1800],
                                        status: 'warning'
                                    },
                                    {
                                        range: [1800, 2000],
                                        status: 'danger'
                                    }
                                ]
                            }
                        },
                        color: {
                            pairing: {
                                option: 2
                            }
                        }
                    }}
                />
            {/each}
        </span>
        <span class="canisterIds">
            <p>id: {child_canister_id}</p>
            <p>parent id: {parent_canister_id}</p>
            <p><span>cycles:</span> {cycles_data.value}</p>
        </span>
    </div>
</div>

<style>
    .canisterDetails {
        @apply flex mt-4;
    }
    .meters {
        @apply float-left w-1/2;
    }
    .canisterIds {
        @apply text-white float-right w-1/2 flex flex-col gap-y-2 font-sans ml-20;
    }
    .canisterIds span {
        @apply text-yellow-400;
    }
</style>
