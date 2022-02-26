<template>
  <div>
    <h1 v-html="$page.cyrusjPages.title" />
    <div v-html="$content" />
  </div>
</template>

<page-query>
query ($id: ID!) {
  cyrusjPages(id: $id) {
    title
    
  }
}
</page-query>