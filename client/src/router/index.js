import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Bwyd from "../views/Bwyd.vue";
import Item from "@/components/Item.vue";
import AddOrder from "@/components/AddOrder.vue";
import OrderList from "@/components/OrderList.vue";
import ItemList from "@/components/ItemList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/bwyd",
    name: "bwyd",
    component: Bwyd
  },
  {
    path: "/item",
    name: "Item",
    component: Item
  },
  {
    path: "/items",
    name: "itemList",
    component: ItemList
  },
  {
    path: "/orders",
    name: "addOrder",
    component: AddOrder
  },
  {
    path: "/orders",
    name: "orderList",
    component: OrderList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
