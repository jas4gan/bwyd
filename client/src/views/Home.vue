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

export default {
  name: "home",
  components: {
    ItemList,
    AddItem,
  },
  // computed: {
  //   itemList() {
  //     console.log("computed");
  //     return this.ItemList;
  //   },
  // },
  // mounted() {
  //   fetch("/api/items", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data", data);
  //     })
  //     .catch((err) => console.log(err));
  //   console.log("Created", this.ItemList);
  // },
  data() {
    return {
      itemList: [
        // {
        //   itemid: 1,
        //   itemname: "item one",
        //   url:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0OprMbD5BzsQE65g0SQBHxIog7T2CxSdpQ&usqp=CAU",
        //   available: true,
        // },
        // {
        //   itemid: 2,
        //   itemname: "item two",
        //   url:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0OprMbD5BzsQE65g0SQBHxIog7T2CxSdpQ&usqp=CAU",
        //   available: true,
        // },
        // {
        //   itemid: 3,
        //   itemname: "item three",
        //   url:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0OprMbD5BzsQE65g0SQBHxIog7T2CxSdpQ&usqp=CAU",
        //   available: true,
        // },
        // {
        //   itemid: 4,
        //   itemname: "item four",
        //   url:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0OprMbD5BzsQE65g0SQBHxIog7T2CxSdpQ&usqp=CAU",
        //   available: true,
        // },
      ],
    };
  },
  // beforeMount() {
  //   this.getItem();
  // },
  methods: {
    getItemList() {
      fetch("/api/items", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log("res", response);
          return response.json();
        })
        .then((data) => {
          this.itemList = data;
        })
        .catch((err) => console.log(err));
    },
    deleteItem(itemid) {
      this.itemList = this.itemList.filter((item) => item.itemid !== itemid);
    },
    addItem(newItem) {
      this.itemList = [...this.itemList, newItem];
    },
  },
  mounted() {
    console.log("mounted", this.itemList);
    this.getItemList();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: teal;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
