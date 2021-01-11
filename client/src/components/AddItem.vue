<template>
  <div>
    <h3>Add New Item</h3>
    <b-form @submit="addItem">
      <b-form-group label="Item Name:">
        <b-form-input
          type="text"
          v-model="itemname"
          name="itemname"
          placeholder="Add Item Name..."
        />
      </b-form-group>
      <b-form-group label="URL:">
        <b-form-input
          type="text"
          name="url"
          v-model="url"
          placeholder="Add URL here..."
      /></b-form-group>
      <b-form-group label="Price:">
        <b-form-input
          type="text"
          name="price"
          v-model="price"
          placeholder="Add price here..."
      /></b-form-group>
      <b-form-group label="Available:">
        <b-form-input
          type="text"
          name="available"
          v-model="available"
          placeholder="0 for not available, 1 for available"
      /></b-form-group>
      <b-form-group label="UserId:">
        <b-form-input
          type="text"
          name="userid"
          v-model="userid"
          placeholder="Add userId here..."
      /></b-form-group>
      <b-form-group label="Free Item:">
        <b-form-input
          type="text"
          name="freeitems"
          v-model="free_items"
          placeholder="Free 1 if number of items sold..."
      /></b-form-group>
      <b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "AddItem",
  data() {
    return {
      itemname: "",
      url: "",
      price: "",
      available: "",
      userid: "",
      free_items: "",
    };
  },
  methods: {
    addItem(e) {
      e.preventDefault();
      const newItem = {
        itemname: this.itemname,
        url: this.url,
        price: this.price,
        available: this.available,
        userid: this.userid,
        free_items: this.free_items,
      };
      //Send up to parent
      this.$emit("add-item", newItem);

      this.itemname = "";
      this.url = "";
      this.price = "";
      this.available = "";
      this.userid = "";
      this.free_items = "";
    },
  },
};
</script>

<style scoped>
h3 {
  padding: 2rem;
}
</style>
