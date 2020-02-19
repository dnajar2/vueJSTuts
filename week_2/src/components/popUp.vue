<template>
    <div class="cover-page" v-if="show">
        <div class="content">
            <strong>Check Out</strong> <button class=" btn btn-sm float-right" @click="show = !show">X</button>
            <div v-if="!completed">
                <hr>
                <slot v-if="!processing"></slot>
                <div v-else class="text-center">
                    <p>Processing <br>
                    <b-spinner label="Loading..."></b-spinner>
                    </p>
                </div>
            </div>
            <div v-else>
                <h2 class="text-center">Thank you for you purchase</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popUp",
        data:() => ({
            show: false,
            processing: false,
            completed: false
        }),
        watch:{
            processing(val){
                if(val){
                    let self = this
                    setTimeout(function () {
                        self.processing = false
                        self.completed = true
                    }, 2000)
                }
            },
            show(val){
                if(!val){
                    this.completed = false
                }
            }
        }
    }
</script>

<style scoped>
    .cover-page {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        left: 0;
        background-color: rgba(204, 204, 204, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
    }
    .content{
        background-color: #fff;
        max-width: 600px;
        width: 100%;
        padding: 20px;
    }
</style>