<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Notification from '../lib/components/Notification.svelte';
</script>

<Meta
    title="Heartbeat/Notification"
    component={Notification}
    argTypes={{
        onClick: {action: 'onClick'}
    }}
/>

<Template let:args>
    <Notification {...args}>
        <p>Moving snaps to</p>
        <p><strong><u>UX/UI Mobile</u></strong></p>
    </Notification>
</Template>

<Story
    name="Primary"
    args={{
        is_visible: true
    }}
/>
