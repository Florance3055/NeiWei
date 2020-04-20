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
          name: "课程"
        },
        {
          name: "网易公开课",
          url: "https://open.163.com/"
        },
        {
          name: "网易云课堂",
          url: "https://study.163.com/"
        },
        {
          name: "腾讯课堂",
          url: "https://ke.qq.com/"
        },
        {
          name: "中国大学MOOC",
          url: "https://www.icourse163.org/"
        },
        {
          name: "慕课网",
          url: "https://www.imooc.com/"
        },
        {
          name: "极客学院",
          url: "http://www.jikexueyuan.com/"
        },
        {
          name: "爱课程",
          url: "http://www.icourses.cn/"
        }
      ],
      row_2: [
        {
          name: "文库",
        },
        {
          name: "百度文库",
          url: "https://wenku.baidu.com/"
        },
        {
          name: "道客巴巴",
          url: "http://www.doc88.com/"
        },
        {
          name: "豆丁网",
          url: "http://www.docin.com/"
        },
        {
          name: "爱问共享资料",
          url: "http://ishare.iask.sina.com.cn/"
        },
        {
          name: "360DOC",
          url: "http://www.360doc.com/"
        },
        {
          name: "凌风云文库",
          url: "https://wenku.lingfengyun.com/"
        },
        {
          name: "MBA智库",
          url: "http://www.mbalib.com/"
        }
      ],
      row_3: [
        {
          name: "学术",
        },
        {
          name: "谷歌学术",
          url: "https://scholar.google.com/"
        },
        {
          name: "百度学术",
          url: "http://xueshu.baidu.com/"
        },
        {
          name: "必应学术",
          url: "https://cn.bing.com/academic"
        },
        {
          name: "中国知网",
          url: "http://www.cnki.net/"
        },
        {
          name: "万方数据",
          url: "http://www.wanfangdata.com.cn/"
        },
        {
          name: "维普网",
          url: "http://www.cqvip.com/"
        },
        {
          name: "OALib",
          url: "http://www.oalib.com/"
        }
      ],
      row_4: [
        {
          name: "词典",
        },
        {
          name: "汉语词典",
          url: "http://hd.cnki.net/kxhd"
        },
        {
          name: "剑桥词典",
          url: "https://dictionary.cambridge.org/zhs/"
        },
        {
          name: "柯林斯词典",
          url: "https://www.collinsdictionary.com/zh/"
        },
        {
          name: "有道词典",
          url: "https://www.youdao.com/"
        },
        {
          name: "汉典",
          url: "http://www.zdic.net/"
        },
        {
          name: "日中辞典",
          url: "https://cjjc.weblio.jp/"
        },
        {
          name: "韩中词曲",
          url: "https://zh.dict.naver.com/"
        }
      ],
      row_5: [
        {
          name: "资讯",
        },
        {
          name: "腾讯教育",
          url: "http://edu.qq.com/"
        },
        {
          name: "搜狐教育",
          url: "http://learning.sohu.com/"
        },
        {
          name: "新浪教育",
          url: "http://edu.sina.com.cn/"
        },
        {
          name: "中国教育在线",
          url: "http://www.eol.cn/"
        },
        {
          name: "新东方",
          url: "http://www.xdf.cn/"
        },
        {
          name: "沪江英语",
          url: "http://www.hjenglish.com/"
        },
        {
          name: "无忧考网",
          url: "https://www.51test.net/"
        }
      ],
      row_6: [
        {
          name: "模考",
        },
        {
          name: "我要模考",
          url: "http://www.51mokao.com/"
        },
        {
          name: "考满分留学",
          url: "http://www.kmf.com/"
        },
        {
          name: "LeetCode",
          url: "https://leetcode-cn.com/"
        },
        {
          name: "中华会计网校",
          url: "http://www.chinaacc.com/tiku/"
        },
        {
          name: "打字练习",
          url: "https://www.typing.com/student"
        },
        {
          name: "驾校一点通",
          url: "http://www.jxedt.com/"
        },
        {
          name: "驾考宝典",
          url: "http://www.jiakaobaodian.com/"
        }
      ],
      row_7: [
        {
          name: "便捷",
        },
        {
          name: "多邻国",
          url: "http://www.duolingo.cn/"
        },
        {
          name: "扇贝",
          url: "https://www.shanbay.com/"
        },
        {
          name: "百词斩",
          url: "http://www.baicizhan.com/"
        },
        {
          name: "51VOA",
          url: "http://www.51voa.com/"
        },
        {
          name: "在线PDF",
          url: "https://smallpdf.com/cn"
        },
        {
          name: "公式字符",
          url: "http://webdemo.myscript.com/"
        },
        {
          name: "Wolfram Alpha",
          url: "https://www.wolframalpha.com/"
        }
      ],
      row_8: [
        {
          name: "成绩"
        },
        {
          name: "英语四六级",
          url: "http://cet.neea.edu.cn/"
        },
        {
          name: "普通话水平",
          url: "http://hainan.cltt.org/web/login/pscp01001.aspx"
        },
        {
          name: "会计从业资格",
          url: "http://kzp.mof.gov.cn/list.jsp?class_id=01_03_02"
        },
        {
          name: "教师资格",
          url: "http://ntce.neea.edu.cn/html1/folder/1508/211-1.htm?sid=660"
        },
        {
          name: "计算机等级",
          url: "http://zscx.neea.edu.cn/html1/folder/1508/211-1.htm?sid=300"
        },
        {
          name: "雅思",
          url: "http://ielts.etest.edu.cn/"
        },
        {
          name: "托福",
          url: "https://toefl.neea.cn/"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "../css/cmpnt.css";
</style>

