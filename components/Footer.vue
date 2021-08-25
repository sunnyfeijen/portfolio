<template>
  <footer class="col-12">
      <div class="">
          <h4>Contact:</h4>
          <p>Voor vragen, samenwerkingen, of iets anders kun je me bereiken via:</p>
          <div class="d-flex flex-column">
            <div class="button" v-on:click="copyToClipboard('info@sunnyfeijen.nl')">
                <span>info@sunnyfeijen.nl</span>
                <i class="bi-reply"></i>
            </div>
            <a class="button" href="https://www.instagram.com/sunnyfeijen/" target="_blank" rel="nofollow">
                <span>instagram</span>
                <i class="bi-arrow-right"></i>
            </a>
            <a class="button" href="#" target="_blank" rel="nofollow">
                <span>CV</span>
                <i class="bi-arrow-right"></i>
            </a>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    data () {
        return {
            clipboard: false,
        }
    },
    methods: {
        copyToClipboard (text) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text);
                // todo show toast
            } else {
                // Clipboard API not available
                return false;
            }
        },
  }
}
</script>

<style>

</style>