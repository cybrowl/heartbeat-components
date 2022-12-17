<script>
    import PageNavigation from '../components/PageNavigation.svelte';

    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
</script>

<main>
    <html lang="en" class="dark">
        <body class="body">
            <div class="wrapper">
                <div class="navItems">
                    <PageNavigation navItems={[{name: 'Canisters', href: '', isSelected: true}]} />
                </div>
            </div>
        </body>
    </html>
</main>

<style>
    .body {
        @apply dark:bg-backdrop h-screen;
    }
    .wrapper {
        @apply hidden lg:grid grid-cols-12 gap-y-2 relative;
    }
    .navItems {
        @apply col-start-2 col-end-12 row-start-1 row-end-2;
    }
</style>
