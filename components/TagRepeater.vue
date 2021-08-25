<template>
    <div class="d-flex flex-column">
        <span>{{ title }}</span>
        <div class="tag-repeater d-flex align-items-center flex-wrap">
            <div class="tag foo bar" v-for="tag in tags" v-bind:key="tag.$index">
                {{ tag }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['displayTitle'],
    data () {
        return {
            tags: ['HTML', 'SASS', 'JS', 'AngularJS', 'Vue.js', 'PHP', 'PWA\'s', 'Figma', 'Design systems'],
            title: this.displayTitle,
        }
    },
}
</script>

<style lang="scss">
    .tag-repeater {
        margin-left: calc(var(--space-s) * -1); // invert
    }

    .tag {
        border-radius: 2px;
        padding: 4px;
        margin: var(--space-s);
        background-color: #f8f9fa;
    }
</style>