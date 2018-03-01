import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/page/HelloWorld";
import goods from "@/components/page/goods";
import accountSummary from "@/components/page/accountSummary";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/goods",
      name: "goods",
      component: goods
    },
    {
      path: "/accountSummary",
      name: "accountSummary",
      component: accountSummary
    }
  ]
});
