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
          name: "热门"
        },
        {
          name: "百度",
          url: "https://www.baidu.com"
        },
        {
          name: "谷歌",
          url: "https://www.google.com/"
        },
        {
          name: "必应",
          url: "https://cn.bing.com/"
        },
        {
          name: "搜狗",
          url: "https://www.sogou.com/"
        },
        {
          name: "今日头条",
          url: "https://www.toutiao.com/"
        },
        {
          name: "煎蛋",
          url: "https://jandan.net/"
        },
        {
          name: "数字尾巴",
          url: "http://www.dgtle.com/"
        }
      ],
      row_2: [
        {
          name: "社交"
        },
        {
          name: "微博",
          url: "https://www.weibo.com/"
        },
        {
          name: "贴吧",
          url: "https://tieba.baidu.com/"
        },
        {
          name: "知乎",
          url: "https://www.zhihu.com/"
        },
        {
          name: "豆瓣",
          url: "https://www.douban.com/"
        },
        {
          name: "V2EX",
          url: "https://www.v2ex.com/"
        },
        {
          name: "简书",
          url: "https://www.jianshu.com/"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/"
        }
      ],
      row_3: [
        {
          name: "资讯"
        },
        {
          name: "网易",
          url: "https://www.163.com/"
        },
        {
          name: "腾讯",
          url: "http://www.qq.com/"
        },
        {
          name: "新浪",
          url: "http://www.sina.com.cn/"
        },
        {
          name: "搜狐",
          url: "http://www.sohu.com/"
        },
        {
          name: "凤凰网",
          url: "http://www.ifeng.com/"
        },
        {
          name: "人民网",
          url: "http://www.people.com.cn/"
        },
        {
          name: "新华网",
          url: "http://xinhuanet.com/"
        }
      ],
      row_4: [
        {
          name: "购物"
        },
        {
          name: "淘宝",
          url: "https://www.taobao.com/"
        },
        {
          name: "京东",
          url: "https://www.jd.com/"
        },
        {
          name: "亚马逊",
          url: "https://www.amazon.cn/"
        },
        {
          name: "苏宁易购",
          url: "https://www.suning.com/"
        },
        {
          name: "网易严选",
          url: "https://you.163.com/"
        },
        {
          name: "小米商城",
          url: "https://www.mi.com/"
        },
        {
          name: "什么值得买",
          url: "https://www.smzdm.com/"
        }
      ],
      row_5: [
        {
          name: "视频"
        },
        {
          name: "优酷",
          url: "https://www.youku.com/"
        },
        {
          name: "爱奇艺",
          url: "https://www.iqiyi.com/"
        },
        {
          name: "腾讯视频",
          url: "https://v.qq.com/"
        },
        {
          name: "哔哩哔哩",
          url: "https://www.bilibili.com/"
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/"
        },
        {
          name: "斗鱼直播",
          url: "https://www.douyu.com/"
        },
        {
          name: "虎牙直播",
          url: "https://www.huya.com/"
        }
      ],
      row_6: [
        {
          name: "工作"
        },
        {
          name: "领英",
          url: "https://cn.linkedin.com/"
        },
        {
          name: "拉勾网",
          url: "https://www.lagou.com/"
        },
        {
          name: "智联招聘",
          url: "https://www.zhaopin.com/"
        },
        {
          name: "前程无忧",
          url: "https://www.51job.com/"
        },
        {
          name: "应届生",
          url: "http://www.yingjiesheng.com/"
        },
        {
          name: "脉脉",
          url: "https://maimai.cn/"
        },
        {
          name: "酷工作",
          url: "https://www.v2ex.com/?tab=jobs"
        }
      ],
      row_7: [
        {
          name: "生活"
        },
        {
          name: "美团",
          url: "https://www.meituan.com/"
        },
        {
          name: "大众点评",
          url: "https://www.dianping.com/"
        },
        {
          name: "携程",
          url: "https://www.ctrip.com/"
        },
        {
          name: "去哪儿",
          url: "https://www.qunar.com/"
        },
        {
          name: "飞猪",
          url: "https://www.alitrip.com/"
        },
        {
          name: "12306",
          url: "https://kyfw.12306.cn/otn/index/init"
        },
        {
          name: "马蜂窝",
          url: "https://www.mafengwo.cn/"
        }
      ],
      row_8: [
        {
          name: "便捷"
        },
        {
          name: "词典翻译",
          url: "https://fanyi.baidu.com/"
        },
        {
          name: "天气预报",
          url: "http://www.weather.com.cn/live/"
        },
        {
          name: "快递查询",
          url: "https://www.kuaidi100.com/"
        },
        {
          name: "在线转换",
          url: "https://cn.office-converter.com/"
        },
        {
          name: "临时网盘",
          url: "https://send.firefox.com/"
        },
        {
          name: "网页微信",
          url: "https://wx.qq.com/"
        },
        {
          name: "QQ邮箱",
          url: "https://mail.qq.com/"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "../css/cmpnt.css";
</style>


