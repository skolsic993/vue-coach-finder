<template>
    <TheNavbar />
    <div className="mx-auto max-w-7xl py-6 sm:px-4">
        <slot></slot>
    </div>
</template>

<script>
import TheNavbar from './../shared/TheNavbar.vue'

export default {
    name: 'DefaultLayout',
    components: {
        TheNavbar,
    },
}
</script>
