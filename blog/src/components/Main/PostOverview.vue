<template>
  <div class="col">
      <img src="../../assets/img/blog-54.jpg" alt="">
      <div class="container-flex">
          <div class="date">
              <div class="day">12</div>
              <div class="month">Jan</div>
          </div>
          <div class="details">
            <h2>how to make friends as a grown-up</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga ad nisi molestiae unde deleniti minima neque excepturi officia optio, quas qui, commodi, odio aspernatur corrupti incidunt a explicabo officiis! [...]</p>
            <div class="container-flex">
                <div>
                    <span>
                        <font-awesome-icon :icon="['far', 'user']" size="1x" class="icon"/>
                        By 
                        <a href="">john doe</a>
                    </span>
                    <span>
                        <font-awesome-icon :icon="['far', 'folder']" size="1x" class="icon"/>
                        <a href="">lifestyle, travel</a>
                    </span>
                    <span>
                        <font-awesome-icon :icon="['far', 'comments']" size="1x" class="icon"/>
                        <a href="">12 comments</a>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .col {
        width: 70%;
        padding: 2rem 0;

        img {
            width: 100%;
            margin-bottom: 1.5rem;
        }
        
        .date {
            width: 10%;
            padding-right: 3rem;

            .day, .month {
                text-align: center;
            }

            .day {
                font-size: 1.5rem;
                font-weight: bold;
                background-color: #f7f7f7;
                padding: 2rem;
            }

            .month {
                background-color: black;
                font-size: 1.2rem;
                color: white;
                padding: 0.5rem 2rem;
                text-transform: uppercase;
            }
        }

        .details {
            padding-bottom: 3rem;
            border-bottom: 1px solid #f2f2f2;

            h2 {
                font-size: 2rem;
                text-transform: capitalize;
            }

            p {
                line-height: 1.6;
                color: #b1bacb;
                font-size: 1.2rem;
                padding: 2rem 0;
            }

            .container-flex {
                align-items: center;

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
                    font-family: 'Roboto', sans-serif;
                }
            }
            
        }
    }

</style>
