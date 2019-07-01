<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg= 'msg' />
    <p>{{ message }}</p>
    <button @click="changeMessage">sss</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Action, Mutation, State} from 'vuex-class';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private msg = 'Welcome to Your Vue.js + TypeScript App';
  private message = 'getthis';
  private cate = 'in_theaters';
  private getListData = [];

  public changeMessage(): void {
    this.message = 'Good bye';
  }
  @Action private movieList!: (cate: string) => any;
  private created() {
    this.movieList( this.cate ).then( (res: any) => {
      this.getListData = res.subjects;
    });
  }
}
</script>
