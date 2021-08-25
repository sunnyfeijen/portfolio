<template>
  <div>
    <Nav/>
    <div class="col-7">
      <h2>Hi, ik ben Sunny</h2>
      <p>25 jaar en sinds 2017 werkzaam als creatieve front-end developer die graag de brug slaat tussen ux design en development.</p>
      <p>Ik focus me op bruikbaarheid en heb hierbij altijd mijn gedachte bij de eindgebruiker. Ik vind het dan ook belangrijk dat er een goede balans is tussen de wensen van de klant en eindgebruikers.</p>
    </div>
    
    <div class="col-12">
      <TagRepeater displayTitle="Skills"/>
    </div>

    <div class="col-12">
      <StickyArea/>
    </div>

    <Footer/>

  </div>
</template>

<script>
import TagRepeater from '~/components/TagRepeater.vue'
import Nav from '~/components/Nav.vue'
import StickyArea from '~/components/StickyArea.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    TagRepeater,
    Nav,
    StickyArea,
    Footer,
  },
}
</script>
