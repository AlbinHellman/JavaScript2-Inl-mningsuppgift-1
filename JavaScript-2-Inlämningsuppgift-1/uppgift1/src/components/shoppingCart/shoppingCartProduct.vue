<template>
  <div class="cart-item">
    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
          <div class="card">
      <h1>{{ product.name }}</h1>
      <p>id: {{ id }}</p>
      <h3>PRICE: {{ product.price }}</h3>
      <h3>PRICE + TAX: {{ product.taxPrice }}</h3>
          
       

  
  </div>
      </div>
      <div>
        <div class="btn-group btn-group-sm me-2" role="group" area-label="quantity">
          <button class="btn btn-dark" @click.stop="">-</button>
          <button class="btn btn-dark" @click.stop="">+</button>
        </div>
        <button class="btn btn-danger btn-sm " @click.stop=""><i class="fas fa-trash"></i></button>
      </div>
    </div>
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['item'],
  methods: {
    ...mapActions(['getProduct'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProduct(this.id)
  }
}
</script>

<style scoped>
  .image-width {
    width: 90px;
  }
</style>