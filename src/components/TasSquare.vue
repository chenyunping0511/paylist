<template>
      <div>
            <div class="content-index" style="">
              <ul class="content-list">
                  <li class="type">OCR转写标注</li>
                  <li>单价0.04分/框</li>
                  <li>总量50W</li>
                  <li><button class="btn-start">开始标注</button></li>
              </ul>
              <ul class="content-list">
                  <li class="type">语音转写标注</li>
                  <li>单价0.04分/框</li>
                  <li>总量50W</li>
                  <li><button class="btn-start">开始标注</button></li>
              </ul>
              <ul class="content-list">
                  <li class="type">文本转写标注</li>
                  <li>单价0.04分/框</li>
                  <li>总量50W</li>
                  <li><button class="btn-start">开始标注</button></li>
              </ul>
           </div>
      </div>
</template>
<script>
export default {
  name: 'TasSquare',
  data () {
    return {}
  }
}
</script>
<style scoped>
/* 主体 */

.content-index{
  width: 100%;
  margin: 0 auto;
}
.content-list{
  width:96%;
  height: 45px;
  line-height: 45px;
  list-style-type: none;
  margin:0;
   border: 1px solid rgb(122, 120, 120);
}
.content-list li{
  width:23%;
  height: 45px;
  float: left;
  list-style-type: none;
  /* display: inline-block; */
}
.btn-start{
  background-color: rgb(66, 212, 37);
  border: 1px solid white;
  border-radius: 3px;
  width:90px;
  height: 36px;
  /* margin-left: 180px; */
}

</style>
