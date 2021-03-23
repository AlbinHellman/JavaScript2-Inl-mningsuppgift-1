<template>
  <div class="card">
      <h1>name</h1>
      <p>id: {{ id }}</p>
      <h3>PRICE: 000</h3>
      <h3>PRICE + TAX: 000</h3>

  
  </div>
</template>

<script>

export default {
    props: ['id']

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