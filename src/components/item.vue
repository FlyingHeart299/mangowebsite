<template>
  <transition name="fade">
    <div class="itemBoxs">
      <div class="headTemp">
        <header-template></header-template>
      </div>
      <div class="firstBox justify">
        <span class="wow fadeInUp animated" data-wow-delay="0s">{{itemData.name}}</span>
        <span class="wow fadeInUp animated" data-wow-delay="0.5s">{{itemData.discript}}</span>
      </div>
      <div class="oneBox Box justify" v-if="itemData.id === 'one'">
        <img :src="itemData.imgUrl" alt="" width="192" height="390">
      </div>
      <div class="twoBox Box justify" v-else-if="itemData.id === 'two'">
        <img :src="itemData.imgUrl" alt="" width="192" height="390">
      </div>
      <div class="threeBox Box justify" v-else-if="itemData.id === 'three'">
        <img :src="itemData.imgUrl" alt="" width="192" height="390">
      </div>
      <div class="fourBox Box justify" v-if="itemData.id === 'four'">
        <img :src="itemData.imgUrl" alt="" width="192" height="390">
      </div>
      <div class="fiveBox Box justify" v-else-if="itemData.id === 'five'">
        <img :src="itemData.imgUrl" alt="" width="192" height="390">
      </div>
      <div class="sixBox Box justify" v-else-if="itemData.id === 'six'">
        <img :src="itemData.imgUrl" alt="" width="192" height="390">
      </div>
      <div class="sevenBox Box justify" v-else-if="itemData.id === 'seven'">
        <img :src="itemData.imgUrl" alt="" width="192" height="390">
      </div>
      <div class="sameBox">
        <div>
            <div class="threeBox height500 justify" v-for="(detail,index) in itemData.detail" :key="index">
              <div>
                <span class="wow fadeInUp animated" :data-wow-delay="(index*0.4) + 's'" v-for="(discript,index) in detail.discript" :key="index">{{discript.name}}</span>
              </div>
              <img :src="detail.imgUrl" alt="" width="192" height="290">
            </div>
        </div>
        <div>
            <div class="fiveBox height500 justify" v-for="(swiperDetail,index) in itemData.swiperDetail" :key="index">
              <div>
                <span class="wow fadeInUp animated" :data-wow-delay="(index*0.4) + 's'" v-for="(discript,index) in swiperDetail.discript">{{discript.name}}</span>
              </div>
              <div>
                <swiper class="itemswiper" :options="item4Option">
                  <swiper-slide v-for="(img,index) in swiperDetail.img" :key="index">
                    <img :src="img.imgUrl" alt="" width="192" height="290">
                  </swiper-slide>
                </swiper>
              </div>
            </div>
        </div>
      </div>
      <foot-child-template></foot-child-template>
    </div>
  </transition>
</template>

<script>
import header from './header'
import WOW from './../../static/wow.min.js'
import footChild from './foot-child'
export default {
  name: 'item',
  data () {
    return {
        item4Option: {
            speed:1000,
            autoplay: {
                disableOnInteraction: false,
            },
            effect:'fade',
            loop: true,
            loopedSlides: 3,
        },
        item5Option:{
            speed:1000,
            autoplay: {
                disableOnInteraction: false,
            },
            effect: 'fade',
            loop: true,
            loopedSlides: 3,
        },
        itemData:'',
        itemDatas: [
            {
                id: 'one',
                name:'小筑理',
                discript:'连接全球建筑行业 ，产品快搜首选平台',
                imgUrl: require('./../assets/case/smallConstruction/1.png'),
                detail: [
                    {
                        discript: [
                            { name:'将建筑行业信息数据化'},
                            { name:'设备厂家自行上传产品数据，丰富产品数据库'},
                            { name:'设计师可自行下载云端数据'},
                        ],
                        imgUrl: require('./../assets/case/smallConstruction/2.png')
                    },
                    {
                        discript: [
                            { name:'设计师发布需求，设备商提供设备'},
                            { name:'打通建筑行业信息屏障，促进信息交流'}
                        ],
                        imgUrl: require('./../assets/case/smallConstruction/3.png')
                    },
                ],
                swiperDetail: [
                    {
                        discript: [
                            { name:'企业注册时需提供相关资质证明'},
                            { name:'负责人身份证、营业执照、授权书等'},
                            { name:'给用户提供安全保证'},
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/smallConstruction/4_1.png')},
                            { imgUrl: require('./../assets/case/smallConstruction/4_2.png')},
                            { imgUrl: require('./../assets/case/smallConstruction/4_3.png')}
                        ]
                    },
                    {
                        discript: [
                            { name:'设计师可以查看产品的图文介绍、规格参数'},
                            { name:'也能根据产品联系相关厂家'},
                            { name:'还可直接下载CAD或BIM插入到自己的文件中'},
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/smallConstruction/5_1.png')},
                            { imgUrl: require('./../assets/case/smallConstruction/5_2.png')},
                            { imgUrl: require('./../assets/case/smallConstruction/5_3.png')}
                        ]
                    }
                ]
            },
            {
                id: 'two',
                name:'回收哥',
                discript:'构建全国性的新型互联网+回收体系',
                imgUrl: require('./../assets/case/ReclaimElderBrother/1.png'),
                detail: [
                    {
                        discript: [
                            { name:'线上建设回收交易平台，深度整合线下资源'},
                            { name:'改造传统回收大军模式，改变回收无序低效局面'},
                            { name:'改善再生资源回收方式'},
                        ],
                        imgUrl: require('./../assets/case/ReclaimElderBrother/2.png')
                    },
                    {
                        discript: [
                            { name:'分类详细'},
                            { name:'用户下单更精准'}
                        ],
                        imgUrl: require('./../assets/case/ReclaimElderBrother/3.png')
                    },
                ],
                swiperDetail: [
                    {
                        discript: [
                            { name:'回收哥APP设计简单易操作'},
                            { name:'回收流程清晰'}
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/ReclaimElderBrother/4_1.png')},
                            { imgUrl: require('./../assets/case/ReclaimElderBrother/4_2.png')},
                            { imgUrl: require('./../assets/case/ReclaimElderBrother/4_3.png')}
                        ]
                    },
                    {
                        discript: [
                            { name:'APP在线下单'},
                            { name:'回收人员上门服务'},
                            { name:'订单完成后客户对服务进行评价'},
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/ReclaimElderBrother/5_1.png')},
                            { imgUrl: require('./../assets/case/ReclaimElderBrother/5_2.png')},
                            { imgUrl: require('./../assets/case/ReclaimElderBrother/5_3.png')}
                        ]
                    }
                ]
            },
            {
                id: 'three',
                name:'咪哒美诊',
                discript:'一款优质的赴韩整形服务平台',
                imgUrl: require('./../assets/case/midameizhen/1.png'),
                detail: [
                    {
                        discript: [
                            { name:'系统收到任何信息'},
                            { name:'如用户提出的任何问题、任何反馈等'},
                            { name:'系统将自动向用户和医院发送提示信息'},
                        ],
                        imgUrl: require('./../assets/case/midameizhen/2.png')
                    },
                    {
                        discript: [
                            { name:'足不出户便可享受韩国整形专家的诊断和建议'},
                            { name:'拥有一流的一对一在线服务'}
                        ],
                        imgUrl: require('./../assets/case/midameizhen/3.png')
                    },
                ],
                swiperDetail: [
                    {
                        discript: [
                            { name:'提供支持用户决策的信息'},
                            { name:'帮助用户快速找到适合的医生'},
                            { name:'查询医生的手术时间表在线直接预约'},
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/midameizhen/4_1.png')},
                            { imgUrl: require('./../assets/case/midameizhen/4_2.png')},
                            { imgUrl: require('./../assets/case/midameizhen/4_3.png')}
                        ]
                    },
                    {
                        discript: [
                            { name:'大量真实整形案例分享'},
                            { name:'感受丑小鸭的华丽蜕变'},
                            { name:'还可直接下载CAD或BIM插入到自己的文件中'},
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/midameizhen/5_1.png')},
                            { imgUrl: require('./../assets/case/midameizhen/5_2.png')},
                            { imgUrl: require('./../assets/case/midameizhen/5_3.png')}
                        ]
                    }
                ]
            },
            {
                id: 'four',
                name:'摩力咖',
                discript:'一键网约瑜伽平台',
                imgUrl: require('./../assets/case/moralal/1.png'),
                detail: [
                    {
                        discript: [
                            { name:'随时、随地、随心选择自己的私教'},
                            { name:'预约选择上课地点，快捷学习方式的首选'},
                            { name:'海量优秀师资，随时查看教师履历'},
                        ],
                        imgUrl: require('./../assets/case/moralal/2.png')
                    },
                    {
                        discript: [
                            { name:'实名认证、师资认证，评级模式'},
                            { name:'专注创建安全专业的环境'}
                        ],
                        imgUrl: require('./../assets/case/moralal/3.png')
                    },
                ],
                swiperDetail: [
                    {
                        discript: [
                            { name:'发布约课时间'},
                            { name:'选择上课地点'},
                            { name:'按条件或分类，选好课程后可查看'},
                            // { name:'对应课程的计费标准'},
                            // { name:'查看抢单的教练履历评价等信息'},
                            // { name:'选择上课的老师'},
                            // { name:'根据预约时间在线支付'},
                            // { name:'上课'},
                            // { name:'互相评价'},
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/moralal/4_1.png')},
                            { imgUrl: require('./../assets/case/moralal/4_2.png')},
                            { imgUrl: require('./../assets/case/moralal/4_3.png')}
                        ]
                    },
                    {
                        discript: [
                            { name:'邀请好友注册即可获得优惠劵'},
                            { name:'可在购买课程时使用'}
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/moralal/5_1.png')},
                            { imgUrl: require('./../assets/case/moralal/5_2.png')},
                            { imgUrl: require('./../assets/case/moralal/5_3.png')}
                        ]
                    }
                ]
            },
            {
                id: 'five',
                name:'MBA直通车',
                discript:'中国著名MBA考前培训品牌',
                imgUrl: require('./../assets/case/mbaThroughCar/1.png'),
                detail: [
                    {
                        discript: [
                            { name:'全程个性化辅导、专业化教务管理'},
                            { name:'精确把握联考信息、精选全国名师'}
                        ],
                        imgUrl: require('./../assets/case/mbaThroughCar/2.png')
                    },
                    {
                        discript: [
                            { name:'专属生词本'},
                            { name:'科学记忆，重复训练'}
                        ],
                        imgUrl: require('./../assets/case/mbaThroughCar/3.png')
                    },
                ],
                swiperDetail: [
                    {
                        discript: [
                            { name:'邀请好友注册可得现金奖励'},
                            { name:'不设上限'}
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/mbaThroughCar/4_1.png')},
                            { imgUrl: require('./../assets/case/mbaThroughCar/4_2.png')},
                            { imgUrl: require('./../assets/case/mbaThroughCar/4_3.png')}
                        ]
                    },
                    {
                        discript: [
                            { name:'即时解析，错题跟踪'},
                            { name:'扫清知识盲区'}
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/mbaThroughCar/5_1.png')},
                            { imgUrl: require('./../assets/case/mbaThroughCar/5_2.png')},
                            { imgUrl: require('./../assets/case/mbaThroughCar/5_3.png')}
                        ]
                    }
                ]
            },
            {
                id: 'six',
                name:'小蚁旅游',
                discript:'手机就是行程单,从此行程无纸化',
                imgUrl: require('./../assets/case/termiteTourism/1.png'),
                detail: [
                    {
                        discript: [
                            { name:'打造专属你的旅行地图'},
                            { name:'你的旅行纪念册就是旅行的意义'}
                        ],
                        imgUrl: require('./../assets/case/termiteTourism/2.png')
                    },
                    {
                        discript: [
                            { name:'汇集各家旅行社当季hot路线'},
                            { name:'及时推送打折消息'},
                            { name:'不错过任何性价比高的出游机会'}
                        ],
                        imgUrl: require('./../assets/case/termiteTourism/3.png')
                    },
                ],
                swiperDetail: [
                    {
                        discript: [
                            { name:'行程提醒不错过'},
                            { name:'旅行社随时掌握团队情况'},
                            { name:'汇集上百万高质量游记画册'},
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/termiteTourism/4_1.png')},
                            { imgUrl: require('./../assets/case/termiteTourism/4_2.png')},
                            { imgUrl: require('./../assets/case/termiteTourism/4_3.png')}
                        ]
                    },
                    {
                        discript: [
                            { name:'帮助导游和游客精准确定位'},
                            { name:'提供导航功能'},
                            { name:'临近集合时间，导游一键发送提醒'},
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/termiteTourism/5_1.png')},
                            { imgUrl: require('./../assets/case/termiteTourism/5_2.png')},
                            { imgUrl: require('./../assets/case/termiteTourism/5_3.png')}
                        ]
                    }
                ]
            },
            {
                id: 'seven',
                name:'E family',
                discript:'智能光控应用程序',
                imgUrl: require('./../assets/case/efamily/1.png'),
                detail: [
                    {
                        discript: [
                            { name:'首创拖动新建场景'},
                            { name:'简单便捷地实现手机与智能硬件交互'},
                            { name:'一键实现个性化定制的智能场景'},
                        ],
                        imgUrl: require('./../assets/case/efamily/2.png')
                    },
                    {
                        discript: [
                            { name:'无闪频亮度调节，1600万色彩切换'},
                            { name:'定时关开及多种情景模式选择'}
                        ],
                        imgUrl: require('./../assets/case/efamily/3.png')
                    },
                ],
                swiperDetail: [
                    {
                        discript: [
                            { name:'创建情景模式方便快捷'},
                            { name:'创建完成一键使用'}
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/efamily/4_1.png')},
                            { imgUrl: require('./../assets/case/efamily/4_2.png')},
                            { imgUrl: require('./../assets/case/efamily/4_3.png')}
                        ]
                    },
                    {
                        discript: [
                            { name:'可以实现亮度调节'},
                            { name:'能选择情景模式和颜色，定时等多种功能'}
                        ],
                        img:[
                            { imgUrl: require('./../assets/case/efamily/5_1.png')},
                            { imgUrl: require('./../assets/case/efamily/5_2.png')},
                            { imgUrl: require('./../assets/case/efamily/5_3.png')}
                        ]
                    }
                ]
            }
        ]
    }
  },
  components:{
    'header-template':header,
    'foot-child-template':footChild,
  },
  methods: {
    init() {
      var url = window.location.href;
      var index = url.split("/:")[1];
      this.itemData = this.itemDatas[index];
    }
  },
  // updated() {
  //     window.scroll(0, 0);
  // },
  mounted() {
    this.init();

    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
      new WOW.WOW().init();
    };
  }
}
</script>

<style>
  .fade-enter-active {
    transition: opacity .1s;
  }
  .fade-enter {
    opacity: 0;
  }
  .headTemp {
    background: #333;
  }
  .itemBoxs {
    overflow-x: hidden;
  }
  .justify {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .firstBox {
    background:#333333;
    width:100%;
    height:333px;
    font-family:'PingFangSC-Regular';
    font-size:14px;
    color:#ffffff;
    letter-spacing:0;
    line-height:25px;
  }
  .firstBox > span:nth-child(1) {
    font-family:'PingFangSC-Semibold';
    font-size:24px;
    color:#ffffff;
    letter-spacing:0;
    text-align:left;
    margin-top: 70px;
    margin-bottom: 20px;
  }
  .oneBox {
      background:#4691fa;
      width:100%;
      height:333px;
  }
  .twoBox {
      background:#55ae4a;
      width:100%;
      height:333px;
  }
  .threeBox {
      background:#ffa2b4;
      width:100%;
      height:333px;
  }
  .fourBox {
      background:#ffb250;
      width:100%;
      height:333px;
  }
  .fiveBox {
      background:#63aeff;
      width:100%;
      height:333px;
  }
  .sixBox {
      background:#34bc60;
      width:100%;
      height:333px;
  }
  .sevenBox {
      background:#0f53a7;
      width:100%;
      height:333px;
  }
  .Box > img {
    margin-top: -110px;
  }
  .height500 {
    width:100%;
    height: 500px;
    justify-content: space-between;
  }
  .height500 > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
  }
  .height500 > div > span {
    font-family:'PingFangSC-Regular';
    font-size:14px;
    color:#333333;
    letter-spacing:0;
    text-align:center;
    line-height:25px;
  }
  .sameBox {
    display: flex;
    flex-direction: column;
  }
  .sameBox > div:nth-child(1) > div:nth-child(1) {
    background: #ffffff;
  }
  .sameBox > div:nth-child(1) > div:nth-child(2) {
    background: #f6f6f6;
  }
  .sameBox > div:nth-child(2) > div:nth-child(1) {
    background: #eceef3;
  }
  .sameBox > div:nth-child(2) > div:nth-child(2) {
    background: #f6f6f6;
  }
  .itemswiper {
    width: 192px!important;
  }
</style>
