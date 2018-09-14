<template>
	<div class="foo">
        <div class="leaveMessageBox">
          <img class="wow pulse animated" data-wow-duration="2s" src="./../assets/home/mianfeizixun.png" alt="" width="285" height="58">
          <div class="formBox">
            <div class="inputBox marginBottom15 wow fadeInRight animated" data-wow-delay="0s">
              <span>姓名：</span>
              <input type="text" name="" value="" placeholder="">
            </div>
            <div class="inputBox marginBottom15 wow fadeInLeft animated" data-wow-delay="0.2s">
              <span>联系电话：</span>
              <input type="text" name="" value="" placeholder="">
            </div>
            <div class="textareaBox wow fadeInRight animated" data-wow-delay="0.4s">
              <span>项目需求：</span>
              <textarea name=""></textarea>
            </div>
            <button class="submit wow fadeInLeft animated" data-wow-delay="0.6s" type="">提交</button>
          </div>
        </div>
        <div class="footBox">
            <div class="width325">
                <div class="someFootBox">
                    <img src="./../assets/home/phone.png" alt="" width="16" height="14">
                    <span>咨询电话：0755-33019765</span>
                </div>
                <div class="marginLeft108">18676689326</div>
                <div class="someFootBox emailBox">
                    <img src="./../assets/home/email.png" alt="" width="15" height="12">
                    <span>Email：info@mangosis.com</span>
                </div>
                <div class="someFootBox">
                    <img src="./../assets/home/adress.png" alt="" width="14" height="19">
                    <span>地址：深圳市南山区科苑路10号东方</span>
                </div>
                <div class="marginLeft26">科技大厦1002</div>
                <img class="qrcode" src="./../assets/home/qrcode.png" alt="" width="325" height="120">
            </div>
            <div class="icp">深圳市芒果科技有限公司 粤ICP备17074872号</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      
    }
  },
  components:{
     
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .foo {
  	/*background: #ffa2b4;*/
  	background-image:linear-gradient(-180deg, #24355e 100%, #1b263e 100%);
  	padding-top: 30px;
  }
  .marginBottom15 {
    margin-bottom: 15px;
  }
  .leaveMessageBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .formBox {
    background:rgba(60,141,255,0.30);
    width:315px;
    height:340px;
    margin-top: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .formBox > div:nth-child(1) {
    margin-top: 20px;
  }
  .inputBox {
  	border-radius: 5px;
    border:1px solid #4691fa;
    width:283px;
    height:38px;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .inputBox > span {
    margin-left: 10px;
    font-size:14px;
  }
  .inputBox > input {
    font-family:'PingFangSC-Regular';
    font-size:14px;
    height: 34px;
    border: none;
    outline: none;
    background:none;
    color: #fff;
  }
  .textareaBox {
  	border-radius: 5px;
    border:1px solid #4691fa;
    width:283px;
    height:148px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .textareaBox > span {
    font-family:'PingFangSC-Regular';
    font-size:14px;
    color: #fff;
    line-height: 34px;
    margin-left: 10px;
  }
  .textareaBox > textarea {
    font-family:'PingFangSC-Regular';
    width: 268px;
    height: 120px;
    padding: 0 5px 0 10px;
    border: none;
    outline: none;
    background:none;
    color: #fff;
    font-size:14px;
    resize: none;
  }
  .submit {
    background:#4691fa;
    border-radius:50px;
    width:75px;
    height:30px;
    font-family:'PingFangSC-Regular';
    font-size:14px;
    color:#ffffff;
    letter-spacing:0;
    text-align:left;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
  /*  footer  */
  .footBox {
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-top: 39px;
    font-family:'MicrosoftYaHei';
    font-size:14px;
    color:#ffffff;
    letter-spacing:2px;
    text-align: left;
  }
  .width325 {
    width: 325px;
    margin: 0 auto;
  }
  .someFootBox {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .someFootBox > img {
    margin-right: 12px;
  }
  .marginLeft108 {
    margin-left: 108px;
  }
  .marginLeft26 {
    margin-left: 26px;
  }
  .emailBox {
    margin: 20px auto;
  }
  .qrcode {
    margin: 35px auto;
  }
  .icp {
    width: 100%;
    height: 45px;
    line-height: 45px;
    border-top: 1px solid #979797;
    font-family:'MicrosoftYaHei';
    font-size:12px;
    color:#888888;
    letter-spacing:0;
    text-align:center;
    padding-bottom: 10px;
  }
  
</style>
