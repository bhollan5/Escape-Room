<template>
  <div id="home">
    <div id="running-ui"></div>
    <div class="question-box" id="q1">
      <div class="mark-holder">
        <div v-for="(attempt, i) in questions[0].attempts">
          <img src="@/assets/check.png" class="mark" v-if="attempt == 2">
          <img src="@/assets/ex.png" class="mark" v-else-if="attempt == 1">
        </div>
      </div>
      <div class="question-text">
        <div>Below is a pattern of numbers. Assuming the first number displayed in the pattern is the 0th number, write a program to find the 200th number of the pattern.</div>
        <br>
        <b>17, 21, 26, 32, 39...</b>
      </div>

      <div class="answer-text">
        <input class="answer" v-model="questions[0].answer"> 
        <button @click="submit(0)">TRY YOUR LUCK...</button>
      </div>

    </div>
    <div class="question-box" id="q2">
      <div class="mark-holder">
        <div v-for="(attempt, i) in questions[1].attempts">
          <img src="@/assets/check.png" class="mark" v-if="attempt == 2">
          <img src="@/assets/ex.png" class="mark" v-else-if="attempt == 1">
        </div>
      </div>
      <div class="question-text">
        <div id="kheroxmysox">Vid siht fo DI eht stahw?</div>
        <br>
        <b></b>
      </div>
      
       <div class="answer-text">
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
        <div>The first letters of these colors' real names (lowercase):</div>
        <div><b>#0000FF</b></div>
        <div><b>rgba(255,165,0,1)</b></div>
        <div><b>#FF0</b></div>
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
    <div id="you-win" v-if="totalRight == 4">
      <img src="@/assets/vampboy.png">
      <h1><b>You frickin' win!!!!</b></h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
var md5 = require('js-md5');
import Vue from 'vue';

export default {
  name: 'home',
  data() {
    return {
      questions: [
        {
          answer: '',
          key: '85410779053820c804ddc69ae4a48d9d',
          solved: false,
          attempt: 0,
          // Attempts logs 0 if unattempted, 1 if failed, and 2 if passed
          attempts: [0,0,0,0]
        },
        {
          answer: '',
          key: '019457fe1830d7c3f73673b6432e5f72',
          solved: false,
          attempt: 0,
          // Attempts logs 0 if unattempted, 1 if failed, and 2 if passed
          attempts: [0,0,0,0]
        },
        {
          answer: '',
          key: '1a699ad5e06aa8a6db3bcf9cfb2f00f2',
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
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
$bg-gray: #3E4250;
$brown: #433122;

$p: purple;
$dp: darken(purple, 4%);
$lp: lighten(purple, 4%);

#home {
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 0% 50% 50%;
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
  background-color: purple;
  background-image:
  repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
  repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
  linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),
  linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1));
  background-size: 70px 120px;
}
#q2 {
  grid-column: 2/3;
  grid-row: 2/3;
  background: 
radial-gradient(circle, transparent 20%, purple 20%, purple 80%, transparent 80%, transparent),
radial-gradient(circle, transparent 20%, purple 20%, purple 80%, transparent 80%, transparent) 50px 50px,
linear-gradient(darken(purple, 4%) 8px, transparent 8px) 0 -4px,
linear-gradient(90deg, darken(purple, 4%) 8px, transparent 8px) -4px 0;
background-color: purple;
background-size:100px 100px, 100px 100px, 50px 50px, 50px 50px;
}
#q3 {
  grid-column: 1/2;
  grid-row: 3/4;
  background-color:purple;
background-image: 
radial-gradient(circle at 100% 150%, $dp 24%, $p 25%, $p 28%, $dp 29%, $dp 36%, $p 36%, $p 40%, transparent 40%, transparent),
radial-gradient(circle at 0    150%, $dp 24%, $p 25%, $p 28%, $dp 29%, $dp 36%, $p 36%, $p 40%, transparent 40%, transparent),
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

.question-text {
  width: 70%;
  min-height: 100px;
  background: darken(purple, 10%);
  box-shadow: -1px -1px 20px rgba(0,0,0,.5);
  margin: 20px;
  padding: 15px;
  text-align: left;
  color: white;
}
.answer-text {
  width: 70%;

  background: darken(purple, 10%);
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
</style>