<template>
<div>
    <div v-for="post in posts">
        <div class="post-simular-header">
            <h2>
                <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
            </h2>
            <div class="tags">
                <div class="tag" v-for="tag in post.frontmatter.tags">{{ tag }}</div>
            </div>
        </div>
        <p>{{ post.frontmatter.description }}</p>
        
        <p><router-link :to="post.path">Read more</router-link></p>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/blog/posts/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>

<style lang="stylus" scoped>
.post-simular-header
    position relative
.tags
    display flex
    justify-content flex-end
    position absolute
    top 50%
    right 0
    transform translateY(-50%)
.tag
    display flex
    justify-content center
    align-items center
    font-size 10px
    line-height 10px
    padding 7px 10px
    border-radius 100px
    color white
    background-color #3eaf7c
    margin-left 3px
</style>