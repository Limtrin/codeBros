<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-btn to="/">
          <q-toolbar-title>
            <main-logo
              :height="35"
              :width="140"
              fill="#fff">
            </main-logo>
          </q-toolbar-title>
        </q-btn>

        <q-space></q-space>

        <q-separator dark vertical></q-separator>
        <q-btn stretch flat label="Films" to="/table"></q-btn>
        <q-separator dark vertical></q-separator>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MainLogo from 'src/components/MainLogo.vue'

export default {
  components: { MainLogo },
  name: 'MainLayout',
  data () {
    return {
      drawer: false,
      tab: ''
    }
  }
}
</script>
