<script></script>

<template>
  <header>
    <slot name="header"></slot>
  </header>
  <main name="main">
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<style scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: grey;
  color: white;
  text-align: center;
}
div:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
footer {
  /*position: fixed;*/
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: grey;
  color: white;
  text-align: center;
}
</style>
