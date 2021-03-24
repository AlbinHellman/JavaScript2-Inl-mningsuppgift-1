<template>
  <div class="card">
      <h1>{{ product.name }}</h1>
      <p>id: {{ id }}</p>
      <h3>PRICE: {{ product.price }}</h3>
      <h3>PRICE + TAX: {{ product.taxPrice }}</h3>

  
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['id'],
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
.card {
  width: 60%;
  text-align: center;
  margin: auto;
  margin-top: 10rem;
  padding-top: 3rem;
  height: 15rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
}

</style>