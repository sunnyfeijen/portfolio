<template>
    <nav class="navbar fixed-top bg-dark">
      <div class="start">
        <NuxtLink to="/">Sunny</NuxtLink>
      </div>
      <div class="end">
          <NuxtLink to="/about">Over</NuxtLink>
      </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    mounted () {
      this.init();
    },
    methods: {
      init () {
        var showAnim = gsap.from('.navbar', { 
          yPercent: -100,
          paused: true,
          duration: 0.2,
          ease: 'power2.out',
        }).progress(1);

        ScrollTrigger.create({
          start: "top top",
          end: 99999,
          onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse()
          }
        });

      }
    }
}
</script>