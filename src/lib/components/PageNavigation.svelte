<script>
    import {createEventDispatcher} from 'svelte';
    export let navItems = [];
    const dispatch = createEventDispatcher();

    function onClick(event) {
        dispatch('click', event);
    }
</script>

<div class="pageNav">
    <nav class="nav">
        <a href="/" class="logo">Heartbeat</a>
        {#each navItems as item}
            <a
                class="item"
                href={'/' + item.href}
                class:nav-item-selected={item.isSelected === true ? 'selected' : ''}
                on:click={onClick}
                on:keypress={e => {
                    //TODO: need to design how this will work A11y
                }}
                >{item.name}
            </a>
        {/each}
    </nav>
    <slot />
</div>

<style>
    .pageNav {
        @apply flex flex-row justify-between items-center my-10;
    }
    .logo {
        @apply mr-12 text-4xl font-bold text-white;
    }
    .item {
        @apply font-sans font-bold text-white no-underline mr-8;
    }
    .nav-item-selected {
        color: #afe1af;
    }
    .logo {
        @apply flex flex-row items-center;
    }
    .nav {
        @apply flex flex-row items-center;
    }
</style>
