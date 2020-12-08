<template>
  <div id="all" ref="all">
    <el-card class="box-card" id="card" ref="card">
      <div class="text item">
        <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
          <el-form-item label="email" prop="email">
            <el-input v-model="ruleForm.email" clearable></el-input>
          </el-form-item>

          <el-form-item label="password" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              clearable
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              type="success"
              icon="el-icon-check"
              size="small"
              @click="login_submitForm()"
            ></el-button>
            <el-button
              type="primary"
              icon="el-icon-plus"
              size="small"
              @click="updateWebmsg()"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-close"
              size="small"
              @click="closeWindow()"
            ></el-button>
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          </el-form-item>
        </el-form>

        <vue-json-editor
          style="height: 60vh"
          v-model="someMsg.username"
          :show-btns="false"
          :mode="'text'"
          lang="zh"
          @json-change="onJsonChange"
          @json-save="onJsonSave"
          @has-error="onError"
        ></vue-json-editor>
      </div>
    </el-card>

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

              <el-button
                slot="append"
                icon="el-icon-edit"
                @click="openCard"
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
    <!-- <h2 id="talk" ref="talk">{{soup}}</h2>  -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import vueJsonEditor from "vue-json-editor";

export default {
  name: "app",
  data() {
    return {
      someMsg: { username: "" },
      currentDate: new Date(),
      activeIndex: "/",
      search: "",
      temp: 0,
      // famous: {
      //   author: "",
      //   content: ""
      // },
      // soup: "",
      bgFlag: false,
      ruleForm: {
        email: "1620142017@qq.com",
        password: "123456",
      },
    };
  },
  components: {
    vueJsonEditor,
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

    this.$http({
      method: "get",
      url: "/api/getWebmsg",
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          this.someMsg.username = JSON.stringify(res.data);
          // _this.webMsg = res.data;
        } else {
          console.log(res.status);
        }
      })
      .then(() => {
        this.someMsg.username = JSON.parse(this.someMsg.username);
      })
      .catch((error) => {
        console.log(error);
      });

    // this.getFamous();
    // this.getSoup();
    setTimeout(() => {
      this.$refs.talk.style.cssText = "opacity: 0;transition: ease-in-out 0.5s;";
    }, 5000);

    // this.login_submitForm();
    // this.updateWebmsg();
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
        "filter:  hue-rotate(" + deg + "deg) saturate(100%) invert(100%);";
    } else {
      this.bgFlag = false;
      console.log("浮白");
      this.$refs.app.style.cssText =
        "filter:  hue-rotate(" + deg + "deg) saturate(100%);";
    }
  },

  methods: {
    ...mapMutations(["changeLogin"]),

    login_submitForm() {
      let _this = this;

      this.$http({
        method: "post",
        url: "/api/login",
        withCredentials: true,
        data: this.ruleForm,
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            _this.changeLogin({
              Authorization: "Bearer" + " " + res.data.token,
            });
            this.$message({
              type: "success",
              message: "登录成功！",
              center: true,
            });
            this.someMsg.username = JSON.parse(this.someMsg.username);
          } else {
            this.$message({
              type: "error",
              message: "登录失败！",
              center: true,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$message({
            type: "error",
            message: "登录失败！",
            center: true,
          });
        });
    },

    updateWebmsg() {
      // console.log(this.someMsg.username);
      // this.someMsg.username = {
      //   row_1: [
      //     {
      //       name: "自由",
      //     },
      //     {
      //       name: "阿里云",
      //       url:
      //         "https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fecs.console.aliyun.com%2F%3Fspm%3D5176.100251.aliyun_sidebar.aliyun_sidebar_ecs.4a964f15U7DGmJ#/server/i-uf64qx9sb0rvj7fxlfhj/detail?regionId=cn-shanghai",
      //     },
      //     {
      //       name: "码云",
      //       url: "https://gitee.com/",
      //     },
      //     {
      //       name: "Github",
      //       url: "https://github.com/",
      //     },
      //     {
      //       name: "Flatuicolors",
      //       url: "https://flatuicolors.com/palette/cn",
      //     },
      //     {
      //       name: "FrontEndCDN",
      //       url: "https://www.jq22.com/jquery/jquery.html",
      //     },
      //     {
      //       name: "bootstrap",
      //       url: "https://www.runoob.com/try/bootstrap/layoutit/",
      //     },
      //     {
      //       name: "CSSES",
      //       url: "https://emilkowalski.github.io/css-effects-snippets/",
      //     },
      //   ],
      //   row_2: [
      //     {
      //       name: "勇敢",
      //     },
      //     {
      //       name: "斗鱼",
      //       url: "https://www.douyu.com/directory/myFollow",
      //     },
      //     {
      //       name: "豆瓣Top250",
      //       url: "https://movie.douban.com/top250",
      //     },
      //     {
      //       name: "字幕库",
      //       url: "http://www.zimuku.la/",
      //     },
      //     {
      //       name: "音范丝",
      //       url: "http://www.yinfans.me/",
      //     },
      //     {
      //       name: "超星云盘",
      //       url: "http://pan-yz.chaoxing.com/",
      //     },
      //     {
      //       name: "聚合BT",
      //       url: "https://jubt.cf/cn/index.html",
      //     },
      //     {
      //       name: "健康提交",
      //       url: "http://ijg.xujc.com/app/213",
      //     },
      //   ],
      //   row_3: [
      //     {
      //       name: "真诚",
      //     },
      //     {
      //       name: "吾爱破解",
      //       url: "https://www.52pojie.cn/",
      //     },
      //     {
      //       name: "芊芊经典",
      //       url: "https://www.myqqjd.com/",
      //     },
      //     {
      //       name: "蓝奏云",
      //       url: "http://www.lanzou.com/u",
      //     },
      //     {
      //       name: "百度云",
      //       url: "https://pan.baidu.com/disk/home?#/all?path=%2F&vmode=list",
      //     },
      //     {
      //       name: "睿派克",
      //       url: "https://www.repaik.com/",
      //     },
      //     {
      //       name: "MSDN",
      //       url: "https://msdn.itellyou.cn/",
      //     },
      //     {
      //       name: "微PE",
      //       url: "http://www.wepe.com.cn/",
      //     },
      //   ],
      //   row_4: [
      //     {
      //       name: "善良",
      //     },
      //     {
      //       name: "Bilibili",
      //       url: "http://www.bilibili.com",
      //     },
      //     {
      //       name: "Bimibimi",
      //       url: "http://www.bimibimi.tv/",
      //     },
      //     {
      //       name: "Dilidili",
      //       url: "http://www.dilidili.name/",
      //     },
      //     {
      //       name: "Pikabika",
      //       url: "https://www.pikabika.com/",
      //     },
      //     {
      //       name: "琉璃神社",
      //       url: "http://www.llss.cz/",
      //     },
      //     {
      //       name: "VCB-Studio",
      //       url: "https://vcb-s.com/",
      //     },
      //     {
      //       name: "动漫花园",
      //       url: "https://share.dmhy.org/",
      //     },
      //   ],
      //   row_5: [
      //     {
      //       name: "温柔",
      //     },
      //     {
      //       name: "果汁排行",
      //       url: "http://guozhivip.com/rank/",
      //     },
      //     {
      //       name: "AnyKnew",
      //       url: "https://www.anyknew.com/",
      //     },
      //     {
      //       name: "翻墙后",
      //       url: "https://fanqianghou.com/",
      //     },
      //     {
      //       name: "今日热榜",
      //       url: "https://tophub.today/",
      //     },
      //     {
      //       name: "知乎热榜",
      //       url: "https://www.zhihu.com/billboard",
      //     },
      //     {
      //       name: "新浪热榜",
      //       url: "https://s.weibo.com/top/summary?cate=realtimehot",
      //     },
      //     {
      //       name: "IT之家",
      //       url: "https://www.ithome.com/",
      //     },
      //   ],
      //   row_6: [
      //     {
      //       name: "坚强",
      //     },
      //     {
      //       name: "Gtranslate",
      //       url: "http://translate.google.cn",
      //     },
      //     {
      //       name: "QQ邮箱",
      //       url: "http://mail.qq.com",
      //     },
      //     {
      //       name: "文档搜索",
      //       url: "https://jiumodiary.com",
      //     },
      //     {
      //       name: "大力搜索",
      //       url: "https://www.dalipan.com/",
      //     },
      //     {
      //       name: "文件测毒",
      //       url: "http://www.virscan.org/language/zh-cn/",
      //     },
      //     {
      //       name: "菜鸟工具",
      //       url: "https://c.runoob.com/",
      //     },
      //     {
      //       name: "密码检测",
      //       url: "https://howsecureismypassword.net/",
      //     },
      //   ],
      //   row_7: [
      //     {
      //       name: "独立",
      //     },
      //     {
      //       name: "教务系统",
      //       url: "http://jw.xujc.com/",
      //     },
      //     {
      //       name: "文件系统",
      //       url: "http://teach.xujc.com/index.php?c=Teacher",
      //     },
      //     {
      //       name: "XUJCOJ",
      //       url: "http://xujcoj.org",
      //     },
      //     {
      //       name: "嘉庚官网",
      //       url: "https://www.jgxy.xmu.edu.cn/",
      //     },
      //     {
      //       name: "信院官网",
      //       url: "http://sist.xujc.com/",
      //     },
      //     {
      //       name: "实就中心",
      //       url: "http://career.xujc.com/main.htm",
      //     },
      //     {
      //       name: "学生用表",
      //       url: "http://jwb.xujc.com/2016/1229/c3426a50705/page.htm",
      //     },
      //   ],
      //   row_8: [
      //     {
      //       name: "上进",
      //     },
      //     {
      //       name: "wallpaper",
      //       url: "http://wallpaperswide.com/",
      //     },
      //     {
      //       name: "Bigjpg",
      //       url: "http://www.bigjpg.com/",
      //     },
      //     {
      //       name: "图转base64",
      //       url: "https://www.css-js.com/tools/base64.html",
      //     },
      //     {
      //       name: "免扣素材",
      //       url: "http://www.996pic.com",
      //     },
      //     {
      //       name: "快速抠图",
      //       url: "https://www.gaoding.com/koutu?hmsr=zc998",
      //     },
      //     {
      //       name: "IMG",
      //       url: "https://www.iloveimg.com/zh-cn",
      //     },
      //     {
      //       name: "在线润色",
      //       url: "http://makeup.pho.to/zh/",
      //     },
      //   ],
      // };

      var obj = new Object();
      if (typeof this.someMsg.username == typeof obj) {
        this.someMsg.username = JSON.stringify(this.someMsg.username);
      }
      this.$http({
        method: "post",
        url: "/api/updateWebmsg",
        withCredentials: true,
        data: this.someMsg,
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            this.$message({
              type: "success",
              message: "修改成功！",
              center: true,
            });
            setTimeout(function () {
              window.location.href = "/";
            }, 800);
          } else {
            this.$message({
              type: "error",
              message: "您未成功登陆获取token！",
              center: true,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$message({
            type: "error",
            message: "您未成功登陆获取token！",
            center: true,
          });
        });
    },

    onSubmit() {
      window.open("https://www.bing.com/search?q=" + this.search, "_blank");
      this.search = "";
    },

    openCard() {
      //  console.log(this.$refs.card.$el.style.cssText)
      if (this.temp % 2 == 0) {
        this.$refs.card.$el.style.cssText = "display: block";
      } else this.$refs.card.$el.style.cssText = "display: none";
      this.temp++;
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

    onJsonChange(value) {
      console.log("value:", value);
    },
    onJsonSave(value) {
      console.log("value:", value);
    },
    onError(value) {
      console.log("value:", value);
    },
    closeWindow() {
      this.$refs.card.$el.style.cssText = "display: none";
      this.temp = 2;
    },
    // getFamous() {
    //   this.$http
    //     .get("https://v1.alapi.cn/api/mingyan?typeid=40")
    //     .then(
    //       response => {
    //         // console.log(response.data.data);
    //         this.famous = response.data.data;
    //         this.famous.author += "：";
    //       },
    //       err => {
    //         console.log(err);
    //       }
    //     )
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
    // getSoup() {
    //   this.$http
    //     .get("https://v1.alapi.cn/api/soul")
    //     .then(
    //       response => {
    //         this.soup = response.data.data.title;
    //       },
    //       err => {
    //         console.log(err);
    //       }
    //     )
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
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
  },
};
</script>

<style scope>
@import "./css/App.css";
</style>
