export default (context, inject) => {
    inject('parallaxImage', function(el) {
        var target = this.$refs['parallax-target'];

        // todo fallback for no target
        if(!el || !target) {
            return false;
        }

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
        tl.to(target, 1, { y: '-10%', ease: 'sine.out' });
    });

    inject('fadeInUp', function(el) {
        if(!el) return false;

        var textTarget = el.getElementsByClassName('text-target');

        if(textTarget.length <= 0) {
            return false;
        }
        
        var intro = gsap.timeline();
        intro.fromTo(textTarget, this.$store.state.animation.duration.medium, {
            opacity: 0,
            y: 10,
        }, {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          stagger: 0.2
        }, "+=0.2");
    });

    inject('fadeInUpLong', function() {
        var tl = gsap.timeline();
        tl.fromTo('.image-container', this.$store.state.animation.duration.long, {
            opacity: 0,
            y: 15,
            ease: 'power2.out',
        }, {
            opacity: 1,
            y: 0,
        }, "-=0.2");
    });
}