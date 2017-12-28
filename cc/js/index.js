new Vue({
    el:"#root",
    data:{
        list:[
            {id:1,title:1111},
            {id:2,title:2222},
            {id:3,title:3333},
        ],
        title:"",
        state:false
    },
    methods:{
        aa(){
            this.state = true;
        },
        bb(val){
            this.title = val;
            this.state = false;
        }
    }
})