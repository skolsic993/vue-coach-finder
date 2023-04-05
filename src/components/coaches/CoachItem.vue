<template>
    <div class="gap-y-4 lg:grid lg:grid-cols-1 lg:gap-y-8 relative shadow-md py-2 px-4 rounded-md">
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg mb-2">
            <h3 class="mt-4 text-2xl text-gray-700 font-medium">{{ fullName }}</h3>
            <h4 class="mt-4 w-full text-medium font-medium text-green-500 truncate">${{ rate }}/hour</h4>
            <div class="flex">
                <span v-for="area in areas" :key="area" class="text-sm text-gray-500 font-medium flex mr-3">
                    {{ area }}
                </span>
            </div>
            <div class="flex mt-4">
                <router-link
                    :to="coachContactLink"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ease-in-out duration-300"
                >
                    Contact
                </router-link>
                <router-link
                    :to="coachDetailsLink"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ease-in-out duration-300"
                >
                    View Details
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoachItem',
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        },
        coachContactLink() {
            return `/coaches/${this.id}/contact`
        },
        coachDetailsLink() {
            return `/coaches/${this.id}`
        },
    },
}
</script>

<style lang="scss" scoped></style>
