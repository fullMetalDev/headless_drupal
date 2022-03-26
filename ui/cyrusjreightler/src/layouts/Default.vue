<template>
  <div class="layout">
    <header class="header">
      <g-link to="/"><g-image alt="Cyrus J Reightler" src="../../static/cyrusj.png" width="135" /></g-link>
      
      <dropdown/>
      
    </header>
    <slot/>
  </div>
</template>
<script>
    import Dropdown from '~/components/dropdown.vue';
    export default {
      components : {
        Dropdown
      }
    }
</script>
<static-query>
query {
  metadata {
    siteName
  }
  allDrupalNodePage{
    edges{
      node{
        title,
        path,
        
       
      }
    }
  }
  
}
</static-query>


<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
