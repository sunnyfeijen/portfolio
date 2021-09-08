<template>
  <div>
    <Nav/>
    <div class="offset-header container">
      <div class="row">

        <div class="image-container offset-backdrop col-11 offset-1 col-sm-8 offset-sm-4 pb-5">
          <div class="parallax-container ar-16-9">
            <div ref="parallax-target" class="bg-cover filter-cover" style="background-image: url('http://sunnyfeijen.nl/wp-content/uploads/2017/07/IMG_1558.jpg')"></div>
          </div>
        </div>

      </div>
    </div>

    <div class="container pt-sm-5">
      <div class="row">
        <div class="col-12 col-sm-7">
          <h2>Over mij</h2>
          <p>Hi, ik ben Sunny Feijen, {{ age }} jaar en momenteel aan het werk bij <a class="button" href="https://www.koek.nl" target="_blank" rel="noopener"><span>Koek</span><i class="bi-arrow-right"></i></a></p>
          <p>Ik ben inmiddels {{ age }} jaar en sinds 2017 werkzaam als creatieve front-end developer. Ik focus me vooral op de experience en draag dan ook regelmatig mijn steentje bij aan de UX van een project.</p>
          <p>Usability vind ik heel belangrijk en heb altijd mijn gedachte bij de eindgebruiker. Ik vind het dan ook belangrijk dat er een goede balans is tussen de wensen van de klant en eindgebruikers.</p>
          
          <p>In mijn vrije tijd houd ik van motorrijden, skien, snowboarden en probeer ik zoveel mogelijk van de wereld te zien.</p>
        </div>
      </div>
    </div>

    <div class="container"> 
      <div class="row">
        <div class="col-12 col-sm-7">
          <TagRepeater displayTitle="Skills"/>
        </div>
      </div>
    </div>

    <Footer/>


  </div>
</template>

<script>
export default {
  data () {
    return {
        age: '',
    }
  },
  head () {
    return {
        title: 'Sunny Feijen | Over',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Lees wat over mij'
          }
        ]
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
