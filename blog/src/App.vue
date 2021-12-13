<template>
  <div id="app">
    <Header :upperNavbar="headerMenu.upperNavbar" :lowerNavbar="headerMenu.lowerNavbar"/>
    <Main />
    <Footer :aboutTheBlog="footerMenu.aboutTheBlog" :recentPosts="footerMenu.recentPosts" :recentComments="footerMenu.recentComments" :categories="footerMenu.categories"/>
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
      },
      footerMenu: {
        aboutTheBlog: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium est tempore laboriosam exercitationem distinctio vitae aliquid, ex cupiditate incidunt amet, architecto aut earum eaque fugiat voluptas ullam ipsa in!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium est tempore laboriosam exercitationem distinctio vitae aliquid, ex cupiditate incidunt amet, architecto aut earum eaque fugiat voluptas ullam ipsa in!'],
        recentPosts: [
          {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            img: 'our-office-4-square.jpg',
            date: '12:53 AM Dec 19th'
          },
          {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            img: 'our-office-5-square.jpg',
            date: '12:53 AM Dec 19th'
          }
        ],
        recentComments: [
          {
            author: 'John Doe ',
            postCommented: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            date: '12:55 AM Dec 19th'
          },
          {
            author: 'John Doe ',
            postCommented: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            date: '12:55 AM Dec 19th'
          }
        ],
        categories: ['gadgets', 'photography', 'lifestyle', 'fashion', 'recipes', 'travel', 'business', 'architecture', 'reviews', 'sports', 'videos', 'technology', 'design']
      }
    };
  }
}
</script>

<style lang="scss">

</style>
