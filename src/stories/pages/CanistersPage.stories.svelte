<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';

    import CanistersPage from '../../lib/pages/CanistersPage.svelte';
</script>

<Meta
    title="Pages/CanistersPage"
    component={CanistersPage}
    argTypes={{
        onClick: {action: 'onClick'}
    }}
/>

<Template let:args>
    <CanistersPage {...args} />
</Template>

<Story name="CanistersPage / Memory" args={{}} />
