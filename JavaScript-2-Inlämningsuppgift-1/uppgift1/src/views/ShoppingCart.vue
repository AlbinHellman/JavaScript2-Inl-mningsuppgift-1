<template>
<div class="list">
    <h1>
    Din Varukorg
    </h1>

    <div class="border-box">
<h1>
    Listan:
</h1>

<shopping-cart-product v-for="item in shoppingCart" :key="item.product.id" :item="item" />


    </div>
   
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['id'],
    data() {
      return {
        quantity: 1
      }
    },
    methods: {
      ...mapActions(['getProduct', 'addProductToCart'])
      
    },
    computed: {
      ...mapGetters(['product'])
    },
    created() {
      this.getProduct(this.id)
    }

}


</script>

<style>
.list {
    text-align: center;
    margin-top: 3rem;
    
}
.list h1 {
    font-size: 3rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.border-box {
    background: rgb(89, 89, 158);
    height: 32rem;
    margin-top: 3rem;
}

</style>