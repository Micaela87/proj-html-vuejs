<template>
  <div>
    <section id="posts">
      <div class="container container-flex align-items-center">
        <MainPosts 
          v-for="(post, i) in posts"
          :key="i"
          :singlePost="post"
          :onlyOnePost="false"/>
      </div>
    </section>
    <section>
      <RelevantPosts />
    </section>
    <section id="categories">
      <!-- main topics -->
      <div class="container container-flex align-items-center">
          <font-awesome-icon :icon="['fas', 'chevron-left']" size="lg" @click="showPreviousCategory"/>
          <span v-for="(category, y) in categories" :key="y"><a href="#">{{ category.toUpperCase() }}</a></span>
          <font-awesome-icon :icon="['fas', 'chevron-right']" size="lg" @click="showNextCategory"/>
      </div>
    </section>
    <section id="post-overview">
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
              <div class="container-flex justify-flex-start" v-for="(twitterPost, z) in twitterPosts" :key="z">
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
import PostOverview from "./PostOverview.vue";
import RelevantPosts from "./RelevantPosts.vue";

export default {
  name: 'Main',
  components: {
    MainPosts,
    RelevantPosts,
    PostOverview
  },
  props: {
    allCategories: Array
  },
  data() {
      return {
          clicked: 0,
          lastIndexCategory: 6,
          allPosts: [
            {
              "id": "1",
              "post_title": "How To Make Friends As A Grown-Up",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "lifestyle, travel",
              "thumb_img": "",
              "img": ["blog-54.jpg"],
              "date": "January 12, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "0"
            },
            {
              "id": "2",
              "post_title": "Simple Ways To Have A Pretty Face",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "photography, travel",
              "thumb_img": "blog-55.jpg",
              "img": ["blog-55-1.jpg"],
              "date": "January 12, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "1000"
            },
            {
              "id": "3",
              "post_title": "Ranking The Greatest Players In Basketball",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "sports, business",
              "thumb_img": "blog-56.jpg",
              "img": ["blog-56-1.jpg"],
              "date": "January 12, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "999"
            },
            {
              "id": "4",
              "post_title": "Top Camper Trailer Towing Tips",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "travel, lifestyle",
              "thumb_img": "blog-58.jpg",
              "img": ["blog-58-1.jpg"],
              "date": "January 12, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "997"
            },
            {
              "id": "5",
              "post_title": "10 Best Travel Tips After 5 Years Traveling The World",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "travel, lifestyle",
              "thumb_img": "",
              "img": ["blog-13.jpg", "blog-16.jpg", "blog-20.jpg", "blog-23.jpg", "blog-29.jpg", "blog-40.jpg"],
              "date": "January 8, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "0"
            },
            {
              "id": "6",
              "post_title": "4 Ways To Look Cool In Glasses",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "fashion, lifestyle",
              "thumb_img": "blog-57.jpg",
              "img": "",
              "date": "January 12, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "998"
            },
            {
              "id": "7",
              "post_title": "5 Lovely Walks In New York",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "travel, lifestyle",
              "thumb_img": "blog-59.jpg",
              "img": "",
              "date": "January 12, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "996"
            },
            {
              "id": "8",
              "post_title": "Main Reasons To Stop Texting And Driving",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "lifestyle",
              "thumb_img": "blog-65.jpg",
              "img": "",
              "date": "January 12, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "0"
            },
            {
              "id": "9",
              "post_title": "Tips To Help You Quickly Prepare Your Lunch",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "recipes",
              "thumb_img": "blog-66-1.jpg",
              "img": "",
              "date": "January 12, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "0"
            },
            {
              "id": "10",
              "post_title": "Why Should I Buy A Smartwatch?",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "gadgets, lifestyle",
              "thumb_img": "blog-67.jpg",
              "img": "",
              "date": "January 12, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "0"
            },
            {
              "id": "11",
              "post_title": "The Best Augmented Reality Smartglasses",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "gadgets, lifestyle",
              "thumb_img": "blog-68.jpg",
              "img": "",
              "date": "January 12, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "0"
            },
            {
              "id": "12",
              "post_title": "12 Healthiest Foods To Eat For Breakfast",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "recipes",
              "thumb_img": "blog-69.jpg",
              "img": "",
              "date": "January 12, 2019",
              "author": "john doe",
              "comments": "12",
              "likes": "0"
            },
            {
              "id": "13",
              "post_title": "How To Take Better Concert Pictures In 30 Seconds",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "photography",
              "thumb_img": "",
              "img": "blog-46.jpg",
              "date": "",
              "author": "",
              "comments": "",
              "likes": ""
            },
            {
              "id": "14",
              "post_title": "Gadgets That Make Your Smartphone Even Smarter",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "gadgets",
              "thumb_img": "",
              "img": "blog-47.jpg",
              "date": "",
              "author": "",
              "comments": "",
              "likes": ""
            },
            {
              "id": "15",
              "post_title": "20 Top-Rated Tourist Attractions In Manhattan",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "travel",
              "thumb_img": "",
              "img": "blog-48.jpg",
              "date": "",
              "author": "",
              "comments": "",
              "likes": ""
            },
            {
              "id": "16",
              "post_title": "The Best Way To Ride A Motorcycle",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "lifestyle",
              "thumb_img": "",
              "img": "blog-49.jpg",
              "date": "",
              "author": "",
              "comments": "",
              "likes": ""
            },
            {
              "id": "17",
              "post_title": "5 Fun Things To Do At The Beach",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "travel",
              "thumb_img": "",
              "img": "blog-50.jpg",
              "date": "",
              "author": "",
              "comments": "",
              "likes": ""
            },
            {
              "id": "18",
              "post_title": "Amazingly Fresh Fruit And Herb Drinks For Summer",
              "post_content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!",
              "category": "recipes",
              "thumb_img": "",
              "img": "blog-51.jpg",
              "date": "",
              "author": "",
              "comments": "",
              "likes": ""
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
  },
  computed: {
    posts() {
      return this.allPosts.slice(12);
    },
    postsOverview() {
      return this.allPosts.slice(0, 5);
    },
    categories() {
      return this.allCategories.slice(this.clicked, this.lastIndexCategory);
    }
  },
  methods: {
    showPreviousCategory() {
      if (this.lastIndexCategory === 6) {
        this.clicked = this.allCategories.length - 6;
        this.lastIndexCategory = this.allCategories.length;
      } else {
        --this.clicked;
        --this.lastIndexCategory;
      }
    },
    showNextCategory() {
      if (this.lastIndexCategory === this.allCategories.length) {
        this.clicked = 0;
        this.lastIndexCategory = 6;
      } else {
        ++this.clicked;
        ++this.lastIndexCategory;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #posts {
    background-color: #f7f7f7;

      .container-flex {
      flex-wrap: wrap;
      padding: 2rem 0;
    }
  }

  #categories {
    background-color: #0088cc;
    height: 14rem;

    .container-flex {
      height: 100%;
    }

    span {
      width: calc(100% / 8);

      a {
          display: block;
          text-decoration: none;
          text-align: center;
          color: white;
          background-color: black;
          padding: 1.5rem 0;
          font-size: 1.5rem;
          font-weight: bold;
          border: 10px solid black;
      }
    }

    a:hover {
      border: 10px solid #005580;
    }
  }

  #post-overview {
    padding-top: 2rem;
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

    .twitter {

      .container-flex {
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
