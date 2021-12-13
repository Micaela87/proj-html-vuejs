<template>
  <div id="app">
    <Header :upperNavbar="headerMenu.upperNavbar" :lowerNavbar="headerMenu.lowerNavbar"/>
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      headerMenu: {
        upperNavbar: ['sign in', 'about us', 'contact us', 'buy now'],
        lowerNavbar: ['home', 'elements', 'features', 'pages', 'portfolio', 'blog', 'shop']
      }
    };
  }
}
</script>

<style lang="scss">

</style>
