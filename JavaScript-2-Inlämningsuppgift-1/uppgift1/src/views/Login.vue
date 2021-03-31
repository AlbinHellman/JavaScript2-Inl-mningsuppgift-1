<template>
<div class="container mt-5">
  <form class="border text-center p-5 col-6 mx-auto" @submit.prevent="onSubmit">
      <p class="h4 mb-4">Signa upp</p>

<div class="fälten">
      <div class="form-outline mb-4">
          <input type="skrivfält" id="form2Example1" class="form-control border-bottom" v-model="email" />
          <label class="form-label" for="form2Example1">Email adress</label>
      </div>

      <div class="form-outline mb-4">
          <input type="skrivfält" id="form2Example2" class="form-control border-bottom" v-model="password" />
          <label class="form-label" for="form2Example2">Lösenord</label>
      </div>
</div>


      <button type="submit" class="knapp btn btn-primary btn-block mb-4">Signa in</button>


      <div class="registrera">
          <p>Inte medlem? <router-link class="link" to="/register" exact>Signa upp</router-link></p>
      </div>
  </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      if(this.email !== '' && this.password !== '') {
        let user = {
          email: this.email,
          password: this.password
        }
        let route = this.$route.query.redirect
        this.login({user, route})
        // this.$router.replace(this.$route.query.redirect)
      }
    }
  }
}
</script>

<style scoped>


.container {
    background: rgb(190, 170, 170);
    height: 22rem;
    width: 40rem;
    margin: auto;
    
}

.h4 {
   text-align: center;
    margin-top: 4rem;
    padding-top: 2rem;
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


.knapp {
      margin-left: 18rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    
}


.registrera {
    text-align: center;
    padding-top: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

</style>