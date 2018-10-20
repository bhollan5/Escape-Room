<template>
  <div id="home">
    <div id="running-ui"></div>
    <div class="question-box" id="q1">
      <img src="@/assets/check.png" class="mark">
      <div></div>
      <div class="question-text">
        <div>Below is a pattern of numbers. Assuming the first number displayed in the pattern is the 0th number, write a program to find the 200th number of each pattern.</div>
        <br>
        <b>17, 21, 26, 32, 38...</b>
      </div>

      <div class="answer-text">
        <input class="answer" v-model="questions[0].answer"> 
        <button @click="submit(0)">TRY YOUR LUCK...</button>
      </div>

    </div>
    <div class="question-box" id="q2">
      <div class="question-text">
        <div>Below is a pattern of numbers. Assuming the first number displayed in the pattern is the 0th number, write a program to find the 200th number of each pattern.</div>
        <br>
        <b>17, 21, 25, 29...</b>
      </div>

    </div>
    <div class="question-box" id="q3">
      <div class="question-text">
        <div>Below is a pattern of numbers. Assuming the first number displayed in the pattern is the 0th number, write a program to find the 200th number of each pattern.</div>
        <br>
        <b>17, 21, 25, 29...</b>
      </div>

    </div>
    <div class="question-box" id="q4">
      <div class="question-text">
        <div>Below is a pattern of numbers. Assuming the first number displayed in the pattern is the 0th number, write a program to find the 200th number of each pattern.</div>
        <br>
        <b>17, 21, 25, 29...</b>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
var md5 = require('js-md5');

export default {
  name: 'home',
  data() {
    return {
      questions: [
        {
          answer: '',
          key: '85410779053820c804ddc69ae4a48d9d',
          solved: false,
        },
        {
          answer: '',
          solved: false,
        },
        {
          answer: '',
          solved: false,
        },
        {
          answer: '',
          solved: false,
        }
      ]
    }
  },
  methods: {
    submit(num) {
      if (md5(this.questions[num].answer) == this.questions[num].key) {
        console.log("Correct!");
        this.questions[num].solved = true;
      } else {
        console.log("incorrect :(")
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
  grid-template-rows: 20% 40% 40%;
}
#running-ui {
  grid-column: 1/3;
  grid-row: 1/2;
  background: $bg-gray;
}
.question-box {
  border: solid 5px $brown;
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

.mark {
  width: 40px;
}
</style>