<template>
    <div class="container">
        <h2 class="text-center">eBacon</h2>
        <cart
                :show-shopping-chart="showShoppingChart"
                :cart-products="cartProducts"
                @showCheckOutPopUp="showCheckOutPopUp"
                @remove="removeItem"/>
        <div class="row">
            <div class="col-md-6" v-for="(product, idx) in products" :key="idx">
                <ProductCard :product="product" :id="idx" @addToCart="addToCart" @buyNow="buyNow"/>
            </div>
        </div>
        <pop-up ref="popUp">
            <template>
                <b-card-text v-for="(product, idx) in cartProducts" :key="idx">
                    <img :src="product.imgUrl" alt="" class="img-thumbnail" style="max-width: 150px">
                    Product Name: {{product.name}} <br>
                    Price: {{product.price | price}}
                    <hr v-if="cartProducts.length > 1">
                </b-card-text>
                <div class="d-flex justify-content-between">
                    <b-button variant="success" @click="processCheckout">Complete Check Out</b-button>
                    <b-card-text class="text-right font-weight-bolder">Total: {{totals | price}}</b-card-text>
                </div>
            </template>
        </pop-up>
    </div>
</template>

<script>
    import ProductCard from "../components/ProductCard";
    import {Products} from "../resources/Products";
    import PopUp from "../components/popUp";
    import Cart from "../components/cart";

    export default {
        name: "Home",
        components: {Cart, PopUp, ProductCard},
        data: () => ({
            products: [],
            cartProducts: [],
            showShoppingChart: false
        }),
        watch: {
            cartProducts(val){
             if(val.length === 0){
                 this.showShoppingChart = false
             }
            }
        },
        created() {
            this.products = Products
        },
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
            addToCart(id) {
                this.showShoppingChart = true
                this.cartProducts.push(this.products[id])
            },
            removeItem(id){
              console.log('remove', id)
                this.cartProducts.splice(id, 1)
            },
            buyNow(id) {
                this.cartProducts.push(this.products[id])
                this.showCheckOutPopUp()
            },
            showCheckOutPopUp() {
                this.$refs.popUp.show = true
            },
            processCheckout() {
                this.$refs.popUp.processing = true
                this.cartProducts = []
                this.showShoppingChart = false
            }
        },
        filters: {
            price(val) {
                return `$${(val / 100).toFixed(2)}`

            }
        }

    }
</script>

<style scoped>

</style>