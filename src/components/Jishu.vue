<template>
  <div>
    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link,index) in row_1"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{link.name}}</div>
        </a>
      </el-col><span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link,index) in row_2"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{link.name}}</div>
        </a>
      </el-col><span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link,index) in row_3"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{link.name}}</div>
        </a>
      </el-col><span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link,index) in row_4"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{link.name}}</div>
        </a>
      </el-col><span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link,index) in row_5"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{link.name}}</div>
        </a>
      </el-col><span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link,index) in row_6"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{link.name}}</div>
        </a>
      </el-col><span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link,index) in row_7"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{link.name}}</div>
        </a>
      </el-col><span>▷</span>
    </el-row>

    <el-row :gutter="10">
      <el-col
        class="col_1"
        v-for="(link,index) in row_8"
        :key="index"
        :xs="6"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <a v-bind:href="link.url" target="_blank">
          <div class="grid-content bg-purple">{{link.name}}</div>
        </a>
      </el-col><span>▷</span>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      row_1: [
        {
          name: "发现"
        },
        {
          name: "V2EX",
          url: "https://www.v2ex.com/"
        },
        {
          name: "掘金",
          url: "https://juejin.im/"
        },
        {
          name: "开源中国",
          url: "https://www.oschina.net/"
        },
        {
          name: "CSDN",
          url: "https://www.csdn.net/"
        },
        {
          name: "infoQ",
          url: "http://www.infoq.com/cn/"
        },
        {
          name: "NEXT",
          url: "http://next.36kr.com/"
        },
        {
          name: "HackerNews",
          url: "https://news.ycombinator.com/"
        }
      ],
      row_2: [
        {
          name: "数码",
        },
        {
          name: "数字尾巴",
          url: "http://www.dgtle.com/"
        },
        {
          name: "爱范儿",
          url: "https://www.ifanr.com/"
        },
        {
          name: "雷锋网",
          url: "https://www.leiphone.com/"
        },
        {
          name: "极客公园",
          url: "http://www.geekpark.net/"
        },
        {
          name: "比特网",
          url: "http://www.chinabyte.com/"
        },
        {
          name: "ZEALER",
          url: "http://www.zealer.com/"
        },
        {
          name: "Engadget",
          url: "https://chinese.engadget.com/"
        }
      ],
      row_3: [
        {
          name: "平台",
        },
        {
          name: "GitHub",
          url: "https://github.com/"
        },
        {
          name: "Coding",
          url: "https://coding.net/"
        },
        {
          name: "石墨",
          url: "https://shimo.im/"
        },
        {
          name: "百度脑图",
          url: "http://naotu.baidu.com/"
        },
        {
          name: "CmdMarkdown",
          url: "https://www.zybuluo.com/mdeditor"
        },
        {
          name: "TinyPNG",
          url: "https://tinypng.com/"
        },
        {
          name: "SM.MS图床",
          url: "https://sm.ms/"
        }
      ],
      row_4: [
        {
          name: "工具",
        },
        {
          name: "IP查询",
          url: "https://www.ipip.net/ip.html"
        },
        {
          name: "Speedtest",
          url: "http://www.speedtest.net/"
        },
        {
          name: "17CE",
          url: "https://www.17ce.com/"
        },
        {
          name: "在线工具",
          url: "https://tool.lu/"
        },
        {
          name: "代码格式化",
          url: "https://www.freeformatter.com/"
        },
        {
          name: "临时邮箱",
          url: "https://www.moakt.com/"
        },
        {
          name: "域名比价",
          url: "https://www.domcomp.com/"
        }
      ],
      row_5: [
        {
          name: "文档",
        },
        {
          name: "Microsoft文档",
          url: "https://docs.microsoft.com/zh-cn/"
        },
        {
          name: "Google开发者",
          url: "https://developers.google.com/china/"
        },
        {
          name: "MDN文档",
          url: "https://developer.mozilla.org/zh-CN/"
        },
        {
          name: "W3school",
          url: "http://www.w3school.com.cn/"
        },
        {
          name: "菜鸟教程",
          url: "http://www.runoob.com/"
        },
        {
          name: "Linux命令",
          url: "http://man.linuxde.net/"
        },
        {
          name: "微信小程序",
          url: "https://mp.weixin.qq.com/debug/wxadoc/dev/index.html"
        }
      ],
      row_6: [
        {
          name: "博客",
        },
        {
          name: "阿里UED",
          url: "http://www.aliued.cn/"
        },
        {
          name: "有赞技术",
          url: "https://tech.youzan.com/"
        },
        {
          name: "京东JDC",
          url: "http://jdc.jd.com/"
        },
        {
          name: "腾讯全端",
          url: "http://www.alloyteam.com/"
        },
        {
          name: "百度UED",
          url: "http://ued.baidu.com/"
        },
        {
          name: "人人网FED",
          url: "https://fed.renren.com/"
        },
        {
          name: "阮一峰博客",
          url: "http://www.ruanyifeng.com/"
        }
      ],
      row_7: [
        {
          name: "资源",
        },
        {
          name: "少数派",
          url: "https://sspai.com/"
        },
        {
          name: "数码荔枝",
          url: "https://www.lizhi.io/"
        },
        {
          name: "异次元",
          url: "https://www.iplaysoft.com/"
        },
        {
          name: "Softonic",
          url: "https://en.softonic.com/"
        },
        {
          name: "Macinformer",
          url: "http://macdownload.informer.com/"
        },
        {
          name: "站长下载",
          url: "http://down.chinaz.com/"
        },
        {
          name: "中科大镜像",
          url: "http://mirrors.ustc.edu.cn/"
        }
      ],
      row_8: [
        {
          name: "云端"
        },
        {
          name: "阿里云",
          url: "https://www.aliyun.com/"
        },
        {
          name: "腾讯云",
          url: "https://cloud.tencent.com/"
        },
        {
          name: "AWS",
          url: "https://aws.amazon.com/cn/"
        },
        {
          name: "GoogleCloud",
          url: "https://cloud.google.com/"
        },
        {
          name: "Linode",
          url: "https://www.linode.com/"
        },
        {
          name: "DigitalOcean",
          url: "https://www.digitalocean.com/"
        },
        {
          name: "Bandwagon",
          url: "https://bandwagonhost.com/"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "../css/cmpnt.css";

</style>

