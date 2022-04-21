<template>
  <div class="App">
    <main>
      <router-view :key="$route.fullPath"></router-view>
    </main>
  </div>
</template>