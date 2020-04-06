<article>
    <a rel='prefetch' href='blog/{post.slug}'><h1>{post.title}</h1>
        <img src={post.img} alt="">
    </a>
    <p>{post.summary}</p>
    <blockquote>
        {#each post.tags as tag}
            <i>{tag}</i>
        {/each}
    </blockquote>
</article>


<script lang="typescript">
    export let post:object;
</script>

<style lang="sass">
article
    min-width: 300px
    padding: 1rem
    transition: background 0.4s
    max-width: 400px
    &:hover
        background-color: #232323
    img
        width: 100%
        height: 60%
        object-fit: unset
    p
        font-size: 0.8rem
    a
        text-decoration: none
    h1
        font-size: 1.4rem
        text-decoration: none
    blockquote
        display: flex
        flex-wrap: wrap
        font-size: 0.8rem
        margin: 0
        i
            margin-right: 1rem

@media screen and ( max-width: 820px )
    article
        height: auto
        img
            height: auto

</style>