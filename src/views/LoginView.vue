<template>
  <div class="body_template">
    <LoginComponent></LoginComponent>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import LoginComponent from "@/components/LoginComponent.vue";

@Options({
  components: {
    LoginComponent
  },
})
export default class LoginView extends Vue {
}
</script>

<style scoped>
.body_template {
  font-family: 'Open Sans', sans-serif;
  background: #3498db;
  margin: 0 auto 0 auto;
  width: 100%;
  text-align: center;
  margin: 20px 0px 20px 0px;
}
</style>