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
          name: "煎蛋",
          url: "https://jandan.net/"
        },
        {
          name: "果壳",
          url: "https://www.guokr.com/"
        },
        {
          name: "堆糖",
          url: "https://www.duitang.com/"
        },
        {
          name: "糗事百科",
          url: "https://www.qiushibaike.com/"
        },
        {
          name: "暴走漫画",
          url: "http://baozou.com/"
        },
        {
          name: "百思不得姐",
          url: "http://www.budejie.com/"
        },
        {
          name: "好奇心日报",
          url: "http://www.qdaily.com/"
        }
      ],
      row_2: [
        {
          name: "影视",
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
          name: "乐视视频",
          url: "http://www.le.com/"
        },
        {
          name: "芒果TV",
          url: "https://www.mgtv.com/"
        },
        {
          name: "央视网",
          url: "http://tv.cctv.com/"
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/"
        }
      ],
      row_3: [
        {
          name: "直播",
        },
        {
          name: "斗鱼直播",
          url: "https://www.douyu.com/"
        },
        {
          name: "YY直播",
          url: "https://www.yy.com/"
        },
        {
          name: "虎牙直播",
          url: "https://www.huya.com/"
        },
        {
          name: "花椒直播",
          url: "http://www.huajiao.com/"
        },
        {
          name: "企鹅电竞",
          url: "https://egame.qq.com/"
        },
        {
          name: "一直播",
          url: "https://www.yizhibo.com/"
        },
        {
          name: "Twitch",
          url: "https://www.twitch.tv/"
        }
      ],
      row_4: [
        {
          name: "动漫",
        },
        {
          name: "哔哩哔哩",
          url: "https://www.bilibili.com/"
        },
        {
          name: "AcFun",
          url: "http://www.acfun.cn/"
        },
        {
          name: "嘀哩嘀哩",
          url: "http://www.dilidili.name/"
        },
        {
          name: "半次元",
          url: "https://bcy.net/"
        },
        {
          name: "网易漫画",
          url: "https://manhua.163.com/"
        },
        {
          name: "有妖气",
          url: "http://u17.com/"
        },
        {
          name: "萌娘百科",
          url: "https://zh.moegirl.org/"
        }
      ],
      row_5: [
        {
          name: "游戏"
        },
        {
          name: "Steam",
          url: "https://store.steampowered.com/"
        },
        {
          name: "游民星空",
          url: "http://www.gamersky.com/"
        },
        {
          name: "口袋巴士",
          url: "http://www.tgbus.com/"
        },
        {
          name: "17173",
          url: "https://www.17173.com/"
        },
        {
          name: "多玩游戏",
          url: "http://www.duowan.com/"
        },
        {
          name: "3DM",
          url: "https://www.3dmgame.com/"
        },
        {
          name: "橙光游戏",
          url: "http://www.66rpg.com/"
        }
      ],
      row_6: [
        {
          name: "音乐",
        },
        {
          name: "网易云音乐",
          url: "https://music.163.com/"
        },
        {
          name: "虾米音乐",
          url: "https://www.xiami.com/"
        },
        {
          name: "QQ音乐",
          url: "https://y.qq.com/"
        },
        {
          name: "豆瓣FM",
          url: "https://douban.fm/"
        },
        {
          name: "喜马拉雅FM",
          url: "https://www.ximalaya.com/"
        },
        {
          name: "音悦Tai",
          url: "http://www.yinyuetai.com/"
        },
        {
          name: "5sing原创",
          url: "http://5sing.kugou.com/"
        }
      ],
      row_7: [
        {
          name: "体育",
        },
        {
          name: "腾讯体育",
          url: "http://sports.qq.com/"
        },
        {
          name: "网易体育",
          url: "http://sports.163.com/"
        },
        {
          name: "新浪体育",
          url: "http://sports.sina.com.cn/"
        },
        {
          name: "央视体育",
          url: "http://sports.cctv.com/"
        },
        {
          name: "乐视体育",
          url: "http://www.lesports.com/"
        },
        {
          name: "直播吧",
          url: "https://www.zhibo8.cc/"
        },
        {
          name: "虎扑",
          url: "https://www.zhibo8.cc/"
        }
      ],
      row_8: [
        {
          name: "小说"
        },
        {
          name: "起点中文网",
          url: "https://www.qidian.com/"
        },
        {
          name: "纵横中文网",
          url: "http://www.zongheng.com/"
        },
        {
          name: "红袖添香",
          url: "https://www.hongxiu.com/"
        },
        {
          name: "豆瓣阅读",
          url: "https://read.douban.com/"
        },
        {
          name: "网易云阅读",
          url: "http://yuedu.163.com/"
        },
        {
          name: "鲸鱼阅读",
          url: "http://www.jingyu.com/"
        },
        {
          name: "片刻",
          url: "http://pianke.me/"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "../css/cmpnt.css";

</style>

