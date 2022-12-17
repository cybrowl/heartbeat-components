<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Button from '../lib/components/Button.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
    title="Heartbeat/Button"
    component={Button}
    argTypes={{
        onClick: {action: 'onClick'},
        label: {control: 'text'},
        primary: {control: 'boolean'},
        primaryDisabled: {control: 'boolean'},
        secondaryDisabled: {control: 'boolean'},
        size: {
            control: {type: 'select'},
            options: ['medium']
        }
    }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <Button {...args} on:click={args.onClick} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
    name="Primary"
    args={{
        primary: true,
        label: 'Button'
    }}
/>

<Story
    name="Primary/Disabled"
    args={{
        label: 'Button',
        primary: true,
        primaryDisabled: true
    }}
/>

<Story
    name="Secondary"
    args={{
        secondary: true,
        label: 'Button'
    }}
/>

<Story
    name="Secondary/Disabled"
    args={{
        label: 'Button',
        secondary: true,
        secondaryDisabled: true
    }}
/>

<Story
    name="Tertiary"
    args={{
        tertiary: true,
        label: 'Button'
    }}
/>

<Story
    name="Tertiary/Disabled"
    args={{
        label: 'Button',
        tertiary: true,
        tertiaryDisabled: true
    }}
/>

<Story
    name="Destroy"
    args={{
        destroy: true,
        label: 'Button'
    }}
/>

<Story
    name="Destroy/Disabled"
    args={{
        label: 'Button',
        destroy: true,
        destroyDisabled: true
    }}
/>
