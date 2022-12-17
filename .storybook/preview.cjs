import {themes} from '@storybook/theming';
import '../src/tailwind.css';

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    darkMode: {
        // Override the default dark theme
        dark: {
            ...themes.dark,
            appBg: '#32313D'
        },
        // Override the default light theme
        light: {...themes.normal, appBg: 'white'},
        stylePreview: true,
        current: 'dark'
    },
    backgrounds: {
        default: 'heartbeat',
        values: [
            {
                name: 'heartbeat',
                value: '#1B1A22'
            }
        ]
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};
