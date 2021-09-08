<template>
  <div class="hero container">
      <div class="row">
      
        <div class="col-12 col-sm-7 offset-sm-1 order-sm-2 d-flex align-items-center">
          <div>
            <h1 class="display-4 gradient-text">Sunny Feijen</h1>
            <h3>
                <div class="text-target">Front-end developer uit Eindhoven,</div>
                <div class="text-target">Est. 1993</div>
            </h3>
          </div>
        </div>

        <div class="image-container offset-backdrop col-10 offset-1 col-sm-3 offset-sm-1">
          <div class="parallax-container ar-3-4">
            <div ref="parallax-target" class="bg-cover" style="background-image: url('http://sunnyfeijen.nl/wp-content/uploads/2017/07/image6.jpg')"></div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  mounted () {
    gsap.registerPlugin(ScrollTrigger);
    this.$nextTick(function() {
      this.$parallaxImage(this.$el);
      this.$fadeInUp(this.$el);
      this.$fadeInUpLong();
    });
  },
}
</script>