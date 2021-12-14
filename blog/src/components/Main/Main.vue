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
    <section id="categories">
      <!-- main topics -->
      <div class="container container-flex">
          <font-awesome-icon :icon="['fas', 'chevron-left']" size="lg"/>
          <span v-for="(category, y) in categories" :key="y"><a href="#">{{ category.toUpperCase() }}</a></span>
          <font-awesome-icon :icon="['fas', 'chevron-right']" size="lg"/>
      </div>
    </section>
    <section>
      <div class="container container-flex">
          <!-- blog posts 5 components with v-for -->
          <div class="col-xl">
            <PostOverview v-for="(post, x) in postsOverview" :key="x" :postOverview="post" />
            <div class="next-page">
              <div class="page"><font-awesome-icon :icon="['fas', 'chevron-left']" size="xs"/></div>
              <span class="page selected">1</span>
              <span class="page">2</span>
              <span class="page">3</span>
              <div class="page"><font-awesome-icon :icon="['fas', 'chevron-right']" size="xs"/></div>
            </div>
          </div>      
          <!-- links to social media -->
          <div class="col-xs">
            <div class="twitter">
              <h3>latest from twitter</h3>
              <div class="container-flex" v-for="(twitterPost, z) in twitterPosts" :key="z">
                <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="twitter-icon"/>
                <div>
                  <p>{{ twitterPost.content }}</p>
                  <span>{{ twitterPost.date }}</span>
                </div>
              </div>
            </div>
            <div class="instagram">
              <h3>photos from instagram</h3>
              <div class="container-flex">
                <img :src="require('@/assets/img/instagram-0' + n + '.jpg')" alt="" v-for="n in 6" :key="n">
              </div>
              <h3>tags</h3>
              <span v-for="(tag, k) in instagramTags" :key="k">{{ tag.toUpperCase() }}</span>
            </div>
            <div>
              <h3>find us on facebook</h3>
              <div class="facebook-profile container-flex">
                <a href="#">Okler Themes</a>
              </div>
            </div>
            
            
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainPosts from "./MainPosts.vue";
import RelevantPosts from "./RelevantPosts.vue";
import PostOverview from "./PostOverview.vue";

export default {
  name: 'Main',
  components: {
    MainPosts,
    RelevantPosts,
    PostOverview
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
          ],
          categories: ['gadgets', 'photography', 'lifestyle', 'fashion', 'recipes', 'travel'],
          postsOverview: [
            {
              img: ['blog-54.jpg'],
              date: '12 January',
              title: 'how to make friends as a grown-up',
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!',
              author: 'john doe',
              categories: 'lifestyle, travel',
              numberOfComments: '12'
            },
            {
              img: ['blog-55-1.jpg'],
              date: '12 January',
              title: 'simple ways to have a pretty face',
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!',
              author: 'john doe',
              categories: 'photography, travel',
              numberOfComments: '12'
            },
            {
              img: ['blog-56-1.jpg'],
              date: '12 January',
              title: 'ranking the greatest players in basketball',
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!',
              author: 'john doe',
              categories: 'sports, business',
              numberOfComments: '12'
            },
            {
              img: ['blog-58-1.jpg'],
              date: '12 January',
              title: 'top camper trailer towing tips',
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!',
              author: 'john doe',
              categories: 'travel, lifestyle',
              numberOfComments: '12'
            },
            {
              img: ['blog-13.jpg', 'blog-16.jpg', 'blog-20.jpg', 'blog-23.jpg', 'blog-29.jpg', 'blog-40.jpg'],
              date: '8 January',
              title: '10 best travel tips after 5 years traveling the world',
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!',
              author: 'john doe',
              categories: 'travel, lifestyle',
              numberOfComments: '12'
            }
          ],
          twitterPosts: [
            {
              content: 'If you have any suggestions for the next updates, let us know.',
              date: '01:05 PM, Sep 18th'
            },
            {
              content: 'We have just updated Porto Admin. Check the changelog for more information.',
              date: '01:04 PM, Sep 18th'
            }
          ],
          instagramTags: ['design', 'brands', 'video', 'business', 'travel']
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

  #categories {
    background-color: #0088cc;
    padding: 4rem 0;

    .container-flex {
      align-items: center;
    }

    span {
      width: calc(100% / 8);

      a {
          display: block;
          text-decoration: none;
          text-align: center;
          color: white;
          background-color: black;
          padding: 2rem 0;
          font-size: 1.5rem;
      }
    } 
  }

  .col-xl {
    width: 70%;

    .next-page {
    text-align: right;
    padding: 4rem 0;

      .page {
        display: inline-block;
        text-align: center;
        padding: 1.5rem 2rem;
        border: 2px solid #f7f7f7;
        font-size: 1.2rem;
        color: #58acdb;
        font-weight: bold;
      }

      .selected {
        color: white;
        background-color: #58acdb;
      }
    }
  }

  .col-xs {
    width: 30%;
    padding: 2rem;

    h3 {
      text-transform: uppercase;
      font-size: 1.6rem;
      font-weight: bold;
    }

    .twitter {

      .container-flex {
        justify-content: flex-start;
        margin: 2rem 0;

        p {
          font-size: 1.4rem;
          color: #8b8b8b;
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }

        span {
          color: #3aa2d7;
          font-size: 1.2rem;
        }

        .twitter-icon {
          margin-right: 2rem;
        }
      }
    }

    .instagram {
      padding-bottom: 6rem;

      .container-flex {
        flex-wrap: wrap;
        padding: 2rem 0;

        img {
          width: calc(100% / 3);
        }
      }

      span {
        display: inline-block;
        padding: 0.5rem 1rem;
        margin: 1.5rem 1rem 1rem 0;
        font-size: 1.2rem;
        color: white;
        font-weight: bold;
        border-radius: 1.2rem;
        background-color: black;
      }
    }

    .facebook-profile {
      height: 5rem;
      border-left: 7px solid #eeeeee;
      align-items: center;
      padding-left: 2rem;
      margin: 2rem 0;

      a {
        text-decoration: none;
        font-size: 1.4rem;
        color: #0088cc;
      }
    }
  }
</style>
