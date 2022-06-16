/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "vue/types/vue" {
  import VueRouter, { Route } from "vue-router";

  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}

interface ResponseBody {
  code: string;
  success: boolean;
  message: string;
  type: string;
  data?: any;
}

interface ResponseBodyNoError {
  code: string;
  success: boolean;
  message: string;
  type: string;
  data: Array;
}

interface ResponsePersonal {
  code: number;
  data: Array<ResponsePersonalNoError>;
  success: boolean;
  type: string;
}

interface ResponsePersonalNoError {
  username: string;
  sex: number;
  birth: number;
  introduction: string;
  location: string;
}

