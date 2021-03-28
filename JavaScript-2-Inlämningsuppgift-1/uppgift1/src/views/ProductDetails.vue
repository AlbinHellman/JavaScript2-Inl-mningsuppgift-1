<template>
  <div class="card">
      <h1>{{ product.name }}</h1>
      <p>id: {{ id }}</p>
      <h3>PRICE: {{ product.price }}</h3>
      <h3>PRICE + TAX: {{ product.taxPrice }}</h3>
            <button class="knapp btn btn-primary btn-rounded" @click="addProductToCart({ product, quantity })">
          <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> LÄGG TILL I VARUKORGEN</button>

  
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

<style scoped>
.card {
  width: 60%;
  text-align: center;
  margin: auto;
  margin-top: 10rem;
  padding-top: 3rem;
  height: 15rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
}
.knapp {
  margin: auto;
  margin-top: 1rem;
}

</style>