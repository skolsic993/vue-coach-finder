<template>
    <section>
        <div>
            <h3 class="mt-4 text-2xl text-gray-700 font-medium">{{ fullName }}</h3>
            <h4 class="mt-4 w-full text-medium font-medium text-green-500 truncate">${{ rate }}/hour</h4>
        </div>
    </section>
    <section>
        <div>
            <h3 class="mt-4 text-2xl text-gray-700 font-medium">Interested? Reach out now!</h3>
            <router-link
                :to="coachContactLink"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ease-in-out duration-300"
            >
                Contact
            </router-link>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'CoachDetail',
}
</script>

<style lang="scss" scoped></style>
