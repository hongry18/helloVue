<template>
    <div class="page-container">
        <md-app md-waterfall md-mode="fixed">
            <md-app-toolbar class="md-primary">
                <span class="md-title">My Title</span>
            </md-app-toolbar>

            <md-app-drawer md-permanent="full">
                <md-toolbar class="md-transparent" md-elevation="0">
                    Navigation
                </md-toolbar>

                <md-list>
                    <md-list-item>
                        <span class="md-list-item-text"><router-link to="/about/us">aboutUs</router-link></span>
                    </md-list-item>

                    <md-list-item>
                        <span class="md-list-item-text"><router-link to="/about/hello">aboutHello</router-link></span>
                    </md-list-item>

                    <md-list-item>
                        <span class="md-list-item-text"><router-link to="/about/contact">acoutContact</router-link></span>
                    </md-list-item>

                    <md-list-item>
                        <span class="md-list-item-text">Spam</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>
            <md-app-content>
                <router-view />
            </md-app-content>
        </md-app>
    </div>
</template>

<style lang="scss" scoped>
    .md-app {
        min-height: 700px;
        max-height: 800px;
        border: 1px solid rgba(#000, .12);
    }

   // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
