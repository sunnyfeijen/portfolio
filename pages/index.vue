<template>
  <div>
    <Nav/>
    <Hero/>

    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-7">
          <h2>Hi, ik ben Sunny</h2>
          <p>{{ age }} jaar en sinds 2017 werkzaam als creatieve front-end developer die graag de brug slaat tussen ux design en development.</p>
          <p>Ik focus me op usability en heb hierbij altijd mijn gedachte bij de eindgebruiker. Ik vind het dan ook belangrijk dat er een goede balans is tussen de wensen van de klant en eindgebruikers.</p>
        </div>
      </div>
    </div>
  

    <div class="col-12">
      <StickyArea/>
    </div>

    <Footer/>

  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import TagRepeater from '~/components/TagRepeater.vue'
import Nav from '~/components/Nav.vue'
import StickyArea from '~/components/StickyArea.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Hero,
    TagRepeater,
    Nav,
    StickyArea,
    Footer,
  },
  data () {
    return {
        age: '',
    }
  },
  head () {
    return {
      title: 'Sunny Feijen | Huispagina',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Mi casa, su casa'
        }
      ],
    }
  },
  mounted () {
    this.age = this.$getAge();
    gsap.registerPlugin(ScrollTrigger);
    this.$nextTick(function() {
      this.$parallaxImage(this.$el);
      this.$fadeInUpLong();
    });
  },
}
</script>