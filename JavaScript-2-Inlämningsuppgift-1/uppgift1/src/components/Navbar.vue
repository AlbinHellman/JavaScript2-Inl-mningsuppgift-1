<template>
<nav >
   
    <router-link to="/" class="eCommerce">Min eCommerce</router-link>
    <div>
        <router-link class="link" to="/" exact>Startsida</router-link>
        <router-link class="link" to="/om" exact>Om</router-link>
        <router-link class="link" to="/products" exact>Produkter</router-link>
        <router-link class="fas fa-shopping-cart" to="/product/cartlist/id">
        <span v-show="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{{ cartItemCount }}</span></router-link>
        <shopping-cart class="link" />
        <router-link class="fas fa-user" v-if="!loggedIn" to="/user" exact></router-link>
        <router-link class="link" v-if="!loggedIn" to="/login" exact>Logga In</router-link>
                <button class="link" v-if="!loggedIn" @click="logout">Logga Ut</button>
        
        
        
   
    </div>
   
</nav>


  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ShoppingCart from './shoppingCart/ShoppingCart.vue'

export default {
    components: {
        ShoppingCart

    },
    computed: {
        ...mapGetters(['cartItemCount']),
        ...mapGetters(['loggedIn']),
        ...mapGetters(['cartItemCount'])
    },
    methods: {
        ...mapActions(['logout'])
    }

}
</script>

<style>

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    
    
    background: rgb(89, 89, 158)
    
}

.eCommerce {
text-decoration: none;
color: black;
font-size: 3rem;
font-weight: 600;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.link {
    color: black;
    text-decoration: none;
    font-size: 1.3rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: inline-block;
    position: relative;
    padding: 1.5rem;
}

.link:hover {
    color: white;
}

.link.router-link-active::after {
    content: '';
    position: absolute;
    border-bottom: 3px solid black;
    left: 1rem;
    bottom: 1rem;
    right: 1rem;
}

.fa-shopping-cart {
    color: black;
    margin: 3rem;
}

.fa-shopping-cart:hover {
    color: white;
}

.fa-shopping-cart.router-link-active::after {
    content: '';
    position: absolute;
    border-bottom: 3px solid black;
    left: 1rem;
    bottom: 1rem;
    right: 1rem;
}

.badge {
    color: red;
    
}


</style>