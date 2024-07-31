
<template>
  <Header class="fixed"  @scroll-to-element="scrollToElement"></Header>
  <HeroSection ref="homeRefElement"></HeroSection>
  <About class="scroll-to-fit" ref="aboutmeRefElement"></About>
  <Projects class="scroll-to-fit-projects" ref="projectsRefElement"></Projects>
  <Contact class="scroll-to-fit" ref="contactRefElement"></Contact>
</template>


<script setup>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import About from './components/Aboutme.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import { ref, onMounted } from 'vue';

const homeRefElement = ref(null)
const aboutmeRefElement = ref(null)
const projectsRefElement = ref(null)
const contactRefElement = ref(null)


function scrollToElement(section) {
  if(section === 'home'){
    window.scrollTo({top: 0, behavior: 'smooth'})
    
  } else if(section === 'about'){ 
    aboutmeRefElement.value.$el.scrollIntoView({behavior: 'smooth', block:'start'})
  
  } else if(section === 'projects'){
    projectsRefElement.value.$el.scrollIntoView({behavior: 'smooth', block:'start'})
  }else if(section == 'contact') {
    contactRefElement.value.$el.scrollIntoView({behavior: 'smooth', block:'start'})
  }
}
</script>


<style scoped>

.scroll-to-fit {
  scroll-margin-top: 20px;
}
.scroll-to-fit-projects {
  scroll-margin-top: -10px;
}
</style>
