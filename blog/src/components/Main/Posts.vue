<template>
    <div class="container container-flex">
        <div class="post-card" v-for="(post, i) in posts" :key="i">
            <img :src="require('@/assets/img/' + post.img)" :alt="post.title">
            <div class="overlay">
                <div class="post-content">
                    <div class="category">{{ post.category }}</div>
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.briefDescription }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Posts',
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
    .container-flex {
        flex-wrap: wrap;
        align-items: center;
        padding: 2rem 0;
    }
    .post-card {
        width: 32%;
        position: relative;
        margin: 1.5rem 0;

        img {
            width: 100%;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);

            .post-content {
                position: absolute;
                width: 90%;
                left: 50%;
                bottom: 0;
                transform: translate(-50%, -10%);

                .category {
                    text-transform: uppercase;
                    color: white;
                    font-size: 1rem;
                    background-color: #0088cc;
                    padding: 0.5rem 1rem;
                    width: fit-content;
                }

                h2 {
                    text-transform: capitalize;
                    color: white;
                    font-size: 2rem;
                    margin: 1rem 0;
                }

                p {
                    line-height: 1.4;
                    color: #888a8d;
                    font-size: 1.2rem;
                    font-weight: bold;
                    display: none;
                }
            }
        }
    }
</style>
