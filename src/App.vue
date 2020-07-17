<template >
  <div id="all" ref="all">
    <div id="app" v-title data-title="NeiVei" ref="app">
      <el-tooltip class="item" effect="light" content="点击切换主题" placement="top">
        <h2 id="NeiVei" @click="submitInfo">NeiVei</h2>
      </el-tooltip>
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

    <!-- <h2 id="talk" ref="talk">{{famous.author}}{{famous.content}}</h2>-->
    <h2 id="talk" ref="talk">{{soup}}</h2> 
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
      famous: {
        author: "",
        content: ""
      },
      soup: "",
      bgFlag: false
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

    // this.getFamous();
    this.getSoup();
    setTimeout(() => {
      this.$refs.talk.style.cssText =
        "opacity: 0;transition: ease-in-out 0.5s;";
    }, 5000);
  },
  mounted() {
    var hour = new Date().getHours();
    var deg = Math.floor(Math.random() * 360).toString();
    console.log(hour + "点");
    if (hour >= 18 || hour < 6) {
      this.bgFlag = true;
      console.log("入夜");
      // this.$refs.all.style.cssText = "background-color: #202124!important";
      this.$refs.app.style.cssText =
        "filter:  hue-rotate(" +
        deg +
        "deg) saturate(100%) invert(100%);";
    } else {
      this.bgFlag = false;
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
      this.bgFlag = !this.bgFlag;
      if (this.bgFlag) {
        var hour = new Date().getHours();
        var deg = Math.floor(Math.random() * 360).toString();
        console.log(hour + "点");
        console.log("入夜");
        // this.$refs.all.style.cssText = "background-color: #202124!important";
        this.$refs.app.style.cssText =
          "filter:  hue-rotate(" + deg + "deg) saturate(100%) invert(100%);";
      } else {
        console.log("浮白");
        this.$refs.app.style.cssText =
          "filter:  hue-rotate(" + deg + "deg) saturate(100%);";
      }
    },
    getFamous() {
      this.$http
        .get("https://v1.alapi.cn/api/mingyan?typeid=40")
        .then(
          response => {
            // console.log(response.data.data);
            this.famous = response.data.data;
            this.famous.author += "：";
          },
          err => {
            console.log(err);
          }
        )
        .catch(error => {
          console.log(error);
        });
    },
    getSoup() {
      this.$http
        .get("https://v1.alapi.cn/api/soul")
        .then(
          response => {
            this.soup = response.data.data.title;
          },
          err => {
            console.log(err);
          }
        )
        .catch(error => {
          console.log(error);
        });
    }
    // openWindow() {
    //   this.submitInfo()
    //   this.$prompt("你有什么想对我说的🐴？", "提示", {
    //     confirmButtonText: "确认",
    //     cancelButtonText: "取消",
    //     center: true,
    //     showCancelButton: false,
    //     confirmButtonClass: "confirmButtonClass",
    //     customClass: "customClass",
    //     showClose: false
    //   })
    //     .then(({ value }) => {
    //       this.$message({
    //         type: "success",
    //         message: "感谢您的评论！"
    //       });
    //       if (value) {
    //         this.params.info = value;
    //         this.submitInfo();
    //       }
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "取消"
    //       });
    //     });
    // }
  }
};
</script>

<style scope>
@import "./css/App.css";
</style>

