Vue.component("custom-input",{
    props:["title"],
    template:`<div class="select-input">
        <input type="text" @focus="focus" v-model="title">
    </div>`,
    data(){
        return {}
    },
    methods:{
        focus(){
            this.$emit("changeinput");
        }
    }
})

Vue.component("custom-list",{
    props:["listData","state"],
    template:`<ul class="select-list">
        <li v-for="v in listData" @click="change(v.title)">{{v.title}}</li>
    </ul>`,
    data(){
        return {}
    },
    methods:{
        change(val){
            this.$emit('changelist',val);
        }
    }
})