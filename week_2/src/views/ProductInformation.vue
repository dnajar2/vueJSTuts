<template>
    <div class="container">
        <div class="row pt-5">
            <cart
                    :show-shopping-chart="showShoppingChart"
                    :cart-products="cartProducts"
                    @showCheckOutPopUp="showCheckOutPopUp"
                    @remove="removeItem"/>
            <div class="col-md-8 offset-md-2">
                <b-card
                        :header="product.name"
                        header-tag="header"
                        footer="Card Footer"
                        footer-tag="footer"
                >
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img :src="product.imgUrl" class="rounded-0 img-fluid"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Product Description">
                                <b-card-text>
                                    <b-card-text>{{product.description}}</b-card-text>
                                    <b-card-text class="font-weight-bolder">{{product.price | price}}</b-card-text>
                                    <reviews :reviews="product.reviews"/>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                    <hr>
                    <div class="d-flex justify-content-between">
                        <b-button href="#" variant="primary" @click="addToCart">Add To Cart</b-button>
                        <b-button href="#" variant="primary" @click="edit = true">Edit</b-button>
                    </div>
                </b-card>
                <div class="mt-5" v-if="edit">
                    <h2>Edit {{product.name}}</h2>
                    <div class="pb-2"><b-form-input v-model="editedProduct.name" placeholder="New Product Name"></b-form-input></div>
                    <div class="pb-2"><b-form-input v-model="editedProduct.description" placeholder="New Product description"></b-form-input></div>
                    <div class="pb-2"><b-form-input v-model="editedProduct.price" placeholder="New Product price in decimals"></b-form-input></div>
                    <b-button variant="success" @click="saveItem">Save</b-button> &nbsp;
                    <b-button variant="danger" @click="edit = false">Cancel</b-button>

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
    </div>
</template>

<script>
    import Reviews from "../components/Reviews";
    import {Products} from "../resources/Products";
    import Cart from "../components/cart";
    import PopUp from "../components/popUp";

    export default {
        name: "ProductInformation",
        components: {PopUp, Cart, Reviews},
        data: () => ({
            product: {},
            editedProduct: {
                name: '',
                description: '',
                price: null
            },
            cartProducts: [],
            showShoppingChart: false,
            edit: false
        }),
        watch: {
            cartProducts(val) {
                if (val.length === 0) {
                    this.showShoppingChart = false
                }
            }
        },
        created() {
            this.product = Products[this.$route.params.id]
        },
        computed: {
            totals() {
                let totals = 0
                if (this.cartProducts.length) {
                    totals = this.cartProducts.reduce((total, item) => item.price + total, 0)
                }
                return totals
            },
        },

        methods: {
            addToCart() {
                this.cartProducts.push(this.product)
                this.showShoppingChart = true
            },
            removeItem(id) {
                console.log('remove', id)
                this.cartProducts.splice(id, 1)
            },
            showCheckOutPopUp() {
                this.$refs.popUp.show = true
            },
            processCheckout() {
                this.$refs.popUp.processing = true
                this.cartProducts = []
                this.showShoppingChart = false
            },
            saveItem(){
                Object.assign(this.product, this.editedProduct)
                this.edit = false
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