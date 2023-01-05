<script>
  export default {
    name: 'App',
    components: {
    }
  }
</script>


<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/main">Main</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/items">Items</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/storages">Storages</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
  @import "~bootstrap/dist/css/bootstrap.css";

  body {
    background: rgb(0, 0, 0);
    color: white;
  }

  header {
    margin-bottom: 1%;
  }

</style>
