<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
            <b-navbar-brand to="/" exact>Week 2</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/home" replace exact-active-class="active">Home</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>