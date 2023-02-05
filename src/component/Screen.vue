<template>
    <div class="container-center-horizontal">
     <div class="meinpeiji screen"> 
      ‹div class="overlap-group2"> 
        ‹div class="flex-row">
        <img class="logo" :src="logo" alt= "logo" /> 
        <h1 class= "lupcycle">{{ lupcycle }}</h1>
         <img class="icon-user" src="account.svg" alt="icon-user" />
         </div> ‹div class="view">
           <img class="icon-search" src="vector. svg" alt="icon-search"/>
        </div>
        <div class="contents">
         <img class="content" :src="content1" alt="content" />
          ‹div class="overlap-group-container"> 
           ‹div class="flex-col">
            ‹div class="flex-row-1">
             <img class="user" :src="user1" alt="user" /> 
             <div class="flex-col-1 inter-medium-black-15px">
              <div class="dawit_kwak valign-text-middle">{{ dawit_Kwak }}</div> 
              <div class="text-1 valign-text-middle">{{ text1 }}</div>
        </div>
        <img class="icon-bookmark" src= "unsave.svg" alt="icon-bookmark" /> 
       </div>
       ‹div class="flex-col-2">
        ‹div class="ssg-qt inter-bold-black-36px" v-html="ssgQt"> </div> 
        ‹div class="text-2 valign-text-middle inter-medium-jordy-blue-15px"> {{ text2 }}</div>
      <img class="¡con-heart" src="unlike.svg" alt="icon-heart" />
     </div> 
    </div>
    ‹div class="flex-col-3"> 
     ‹div class="flex-row-2">
      <img class="user" :src="user2" alt="user" /> 
       <div class="flex-col-4 inter-medium-black-15px"> 
         ‹div class="ohgyumin83 valign-text-middle">{{ohgyumin83 }}</div>
         ‹div class="esf valign-text-middle">{{ esf }}</div>
      </div>
     <img class="icon-bookmark-1" src= "unsave. svg" alt="icon-bookmark" />
    </div>
    <div class="flex-col-5">
     ‹div class="text-3 inter-bold-black-36px">{{ text3 }}</div>
     <div class="text-4 valign-text-middle inter-medium-jordy-blue-15px" >{{text4 }}</div>
    <img class="icon-heart-1" src="unlike-1.svg" alt="icon-heart" />
    </div> 
   </div>
   </div>
   </div>
   <img class="content-1" :src="content2" alt="content" />
   </div> 
   </div>
  </div> 
  </template>

<script>
export default {
name:
"Screen"
1
props: [
"logo"
"lupcycle"
"content1"
"user!",
"dawit_Kwak"
"text1"
"ssgQt"
"text2"
"user2"
"ohgyumin83"
"esf"
"text3"
"text4"
"content2"
],
};
</script>
<style>
.meinpeiji {
align-items: flex-start;
border: 1px none;
display: flex;
height: 1080px;
overflow: hidden;
width: 1920px;
}
.overlap-group2 {
align-items: flex-end;
background-color: var (--white);
display: flex;
flex-direction: column; min-height: 1590px;
padding: 98px 133px;
width: 1920px;
}

•flex-row { align-items: center;
display: flex; min-width: 915px;
}
.logo {
height: 66px;
object-fit: cover;
width: 80px;
}
.lupcycle {
align-self: flex-end; color: var (--milano-red) ;
font-family: var (--font-family-inter);
font-size: var (--font-size-1);
font-weight: 700; letter-spacing: O;
line-height: normal; margin-bottom: 1px; min-height: 44px; min-width: 168px;
}
.icon-user {
height: 40px;
margin-left: 627px; margin-top: 6px;
width: 40px;
}
.view {
align-items: flex-start;
background-color: var (--white);
border: 2px solid;
border-color: var (--milano-red); border-radius: 30px;
display: flex;
height: 46px;
justify-content: flex-end;
margin-right: 133px; margin-top: 25px; min-width: 1326px; padding: 7px 22.9px;
}
.icon-search {
height: 30px;
width: 30px;
}
•contents { align-items: flex-start;
align-self: center;
display: flex;
height: 605px;
justify-content: flex-end;
margin-left: 62px; margin-top: 91px; min-width: 1274px;
}
.content {
height: 616px;
margin-top: -30px;
width: 458px;
}

.overlap-group-container {
align-items: flex-start;
display: flex;
flex-direction: column;
gap: 59px;
margin-left: 20px; min-height: 605px;
width: 379px;
}
flex-col {
align-items: center;
background-color: var (--white);
border-radius: 20px;
box-shadow: 10px 10px 40px #00000040 ; display: flex;
flex-direction: column;
gap: 29px;
min-height: 273px;
padding: 0 8px;
width: 378px;
}
.flex-row-1 {
align-items: flex-start;
display: flex;
height: 69px;
margin-right: 3px; min-width: 351px;
}
user {
align-self: flex-end;
height: 56px;
object-fit: cover;
width: 56px;
}
flex-col-1 {
align-items: flex-start; align-self: center;
display: flex;
flex-direction: column;
margin-left: 6px; margin-top: 7px; min-height: 50px; width: 106px;
}
.dawit_kwak {
height: 25px;
letter-spacing: 0; line-height: normal;
text-align: center;
width: 106px;
}
.text-1 {
height: 25px;
letter-spacing: 0; line-height: normal;
text-align: center;
width: 98px;
}
.icon-bookmark {
height: 56px;
margin-left: 141px;
width: 42px;
}
flex-col-2 {
align-items: flex-start;
display: flex;
flex-direction: column:
margin-right: 13px; 
min-height: 168px;
width: 349px;
}
ssg-qt {
letter-spacing: 0; line-height: normal; margin-left: 13px; min-height: 89px;
text-shadow: Opx 4px 4px L#00000040;
width: 275px;
}
.text-2 {
align-self: flex-end;
height: 25px;
letter-spacing: 0; line-height: normal;
width: 333px;
}
.icon-heart { 
height: 44px;
margin-top: 10px;
width: 50px;
}
•flex-col-3 { 
align-items: flex-end;
background-color: var (--white); border-radius: 20px;
box-shadow: 10px 10px 40px E#00000040; display: flex;
flex-direction: column;
gap: 29px;
margin-left: 1px; min-height: 273px;
padding: 0 8px;
width: 378px;
}
•flex-row-2 { align-items: flex-start;
display: flex;
height: 69px;
margin-right: 7px; min-width: 351px;
}
.flex-col-4 {
align-items: flex-start; align-self: center;
display: flex;
flex-direction: column;
margin-left: 11px;
margin-top: 7px; min-height: 50px;
width: 106px;
}
.ohgyumin83 
{ height: 25px;
letter-spacing: 0; 
line-height: normal;
width: 106px:
}
.esf {
height: 25px;
letter-spacing: 0; line-height: normal;
width: 98px;
}
.icon-bookmark-1 {
height: 56px;
margin-left: 136px;
width: 42px;
}
.flex-col-5 {
align-items: flex-end;
display: flex;
flex-direction: column;
margin-right: 8px; min-height: 168px;
width: 354px;
}
.text-3 {
letter-spacing: 0; line-height: normal; min-height: 89px;
text-shadow: Ox 4px 4px D#00000040;
width: 341px;
}
.text-4 {
height: 25px;
letter-spacing: 0; line-height: normal; margin-right: 5px;
width: 333px;
}
.icon-heart-1 {
align-self: flex-start;
height: 44px;
margin-top: 10px;
width: 50px;
}
.content-1 {
 height: 476px;
margin-left: 39px;
margin-top: -30px;
width: 458px;
}
</style>