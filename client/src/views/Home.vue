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

  data() {
    return {
      itemList: [],
    };
  },

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
    // deleteItem(itemid) {
    //   this.itemList = this.itemList.filter((item) => item.itemid !== itemid);
    // },
    deleteItem(itemid) {
      // delete item from database
      fetch("/api/items/" + itemid, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          this.itemList = this.itemList.filter(
            (item) => item.itemid !== itemid
          );
        })
        .catch((err) => console.log(err));
    },
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
          this.getItemList(); //i miss out this line
        })
        .catch((err) => console.log(err));
    },
  },
  // mounted() {
  //   this.getItemList();
  // },
  created() {
    this.getItemList();
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
  background-color: rgb(83, 196, 175);
}
</style>
