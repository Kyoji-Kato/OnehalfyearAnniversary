var app = new Vue({
    el: '#app',
    data: {
        bodyshow:false,
        menchan:false,
        shiro:false,
        korira:true,
        message:"heel",
        isModal:false,
        show:true,
        onehalf:false,
        year:false,
        half:false,
        month:false,
        isAnniversary:true,
        isKiss:false,
        loading:true
    },
    mounted() {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
    },
    methods:{
        kiss:function(){
            if(this.isAnniversary==true){
                this.isAnniversary=false;
                this.isKiss=true;
            }else{
                this.isKiss=false;
                this.isAnniversary=true;               
            }
            
        },
        showLeft:function(){
            if(this.menchan===true){
                this.menchan=false;
                this.shiro=false;
                this.korira=true;
            }else if(this.shiro==true){
                this.menchan=true;
                this.shiro=false;
                this.korira=false;
            }else{
                this.menchan=false;
                this.shiro=true;
                this.korira=false;
            }
        },
        showRight:function(){
            if(this.menchan===true){
                this.menchan=false;
                this.shiro=true;
                this.korira=false;
            }else if(this.shiro==true){
                this.menchan=false;
                this.shiro=false;
                this.korira=true;
            }else{
                this.menchan=true;
                this.shiro=false;
                this.korira=false;
            }
        },
        openModalOnehalf:function(){
            this.isModal=true;
            this.onehalf=true;
        },
        openModalYear:function(){
            this.isModal=true;
            this.year=true;
        },
        openModalHalf:function(){
            this.isModal=true;
            this.half=true;
        },
        openModalMonth:function(){
            this.isModal=true;
            this.month=true;
        },
        closeModal:function(){
            this.isModal=false;
            this.onehalf=false,
            this.year=false,
            this.half=false,
            this.month=false
        }
    }
});
