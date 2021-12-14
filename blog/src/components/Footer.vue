<template>
  <footer>
    <!-- 4 columns upper footer-->
    <section id="upper-footer">
      <div class="label">
        <div class="shadow"></div>
        <div class="get-in-touch">Get in Touch</div>
      </div>
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
      <div class="container container-flex">
        <div class="container-flex">
          <img src="../assets/img/logo-footer.png" alt="blog logo">
          <span>&copy; Copyright 2020 All Rights Reserved</span>
        </div>
        <div>
          <ul>
            <li v-for="(menu, k) in lowerNavbar" :key="k"><a href="#"><font-awesome-icon :icon="['fas', 'chevron-right']" class="arrow-right" size="xs"/>{{ menu }}</a></li>
          </ul>
        </div>
      </div>
      <div class="chat">
        <font-awesome-icon :icon="['fas', 'chevron-up']" class="arrow-up" size="xs"/>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    aboutTheBlog: Array,
    recentPosts: Array,
    recentComments: Array,
    categories: Array,
    lowerNavbar: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #upper-footer {
    background-color: #212529;
    padding: 4rem 0 2rem 0;

    .label {
      position: relative;

      .shadow {
          width: 0; 
          height: 0; 
          border-left: 20px solid transparent;
          border-right: 15px solid #005580;
          border-top: 20px solid transparent;

          position: absolute;
          top: -6rem;
          left: 6rem;
      }

      .get-in-touch {
        position: absolute;
        top: -6rem;
        left: 9.5rem;
        font-size: 2rem;
        color: white;
        background-color: #0088cc;
        padding: 1rem 1.5rem;
        // height: 10rem;
      }

    }

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
        font-size: 1rem;
      }

      .comments {
        line-height: 1.8;
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
        padding: 0.5rem 2rem;
        font-weight: bolder;
        margin-right: 1rem;
        margin-top: 1rem;
        text-decoration: none;
      }
    }

  }

  #lower-footer {
    background-color: #1c2023;
    height: 10rem;
    font-size: 1.2rem;
    color: #535558;
    position: relative;

    .container-flex {
      align-items: center;
      height: 100%;
    }

    img {
      height: 4rem;
      margin-right: 3rem;
    }

    .arrow-right {
      margin-right: 0.5rem;
    }

    ul {
      margin-right: 13rem;

      li {
        display: inline-block;
        margin-right: 1rem;

          a {
          color: #535558;
          font-size: 1.2rem;
          text-decoration: none;
        }
      }
    }

    .chat {
      position: absolute;
      right: 1rem;
      bottom: 0;
      background-color: #373839;
      height: 5rem;
      width: 5rem;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .arrow-up {
        color: #b4b5b6;
      }
    }
  }

</style>
