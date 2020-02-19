<template>
    <div class="mb-4">
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
                            <b-card-text>{{productDescription}} <router-link :to="'/product/'+id" class="btn btn-sm btn-info">read more</router-link></b-card-text>
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
            <hr>
            <div class="d-flex justify-content-between">
                <b-button href="#" variant="primary" @click="addToCart(id)">Add To Cart</b-button>
                <b-button href="#" variant="primary" @click="buyNow(id)">Buy Now</b-button>
                <reviews :reviews="product.reviews" />
            </div>

        </b-card>
    </div>
</template>

<script>
    import Reviews from "./Reviews";
    export default {
        name: "Product",
        components: {Reviews},
        props: ['product', 'id'],

        methods:{
            addToCart(id){
                this.$emit('addToCart', id)
            },
            buyNow(id){
                this.$emit('buyNow', id)
            }
        },

        computed: {
            productDescription() {
                return this.product.description.substring(0, 25) + '...'
            }
        }
    }
</script>

<style scoped>
img{
    max-height:186px;
    overflow: hidden;
}
</style>