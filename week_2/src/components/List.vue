<template>
    <div>
        <div v-for="(item, idx) in myFruits" :key="idx">
            {{item.name}} - {{item.type}}
        </div>
        <input v-model="fruit" type="text"> <br>
        <input type="radio" v-model="fruitType" value="non-organic"> Non Organic <input type="radio" v-model="fruitType" value="organic"> Organic
        <br>
        <button @click="addObj" :disabled="!enableButton">Add New Item</button>
    </div>

</template>

<script>
    export default {
        name: "List",
        props: ['value'],
        data:() => ({
            myFruits: '',
            fruit: '',
            fruitType: 'organic'
        }),
        watch: {
            myFruits(){
                this.fruit = ''
            }
        },
        created() {
            this.myFruits = this.value
        },
        computed:{
          enableButton(){
              return this.fruitType !== '' && this.fruit.length > 4
          }
        },
        methods: {
            addObj(){
                this.myFruits.push({name: this.fruit, type: this.fruitType})
                this.$emit('input', this.myFruits)
            }
        }
    }
</script>

<style scoped>

</style>