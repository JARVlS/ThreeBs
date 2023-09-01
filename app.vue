<template>
  <div class="page">
    <Header></Header>
    <NuxtPage />
  </div>
</template>

<style>
@font-face {
  font-family: Brolink;
  src: url("assets/fonts/brolink/BrolinkDemo-VGyMZ.otf");
}
@font-face {
  font-family: Nunito;
  src: url('assets/fonts/Nunito/Nunito-VariableFont_wght.ttf');
}
:root {
  --color-bg: #000;
  --color-text: #fff;
  --color-shadows: #555555;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Nunito, Calibri, sans-serif;
}

.page{
  background-color: var(--color-bg);
  color: var(--color-text);
  height: 100vh;
  width: 100vw;
  overflow:auto;
  position: relative;
  padding-top: 13rem;
}

.headline{
  font-family: Nunito;
}

.text_big{
  font-size: 1.2rem;
  font-weight: 600;
}
.header{
  position:fixed;
  top:0; 
  width: 100vw;
  height: auto;
  background-color: var(--color-bg);
}

a{
  text-decoration: none;
  color: var(--color-text);
}
</style>