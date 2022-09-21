<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/001">001</router-link> |
      <router-link to="/002">002</router-link> |
      <router-link to="/003">003</router-link> |
      <router-link to="/003fix">003fix</router-link>|
      <router-link to="/004">004</router-link>|
      <router-link to="/005">005</router-link>|
      <router-link to="/006">006</router-link>|
      <router-link to="/007">007</router-link>|
      <router-link to="/008">008</router-link>|
      <router-link to="/009">009</router-link>|
      <router-link to="/010">010</router-link><br />
      <router-link to="/011">011</router-link>|
      <router-link to="/012">012</router-link>|
      <router-link to="/013">013</router-link>|
      <router-link to="/014">014</router-link>|
      <router-link to="/015">015</router-link>|
      <router-link to="/016">016</router-link>|
      <router-link to="/017">017</router-link>|
      <router-link to="/018">018</router-link>|
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
