<template>
  <div class="item" v-bind:class="{ 'not-available': !item.available }">
    <div>
      <img
        :src="item.url"
        alt=""
        width="200px"
        height="150px"
        border-radius="50px"
      />

      <div>
        {{ item.itemname }}
        RM{{ item.price }}
      </div>
      <input type="checkbox" v-on:change="markNotAvailable" />Available
      <b-button variant="danger" @click="$emit('del-item', item.itemid)"
        >x</b-button
      >
    </div>
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
  background: rebeccapurple;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
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
