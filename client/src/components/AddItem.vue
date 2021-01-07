<template>
  <div>
    <b-form @submit="addItem">
      <b-form-group label="Item Name:">
        <b-form-input
          type="text"
          v-model="itemname"
          name="itemname"
          placeholder="Add Item..."
        />
      </b-form-group>
      <b-form-group label="URL:">
        <b-form-input
          type="text"
          name="url"
          v-model="url"
          placeholder="Add URL..."
      /></b-form-group>
      <b-form-group label="URL:">
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import uuid from "uuid";
export default {
  name: "AddItem",
  data() {
    return {
      itemname: "",
      url: "",
    };
  },
  methods: {
    addItem(e) {
      e.preventDefault();
      const newItem = {
        itemid: uuid.v4(),
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
</style>