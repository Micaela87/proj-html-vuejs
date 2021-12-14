<template>
    <div class="container container-flex">
        <div class="col">
            <h3>popular posts</h3>
            <PopularRecentPosts :posts="popularPosts"/>
        </div>
        <div class="col">
            <h3>recent posts</h3>
            <PopularRecentPosts :posts="recentPosts"/>
        </div>
        <div class="col">
            <h3>featured posts</h3>
            <MainPosts :singlePost="featuredPost"/>
            <h3>featured author</h3>
            <div class="container-flex">
                <img :src="require('@/assets/img/' + featuredAuthor.img)" :alt="featuredAuthor.name">
                <div>
                    <h4>{{ featuredAuthor.name }}</h4>
                    <p>{{ featuredAuthor.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PopularRecentPosts from "./PopularRecentPosts.vue";
import MainPosts from "./MainPosts.vue";

export default {
  name: 'RelevantPosts',
  components: {
      PopularRecentPosts,
      MainPosts
  },
  data() {
      return {
          popularPosts: [
              {
                  img: 'blog-55.jpg',
                  title: 'simple ways to have a pretty face',
                  date: 'january 12, 2019'
              },
              {
                  img: 'blog-56.jpg',
                  title: 'ranking the greatest players in basketball',
                  date: 'january 12, 2019'
              },
              {
                  img: 'blog-57.jpg',
                  title: '4 ways to look cool in glasses',
                  date: 'january 12, 2019'
              },
              {
                  img: 'blog-58.jpg',
                  title: 'top camper trailer towing tips',
                  date: 'january 12, 2019'
              },
              {
                  img: 'blog-59.jpg',
                  title: '5 lovely walks in new york',
                  date: 'january 12, 2019'
              }
          ],
          recentPosts: [
              {
                  img: 'blog-65.jpg',
                  title: 'main reasons to stop texting and driving',
                  date: 'january 12, 2019'
              },
              {
                  img: 'blog-66-1.jpg',
                  title: 'tips to help you quickly prepare your lunch',
                  date: 'january 12, 2019'
              },
              {
                  img: 'blog-67.jpg',
                  title: 'why should i buy a smartwatch?',
                  date: 'january 12, 2019'
              },
              {
                  img: 'blog-68.jpg',
                  title: 'the best augmented reality smartglasses',
                  date: 'january 12, 2019'
              },
              {
                  img: 'blog-69.jpg',
                  title: '12 healthiest foods to eat for breakfast',
                  date: 'january 12, 2019'
              }
          ],
          featuredPost: {
              img: 'blog-66.jpg',
              category: 'recipes',
              title: 'tips to help you quickly prepare your lunch',
              briefDescription: ''
          },
          featuredAuthor: {
              img: 'avatar.jpg',
              name: 'john doe',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!'
          }
      };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container {
        padding: 4rem 0;
    }
    .col {
        width: 32%;

        h3 {
            text-transform: uppercase;
            font-size: 1.6rem;
            font-weight: bold;
            padding: 1rem 0;
        }

        .container-flex {
            align-items: center;

            img {
                width: 10rem;
                margin-right: 1rem;
            }

            h4 {
                text-transform: capitalize;
                font-size: 1.4rem;
                font-weight: bold;
                padding: 0.5rem 0;
            }

            p {
                line-height: 1.4;
                color: #bb9f9b;
                font-size: 1.2rem;
            }
        }
    }
</style>
