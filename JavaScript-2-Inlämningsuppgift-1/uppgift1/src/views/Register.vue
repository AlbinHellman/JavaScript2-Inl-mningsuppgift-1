<template>
  <div class="container mt-5">
    <form class="text-center p-5 border" @submit.prevent="onSubmit">
        <div class="signaupp">
      <p class="h4 mb-4">Sign Up</p>
        </div>
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <input type="text" id="form3Example1" class="form-control border-bottom" v-model="user.firstName"/>
            <label class="form-label" for="form3Example1">First name</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input type="text" id="form3Example2" class="form-control border-bottom" v-model="user.lastName"/>
            <label class="form-label" for="form3Example2">Last name</label>
          </div>
        </div>
      </div>

      <!-- Email input -->
      <div class="andrafältet">
      <div class="form-outline mb-4">
        <input type="email" id="form3Example3" class="form-control border-bottom" v-model="user.email"/>
        <label class="form-label" for="form3Example3">Email address</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="form3Example4" class="form-control border-bottom" v-model="user.password"/>
       <label class="fix2 form-label" for="form3Example4">Password</label>
      </div>
      </div>
     

      <!-- Submit button -->
      <div class="knapp2">
      <button type="submit" class="knapp btn btn-primary btn-block mb-4">Sign up</button>
      </div>


      <div class="loggain">
        <p>Already a member? <router-link to="/login">Login</router-link></p>
        
      </div>

    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmit(){
      if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
        this.register(this.user)
      }
    }
  }
}
</script>

<style scoped>

.container {
    background: rgb(190, 170, 170);
    height: 25rem;
    width: 40rem;
    margin: auto;
}

.signaupp p{
    text-align: center;
    margin-top: 4rem;
    padding-top: 2rem;
    font-size: 3rem;
    font-family:monospace;
    position: relative;
  

    
}

.row {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
}



.andrafältet {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    
}





.form-label {
    position: relative;
    bottom: 1rem;
    right: 10rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

.knapp2 {
    text-align: center;
    margin-right: 3rem;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
}

.loggain {
    text-align: center;
    margin-top: 3rem;
  
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}


</style>