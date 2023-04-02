<template>
    <DefaultLayout>
        <ul v-if="hasCoaches">
            <li v-for="coach in filteredCoaches" :key="coach.id">
                {{ coach.firstName }}
            </li>
        </ul>
        <h3 v-else>No coaches found!</h3>
    </DefaultLayout>
</template>

<script lang="ts">
import DefaultLayout from './../../layout/DefaultLayout.vue'

export default {
    name: 'CoachesList',
    components: {
        DefaultLayout,
    },
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches']
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']
        },
    },
}
</script>

<style lang="scss" scoped></style>
