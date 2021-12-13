<template>
  <footer>
    <!-- 4 columns upper footer-->
    <section id="upper-footer">
      <div class="container container-flex">
        <div class="col">
          <h3>about the blog</h3>
          <p v-for="(post, i) in aboutTheBlog" :key="i">{{ post }}</p>
          <span id="view-more">view more</span><font-awesome-icon :icon="['fas', 'chevron-right']" id="white-arrow"/>
        </div>
        <div class="col">
          <h3>recent posts</h3>
          <div class="container-flex recent-posts" v-for="(post, y) in recentPosts" :key="y">
            <img :src="require('@/assets/img/' + post.img)" :alt="post.title">
            <div>
              <h4>{{ post.title }}</h4>
              <div class="date">{{ post.date }}</div>
            </div>
          </div>
        </div>
        <div class="col">
          <h3>recent comments</h3>
          <div v-for="(comment, x) in recentComments" :key="x">
            <div class="comments">
              <font-awesome-icon :icon="['fas', 'chevron-right']" class="arrow-right" size="xs"/><span class="author">{{ comment.author }}</span> commented on <span class="post-commented">{{ comment.postCommented }}</span>
            </div>
            <div class="date">{{ comment.date }}</div>
          </div>
        </div>
        <div class="col">
          <h3>categories</h3>
          <div class="categories-container">
            <a v-for="(category, z) in categories" :key="z" class="category" href="#">{{ category.toUpperCase() }}</a>
          </div>
        </div>
      </div>
    </section>
    <section id="lower-footer">
      <!-- lower footer -->
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Headeer',
  props: {
    aboutTheBlog: Array,
    recentPosts: Array,
    recentComments: Array,
    categories: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #upper-footer {
    background-color: #212529;
    padding: 2rem 0;

    .col {
      width: 23%;
      margin: 2rem 1rem 2rem 0;
      font-size: 1.2rem;
      color: #a5a7a9;

      .container-flex {
        align-items: center;
      }

      h3, #view-more {
        color: white;
        font-size: 1.3rem;
        text-transform: uppercase;
      }

      #view-more {
        font-size: 1.2rem;
        font-weight: bolder;
      }

      p {
        line-height: 1.4;
        color: #535558;
        margin: 1rem 0;
      }

      .recent-posts {
        margin: 1rem 0;
      }

      img {
        border-radius: 50%;
        height: 7rem;
        margin-right: 1.5rem;
      }

      h4 {
        color: #a5a7a9;
        font-weight: bolder;
      }

      #white-arrow {
        color: white;
        margin-left: 0.5rem;
      }

      .date {
        color: #535558;
        margin-top: 0.9rem;
      }

      .comments {
        line-height: 1.4;
        margin-top: 1rem;
      }

      .arrow-right {
        color: #086da0;
        margin-right: 0.5rem;
      }

      .author {
        font-weight: bolder;
        color: #c3c4c5;
      }

      .post-commented {
        color: #086ea2;
        font-weight: bolder;
      }

      .categories-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      }

      .category {
        display: block;
        background-color: #000000;
        color: white;
        padding: 1rem 2rem;
        font-weight: bolder;
        margin-right: 1rem;
        margin-top: 0.5rem;
        text-decoration: none;
      }
    }

  }

  #lower-footer {
    background-color: #1c2023;
    height: 10rem;
  }

</style>
