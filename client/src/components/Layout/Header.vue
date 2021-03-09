<template>
  <header class="header">
    <h1>Bwyd Kitchen</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/bwyd">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  background: rgb(83, 196, 175);
  color: #fff;
  text-align: center;
  padding: 10px;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>
