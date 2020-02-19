<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
            <b-navbar-brand to="/" exact>Week 2</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/home" replace exact-active-class="active">Home</b-nav-item>
                    <b-nav-item to="/about" replace exact-active-class="active">About</b-nav-item>
                    <!-- Navbar dropdowns -->
                    <b-nav-item-dropdown text="More.." right>
                        <b-dropdown-item href="#">One</b-dropdown-item>
                        <b-dropdown-item href="#">two</b-dropdown-item>
                        <b-dropdown-item href="#">Three</b-dropdown-item>
                        <b-dropdown-item href="#">Four</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
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