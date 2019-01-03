<template>
  <div id="app" >
    <div class="container">
      <header class="title"></header>
      <section class="items"></section>
      <section class="wrap" >
        <div class="itemsWrapper">
          <makechoice v-on:getIndex="captureIndex"
            v-for="item in choice" :key='item'
            v-bind:message='item'
            ref='xxx'
          ></makechoice>
        </div>
      </section>
      <footer class="tab">
        <div class="reRandom" @click="reRandom"></div>
        <div class="submit"  @click="submitSelect"></div>
      </footer>
    </div>
  </div>
</template>

<script>
import makechoice from './components/makechoice.vue'

export default {
  name: 'app',
  components: {
    makechoice
  },
  data(){
    return {
      choice:['drink','cake','food','xxx'],
      confirming:{},
      stringify:''
    }
  },
  methods:{
    captureIndex:function(n, index){
      this.confirming[index] = n
    },
    submitSelect(){
      for(let i = 0; i < this.choice.length;i++){
        if(this.confirming[this.choice[i]] === undefined){
          alert('请勾选全部选项')
          return
        }
      }
      this.stringify = JSON.stringify(this.confirming)
      alert(this.stringify )
    },
    reRandom(){ 
      for(let i =0;i<3;i++){
        let randomNum = Math.ceil(Math.random()*50) 
        let j=0
        while(j<randomNum){//这里为什么总是走相同步数？调用的次数不同啊。是不是由于位移采用的setinterval导致的？
          this.$refs.xxx[i].move(200)
          j++
        }
      }
    }
  }
}
</script>
<style scoped>

#app{
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(#ee7281, #f7cb8b);

}
.container{
}
.title{
  width:88.33vw;
  height:7.2599vh;
  position:absolute;
  left:6.666vw;
  top:11.475vh;
  background-image:url('../public/img/title.png');
  background-size: cover;
}
.items{
  width:85vw;
  height:8.66vh;
  position:absolute;
  top:22.482vh;
  left:6.666vw;
  background-image:url('../public/img/items.png');
  background-size: cover;
}
.wrap {
  position:absolute;
  width:95vw;
  height:41.686vh;
  left:1.7vw;
  top:31.382vh;
  background-image:url('../public/img/decoration.png');
  background-size: cover;
}
.itemsWrapper{
  position: absolute;
  display: flex;
  height:36vh;
  width:82.083vw;
  justify-content: space-between;
  top:3vh;
  left: 6vw;
}

.tab{
  position: absolute;
  top:82.4355vh;
  
}
.reRandom{
  position:absolute;
  left:7.0833vw;
  width:39.583vw;
  height:7.494vh;
  background-image:url('../public/img/again.png');
  background-size: cover;
}
.submit{
  position:absolute;
  left:50.8333vw;
  width:39.583vw;
  height:7.494vh;
  background-image:url('../public/img/confirm.png');
  background-size: cover;
}

.unsubmit{
  position:absolute;
  left:50.8333vw;
  width:39.583vw;
  height:7.494vh;
  background-image:url('../public/img/confirm-deactive.png');
  background-size: cover;
}
</style>
