<template>
<div>
  <navbar />
  <router-view/>
</div>
  
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar }

}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.btn {
  margin: 3rem 0 0 3rem;
  padding: .8rem .8rem;
  border-radius: 6px;
  border: none;
  outline: none;
  background: black;
  color: white;;
  cursor:pointer;
}

.btn:hover {
  box-shadow: 0 0 5px 0 rgb(27, 27, 252);
}

.btn:active {
  background: rgb(89, 89, 158);
  box-shadow: none;
}

</style>
