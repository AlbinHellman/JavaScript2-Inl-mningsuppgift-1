<template>
  <div class="card">
      <p>ID: {{ product.id }}</p>
      <p>NAMN: {{ product.name }}</p>
      <p>PRIS: {{ product.price }}</p>
  </div>
</template>

<script>
export default {
    props: ['product']

}
</script>

<style scoped>
.card {
    border: 1px solid black;
    border-radius: 5px;
    padding: 2rem;
}

</style>