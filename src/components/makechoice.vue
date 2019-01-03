<template>

<div id="slider"  class="slider">
  <div class="slider-wrapper">
    <section class="slider-window">   
      <ul class="slider-container" :style="containerStyle">  
        <li>  
          <img src="./img/4.png" alt="">
        </li>
        <li v-for="(item, index) in sliders" :key="index">  
          <img :src="'./img/'+item+'.png'" alt="">
        </li>
        <li>  
          <img src="./img/1.png" alt="">
        </li>
      </ul> 
    </section>
    <section class="description">司机春茶蛋糕</section>
    
    <div class="slider-lock" @click="lockChoice"
      v-bind:class="{ active: isActive }"
    >{{content}}</div>
    
  </div>
</div>
</template>
<script>
export default {
  name: 'makechoice',
  props: ['message'],
  data () {
    return {
      sliders:[1,2,3,4],
      distance:0,
      currentIndex:1,
      lock:false,
      isActive:false,
      content:'选TA'
    }
  },
  computed:{
    containerStyle() {  
      return {   
        transform:`translateY( ${this.distance}px)` 
      }
    }
  },
  methods:{
    move(offset) {
      if(this.lock){return}else{
        this.currentIndex--
        if (this.currentIndex > 4) this.currentIndex = 1
        if (this.currentIndex < 1) this.currentIndex = 4
        const destination = this.distance + offset 
        this.animate(destination)
      }
      
    },
    animate(destination) {
      const temp = setInterval(() => {
        if  ( destination > this.distance) {
            this.distance += 30 
        } else {
            clearInterval(temp)
            this.distance = destination
            if (destination < -800) this.distance = -200
            if (destination > -200) this.distance = -800
        }
        }, 20)

    },
    lockChoice(){
      this.lock = !this.lock
      this.isActive = ! this.isActive
      if(this.isActive){
        this.content='duihao'
      }else{
        this.content='选TA'
      }
      if(this.lock){
        this.$emit("getIndex",this.currentIndex,this.message)
      }
    }
  }

}
</script>


<style >
.slider{
   width:18vw;
   height: 33.02vh;
   padding:1vw;
}

.slider-wrapper{
}
.slider-window{
  width:18vw;
  height:19.59vh;
  overflow: hidden;
}
.slider-window img{
  width:18vw;
  height:19.59vh;
}
.description{
  text-align: center;
  font-size: .9rem;
  margin:1vh 0;
  color:#707271;
}
.slider-lock{
  width:10.416vw;
  height: 10.416vw;
  border-radius: 50%;
  background-color: #ee7281;
  text-align: center;
  line-height: 10.416vw;
  color:#fff;
  font-size: .8rem;
  margin:0 auto;
}
.slider-lock.active{
  width:10.416vw;
  height: 10.416vw;
  border-radius: 50%;
  background-color: #32b16c;
  text-align: center;
  line-height: 10.416vw;
  color:#fff;
  font-size: .8rem;
  margin:0 auto;
}
</style>
