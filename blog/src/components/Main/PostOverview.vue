<template>
  <div class="col">
      <div v-if="postOverview.img.length === 1">
        <img :src="require('@/assets/img/' + postOverview.img[0])" :alt="postOverview.title">
      </div>
      <div class="container-flex collage" v-else>
          <img :src="require('@/assets/img/' + image)" alt="" v-for="(image, i) in postOverview.img" :key="i">
      </div>
      <div class="container-flex">
          <div class="date">
              <div class="day">{{ day }}</div>
              <div class="month">{{ month }}</div>
          </div>
          <div class="details">
            <h2>{{ postOverview.post_title }}</h2>
            <p>{{ content }} [...]</p>
            <div class="container-flex align-items-center">
                <div>
                    <span>
                        <font-awesome-icon :icon="['far', 'user']" size="1x" class="icon"/>
                        By 
                        <a href="">{{ postOverview.author }}</a>
                    </span>
                    <span>
                        <font-awesome-icon :icon="['far', 'folder']" size="1x" class="icon"/>
                        <a href="">{{ postOverview.category }}</a>
                    </span>
                    <span>
                        <font-awesome-icon :icon="['far', 'comments']" size="1x" class="icon"/>
                        <a href="">{{ postOverview.comments }} comments</a>
                    </span>
                </div>
                <button>read more</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PostOverview',
  props: {
      postOverview: Object
  },
  computed: {
      day() {
          let day = this.postOverview.date.split(' ');
          if (day[1].length === 3) {
              return day[1].substring(0, 2)
          }
          return day[1].substring(0, 1);
      },
      month() {
          let month = this.postOverview.date.split(' ');
          return month[0].substring(0, 3);
      },
      content() {
          return this.postOverview.post_content.substring(0, 5000)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .col {
        padding: 2rem 0;

        img {
            width: 100%;
            margin-bottom: 1.5rem;
        }

        .collage {
            flex-wrap: wrap;
            margin-bottom: 1.5rem;

            img {
                width: calc(100% / 3);
                margin: 0;
            }
        }
        
        .date {
            width: 8%;
            margin-right: 3rem;

            .day, .month {
                text-align: center;
            }

            .day {
                font-size: 1.2rem;
                font-weight: bold;
                background-color: #f7f7f7;
                padding: 2rem 1rem;
            }

            .month {
                background-color: black;
                font-size: 1rem;
                color: white;
                padding: 0.5rem 1rem;
                text-transform: uppercase;
            }
        }

        .details {
            padding-bottom: 3rem;
            border-bottom: 1px solid #f2f2f2;

            p {
                line-height: 1.6;
                color: #b1bacb;
                font-size: 1.2rem;
                padding: 2rem 0;
            }

            .container-flex {

                span {
                    display: inline-block;
                    margin: 0 0.5rem;
                    font-size: 1.2rem;
                    color: #b1bacb;

                    a {
                        text-decoration: none;
                        color: #299bd4;
                        text-transform: capitalize;
                        font-size: 1.2rem;
                    }

                    .icon {
                        margin-right: 0.5rem;
                    }
                }

                button {
                    background-color: white;
                    border: 1px solid #b1bacb;
                    box-shadow: 0 0.1rem #c9c9c9;
                    border-radius: 0.3rem;
                    color: #b1bacb;
                    text-transform: uppercase;
                    font-size: 1rem;
                    padding: 0.5rem;
                    font-family: 'Montserrat', sans-serif;
                }
            }
            
        }
    }

</style>
