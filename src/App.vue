<template>
  <screen v-bind="screenData" /> 
 </template>
 
 <script lang="ts">
  import Screen from './component/Screen.vue';

  export default {
  name: "App",
  components: {
    Screen,
  }, 
  data() {
  return { screenData };
  },
};

  const screenData = {
  logo: "logo.png", lupcycle: "Lupcycle", content1: "content-1.png", user1: "user .png"
  , dawit_Kwak: "@dawit_kwak", text1:"• 서울시민교회",
  ssgat: "수련회 준비, sbr /~ssG QT로!", text2 : "#스가랴큐티 #큐티챌린지 #수련회준비 #수련회큐티" ,
  user2: "user-1.png", ohgyumin83: "@ohgyumin83", esf: "• ESF"
  ,text3: "동아리 신입생들sbr />나눔 질문지 공유"
  ,text4:"#나눔지 #아이스브레이킹 #신입생 #소그룹나눔"
  ,content2: "content.png"
  };
  </script>