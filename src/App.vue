<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const user = ''
const stack = computed(() => {
    return store.state.stack
})
</script>

<template>
    <router-view></router-view>
</template>

<style lang="scss"></style>
