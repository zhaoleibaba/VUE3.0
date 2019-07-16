<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld :msg= 'msg' /> -->
    <HelloWorld v-for="blogPost in blogPosts" :post="blogPost" :key="blogPost.title" />
    <p>{{ message }}</p>
    <button @click="changeMessage">sss</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Action, Mutation, State} from 'vuex-class';
import HelloWorld, { Post } from '@/components/HelloWorld.vue';
import { Ajax } from '@/api/index.ts';
import 'reflect-metadata';
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private blogPosts: Post[] = [
    {
      title: 'My first blogpost ever!',
      body: 'Lorem ipsum dolor sit amet.',
      author: 'Elke',
      datePosted: new Date(2019, 1, 18),
    },
    {
      title: 'Look I am blogging!',
      body: 'Hurray for me, this is my second post!',
      author: 'Elke',
      datePosted: new Date(2019, 1, 19),
    },
    {
      title: 'Another one?!',
      body: 'Another one!',
      author: 'Elke',
      datePosted: new Date(2019, 1, 20),
    },
  ];
  private msg = 'Welcome to Your Vue.js + TypeScript App';
  private message = 'getthis';
  private cate = 'in_theaters';
  private getListData = [];

  public changeMessage(): void {
    this.message = 'Good bye';
  }
  // @Action private movieList!: (cate: string) => any;
  private created() {
    Ajax.get(' ').then(res => { 
      console.log(res)
    });
    // this.movieList( this.cate ).then( (res: any) => {
    //   this.getListData = res.subjects;
    // });
  }
}
</script>
