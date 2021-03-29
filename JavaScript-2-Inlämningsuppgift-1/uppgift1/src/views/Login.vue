<template>
<div class="container mt-5">
  <form class="border text-center p-5 col-6 mx-auto">
      <p class="h4 mb-4">Signa upp</p>

<div class="fälten">
      <div class="form-outline mb-4">
          <input type="skrivfält" id="form2Example1" class="form-control border-bottom" />
          <label class="form-label" for="form2Example1">Email adress</label>
      </div>

      <div class="form-outline mb-4">
          <input type="skrivfält" id="form2Example2" class="form-control border-bottom" />
          <label class="form-label" for="form2Example2">Lösenord</label>
      </div>
</div>

<div class="knapp">
      <button type="submit" class="btn btn-primary btn-block mb-4">Signa in</button>
</div>

      <div class="registrera">
          <p>Inte medlem? <router-link to="/register">Registrera</router-link></p>
      </div>
  </form>
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

.h4 {
    text-align: center;
    margin-top: 4rem;
    font-size: 3rem;
    font-family:monospace;
    
}

.fälten {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
}

.form-label {
    position: relative;
    bottom: 1.5rem;
    right: 10rem;
}


.knapp {
    text-align: center;
    
}


.registrera {
    text-align: center;
    margin-top: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

</style>