<template>
    <div class="position-fixed" style="right: 15px; top: 55px; z-index: 999;">
        <div class="d-flex justify-content-end" v-if="showShoppingChart">
            <b-card header="Cart Items" class="text-left">
                <b-card-text v-for="(product, idx) in cartProducts" :key="idx">
                    <img :src="product.imgUrl" alt="" class="img-thumbnail" style="max-width: 50px">
                    {{product.name}} | Price: {{product.price | price}} <button class="btn btn-danger btn-sm" @click="$emit('remove', idx)">X</button>
                    <hr v-if="cartProducts.length > 1">
                </b-card-text>
                <div class="d-flex justify-content-between">
                    <b-button variant="success" @click="showCheckOutPopUp">Check Out</b-button>
                    <b-card-text class="text-right font-weight-bolder">Total: {{totals | price}}</b-card-text>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cart",
        props: ['cartProducts','showShoppingChart'],
        computed: {
            totals() {
                let totals = 0
                if (this.cartProducts.length) {
                    totals = this.cartProducts.reduce((total, item) => item.price + total, 0)
                }
                return totals
            }
        },
        methods: {
            showCheckOutPopUp(){
                this.$emit('showCheckOutPopUp')
            }
        },
        filters: {
            price(val){
                return `$${(val /100).toFixed(2)}`

            }
        }
    }
</script>

<style scoped>

</style>