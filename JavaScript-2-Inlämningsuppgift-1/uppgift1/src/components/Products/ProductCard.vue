<template>
  <div class="card">
      <p>ID: {{ Product.id }}</p>
      <p>NAMN: {{ Product.name }}</p>
      <p>PRIS: {{ Product.price }}</p>
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