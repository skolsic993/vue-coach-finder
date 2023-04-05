<template>
    <DefaultLayout>
        <ul v-if="hasCoaches">
            <div class="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8">
                <li v-for="coach in filteredCoaches" :key="coach.id">
                    <CoachItem :id="coach.id" :first-name="coach.firstName" :last-name="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas" />
                </li>
            </div>
        </ul>
        <h3 v-else>No coaches found!</h3>
    </DefaultLayout>
</template>

<script lang="ts">
import CoachItem from '../../components/coaches/CoachItem.vue'
import DefaultLayout from './../../layout/DefaultLayout.vue'

export default {
    name: 'CoachesList',
    components: {
        DefaultLayout,
        CoachItem,
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
