<template>
  <div class="home">
    <ProfileToolbarComponent></ProfileToolbarComponent>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <LoginComponent></LoginComponent>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import ProfileToolbarComponent from '@/components/ProfileToolbarComponent.vue';

@Options({
  components: {
    HelloWorld,
    LoginComponent,
    ProfileToolbarComponent
  },
})
export default class HomeView extends Vue {
}
</script>
