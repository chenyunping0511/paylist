<template>
    <div>
        <header>{{msg}}</header>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg:''
            }
        },
        methods:{
            getParams(){//接收函数
                console.log(this.$router)
                this.msg = this.$router.history.current.query.name;
            }
        },
        created() {//在模板编译进路由前调用created方法，触发接收函数
            var self = this;
            self.getParams();
        }
    }
</script>
<style>

</style>
