<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <button type="text" @click="kkse">点击打开 Dialog</button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-button type="text" @click="dialogV">点击打开 Dialog</el-button>
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
  public handleClose(done: any) {
    this.$confirm('确认关闭？')
      .then((_) => {
        done();
      })
      .catch((_) => {
        return;
      });
  }
  public dialogV() {
    return this.msg;
  }
}
</script>