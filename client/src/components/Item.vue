<template>
  <div class="item" v-bind:class="{ 'not-available': !item.available }">
    <p>
      <input type="checkbox" v-on:change="markNotAvailable" />
      {{ item.itemname }}
      <img :src="item.url" alt="" width="200px" height="150px" />
      <button @click="$emit('del-item', item.itemid)" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  methods: {
    markNotAvailable() {
      this.item.available = !this.item.available;
    },
  },
};
</script>

<style scoped>
.item {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  /* background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted; */
}
.not-available {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 5px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>