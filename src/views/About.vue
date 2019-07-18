<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <button type="text" @click="kkse">点击打开 Dialog</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  private msg: string = 'This is an about page';
  private dialogVisible = false;

  public kkse() {
    alert(111);
  }
  public dialogV() {
    return this.msg;
  }
}
</script>