<template>
  <div class="products">
      <aside>
          <div class="knappar">
              <button><i class="fas fa-th-large"></i></button>
              <button><i class="fas fa-list"></i></button>
  </div>
  <form>
      <div>
          <input type="text" placeholder="sök...">
      </div>
  </form>
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
export default {
    data() {
        return {
            comp: 'Grid'
        }
    }

}
</script>

<style>

</style>