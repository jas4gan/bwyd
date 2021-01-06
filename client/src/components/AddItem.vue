<template>
  <div>
    <form @submit="addItem">
      <input
        type="text"
        v-model="itemname"
        name="itemname"
        placeholder="Add Item..."
      />
      <input type="submit" value="Submit" class="btn btn-secondary" />
    </form>
  </div>
</template>

<script>
// import uuid from "uuid";
export default {
  name: "AddItem",
  data() {
    return {
      itemname: "",
    };
  },
  methods: {
    addItem(e) {
      e.preventDefault();
      const newItem = {
        // itemid: uuid.v4(),
        itemname: this.itemname,
        available: true,
      };
      //Send up to parent
      this.$emit("add-item", newItem);

      this.itemname = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>