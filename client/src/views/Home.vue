<template>
  <div id="app">
    <ItemList v-bind:itemList="itemList" v-on:del-item="deleteItem" />
    <AddItem v-on:add-item="addItem" />

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
      itemList: [],
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
    // deleteTask(itemid) {
    //   // delete item from database
    //   fetch("/api/items/" + itemid, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((res) => {
    //       this.itemList = this.itemList.filter(
    //         (item) => item.itemid !== itemid
    //       );
    //     })
    //     .catch((err) => console.log(err));
    // },
    // addItem(newItem) {
    //   this.itemList = [...this.itemList, newItem];
    // },
    addItem(newItem) {
      const { itemname, url, price, available, userid, free_items } = newItem;
      fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          itemname,
          url,
          price,
          available,
          userid,
          free_items,
        }),
      })
        // Continue fetch request here
        .then((res) => {
          this.itemList = [...this.itemList, res.data];
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    console.log("mounted", this.itemList);
    this.getItemList();
    this.addItem();
  },
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
  background-color: rebeccapurple;
}
</style>
