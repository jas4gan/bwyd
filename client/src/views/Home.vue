<template>
  <div id="app">
    <AddItem v-on:add-item="addItem" />
    <ItemList v-bind:itemList="itemList" v-on:del-item="deleteItem" />
    <router-view />
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";
import AddItem from "@/components/AddItem";
// import axios from "axios";
export default {
  name: "home",
  components: {
    ItemList,
    AddItem,
  },
  data() {
    return {
      itemList: [
        {
          itemname: "item one",
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0OprMbD5BzsQE65g0SQBHxIog7T2CxSdpQ&usqp=CAU",
          available: true,
        },
      ],
    };
  },
  methods: {
    // deleteItem(itemid) {
    //   axios
    //     .delete(`http://localhost:5000/api/items/${id}`)
    //     .then(
    //       (res) =>
    //         (this.itemList = this.itemList.filter(
    //           (item) => item.itemid !== itemid
    //         ))
    //     )
    //     .catch((err) => console.log(err));
    // },
    // addItem(newItem) {
    //   const { itemname, available } = newItem;
    //   axios
    //     .post("http://localhost:5000/api/items", {
    //       itemname,
    //       available,
    //     })
    //     .then((res) => (this.itemList = [...this.itemList, res.data]))
    //     .catch((err) => console.log(err));
    // },
  },
  // created() {
  //   axios
  //     .get("http://localhost:5000/api/items")
  //     // .then((res) => res.json())
  //     .then((res) => (this.itemList = res.data))
  //     .catch((err) => console.log(err));
  // },
  // mounted() {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
