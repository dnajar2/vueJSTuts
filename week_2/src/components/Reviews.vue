<template>
    <span class="d-block" style="width: 80px">
        <b-icon icon="star-fill" variant="warning" v-for="n in reviews" :key="n"></b-icon>
    </span>

</template>

<script>
    export default {
        name: "Reviews",
        props: ['reviews']
    }
</script>

<style scoped>

</style>