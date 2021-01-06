<template>
  <div class="itemList">
    <div v-bind:key="item.itemid" v-for="item in itemList">
      <Item v-bind:item="item" v-on:del-item="$emit('del-item', item.itemid)" />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "ItemList",
  components: { Item },
  props: ["itemList"],
};
</script>

<style scoped>
.itemList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}
</style>