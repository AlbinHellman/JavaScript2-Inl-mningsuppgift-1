<template>
  <div>
    <shopping-cart-product v-for="item in shoppingCart" :key="item.product.id" :item="item" />

    <div v-if="shoppingCart.length < 1" class="cart-item">
      <div class="p-2 d-flex justify-content-center align-items-center">
        Din kundvagn är tom.
      </div>
      <div class="dropdown-divider"></div>
    </div>

    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="ms-2">
        <div class="total-price">
          Totalt: <span class="ms-1">1000 SEK</span>
        </div>
        <small class="text-muted">inkl. moms</small>
      </div>
      <button class="btn btn-primary">Gå till kassan</button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import shoppingCartProduct from './shoppingCartProduct'
export default {
    components: {
        shoppingCartProduct
    },
    computed: {
        ...mapGetters(['shoppingCart'])
    }

}
</script>

<style>

</style>