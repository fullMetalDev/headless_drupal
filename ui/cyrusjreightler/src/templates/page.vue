<template>
  <Layout>
    <h1 v-html="$page.pages.title" />
    <div v-html="$page.pages.body.value" />
  
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  pages:drupalNodePage(id: $id) {
    title,
    body {
      value
    }
    
  }
}
</page-query>
