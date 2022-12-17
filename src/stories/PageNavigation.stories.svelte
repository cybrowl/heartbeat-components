<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import PageNavigation from '../lib/components/PageNavigation.svelte';
</script>

<Meta
    title="Heartbeat/PageNavigation"
    component={PageNavigation}
    argTypes={{
        onClick: {action: 'onClick'},
        names: {control: 'object'}
    }}
/>

<Template let:args>
    <PageNavigation {...args} on:click={args.onClick} />
</Template>

<Story
    name="Canisters Selected"
    args={{
        navItems: [{name: 'Canisters', href: '', isSelected: true}]
    }}
/>
