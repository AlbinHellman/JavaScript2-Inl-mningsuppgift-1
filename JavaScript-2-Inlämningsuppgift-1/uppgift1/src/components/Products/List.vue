<template>
<div>
    <button @click="addToPrice" class="btn">LÄGGTILL</button>
    <button @click="subPrice(5)" class="btn">MINSKA</button>
    <div class="list">
        <product-card v-for="product in prodTax" :key="product.id" class="card" :product="product" />
        </div>
        </div>
</template>


<script>
import ProductCard from './ProductCard'
export default {
    components: {
        ProductCard
    },
    data() {
        return {

       // products: [
       //         { id: 1, name: 'Produkt 1', price: 99 },
       //         { id: 2, name: 'Produkt 2', price: 149 },
       //         { id: 3, name: 'Produkt 3', price: 499 },
       //         { id: 4, name: 'Produkt 4', price: 349 },
       //         { id: 5, name: 'Produkt 5', price: 89 },
       //         { id: 6, name: 'Produkt 6', price: 329 },
       //         { id: 7, name: 'Produkt 7', price: 890 },
       //         { id: 8, name: 'Produkt 8', price: 590 },
       //         { id: 9, name: 'Produkt 9', price: 289 },
       //         { id: 10, name: 'Produkt 10', price: 199 },
       //         { id: 11, name: 'Produkt 11', price: 1399 },
       //         { id: 12, name: 'Produkt 12', price: 3999 },
       //         { id: 13, name: 'Produkt 13', price: 1599 },
       //         { id: 14, name: 'Produkt 14', price: 2499 },
       //         { id: 15, name: 'Produkt 15', price: 3290 }
        //    ]
        }
    },
    methods: {
        addToPrice() {
       //     this.products.forEach(product => {
       //         product.price += 10
       //     })

     //  this.$store.state.products.forEach(product => {
    //       product.price += 10
    //   })

    //this.$store.commit('ADD', 10)
    this.$store.dispatch('addToPrice', 10)
        },
        subPrice(amount) {
          //  this.products.forEach(product => {
          //      product.price -= amount
          //  })

          // this.$store.commit('SUB', amount)

          this.$store.dispatch('subAsync', amount)
        }
    },
    computed: {
        products() {
            return this.$store.state.products
        },
        prodTax() {
            //let taxedProducts = this.$store.state.products.map(product => {
            //    return {
            //        ...product,
            //        name: product.name + ' + tax',
            //        price: Math.round(product.price + product.price * 0.2)
            //    }
           // })
//
  //          return taxedProducts
  return this.$store.getters.taxedProducts
        }
    }

}
</script>

<style scoped>

.card {
    background: rgb(89, 89, 158);
    color: white;
    margin: 3rem;
    display: flex;
    justify-content: space-between;
}

</style>