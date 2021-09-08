<template>
  <div>
    <Nav/>
    <div class="offset-header container">
      <div class="row">

        <div class="image-container offset-backdrop col-11 offset-1 col-sm-8 offset-sm-4 pb-5">
          <div class="parallax-container ar-16-9">
            <picture ref="parallax-target" class="bg-cover">
              <source srcset="https://sunnyfeijen.nl/wp-content/uploads/2021/09/IMG_1408-e1500216678220.webp" type="image/webp">
              <source srcset="https://sunnyfeijen.nl/wp-content/uploads/2017/07/IMG_1408-e1500216678220.jpg" type="image/jpeg"> 
              <img src="https://sunnyfeijen.nl/wp-content/uploads/2017/07/IMG_1408-e1500216678220.jpg" alt="Picture of Sunny">
            </picture>
          </div>
        </div>

      </div>
    </div>

    <div class="container pt-sm-5">
      <div class="row">
        <div class="col-12 col-sm-7">
          <h2>Over mij</h2>
          <p>Hi, ik ben Sunny Feijen.</p>
          <p>Ik ben inmiddels {{ age }} jaar, momenteel aan het werk bij <a class="button" href="https://www.koek.nl" target="_blank" rel="noopener"><span>Koek</span><i class="bi-arrow-right"></i></a><br>
Sinds 2017 werk ik als creatieve front-end developer, hierbij focus ik me vooral op de experience en draag dan ook regelmatig mijn steentje bij aan de UX van een project.
          </p>

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
        age: '28',
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
