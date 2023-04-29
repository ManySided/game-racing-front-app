<template>
  <div class="profile_board">
    {{ fullName }}
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-facing-decorator";
import {Action, Getter, State} from "vuex-class/lib/bindings";
import {ProfileState} from "@/store/profile/types";

const namespace = 'profile';

@Component
export default class ProfileToolbarComponent extends Vue {
  @State('profile') profile!: ProfileState;
  @Action('fetchData', {namespace}) fetchData: any;
  @Getter('fullName', {namespace}) fullName!: string;

  mounted() {
    console.log("fetch profile")
    // this.fetchData();
  }

}
</script>

<style scoped>
.profile_board {
  width: 600px;
  height: 70px;
  background-color: darkgray;
  margin-left: auto;
  margin-right: auto;
  vertical-align: top;
}
</style>