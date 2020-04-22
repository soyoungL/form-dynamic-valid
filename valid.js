<FormItem
  v-if="isshowuname"
  prop="userName"
  label="用户名"
>
  <Input
    v-model="dataSourceParam.userName"
    type="text"
    placeholder="用户名"
  ></Input>
</FormItem>
<script>
  export default {
    data(){
      return {
        dataSourceParam:{
          userName:""
        },
        isshowuname:false
      }
    },
    methods:{
      //切换name是否必填的fun
      change(val){
        if(val==='need'){
          this.rules = "";
          this.isshowuname = false;
          //强制重新渲染
          this.$nextTick(() => {
            this.isshowuname = true;
        });
        }
      }
    }
  }
</script>
