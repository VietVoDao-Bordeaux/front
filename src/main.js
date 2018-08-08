// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/**
 * Import Global Style (.css/.scss)
 */
import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/index.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import Paragraphs from './components/paragraph/Paragraphs.vue'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://www.admin.local.vietvodao-bordeaux.fr/graphql'
})

/*
const authLink = setContext((_, { headers }) => {
  const auth = new Auth()
  let token = auth.getToken()

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  }
})
*/

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

// Install the vue plugin
// With the apollo client instance
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $query: {
      loadingKey: 'loading',
      fetchPolicy: 'cache-and-network'
    }
  },
  // Watch loading state for all queries
  // See the 'watchLoading' advanced option
  watchLoading (state, mod) {
    console.log('Global loading', mod)
  },
  // Global error handler for all smart queries and subscriptions
  errorHandler (error) {
    console.log('Global error handler')
    console.error(error)
  }
})

// Install the vue plugin
Vue.use(VueApollo)

// Declare generic component
let paragraphComponent = Vue.component('paragraphs', Paragraphs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  apollo: {},
  components: { App, paragraphComponent },
  template: '<App/>'
})
