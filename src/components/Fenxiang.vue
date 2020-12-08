<template>
  <div id="cpnt">
    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link, index) in webMsg.row_1"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{ link.name }}</div>
        </a>
      </el-col>
      <span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link, index) in webMsg.row_2"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{ link.name }}</div>
        </a>
      </el-col>
      <span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link, index) in webMsg.row_3"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{ link.name }}</div>
        </a>
      </el-col>
      <span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link, index) in webMsg.row_4"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{ link.name }}</div>
        </a>
      </el-col>
      <span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link, index) in webMsg.row_5"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{ link.name }}</div>
        </a>
      </el-col>
      <span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link, index) in webMsg.row_6"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{ link.name }}</div>
        </a>
      </el-col>
      <span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link, index) in webMsg.row_7"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{ link.name }}</div>
        </a>
      </el-col>
      <span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link, index) in webMsg.row_8"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{ link.name }}</div>
        </a>
      </el-col>
      <span>▷</span>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webMsg: {},
    };
  },
  created() {
    let _this = this;
    this.$http({
      method: "get",
      url: "/api/getWebmsg",
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          _this.webMsg =  res.data;
          // _this.webMsg = res.data;
          console.log(_this.webMsg);
        } else {
          console.log(res.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
@import "../css/cmpnt.css";
</style>
