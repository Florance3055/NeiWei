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
          name: "出行"
        },
        {
          name: "美团",
          url: "https://www.meituan.com/"
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
          name: "途牛",
          url: "http://www.tuniu.com/"
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
      row_2: [
        {
          name: "美食",
        },
        {
          name: "下厨房",
          url: "http://www.xiachufang.com/"
        },
        {
          name: "美食天下",
          url: "https://www.meishichina.com/"
        },
        {
          name: "豆果美食",
          url: "https://www.douguo.com/"
        },
        {
          name: "搜狐美食",
          url: "http://chihe.sohu.com/"
        },
        {
          name: "心食谱",
          url: "https://www.xinshipu.com/"
        },
        {
          name: "中华菜谱网",
          url: "http://www.chinacaipu.com/"
        },
        {
          name: "美食杰",
          url: "http://www.meishij.net/"
        }
      ],
      row_3: [
        {
          name: "房产",
        },
        {
          name: "房天下",
          url: ""
        },
        {
          name: "链家",
          url: "http://www.lianjia.com/"
        },
        {
          name: "房多多",
          url: "http://www.fangdd.com/"
        },
        {
          name: "安居客",
          url: "http://www.anjuke.com/"
        },
        {
          name: "腾讯房产",
          url: "http://house.qq.com/"
        },
        {
          name: "搜狐焦点",
          url: "https://house.focus.cn/"
        },
        {
          name: "乐居",
          url: "http://www.leju.com/"
        }
      ],
      row_4: [
        {
          name: "汽车",
        },
        {
          name: "汽车之家",
          url: "http://www.autohome.com.cn/"
        },
        {
          name: "太平洋汽车",
          url: "http://www.pcauto.com.cn/"
        },
        {
          name: "易车网",
          url: "http://www.bitauto.com/"
        },
        {
          name: "爱卡汽车",
          url: "http://www.xcar.com.cn/"
        },
        {
          name: "网易汽车",
          url: "http://auto.163.com/"
        },
        {
          name: "新浪汽车",
          url: "http://auto.sina.com.cn/"
        },
        {
          name: "搜狐汽车",
          url: "http://auto.sohu.com/"
        }
      ],
      row_5: [
        {
          name: "财经",
        },
        {
          name: "东方财富",
          url: "http://www.eastmoney.com/"
        },
        {
          name: "第一财经",
          url: "http://www.yicai.com/"
        },
        {
          name: "凤凰财经",
          url: "http://finance.ifeng.com/"
        },
        {
          name: "网易财经",
          url: "http://money.163.com/"
        },
        {
          name: "和讯财经",
          url: "http://www.hexun.com/"
        },
        {
          name: "雪球",
          url: "https://xueqiu.com/"
        },
        {
          name: "股吧",
          url: "http://guba.eastmoney.com/"
        }
      ],
      row_6: [
        {
          name: "时尚",
        },
        {
          name: "太平洋时尚",
          url: "https://www.pclady.com.cn/"
        },
        {
          name: "瑞丽网",
          url: "http://www.rayli.com.cn/"
        },
        {
          name: "美丽说",
          url: "http://www.meilishuo.com/"
        },
        {
          name: "蘑菇街",
          url: "http://www.mogujie.com/"
        },
        {
          name: "YOKA",
          url: "http://www.yoka.com/"
        },
        {
          name: "OnlyLady",
          url: "http://www.onlylady.com/"
        },
        {
          name: "VOGUE",
          url: "http://www.vogue.com.cn/"
        }
      ],
      row_7: [
        {
          name: "健康",
        },
        {
          name: "搜狐健康",
          url: "http://health.sohu.com/"
        },
        {
          name: "新浪健康",
          url: "http://health.sina.com.cn/"
        },
        {
          name: "凤凰健康",
          url: "http://fashion.ifeng.com/health/"
        },
        {
          name: "寻医问药",
          url: "http://www.xywy.com/"
        },
        {
          name: "丁香园",
          url: "http://www.dxy.cn/"
        },
        {
          name: "39健康网",
          url: "http://www.39.net/"
        },
        {
          name: "有问必答",
          url: "http://www.120ask.com/"
        }
      ],
      row_8: [
        {
          name: "查询"
        },
        {
          name: "网速测试",
          url: "http://www.speedtest.net/"
        },
        {
          name: "电话归属地",
          url: "http://www.114best.com/dh/"
        },
        {
          name: "列车时刻",
          url: "http://qq.ip138.com/train/"
        },
        {
          name: "实时航班",
          url: "http://map.variflight.com/"
        },
        {
          name: "台风路径",
          url: "http://typhoon.zjwater.gov.cn/"
        },
        {
          name: "交通违章",
          url: "http://www.ip138.com/weizhang.htm"
        },
        {
          name: "比一比价",
          url: "http://www.b1bj.com/"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "../css/cmpnt.css";

</style>

