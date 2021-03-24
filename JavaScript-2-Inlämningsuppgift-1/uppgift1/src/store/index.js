import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: '1', name: 'Produkt 1', price: 99 },
      { id: '2', name: 'Produkt 2', price: 149 },
      { id: '3', name: 'Produkt 3', price: 499 },
      { id: '4', name: 'Produkt 4', price: 349 },
      { id: '5', name: 'Produkt 5', price: 89 },              
      { id: '6', name: 'Produkt 6', price: 329 },
      { id: '7', name: 'Produkt 7', price: 890 },
      { id: '8', name: 'Produkt 8', price: 590 },
      { id: '9', name: 'Produkt 9', price: 289 },
      { id: '10', name: 'Produkt 10', price: 199 },
      { id: '11', name: 'Produkt 11', price: 1399 },
      { id: '12', name: 'Produkt 12', price: 3999 },
      { id: '13', name: 'Produkt 13', price: 1599 },
      { id: '14', name: 'Produkt 14', price: 2499 },
      { id: '15', name: 'Produkt 15', price: 3290 }
        
    ],
    product: null,
    comp: 'Grid',
    searchVal: ''
  },
  getters: {
    taxedProducts: state => {
      let taxedProducts = state.products.map(product => {
        return {
            ...product,
            name: product.name + ' + tax',
            price: Math.round(product.price + product.price * 0.2)
        }
    })

    return taxedProducts
  },
  comp: state => state.comp,
  product: state => state.product,
  filteredProducts: (state, getters) => {
    //return state.products.filter(product => product.name.match(state.searchVal))
    return getters.taxedProducts.filter(product => product.name.toLowerCase().match(state.searchVal.toLowerCase()))
  }
  },
  mutations: {
    ADD: (state, amount) => {
      state.products.forEach(product => {
        product.price += amount
      })
    },
    SUB: (state, amount) => {
        state.products.forEach(product => {
          product.price -= amount
        })
      },
      CHANGE_COMP: (state, payload) => {
        state.comp = payload
      },
      SET_PRODUCT: (state, id) => {
        let prod = state.products.filter(p => p.id === id)[0]
      state.product = {
        ...prod,
        taxPrice: Math.round(prod.price + prod.price * 0.2)
      }
      },
      SEARCH: (state, val) => {
        state.searchVal = val
      }
  },
  actions: {
 //   subAsync: (content, amount) => {
 //     setTimeout(() => {
 //       context.commit('SUB', amount)
 //     }, 3000)
 //   }
   subAsync: ({ commit }, amount) => {
     setTimeout(() => {
       commit('SUB', amount)
     })
   },
   addToPrice: ({commit}, amount) => {
     commit('ADD', amount)
   },
   changeComp: ({commit}, component) => {
     commit('CHANGE_COMP', component)
   },
   getProduct: ({commit}, id) => {
     commit('SET_PRODUCT', id)
   },
   search: ({commit}, val) => {
     commit('SEARCH', val)
   }
  }
})
