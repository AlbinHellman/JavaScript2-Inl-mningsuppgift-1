<template>
  <div class="products">
      <aside>
          <div class="knappar">
              <div class="knapp1">
              <button @click="changeComp('Grid')"><i class="fas fa-th-large"></i></button>
              </div>
              <div class="knapp2">
              <button @click="changeComp('List')"><i class="fas fa-list"></i></button>
  </div>
          </div>
  <br>
  <form>
      <div>
          <input type="text" placeholder="sök...">
      </div>
  </form>
  <br>
  <div>
      <a href="#">Filter</a>
  </div>
      </aside>
      <div class="content">
          <component :is="comp" />
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Grid from '../components/Products/Grid'
import List from '../components/Products/List'
export default {
    name: 'Products',
    components: {
        Grid,
        List
    },
    data() {
        return {
          //  comp: 'Grid'
        }
    },
    computed: {
        ...mapGetters(['comp'])
    },
    methods: {
        ...mapActions(['changeComp'])
    }

}
</script>

<style scoped>
.products {
    display: flex;
}
aside {
    flex: 2;
    background: rgb(185, 175, 185);
    padding: 3rem;
    min-height: calc(100vh - 66.29px)
}

.content {
    flex: 15;
}

a {
    color: rgb(49, 32, 49);
}

.knappar button {
    padding: 1rem;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    
    
}

.knappar {
    display: flex;
}

.knapp1 {
    margin-right: 2rem;
}

</style>