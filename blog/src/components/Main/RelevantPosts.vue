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
            <MainPosts :singlePost="featuredPost" :onlyOnePost="true"/>
            <h3>featured author</h3>
            <div class="container-flex align-items-center">
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
            }
          ],
          recentPosts: [
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
                "img": "blog-66.jpg",
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
            }
          ],
          featuredAuthor: {
              img: 'avatar.jpg',
              name: 'john doe',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis!'
          }
      };
  },
  computed: {
      featuredPost() {
          return this.recentPosts[1];
      }
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
            padding: 1rem 0;
        }

        .container-flex {

            img {
                width: 10rem;
                margin-right: 1rem;
            }

            h4 {
                text-transform: capitalize;
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
