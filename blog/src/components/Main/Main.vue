<template>
  <div>
    <section id="posts">
      <!-- 6 components with v-for -->
      <Posts />
    </section>
    <section>
      <!-- 3 columns -->
      <div>
        <!-- popular posts 5 components with v-for-->
      </div>
      <div>
        <!-- recent posts same 5 components of popular posts section-->
      </div>
      <div>
        <!-- featured posts -->
        <!-- featured author -->
      </div>
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
import Posts from "./Posts.vue"
export default {
  name: 'Main',
  components: {
    Posts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #posts {
    background-color: #f7f7f7;
  }
</style>
