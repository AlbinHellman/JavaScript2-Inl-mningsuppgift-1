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
          <div class="container">
            <div>
              Counter: <strong class="counter">{{ appCounter }}</strong>
            <div>
          <button type="button" @click="increaseAppCounter()">Increase by 1</button>
          <button type="button" @click="decreaseAppCounter()">Decrease by 1</button>
          </div>
        </div>
          </div>
        </div>
        <button class="btn btn-danger btn-sm " @click.stop="deleteProductFromCart(product._id)"><i class="fas fa-trash"></i></button>
      </div>
    </div>
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { ACTION_APP_INCREMENT, ACTION_APP_DECREMENT } from './../../store/app.store'
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['item'],
  methods: {

    
    
  
    ...mapActions(['getProduct', 'deleteProductFromCart']),
     increaseAppCounter: function() {
      this.$store.dispatch(ACTION_APP_INCREMENT)
    },
    decreaseAppCounter: function() {
      this.$store.dispatch(ACTION_APP_DECREMENT)
    }
  
   
  
    
  
  },
  computed: {
    ...mapGetters(['product']),
    appCounter: function() {
      return this.$store.getters.getCounter
    }
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