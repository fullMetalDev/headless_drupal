<template>
    <div>
        <b-nav pills>
            <b-nav-item-dropdown
            id="tech-dropdown"
            text="Tech"
            toggle-class="nav-link-custom"
            right
            >
                <b-dropdown-item v-for="page in $static.techPages.edges" :key="page.id" :to="page.node.path">{{page.node.title}}</b-dropdown-item>
                
            </b-nav-item-dropdown>
            
            <b-nav-item-dropdown
            id="music-dropdown"
            text="Music"
            class="cyrus-j-dropdown-nav"
            toggle-class="nav-link-custom"
            right
            >
                <b-dropdown-item v-for="page in $static.musicPages.edges" :key="page.id" :to="page.node.path">{{page.node.title}}</b-dropdown-item>
                
            </b-nav-item-dropdown>
    </b-nav>
    </div>
</template>

<static-query>
    query{
        techPages:allDrupalNodePage{
            edges{
                node{
                    title,
                    path,
                    id
                }
            }
        }
        musicPages:allDrupalNodeMusic{
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