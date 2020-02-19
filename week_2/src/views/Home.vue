<template>
    <div>
        <h2 class="text-center">Home Page</h2>
        <p>{{$route.name}}</p>
        <List v-model="fruits" />
    </div>
</template>

<script>
    import List from "../components/List";
    export default {
        name: "Home",
        components: {List},
        data: () => ({
            fruits: [
                { name: 'Apple', type:'organic'},
                { name: 'Banana', type:'organic'},
                { name: 'Orange', type:'organic'},
                { name: 'Strawberry', type:'organic'},
            ]
        }),
        methods: {
            changeItem(){
                this.items.push(this.items[1])
            }
        }
    }
</script>

<style scoped>

</style>