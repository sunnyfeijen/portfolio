<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="">
                        <h4>Contact</h4>
                        <p>Voor vragen, samenwerkingen, of iets anders kun je me bereiken via:</p>
                        <div class="d-flex flex-column">
                            <div class="button" v-on:click="copyToClipboard(mailAddress)">
                                <span>info@sunnyfeijen.nl</span>
                                <i class="bi-reply"></i>
                            </div>
                            <a class="button" href="https://www.instagram.com/sunnyfeijen/" target="_blank" rel="nofollow">
                                <span>instagram</span>
                                <i class="bi-arrow-right"></i>
                            </a>
                            <div>
                                <a class="button" href="https://github.com/sunnyfeijen" target="_blank" rel="nofollow">
                                    <span>github</span>
                                    <i class="bi-arrow-right"></i>
                                </a>
                                <span class="text-muted">(vooral private)</span>
                            </div>
                            <a class="button" href="#" target="_blank" rel="nofollow">
                                <span>CV</span>
                                <i class="bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <b-toast id="clipboard-success" class="no-body" variant="info" toaster="b-toaster-top-right" solid auto-hide-delay="2500" no-close-button body-class="d-none">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-center">
          <strong class="mr-auto">{{ toastText }}</strong>
          <button class="close" @click="$bvToast.hide('clipboard-success')">
              <i class="bi-x"></i>
          </button>
        </div>
      </template>
    </b-toast>

    </footer>
</template>

<script>
export default {
    data () {
        return {
            clipboard: false,
            toastText: '',
            mailAddress: 'info@sunnyfeijen.nl'
        }
    },
    methods: {
        copyToClipboard (text) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text);
                this.toastText = 'Mail gekopieerd naar klembord';
                this.$bvToast.show('clipboard-success');
            } else {
                // Clipboard API not available
                window.location.href = `mailto:${this.mailAddress}`;
            }
        },
  }
}
</script>