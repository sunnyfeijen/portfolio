<template>
  <div class="sticky-container d-flex align-items-center justify-content-center">
      <span  data-power="20, 30" class="box-container-text sticky-item">todo sticky area</span>
      <div data-power="40, 60" class="box-container p-2 border border-primary sticky-item">
          <div class="box-container-bg"></div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isLoaded: false
        }
    },
    head () {
        return {
            script: [
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js',
                defer: true,
                // Changed after script load
                callback: () => { this.isLoaded = true } 
            }
            ]
        }
    },
    mounted () {
        this.init(this.$el);
    },
    methods: {
        init(el) {
            this.area = el;
            this.$stickyItems = this.area.querySelectorAll(".sticky-item"),
            this.mouseHandler = this.mouseHandler.bind(this),
            this.mouseleaveHandler = this.mouseleaveHandler.bind(this),
            this.area.addEventListener("mousemove", this.mouseHandler),
            this.area.addEventListener("mouseleave", this.mouseleaveHandler);
        },
        computedProps(e, t) {
            var s = e.clientX - t.left,
                r = e.clientY - t.top;
            return {
                x: (s - t.width / 2) / t.width,
                y: (r - t.height / 2) / t.height
            }
        },
        mouseHandler(e) {
            this.$stickyItems.forEach((item => {
                    var r;
                    var n = item.getBoundingClientRect();
                    // var d = 40;
                    // var h = 10;
                    var [d, h] = item.dataset.power.split(", ");
                    // return;
                    var s = this.computedProps(e, n);
                    gsap.to(item, {
                        delay: 0,
                        y: s.y * +h,
                        x: s.x * +h,
                        duration: 1,
                        ease: "power2.out"
                    });
                }))



        },
        mouseleaveHandler() {
            // Reset all items
            this.$stickyItems.forEach((item => {
                gsap.to(item, {
                    delay: 0,
                    duration: 1,
                    y: 0,
                    x: 0,
                    ease: "power2.out"
                })
            }))
        }
    },
    destroy () {
        this.area && this.area.removeEventListener("mousemove", this.mouseHandler),
        this.area && this.area.removeEventListener("mouseleave", this.mouseleaveHandler)
    }
}
</script>

<style lang="scss">
    .sticky-container {
        padding: 60px 0;
        position: relative;

        &:hover {
            .box-container-bg {
                transform: translateY(0);
                border-radius: 0;
            }
        }
    }

    .box-container {
        width: 50%;
        height: 50%;
        top: 25%;
        left: 25%;
        position: absolute;
        overflow: hidden;
    }

    .box-container-text {
        z-index: 1;
    }

    .box-container-bg {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background: red;
        z-index: -2;
        transition: transform 0.4s ease-out, border-radius 0.3s ease-out;
        transform: translateY(105%);
        border-radius: 50%;
    }
</style>