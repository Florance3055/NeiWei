<template >
  <div id="all" ref="all">
    <div id="app" v-title data-title="NeiVei" ref="app">
      <h2 id="NeiVei" @click="openWindow">NeiVei</h2>
      <el-container>
        <el-header>
          <el-form @submit.native.prevent>
            <el-input placeholder="Search" v-model="search" class="input-select">
              <el-button
                slot="append"
                icon="el-icon-search"
                native-type="submit"
                @click="onSubmit"
                class="input-button"
              ></el-button>
            </el-input>
          </el-form>
        </el-header>

        <el-main>
          <el-menu
            :default-active="activeIndex"
            class="taps"
            mode="horizontal"
            router
            text-color="#000000"
          >
            <el-menu-item index="changyong" class="tap">常用</el-menu-item>
            <el-menu-item index="yule" class="tap">娱乐</el-menu-item>
            <el-menu-item index="xuexi" class="tap">学习</el-menu-item>
            <el-menu-item index="shenghuo" class="tap">生活</el-menu-item>
            <el-menu-item index="jishu" class="tap">技术</el-menu-item>
            <el-menu-item index="sheji" class="tap">设计</el-menu-item>
            <el-menu-item index="/" class="tap">分享</el-menu-item>
          </el-menu>

          <router-view id="_component"></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      currentDate: new Date(),
      activeIndex: "/",
      search: "",
      params: {
        name: "",
        info: ""
      }
    };
  },
  created() {
    if (this.$route.path === "/changyong") {
      this.activeIndex = "changyong";
    } else if (this.$route.path === "/yule") {
      this.activeIndex = "yule";
    } else if (this.$route.path === "/xuexi") {
      this.activeIndex = "xuexi";
    } else if (this.$route.path === "/shenghuo") {
      this.activeIndex = "shenghuo";
    } else if (this.$route.path === "/jishu") {
      this.activeIndex = "jishu";
    } else if (this.$route.path === "/sheji") {
      this.activeIndex = "sheji";
    } else if (this.$route.path === "/") {
      this.activeIndex = "/";
    }
  },
  mounted() {
    var hour = new Date().getHours();
    var deg = Math.floor(Math.random() * 360).toString();
    console.log(hour + "点");
    if (hour >= 18 || hour < 6) {
      console.log("入夜");
      this.$refs.all.style.cssText = "background-color: #202124!important";
      this.$refs.app.style.cssText =
        "filter:  hue-rotate(" + deg + "deg) saturate(100%) invert(100%);";
    } else {
      console.log("浮白");
      this.$refs.app.style.cssText =
        "filter:  hue-rotate(" + deg + "deg) saturate(100%);";
    }
  },

  methods: {
    onSubmit() {
      window.open(
        "https://www.baidu.com/s?ie=UTF-8&wd=" + this.search,
        "_blank"
      );
      this.search = "";
    },
    submitInfo() {
      this.$http
        .post("http://47.240.80.23/server.php", this.params)
        .then(
          response => {
            console.log(response);
          },
          err => {
            console.log(err);
          }
        )
        .catch(error => {
          console.log(error);
        });
    },
    openWindow() {
      this.$prompt("你有什么想对我说的🐴？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        center: true,
        showCancelButton: false,
        confirmButtonClass: "confirmButtonClass",
        customClass: "customClass",
        showClose: false
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "感谢您的评论！"
          });
          if (value) {
            this.params.info = value;
            this.submitInfo();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消"
          });
        });
    }
  }
};
</script>

<style scope>
@import "./css/App.css";
</style>

