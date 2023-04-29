<template>
  <div>
    <h1>Авторизация</h1>
    <div class="box">
      <input v-model="loginRequest.login" placeholder="login" class="email">
      <input v-model="loginRequest.password" type="password" placeholder="password" class="email">

      <a href="#" @click="authAction">
        <div class="btn">Sign In</div>
      </a>
      <a href="#">
        <div id="btn2">Sign Up</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Model, Vue} from "vue-facing-decorator";

@Component
export default class LoginComponent extends Vue {
  loginRequest = {
    login: '',
    password: ''
  }

  authAction() {
    console.log(this.loginRequest.login)
    console.log(this.loginRequest.password)
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.5em;
  color: #525252;
}

.box {
  background: #1a1a1a;
  width: 300px;
  border-radius: 6px;
  margin: 0 auto 0 auto;
  padding: 0px 0px 70px 0px;
}

.email {
  background: #ecf0f1;
  border: #ccc 1px solid;
  border-bottom: #ccc 2px solid;
  padding: 8px;
  width: 250px;
  color: #AAAAAA;
  margin-top: 10px;
  font-size: 1em;
  border-radius: 4px;
}

.password {
  border-radius: 4px;
  background: #ecf0f1;
  border: #ccc 1px solid;
  padding: 8px;
  width: 250px;
  font-size: 1em;
}

.btn {
  background: #2ecc71;
  width: 125px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  border-radius: 4px;
  border: #27ae60 1px solid;

  margin-top: 20px;
  margin-bottom: 20px;
  float: left;
  margin-left: 16px;
  font-weight: 800;
  font-size: 0.8em;
}

.btn:hover {
  background: #2CC06B;
}

#btn2 {
  float: left;
  background: #3498db;
  width: 125px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  border-radius: 4px;
  border: #2980b9 1px solid;

  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  font-weight: 800;
  font-size: 0.8em;
}

#btn2:hover {
  background: #3594D2;
}
</style>