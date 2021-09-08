<template>
    <div class="d-flex flex-column">
        <h4 class="mb-0">{{ title }}</h4>
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
            tags: ['HTML', 'SASS', 'JS', 'AngularJS', 'Vue.js', 'PHP', 'PWA\'s', 'Figma', 'Design systems', 'Bootstrap', 'Material'],
            title: this.displayTitle,
        }
    },
}
</script>