<template>
    <div>
        <div>
          <div style="" class="typeNow">当前标注任务：语音转写标注</div>
           <div class="contentinfo">
                <div class="goodList titlegood">
                    <span>标注任务：ID234000</span>
                    <span>您已花费39分钟</span>
                    <span>剩余时间20分钟</span>
                </div>
           </div>
            <router-link tag="h3" to="/VoiceAnnotation"><button class="btn-marked">继续标注</button></router-link>
            <div class="contentinfo">
               <div class="goodList titlegood">
                    <span>标注任务：ID234000</span>
                    <span>您已花费39分钟</span>
                    <span>剩余时间20分钟</span>
                </div>
           </div>
            <router-link tag="h3" to="/TextAnnotation"><button  class="btn-marked">继续标注</button></router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Marked',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
.goodList{
  width:100%;height:45px;border:1px solid rgb(148, 144, 144);
  margin:0 auto;line-height: 45px;padding-top: 20px;
}
.goodList span{
  margin-right:295px;
}
.contentinfo div{
  display: inline-block;
  margin-top: 20px;
}
.teaminfoTitle{
  margin-right:50px;
  font-weight: 700;
  font-size: 16px;
}
/*  class="btn-marked" */
 .btn-marked{
   width:120px;
   height: 30px;
   line-height: 30px;
   border: 1px solid grey;
   border-radius: 5px;
   margin-left:61%;
   background-color: rgb(28, 187, 36);
 }

 .typeNow{
   width:100%;height:50px;font-size:18px;font-weight: 560;
 }
</style>
