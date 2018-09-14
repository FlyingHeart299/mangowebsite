<template>
  <transition name="fade">
    <div class="container">
      <div class="starBox">
        <div class="star"></div>
        <div class="star pink"></div>
        <div class="star blue"></div>
      </div>
      <div class="containerBox">
        <header-template></header-template>
        <div class="topBox padding25">
          <img class="wow fadeInUp animated" data-wow-delay="0s" src="./../assets/home/tiyansheji.png" alt="" width="292" height="30">
          <img class="wow fadeInUp animated" data-wow-delay="0.5s" src="./../assets/home/weimeiyige.png" alt="" width="329" height="30">
          <img class="wow pulse animated" data-wow-duration="2s" src="./../assets/home/pic.png" alt="" width="255" height="182">
          <img class="yuanshengtai" src="./../assets/home/yuanshengtai.png" alt="" width="325" height="38">
          <img src="./../assets/home/mangguokeji.png" alt="" width="268" height="52">
          <img class="weinintigong" src="./../assets/home/weinintigong.png" alt="" width="222" height="19">
          <img class="marginBottom30 wow fadeInLeft animated" data-wow-delay="0s" src="./../assets/home/jiaohushijue.png" alt="" width="325" height="55">
          <img class="marginBottom30 wow fadeInRight animated" data-wow-delay="0s" src="./../assets/home/APPWEB.png" alt="" width="325" height="55">
          <img class="marginBottom30 wow fadeInLeft animated" data-wow-delay="0s" src="./../assets/home/yunfuwuqi.png" alt="" width="325" height="55">
          <img class="marginBottom59 wow fadeInRight animated" data-wow-delay="0s" src="./../assets/home/qukuailian.png" alt="" width="325" height="55">
          <img class="marginBottom40" src="./../assets/home/qiyejibiaozhun.png" alt="" width="346" height="54">
          <img class="marginBottom35 wow fadeInLeft animated" data-wow-delay="0s" src="./../assets/home/shunianchendian.png" alt="" width="325" height="50">
          <img class="marginBottom35 wow fadeInRight animated" data-wow-delay="0s" src="./../assets/home/3nianmianfei.png" alt="" width="325" height="50">
          <img class="marginBottom35 wow fadeInLeft animated" data-wow-delay="0s" src="./../assets/home/zishenchanpin.png" alt="" width="325" height="50">
          <img class="marginBottom48 wow fadeInRight animated" data-wow-delay="0s" src="./../assets/home/caiyongguoji.png" alt="" width="325" height="50">
          <img class="marginBottom52" src="./../assets/home/liaojiewomen.png" alt="" width="290" height="21">
        </div>
        <div class="swiperBox">
          <swiper :options="swiperOption">
            <swiper-slide class="slide" v-for="(itemsData,index) in itemsData" :key="index">
              <div @click="itemAction(index)">
                <img :src="itemsData.imgUrl" alt="" width="90" height="184">
                <span>{{itemsData.name}}</span>
                <span>{{itemsData.discrip}}</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <span class="lookMore" @click="itemMoreAction()">查看更多 >></span>
        <div class="cooperation">
          <img class="wow pulse animated" data-wow-duration="2s" src="./../assets/home/zhuyaohezuo.png" alt="" width="272" height="92">
          <div class="cooperationSwiper">
            <swiper class="swiper" :options="cooperationOption">
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/partner1.png" alt="" width="75" height="75">
              </swiper-slide>
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/detele.png" alt="" width="15" height="15">
              </swiper-slide>
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/partner2.png" alt="" width="75" height="75">
              </swiper-slide>
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/detele.png" alt="" width="15" height="15">
              </swiper-slide>
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/partner3.png" alt="" width="75" height="75">
              </swiper-slide>
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/detele.png" alt="" width="15" height="15">
              </swiper-slide>
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/partner4.png" alt="" width="75" height="75">
              </swiper-slide>
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/detele.png" alt="" width="15" height="15">
              </swiper-slide>
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/partner5.png" alt="" width="75" height="75">
              </swiper-slide>
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/detele.png" alt="" width="15" height="15">
              </swiper-slide>
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/partner6.png" alt="" width="75" height="75">
              </swiper-slide>
              <swiper-slide class="cooperatSlide">
                <img src="./../assets/home/detele.png" alt="" width="15" height="15">
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <foot-template></foot-template>
      </div>
    </div>
  </transition>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import header from './header'
import foot from './foot'
import router from '../router/index.js'
import WOW from './../../static/wow.min.js'
export default {
  name: 'home',
  data () {
    return {
      itemsData: [
        {
          imgUrl: require('./../assets/case/smallConstruction/1.png'),
          name:'小建筑',
          discrip:'连接全球建筑行业  产品快搜首选平台'
        },
        {
          imgUrl: require('./../assets/case/ReclaimElderBrother/1.png'),
          name:'回收哥',
          discrip:'构建全国性的新型互联网+回收体系'
        },
        {
          imgUrl: require('./../assets/case/midameizhen/1.png'),
          name:'咪哒美诊',
          discrip:'一款优质的赴韩整形服务平台'
        },
        {
          imgUrl: require('./../assets/case/moralal/1.png'),
          name:'摩力咖',
          discrip:'一键网约瑜伽平台'
        },
        {
          imgUrl: require('./../assets/case/mbaThroughCar/1.png'),
          name:'MBA直通车',
          discrip:'中国著名MBA考前培训品牌'
        },
        {
          imgUrl: require('./../assets/case/termiteTourism/1.png'),
          name:'小蚁旅游',
          discrip:'手机就是行程单,从此行程无纸化'
        },
        {
          imgUrl: require('./../assets/case/efamily/1.png'),
          name:'E Family',
          discrip:'智能光控应用程序'
        }
      ],
      swiperOption: {
        slidesPerView: 1.4,
        spaceBetween: 15,
        autoplay: {
            disableOnInteraction: false,
        },
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      },
      cooperationOption: {
        // autoplay:1,//自动滚动
        loop:true,//循环
        loopedSlides: 5,
        speed:100,//滚动速度
        slidesPerView: 'auto',
        spaceBetween: 15,
        autoplay: {
            disableOnInteraction: false,
        },
      }
    }
  },
  components:{
      swiper,
      swiperSlide,
      'header-template':header,
      'foot-template':foot,
  },
  methods: {
    itemAction(index) {
      router.push('/item/:' + index);
    },
    itemMoreAction() {
      router.push('/moreitem');
    }
  },
  // updated() {
  //     window.scroll(0, 0);
  // },
  mounted() {
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
      new WOW.WOW().init();
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active {
    transition: opacity .1s;
  }
  .fade-enter {
    opacity: 0;
  }
  .padding15 {
    padding: 0 15px;
  }
  .padding25 {
    padding: 0 25px;
  }
  .marginBottom15 {
    margin-bottom: 15px;
  }
  .marginBottom30 {
    margin-bottom: 30px;
  }
  .marginBottom35 {
    margin-bottom: 35px;
  }
  .marginBottom40 {
    margin-bottom: 40px;
  }
  .marginBottom48 {
    margin-bottom: 48px;
  }
  .marginBottom52 {
    margin-bottom: 52px;
  }
  .marginBottom59 {
    margin-bottom: 59px;
  }
  
  .container {
    background-image:linear-gradient(-180deg, #24355e 100%, #1b263e 100%);
    width:100%;
    height:auto;
    overflow-x: hidden;
  }
  .containerBox {
    display: flex;
    flex-direction: column;
  }
  .topBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
  .topBox > img:nth-child(2) {
    margin: 35px 0 30px;
  }
  .yuanshengtai {
    margin: 30px 0 35px;
  }
  .weinintigong {
    margin: 20px 0 39px;
  }
  .solutionBox {
    display: flex;
    flex-direction: column;
  }
  .solutionBox > div {
    display: flex;
    flex-direction: row;
  }
  .cooperation, .swiperBox {
    width: 375px;
    margin: 0 auto;
  }
  .swiperBox .slide {
    background:#375a91;
    border-radius:5px;
    width:230px;
    height:300px;
    color: #fff;
    margin-top: 22px;
  }
  .swiperBox .slide > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .swiperBox .slide > div > img {
    margin: 10px 0;
  }
  .swiperBox .slide.swiper-slide-active > div > img {
    margin: 30px 0;
  }
  .swiperBox .slide > div > span:nth-child(2) {
    margin-bottom: 10px;
    font-family:'PingFangSC-Semibold';
    font-size:16px;
    font-weight: bold;
  }
  .swiperBox .slide > div > span:nth-child(3) {
    font-family:'PingFangSC-Regular';
    font-size:14px;
    letter-spacing:0;
    width: 234px;
  }
  .swiperBox .slide.swiper-slide-active > div > span:nth-child(3) {
    font-family:'PingFangSC-Regular';
    font-size:14px;
    letter-spacing:0;
    width: 234px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .swiperBox .swiper-slide-active {
    width:265px!important;
    height: 345px!important;
    margin-top: 0;
  }
  .lookMore {
    display: block;
    margin: 20px auto 35px;
    font-family:'PingFangSC-Regular';
    font-size:12px;
    color:#4691fa;
    letter-spacing:0;
    text-align:left;
  }
  /*  合作  */
  .cooperationSwiper {
    margin: 40px 0 70px 10px;
  }
  .cooperatSlide {
    width: auto;
    height: 75px;
    display: flex;
    align-items: center;
  }

  /*  footer  */

  /*  流星  */
  .starBox {
    position: fixed;
    top: 0;
    left: 0;
  }
  .star {
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    top: 20px;
    left: 200px;
    position: relative;
    transform-origin: 100% 0;
    animation: star-ani 4s linear infinite;
    -webkit-animation: star-ani 5s linear infinite;
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
    opacity: 0;
    z-index: 2;
  }

.star:after {
    content: '';
    display: block;
    top: 0px;
    left: 4px;
    border: 0px solid red;
    border-width: 0px 90px 2px 90px;
    border-color: transparent transparent transparent rgba(255, 255, 255, .3);
    transform: rotate(-45deg) translate3d(1px, 3px, 0);
    box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
    transform-origin: 0% 100%;
}

.pink {
    top: 30px;
    left: 400px;
    background: #fff;
    animation-delay: 3s;
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
}

.pink:after {
    border-color: transparent transparent transparent #fff;
    animation-delay: 3s;
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
}

.blue {
    top: 40px;
    left: 600px;
    background: #fff;
    animation-delay: 7s;
    -webkit-animation-delay: 7s;
    -moz-animation-delay: 7s;
}

.blue:after {
    border-color: transparent transparent transparent #fff;
    -webkit-animation-delay: 7s;
    -moz-animation-delay: 7s;
    animation-delay: 7s;
}

@keyframes star-ani {
    0% {
        opacity: 0;
        transform: scale(0) translate3d(0, 0, 0);
    }
    20% {
        opacity: 0.8;
        transform: scale(0.2) translate3d(-100px, 100px, 0);
    }
    40% {
        opacity: 0.8;
        transform: scale(0.4) translate3d(-200px, 200px, 0);
    }
    60% {
        opacity: 0.8;
        transform: scale(0.6) translate3d(-300px, 300px, 0);
    }
    80% {
        opacity: 1;
        transform: scale(1) translate3d(-350px, 350px, 0);
    }
    100% {
        opacity: 1;
        transform: scale(1.2) translate3d(-400px, 380px, 0);
    }
}
</style>
