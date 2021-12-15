<template>
  <header>
    <section id=upper-header>
      <nav class="container">
        <!-- upper header with menu-->
        <ul>
          <li>Everything about Lifestyle, Travel and Gadgets!</li>
          <li v-for="(section, i) in upperNavbar" :key="i"><a href="#">{{ section.toUpperCase() }}</a></li>
        </ul>
      </nav>
    </section>
    <section id="central-header" class="container">
      <!-- central header with logo -->
      <img src="../assets/img/logo-default-slim.png" alt="logo blog">
    </section>
    <section id="lower-header">
      <nav class="container">
        <!-- lower header with menu -->
        <ul>
          <li v-for="(topic, y) in lowerNavbar" :key="y"><a href="#">{{ topic.toUpperCase() }}</a></li>
        </ul>
        <font-awesome-icon :icon="['fas', 'search']" size="lg"/>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    upperNavbar: Array,
    lowerNavbar: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// general rules
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    li {
      list-style-type: none;

      a {
        text-decoration: none;
      }
    }
  }

  nav {
    height: 100%;
  }

// upper footer
  #upper-header {
    height: 6rem;
    background-color: #0088cc;
      
      ul li {
      margin: 0 1.2rem 0 0;
      color: white;
      font-size: 1.4rem;

        a {
          color: white;
        }
      }
  }

// central footer
  #central-header {
    height: 15rem;

    img {
      height: 5rem;
      margin: 5rem 0;
    }
  }

// lower footer
  #lower-header {
    height: 6rem;
    border: 2px solid #f7f7f7;

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      ul li {
        margin-right: 3.5rem;

        a {
          font-size: 1.4rem;
          font-weight: bold;
          color: black;
        }

        a:hover {
          color: #0088cc;
        }
      }
    }
  }
</style>
