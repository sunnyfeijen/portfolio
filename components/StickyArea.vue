<template>
  <div class="sticky-container d-flex align-items-center justify-content-center">
      <span  data-power="20, 30" class="box-container-text sticky-item">
          <span>momenteel werk ik bij</span>
            <a class="button" href="https://www.koek.nl" target="_blank" rel="noopener">
                <span>koek.nl</span>
                <i class="bi-arrow-right"></i>
            </a>
        </span>
      <div data-power="40, 60" class="box-container p-2 sticky-item">
          <div class="box-container-bg"></div>
      </div>
  </div>
</template>

<script>
export default {
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
                    var [d, h] = item.dataset.power.split(", ");
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