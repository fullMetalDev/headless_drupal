<template>
    <div>
        <b-nav>
            <b-nav-item v-for="page in $static.pages.edges" :to="page.node.path" :key="page.id">{{page.node.title}}</b-nav-item>
        </b-nav>
    </div>
</template>



<static-query>
    query{
        pages:allDrupalNodePage{
            edges{
                node{
                    title,
                    path,
                    id
                }
            }
        }
    }
</static-query>