<template>
  <MusicLayout>
    <h1 v-html="$page.pages.title" />
    <div v-html="$page.pages.body.value" />
    
  
  </MusicLayout>
</template>
<script>
  
import MusicLayout from '../layouts/Music'
  export default{
    components:{
      MusicLayout
    }
  }
</script>
<page-query>
query ($id: ID!) {
  pages:drupalNodeMusic(id: $id) {
    title,
    body {
      value
    }
    
  }
}
</page-query>
