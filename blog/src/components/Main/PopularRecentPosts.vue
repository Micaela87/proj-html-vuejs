<template>
    <div>
        <div class="container-flex align-items-center justify-flex-start" v-for="(post, i) in posts" :key="i" :class="i < posts.length - 1 ? 'with-border' : ''">
            <img :src="require('@/assets/img/' + post.thumb_img)" :alt="post.post_title">
            <div>
                <h4>{{ post.post_title }}</h4>
                <span>{{ post.date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PopularRecentPosts',
  props: {
      posts: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container-flex {

        .with-border {
            border-bottom: 1px solid #eeeeee;
        }

        h4, span {
            text-transform: capitalize;
        }

        h4 {
            margin-bottom: 0.5rem;
        }

        span {
            font-size: 1.2rem;
            color: #b1bacb;
        }
    }

    img {
        width: 5rem;
        margin: 1rem 1rem 1rem 0;
    }
</style>
