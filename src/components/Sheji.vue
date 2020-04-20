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
          name: "灵感"
        },
        {
          name: "Behance",
          url: "https://www.behance.net/"
        },
        {
          name: "Dribbble",
          url: "https://dribbble.com/"
        },
        {
          name: "Muzli",
          url: "https://muz.li/"
        },
        {
          name: "MyDesy",
          url: "https://www.mydesy.com/"
        },
        {
          name: "ZCOOL",
          url: "http://www.zcool.com.cn/"
        },
        {
          name: "FWA",
          url: "https://thefwa.com/"
        },
        {
          name: "LandBook",
          url: "https://land-book.com/"
        }
      ],
      row_2: [
        {
          name: "图库"
        },
        {
          name: "Huaban",
          url: "http://huabanpro.com/"
        },
        {
          name: "Unsplash",
          url: "https://unsplash.com/"
        },
        {
          name: "Pixabay",
          url: "https://pixabay.com/"
        },
        {
          name: "500px",
          url: "https://500px.com/"
        },
        {
          name: "Pinterest",
          url: "https://www.pinterest.com/"
        },
        {
          name: "PEXELS",
          url: "https://www.pexels.com/"
        },
        {
          name: "SplitShire",
          url: "https://www.splitshire.com/"
        }
      ],
      row_3: [
        {
          name: "素材"
        },
        {
          name: "NiPic",
          url: "http://www.nipic.com/"
        },
        {
          name: "58Pic",
          url: "http://www.58pic.com/"
        },
        {
          name: "freepik",
          url: "https://www.freepik.com/"
        },
        {
          name: "UIKit",
          url: "http://www.uikit.me/"
        },
        {
          name: "Pixeden",
          url: "https://www.pixeden.com/"
        },
        {
          name: "Subtlepatterns",
          url: "http://subtlepatterns.com/"
        },
        {
          name: "Fribbble",
          url: "http://www.fribbble.com/"
        }
      ],
      row_4: [
        {
          name: "字体"
        },
        {
          name: "Fontsup",
          url: "https://fontsup.com/"
        },
        {
          name: "dafont",
          url: "https://www.dafont.com/"
        },
        {
          name: "Qiuziti",
          url: "http://www.qiuziti.com/"
        },
        {
          name: "MyFonts",
          url: "https://www.myfonts.com/"
        },
        {
          name: "Fonts2u",
          url: "https://zh.fonts2u.com/"
        },
        {
          name: "Fontfabric",
          url: "http://www.fontfabric.com/"
        },
        {
          name: "UrbanFonts",
          url: "https://www.urbanfonts.com/"
        }
      ],

      row_5: [
        {
          name: "交互"
        },
        {
          name: "UICN",
          url: "http://www.ui.cn/"
        },
        {
          name: "SiteSee",
          url: "https://sitesee.co/"
        },
        {
          name: "UIGatage",
          url: "https://uigarage.net/"
        },
        {
          name: "BestWebsite",
          url: "https://bestwebsite.gallery/"
        },
        {
          name: "CollectUI",
          url: "http://collectui.com/"
        },
        {
          name: "UIMovement",
          url: "https://uimovement.com/"
        },
        {
          name: "Reeoo",
          url: "https://reeoo.com/"
        }
      ],
      row_6: [
        {
          name: "颜色"
        },
        {
          name: "ColorHunt",
          url: "https://colorhunt.co/"
        },
        {
          name: "Coolors",
          url: "https://coolors.co/"
        },
        {
          name: "AdobeColr",
          url: "https://color.adobe.com/zh/"
        },
        {
          name: "WebGradients",
          url: "https://webgradients.com/"
        },
        {
          name: "Trianglify",
          url: "https://trianglify.io/"
        },
        {
          name: "ColorFavs",
          url: "http://www.colorfavs.com/"
        },
        {
          name: "Collor",
          url: "http://colllor.com/"
        }
      ],

      row_7: [
        {
          name: "工具"
        },
        {
          name: "Fotor",
          url: "https://www.fotor.com.cn/"
        },
        {
          name: "Photopea",
          url: "https://www.photopea.com/"
        },
        {
          name: "AutoDraw",
          url: "https://www.autodraw.com/"
        },
        {
          name: "Figma",
          url: "https://www.figma.com/"
        },
        {
          name: "SVG Draw",
          url: "http://editor.method.ac/"
        },
        {
          name: "CloudConvert",
          url: "https://cloudconvert.com/"
        },
        {
          name: "TinyPNG",
          url: "https://tinypng.com/"
        }
      ],
      row_8: [
        {
          name: "规范"
        },
        {
          name: "Apple",
          url: "https://developer.apple.com/design/"
        },
        {
          name: "Google",
          url: "https://design.google/"
        },
        {
          name: "Microsoft",
          url: "https://www.microsoft.com/design/"
        },
        {
          name: "Material",
          url: "https://material.io/"
        },
        {
          name: "Android",
          url: "https://developer.android.google.cn/design/"
        },
        {
          name: "ScreenSize",
          url: "http://screensiz.es/phone"
        },
        {
          name: "WeUI",
          url: "https://weui.io/"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "../css/cmpnt.css";

</style>





