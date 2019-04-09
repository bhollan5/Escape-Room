<template>
  <div id="home">
    <img src="@/assets/dingding.jpg" class="ding-ding"
          :style="{
              left: mouseX - 30 + 'px',
              top: mouseY - 30 + 'px'
            }">
    <div id="running-ui"></div>
    <div class="question-box" id="q1">
      <div class="mark-holder">
        <div v-for="(attempt, i) in questions[0].attempts">
          <img src="@/assets/check.png" class="mark" v-if="attempt == 2">
          <img src="@/assets/ex.png" class="mark" v-else-if="attempt == 1">
        </div>
      </div>
      <div class="question-text">
        <div><a href="https://codepen.io/bhollan5/pen/dLNgpb?" target="_blank" style="color:white;">(kniL)</a> .noitseuq siht ekil kool hpargarap eht ekaM .txet fo hpargarap a si woleB</div>
        <br>
        <input readonly onClick="this.select();" value="crud inconspicuously goodness saluted gosh hello jeez yikes one that out far unsociable beheld roughly far danced constitutionally outside toward yikes less far whale dear concomitant flamingo far including kiwi was some puerile infallibly whale recklessly iguanodon egret since then the desperately unfittingly manta opposite dear circa hence more hey hey quail save and ouch and darn dubious kissed lent measurable alas whale grouped burned darn toward impertinent krill the yet sure wound ouch more this immature trout far much some jeepers more near darn peevishly whimsically save purred approvingly cardinal pill strenuous wow hatchet wow much much less" class="text-display">
      </div>

      <div class="answer-text">
        <input class="answer" v-model="questions[0].answer"> 
        <button @click="submit(0)">TRY YOUR LUCK...</button>
      </div>

    </div>
    <div class="question-box" id="q2" @mousemove="getMouseCoords">
      <div class="mark-holder">
        <div v-for="(attempt, i) in questions[1].attempts">
          <img src="@/assets/check.png" class="mark" v-if="attempt == 2">
          <img src="@/assets/ex.png" class="mark" v-else-if="attempt == 1">
        </div>
      </div>
      <div class="question-text">
        <div>The answer to this question is "hackintothemainframe".  Might be some glitches on this one, though, feel free to mess with the CSS. (<b>display:none;</b> could be handy)</div>
        
        <br>
      </div>
      
       <div class="answer-text rotate-boy">
        <input class="answer" v-model="questions[1].answer"> 
        <button @click="submit(1)">TRY YOUR LUCK...</button>
      </div>

    </div>
    <div class="question-box" id="q3">
      <div class="mark-holder">
        <div v-for="(attempt, i) in questions[2].attempts">
          <img src="@/assets/check.png" class="mark" v-if="attempt == 2">
          <img src="@/assets/ex.png" class="mark" v-else-if="attempt == 1">
        </div>
      </div>
      <div class="question-text">
        <div>L37'5 s33 s0m3 l337 sp3ak. <br>(Handl3 e's, t's, s's, and o's.)</div>
        <input readonly onClick="this.select();" value="crud inconspicuously goodness saluted gosh hello jeez yikes one that out far unsociable beheld roughly far danced constitutionally outside toward yikes less far whale dear concomitant flamingo far including kiwi was some puerile infallibly whale recklessly iguanodon egret since then the desperately unfittingly manta opposite dear circa hence more hey hey quail save and ouch and darn dubious kissed lent measurable alas whale grouped burned darn toward impertinent krill the yet sure wound ouch more this immature trout far much some jeepers more near darn peevishly whimsically save purred approvingly cardinal pill strenuous wow hatchet wow much much less" class="text-display">
      </div>
      
       <div class="answer-text">
        <input class="answer" v-model="questions[2].answer"> 
        <button @click="submit(2)">TRY YOUR LUCK...</button>
      </div>

    </div>
    <div class="question-box" id="q4">
      <div class="mark-holder">
        <div v-for="(attempt, i) in questions[3].attempts">
          <img src="@/assets/check.png" class="mark" v-if="attempt == 2">
          <img src="@/assets/ex.png" class="mark" v-else-if="attempt == 1">
        </div>
      </div>
      <div class="question-text">
        <div><b>(00010111 * 00100110) % 00100101<br> == ________</b></div>
      </div>
      
       <div class="answer-text">
        <input class="answer" v-model="questions[3].answer"> 
        <button @click="submit(3)">TRY YOUR LUCK...</button>
      </div>

    </div>
    <div class="question-box" id="q5">
      <div class="mark-holder">
        <div v-for="(attempt, i) in questions[4].attempts">
          <img src="@/assets/check.png" class="mark" v-if="attempt == 2">
          <img src="@/assets/ex.png" class="mark" v-else-if="attempt == 1">
        </div>
      </div>
      <div class="question-text">
        <div>What's the 2nd most used letter in this text, and how often is it used? Format your answer like this: 'x:10'</div>
        <br>
        <div>(' ' is not a letter!)</div>
        <br>
        <input readonly onClick="this.select();" value="crud inconspicuously goodness saluted gosh hello jeez yikes one that out far unsociable beheld roughly far danced constitutionally outside toward yikes less far whale dear concomitant flamingo far including kiwi was some puerile infallibly whale recklessly iguanodon egret since then the desperately unfittingly manta opposite dear circa hence more hey hey quail save and ouch and darn dubious kissed lent measurable alas whale grouped burned darn toward impertinent krill the yet sure wound ouch more this immature trout far much some jeepers more near darn peevishly whimsically save purred approvingly cardinal pill strenuous wow hatchet wow much much less" class="text-display">
      </div>
      
       <div class="answer-text">
        <input class="answer" v-model="questions[4].answer"> 
        <button @click="submit(4)">TRY YOUR LUCK...</button>
      </div>

    </div>
    <div class="question-box" id="q6">
      <div class="mark-holder">
        <div v-for="(attempt, i) in questions[5].attempts">
          <img src="@/assets/check.png" class="mark" v-if="attempt == 2">
          <img src="@/assets/ex.png" class="mark" v-else-if="attempt == 1">
        </div>
      </div>
      <div class="question-text">
        <div>Type "hello world", check your console.</div>
        <br>
      </div>
      
       <div class="answer-text">
        <input class="answer" v-model="questions[5].answer"> 
        <button @click="specialSubmit(5)" id="this_is_the_pass">TRY YOUR LUCK...</button>
      </div>

    </div>
    <div id="you-win" v-if="totalRight == 6">
      <img src="@/assets/vampboy.png">
      <h1><b>You frickin' win!!!!</b></h1>
    </div>
  </div>
</template>

<script>

function givePass() {
  console.log("oh yeah?")
}

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
var md5 = require('js-md5');
import Vue from 'vue';

export default {
  name: 'home',
  data() {
    return {
      mouseX: -100,
      mouseY: 0,
      questions: [
        {
          answer: '',
          key: 'f0ace9e53c467cf276b2c6c83a8a8349',
          solved: false,
          attempt: 0,
          // Attempts logs 0 if unattempted, 1 if failed, and 2 if passed
          attempts: [0,0,0,0]
        },
        {
          answer: '',
          key: 'd04b1a9d14bc0188a8720bd6e369e406',
          solved: false,
          attempt: 0,
          // Attempts logs 0 if unattempted, 1 if failed, and 2 if passed
          attempts: [0,0,0,0]
        },
        {
          answer: '',
          key: '19b999bd5ffac4c73bed82b62da0356c',
          solved: false,
          attempt: 0,
          // Attempts logs 0 if unattempted, 1 if failed, and 2 if passed
          attempts: [0,0,0,0]
        },
        {
          answer: '',
          key: 'c39ddef288635ba16078ce73364c1d42',
          solved: false,
          attempt: 0,
          // Attempts logs 0 if unattempted, 1 if failed, and 2 if passed
          attempts: [0,0,0,0]
        },
        {
          answer: '',
          key: 'c6927363a035d64512b52a7d3f18d9d0',
          solved: false,
          attempt: 0,
          // Attempts logs 0 if unattempted, 1 if failed, and 2 if passed
          attempts: [0,0,0,0]
        },
        {
          answer: '',
          key: '9cbc36f15906f790b90c1aa0203b3db6',
          solved: false,
          attempt: 0,
          // Attempts logs 0 if unattempted, 1 if failed, and 2 if passed
          attempts: [0,0,0,0]
        },
      ]
    }
  },
  computed: {
    totalRight() {
      var total = 0;
      for (var i in this.questions) {
        if (this.questions[i].solved) {
          total++;
        }
      }
      return total;
    },
  },
      
  methods: {
    submit(num) {
      console.log(md5(this.questions[num].answer))
      if (md5(this.questions[num].answer) == this.questions[num].key) {
        console.log("Correct!");
        this.questions[num].solved = true;
        Vue.set(this.questions[num].attempts, this.questions[num].attempt, 2);
      } else {
        console.log("incorrect :(")
        this.questions[num].answer = '';

        Vue.set(this.questions[num].attempts, this.questions[num].attempt, 1);
      }
      if (this.questions[num].attempt < 3) {
        this.questions[num].attempt++;
      }
    },
    specialSubmit(num) {
      console.log(md5(this.questions[num].answer))
      if (md5(this.questions[num].answer) == this.questions[num].key) {
        console.log("Correct!");
        this.questions[num].solved = true;
        Vue.set(this.questions[num].attempts, this.questions[num].attempt, 2);
      } else if (this.questions[num].answer == 'hello world') {
        var foo = 45;
        console.log("oh dang you're really hackin into the mainframe")
        console.log("inspect the \"TRY YOUR LUCK\" button...")
      } else {
        console.log("incorrect :(")
        this.questions[num].answer = '';

        Vue.set(this.questions[num].attempts, this.questions[num].attempt, 1);
      }
      if (this.questions[num].attempt < 3) {
        this.questions[num].attempt++;
      }
    },
    getMouseCoords: function (event) {
      this.mouseX = event.pageX;
      this.mouseY = event.pageY;
    }
  },
  mounted() {
    // document.addEventListener("mousemove", this.getMouseCoords);
  }
}
</script>

<style scoped lang="scss">
$bg-gray: #3E4250;
$brown: #433122;

$p: #58A4B0;
$dp: #373F51;
$lp: #A9BCD0;

#home {
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 0% 30% 35% 35%;
}
#running-ui {
  grid-column: 1/3;
  grid-row: 1/2;
  background: $bg-gray;
}
.question-box {
  border: solid 5px $brown;
  position: relative;
}
#q1 {
  grid-column: 1/2;
  grid-row: 2/3;
  background-color: $p;
  background-image:
  repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
  repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
  linear-gradient(60deg, rgba(0,0,0,.4) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.4) 75%, rgba(0,0,0,.4)),
  linear-gradient(120deg, rgba(0,0,0,.4) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.4) 75%, rgba(0,0,0,.4));
  background-size: 70px 120px;
}
#q2 {
  grid-column: 2/3;
  grid-row: 2/3;
  background: 
radial-gradient(circle, transparent 20%, $p 20%, $p 80%, transparent 80%, transparent),
radial-gradient(circle, transparent 20%, $p 20%, $p 80%, transparent 80%, transparent) 50px 50px,
linear-gradient($dp 8px, transparent 8px) 0 -4px,
linear-gradient(90deg, $dp 8px, transparent 8px) -4px 0;
background-color: $p;
background-size:100px 100px, 100px 100px, 50px 50px, 50px 50px;
}
#q3 {
  grid-column: 1/2;
  grid-row: 3/4;
  background-color:$p;
background-image: 
radial-gradient(circle at 100% 150%, $dp 24%, $p 25%, $p 28%, $dp 29%, $dp 36%, $lp 36%, $lp 40%, transparent 40%, transparent),
radial-gradient(circle at 0    150%, $dp 24%, $p 25%, $p 28%, $dp 29%, $dp 36%, $lp 36%, $lp 40%, transparent 40%, transparent),
radial-gradient(circle at 50%  100%, $p 10%, $dp 11%, $dp 23%, $p 24%, $p 30%, $dp 31%, $dp 43%, $p 44%, $p 50%, $dp 51%, $dp 63%, $p 64%, $p 71%, transparent 71%, transparent),
radial-gradient(circle at 100% 50%, $p 5%, $dp 6%, $dp 15%, $p 16%, $p 20%, $dp 21%, $dp 30%, $p 31%, $p 35%, $dp 36%, $dp 45%, $p 46%, $p 49%, transparent 50%, transparent),
radial-gradient(circle at 0    50%, $p 5%, $dp 6%, $dp 15%, $p 16%, $p 20%, $dp 21%, $dp 30%, $p 31%, $p 35%, $dp 36%, $dp 45%, $p 46%, $p 49%, transparent 50%, transparent);
background-size:100px 50px;
}

#q4 {
  grid-column: 2/3;
  grid-row: 3/4;
  background-color: $p;
background-image: linear-gradient(30deg, $dp 12%, transparent 12.5%, transparent 87%, $dp 87.5%, $dp),
linear-gradient(150deg, $dp 12%, transparent 12.5%, transparent 87%, $dp 87.5%, $dp),
linear-gradient(30deg, $dp 12%, transparent 12.5%, transparent 87%, $dp 87.5%, $dp),
linear-gradient(150deg, $dp 12%, transparent 12.5%, transparent 87%, $dp 87.5%, $dp),
linear-gradient(60deg, $lp 25%, transparent 25.5%, transparent 75%, $lp 75%, $lp), 
linear-gradient(60deg, $lp 25%, transparent 25.5%, transparent 75%, $lp 75%, $lp);
background-size:80px 140px;
background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
}
#q5 {
  grid-column: 1/2;
  grid-row: 4/5;
  background:
linear-gradient(45deg, $p 45px, transparent 45px)64px 64px,
linear-gradient(45deg, $p 45px, transparent 45px,transparent 91px, $dp 91px, $dp 135px, transparent 135px),
linear-gradient(-45deg, $p 23px, transparent 23px, transparent 68px,$p 68px,$p 113px,transparent 113px,transparent 158px,$p 158px);
background-color:$dp;
background-size: 128px 128px;
}
#q6 {
  grid-column: 2/3;
  grid-row: 4/5;
  background-color: $dp;
background-size: 58px 58px;
background-position: 0px 2px, 4px 35px, 29px 31px, 33px 6px,
0px 36px, 4px 2px, 29px 6px, 33px 30px;
background-image:
linear-gradient(335deg, $p 23px, transparent 23px),
linear-gradient(155deg, $p 23px, transparent 23px),
linear-gradient(335deg, $p 23px, transparent 23px),
linear-gradient(155deg, $p 23px, transparent 23px),

linear-gradient(335deg, $p 10px, transparent 10px),
linear-gradient(155deg, $p 10px, transparent 10px),
linear-gradient(335deg, $p 10px, transparent 10px),
linear-gradient(155deg, $p 10px, transparent 10px);
}

.question-text {
  width: 70%;
  min-height: 100px;
  background: $dp;
  box-shadow: -1px -1px 20px rgba(0,0,0,.5);
  margin: 20px;
  padding: 15px;
  text-align: left;
  color: white;
}
.answer-text {
  width: 70%;

  background: $dp;
  box-shadow: -1px -1px 20px rgba(0,0,0,.5);
  margin: 20px;
  padding: 15px;
  text-align: left;
  color: white;
  display: flex;
  justify-content: space-between;
}
.answer {
  background: none;
  border: none;
  outline: none;
  border-bottom: solid 2px white;
  color: white;
  font-size: 18px;
  font-family: Courier;
}
b {
  font-family: Courier;
}

button {
  font-family: Courier;
}

.mark-holder {
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  flex-direction: column;
}

.mark {
  width: 40px;
  margin-bottom: 10px;
}
#you-win {
  width: 60%;
  height: 60%;
  position: absolute;
  top: 10%;
  left: 10%;
  background: maroon;
  box-shadow: 0px 0px 20px black;
  padding: 10%;
  color: white;
}

.text-display {
  overflow-y: scroll;
  max-height: 20px;
  width: 100%;
  border: none;
  background: black;
  font-weight: bold;
  color: white;
}
.ding-ding {
  width: 60px;
  height: 60px;
  position: absolute;
  display: block;
  z-index: 1000;

}
.rotate-boy:hover {
  animation: rotate 5s linear infinite;
}
@keyframes rotate {
  from {
    transform: rotatey(0deg) rotatez(0deg);
  } to {
    transform: rotatey(360deg) rotatez(360deg);
  }
}
</style>
