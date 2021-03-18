<template>
<div>
    <div class="grid">
        <product-card v-for="product in products" :key="product.id" :product="product" />
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

        products: [
                { id: 1, name: 'Produkt 1', price: 99 },
                { id: 2, name: 'Produkt 2', price: 149 },
                { id: 3, name: 'Produkt 3', price: 499 },
                { id: 4, name: 'Produkt 4', price: 349 },
                { id: 5, name: 'Produkt 5', price: 89 },
                { id: 6, name: 'Produkt 6', price: 329 },
                { id: 7, name: 'Produkt 7', price: 890 },
                { id: 8, name: 'Produkt 8', price: 590 },
                { id: 9, name: 'Produkt 9', price: 289 },
                { id: 10, name: 'Produkt 10', price: 199 },
                { id: 11, name: 'Produkt 11', price: 1399 },
                { id: 12, name: 'Produkt 12', price: 3999 },
                { id: 13, name: 'Produkt 13', price: 1599 },
                { id: 14, name: 'Produkt 14', price: 2499 },
                { id: 15, name: 'Produkt 15', price: 3290 }
            ]
        }
    }

}
</script>

<style>

</style>