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
      </el-col>
      <span>▷</span>
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
      </el-col>
      <span>▷</span>
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
      </el-col>
      <span>▷</span>
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
      </el-col>
      <span>▷</span>
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
      </el-col>
      <span>▷</span>
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
      </el-col>
      <span>▷</span>
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
      </el-col>
      <span>▷</span>
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
      </el-col>
      <span>▷</span>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      row_1: [
        {
          name: "自由"
        },
        {
          name: "阿里云",
          url:
            "https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fecs.console.aliyun.com%2F%3Fspm%3D5176.100251.aliyun_sidebar.aliyun_sidebar_ecs.4a964f15U7DGmJ#/server/i-uf64qx9sb0rvj7fxlfhj/detail?regionId=cn-shanghai"
        },
        {
          name: "码云",
          url: "https://gitee.com/"
        },
        {
          name: "Github",
          url: "https://github.com/"
        },
        {
          name: "Flatuicolors",
          url: "https://flatuicolors.com/palette/cn"
        },
        {
          name: "FrontEndCDN",
          url: "https://www.jq22.com/jquery/jquery.html"
        },
        {
          name: "bootstrap",
          url: "https://www.runoob.com/try/bootstrap/layoutit/"
        },
        {
          name: "CSSES",
          url: "https://emilkowalski.github.io/css-effects-snippets/"
        }
      ],
      row_2: [
        {
          name: "勇敢"
        },
        {
          name: "斗鱼",
          url: "https://www.douyu.com/directory/myFollow"
        },
        {
          name: "豆瓣Top250",
          url: "https://movie.douban.com/top250"
        },
        {
          name: "字幕库",
          url: "http://www.zimuku.la/"
        },
        {
          name: "音范丝",
          url: "http://www.yinfans.me/"
        },
        {
          name: "超星云盘",
          url: "http://pan-yz.chaoxing.com/"
        },
        {
          name: "聚合BT",
          url: "https://jubt.cf/cn/index.html"
        },
                {
          name: "健康提交",
          url: "http://ijg.xujc.com/app/213"
        },
      ],
      row_3: [
        {
          name: "真诚"
        },
        {
          name: "吾爱破解",
          url: "https://www.52pojie.cn/"
        },
        {
          name: "芊芊经典",
          url: "https://www.myqqjd.com/"
        },
        {
          name: "蓝奏云",
          url: "http://www.lanzou.com/u"
        },
        {
          name: "百度云",
          url: "https://pan.baidu.com/disk/home?#/all?path=%2F&vmode=list"
        },
        {
          name: "睿派克",
          url: "https://www.repaik.com/"
        },
        {
          name: "MSDN",
          url: "https://msdn.itellyou.cn/"
        },
        {
          name: "微PE",
          url: "http://www.wepe.com.cn/"
        }
      ],
      row_4: [
        {
          name: "善良"
        },
        {
          name: "Bilibili",
          url: "http://www.bilibili.com"
        },
        {
          name: "Bimibimi",
          url: "http://www.bimibimi.tv/"
        },
        {
          name: "Dilidili",
          url: "http://www.dilidili.name/"
        },
        {
          name: "Pikabika",
          url: "https://www.pikabika.com/"
        },
        {
          name: "琉璃神社",
          url: "http://www.llss.cz/"
        },
        {
          name: "VCB-Studio",
          url: "https://vcb-s.com/"
        },
        {
          name: "动漫花园",
          url: "https://share.dmhy.org/"
        }
      ],
      row_5: [
        {
          name: "温柔"
        },
        {
          name: "果汁排行",
          url: "http://guozhivip.com/rank/"
        },
        {
          name: "AnyKnew",
          url: "https://www.anyknew.com/"
        },
        {
          name: "翻墙后",
          url: "https://fanqianghou.com/"
        },
        {
          name: "今日热榜",
          url: "https://tophub.today/"
        },
        {
          name: "知乎热榜",
          url: "https://www.zhihu.com/billboard"
        },
        {
          name: "新浪热榜",
          url: "https://s.weibo.com/top/summary?cate=realtimehot"
        },
        {
          name: "IT之家",
          url: "https://www.ithome.com/"
        }
      ],
      row_6: [
        {
          name: "坚强"
        },
        {
          name: "Gtranslate",
          url: "http://translate.google.cn"
        },
        {
          name: "QQ邮箱",
          url: "http://mail.qq.com"
        },
        {
          name: "文档搜索",
          url: "https://jiumodiary.com"
        },
        {
          name: "大力搜索",
          url: "https://www.dalipan.com/"
        },
        {
          name: "文件测毒",
          url: "http://www.virscan.org/language/zh-cn/"
        },
        {
          name: "菜鸟工具",
          url: "https://c.runoob.com/"
        },
        {
          name: "密码检测",
          url: "https://howsecureismypassword.net/"
        }
      ],
      row_7: [
        {
          name: "独立"
        },
        {
          name: "教务系统",
          url: "http://jw.xujc.com/"
        },
        {
          name: "文件系统",
          url: "http://teach.xujc.com/index.php?c=Teacher"
        },
        {
          name: "XUJCOJ",
          url: "http://xujcoj.org"
        },
        {
          name: "嘉庚官网",
          url: "https://www.jgxy.xmu.edu.cn/"
        },
        {
          name: "信院官网",
          url: "http://sist.xujc.com/"
        },
        {
          name: "实就中心",
          url: "http://career.xujc.com/main.htm"
        },
        {
          name: "学生用表",
          url: "http://jwb.xujc.com/2016/1229/c3426a50705/page.htm"
        }
      ],
      row_8: [
        {
          name: "上进"
        },
        {
          name: "wallpaper",
          url: "http://wallpaperswide.com/"
        },
        {
          name: "Bigjpg",
          url: "http://www.bigjpg.com/"
        },
        {
          name: "图转base64",
          url: "https://www.css-js.com/tools/base64.html"
        },
        {
          name: "免扣素材",
          url: "http://www.996pic.com"
        },
        {
          name: "快速抠图",
          url: "https://www.gaoding.com/koutu?hmsr=zc998"
        },
        {
          name: "IMG",
          url: "https://www.iloveimg.com/zh-cn"
        },
        {
          name: "在线润色",
          url: "http://makeup.pho.to/zh/"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "../css/cmpnt.css";
</style>


