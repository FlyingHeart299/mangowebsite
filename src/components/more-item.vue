<template>
  <transition name="fade">
    <div class="itemBoxs">
      <div class="headTemp">
        <header-template></header-template>
        <div class="banner">芒果科技·移动应用开发的优选合作伙伴</div>
      </div>
	  <div class="moreItem">
	  	<div class="items wow flipInY animated" v-for="(itemData,index) in itemData" :key="index" @click="itemAction(index)">
            <div class="itemBox">
                <img :src="itemData.imgUrl" alt="">
                <span class="name">{{itemData.name}}</span>
                <div class="itemDiscrip">
                    <span>{{itemData.type}}</span>
                    <span>{{itemData.function}}</span>
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
import router from '../router/index.js'
import footChild from './foot-child'
export default {
  name: 'more-item',
  data () {
    return {
        itemData: [
                {
                    imgUrl:require('./../assets/more-case/xiaozhuli.png'),
                    name:'小建筑',
                    type:'类型：建筑行业',
                    function:'功能：新闻资讯，业务整合，产品销售',
                    animate:'wow fadeInDown animated',
                    delay:'1.2s'
                },
                {
                    imgUrl:require('./../assets/more-case/huishouge.png'),
                    name:'回收哥',
                    type:'类型：废品回收',
                    function:'功能：新闻资讯，预约交易，设备检修',
                    animate:'wow fadeInUp animated',
                    delay:'0.7s'
                },
                {
                    imgUrl:require('./../assets/more-case/mida.png'),
                    name:'咪哒美诊',
                    type:'类型：美容行业',
                    function:'功能：业务咨询，服务预约，视频通话',
                    animate:'wow fadeInDown animated',
                    delay:'1.3s'
                },
                {
                    imgUrl:require('./../assets/more-case/molijia.png'),
                    name:'摩力伽',
                    type:'类型：健身行业',
                    function:'功能：预约课程，订单互评，地图导航',
                    animate:'wow fadeInUp animated',
                    delay:'1.2s'
                },
                {
                    imgUrl:require('./../assets/more-case/MBA.png'),
                    name:'MBA直通车',
                    type:'类型：教育行业',
                    function:'功能：新闻资讯，业务整合，视频课程',
                    animate:'wow fadeInDown animated',
                    delay:'0.7s'
                },
                {
                    imgUrl:require('./../assets/more-case/xiaoyi.png'),
                    name:'小蚁旅游',
                    type:'类型：旅游行业',
                    function:'功能：新闻资讯，实时聊天，导航功能',
                    animate:'wow fadeInUp animated',
                    delay:'1.3s'
                },
                {
                    imgUrl:require('./../assets/more-case/efamily.png'),
                    name:'E family',
                    type:'类型：智能家居',
                    function:'功能：家居控制，网络通信，远程控制',
                    animate:'wow fadeInDown animated',
                    delay:'0.7s'
                }
            ]
    }
  },
  components:{
    'header-template':header,
    'foot-child-template':footChild,
  },
  methods: {
  	itemAction(index) {
      router.push('/item/:' + index);
    },
    init() {
      
    }
  },
  mounted() {
    this.init();

    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
      new WOW.WOW().init();
    };
  }
}
</script>

<style scoped>
	.headTemp {
	    background: url(./../assets/more-case/6.png);
	}
    .banner {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 16px;
    }
	.itemBoxs {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	.moreItem {
		padding: 0 15px 20px 15px;
        background: #f8f8f8;
	}
    .name {
        font-weight: bold;
    }
	.items {
	    float: left;
        width: 42.6vw;
	    height:160px;
	    margin-top: 20px;
	}
	.items:nth-child(odd) {
		margin-right: 20px;
	}
	.itemDiscrip {
	    display: flex;
	    flex-direction: column;
	    margin-top: 5px;
	    width: calc(100% - 20px);
	    text-align: left;
	}
	.itemDiscrip > span:nth-child(1) {
	    margin-bottom: 5px;
	}

	.itemBox {
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    border-radius: 5px;
	    font-size: 10px;
        width: 100%;
        height: 100%;
        background: #fff;
	}

	.itemBox > img {
	    width: 60px;
	    margin-top: 12px;
	}

</style>
