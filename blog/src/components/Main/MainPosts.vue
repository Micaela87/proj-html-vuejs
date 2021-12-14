<template>
        <div class="post-card">
            <img :src="require('@/assets/img/' + singlePost.img)" :alt="singlePost.title">
            <div class="overlay">
                <div class="post-content">
                    <div class="category">{{ singlePost.category }}</div>
                    <h2>{{ singlePost.title }}</h2>
                    <p>{{ singlePost.briefDescription }}</p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'MainPosts',
  props: {
      singlePost: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
            min-height: 99%;
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

        .overlay:hover p {
            display: block;
        }
    }

    .post-card[data-v-1ee32770] {
        width: 100%;
    }
</style>
