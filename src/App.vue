<template>
  <div id="app">
    <transition appear
                appear-active-class="animated zoomInUp"
                name="custom-classes-transition" enter-active-class="animated zoomInUp"
                mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

}

html, body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
