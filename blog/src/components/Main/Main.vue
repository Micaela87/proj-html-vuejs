<template>
  <div>
    <section id="posts">
      <div class="container container-flex">
        <MainPosts 
          v-for="(post, i) in posts"
          :key="i"
          :singlePost="post"/>
      </div>
    </section>
    <section>
      <RelevantPosts />
    </section>
    <section>
      <!-- main topics -->
    </section>
    <section>
      <!-- 2 columns -->
      <div>
        <!-- blog posts 5 components with v-for -->       
      </div>
      <div>
        <!-- links to social media -->
      </div>
    </section>
  </div>
</template>

<script>
import MainPosts from "./MainPosts.vue";
import RelevantPosts from "./RelevantPosts.vue";

export default {
  name: 'Main',
  components: {
    MainPosts,
    RelevantPosts
  },
  data() {
      return {
          posts: [
              {
                  category: 'photography',
                  title: 'how to take better concert pictures in 30 seconds',
                  briefDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!',
                  img: 'blog-46.jpg'
              },
              {
                  category: 'gadgets',
                  title: 'gadgets that make your smartphone even smarter',
                  briefDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!',
                  img: 'blog-47.jpg'
              },
              {
                  category: 'travel',
                  title: '20 top-rated tourist attractions in manhattan',
                  briefDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!',
                  img: 'blog-48.jpg'
              },
              {
                  category: 'lifestyle',
                  title: 'the best way to ride a motorcycle',
                  briefDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!',
                  img: 'blog-49.jpg'
              },
              {
                  category: 'travel',
                  title: '5 fun things to do at the beach',
                  briefDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!',
                  img: 'blog-50.jpg'
              },
              {
                  category: 'recipes',
                  title: 'amazingly fresh fruit and herb drinks for summer',
                  briefDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!',
                  img: 'blog-51.jpg'
              }
          ]
      };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #posts {
    background-color: #f7f7f7;

      .container-flex {
      flex-wrap: wrap;
      align-items: center;
      padding: 2rem 0;
    }
  }

</style>
