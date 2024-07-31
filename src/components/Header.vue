

<template>

  <header class="w-full flex justify-between bg-color m-auto p-6 transition-colors fixed z-50"
    :class="{ 'desktop-menu': isMobileMenuOpen }">
    <div class="flex justify-between w-11/12 m-auto md:text-1xl">
      <a @click="scrollToSection('home')" class="cursor-pointer">Jo <span>Costa</span></a>
      <!-- <img src="../assets/logo-svg.svg" alt="" srcset="" width="50px"> -->
      <!-- Displayed on 920px or higher -->
      <nav class="w-3/3 hideMenu">
        <ul class="w-full flex justify-between">
          <li @click="scrollToSection('about')"><a class="cursor-pointer">About</a></li>
          <li @click="scrollToSection('projects')"><a class="cursor-pointer">Projects</a></li>
          <li @click="scrollToSection('contact')"><a class="cursor-pointer">Contact</a></li>
        </ul>
      </nav>
      <!-- End -->

      <nav class="text-white hideHamburgerMenu ham-color">
        <svg @click="toggleMobileMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </nav>
    </div>
  </header>
  <header v-if="isMobileMenuOpen" class="overflow-hidden w-full flex justify-between bg-color m-auto p-6 transition-colors"
    :class="{ 'mobile-menu': isMobileMenuOpen}">
    <div class=" flex flex-col  w-11/12 mx-auto">
      <div class="flex flex-row justify-between">
        <div>
          <a @click="scrollToSection('home'), toggleMobileMenu()" class="cursor-pointer">Jo <span>Costa</span></a>
        </div>
        <div class="text-white cursor-pointer z-40 ham-color">
          <svg @click="toggleMobileMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <nav class="w-full">
        <ul class="flex flex-col text-left text-4xl">
          <a class="mt-10" @click="scrollToSection('about'), toggleMobileMenu()">About</a>
          <a class="mt-10" @click="scrollToSection('projects'), toggleMobileMenu()">Projects</a>
          <a class="mt-10" @click="scrollToSection('contact'), toggleMobileMenu()">Contact</a>
        </ul>
          
      </nav>
    </div>
    
  </header>
</template>
<script setup>
import { ref } from "vue";
const emit = defineEmits(['scroll-to-element'])

function scrollToSection(sectionName){
  emit('scroll-to-element', sectionName)
}

// const aboutmeRefElement = ref<HTMLElement | null>(null)

// function scrollTo(section) {
//   console.log("out");
//   if(section === 'about'){ 
//   aboutmeRefElement.value.scrollIntoView({behavior: 'smooth'})
//   console.log("in");
//   }
// }
let isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}


</script>

<style scoped>
.bg-color {
  background-color: rgb(24, 24, 24);
}

.desktop-menu {
  display: none;
}

.expand {
  height: 100vh;
}

.mobile-menu {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  background-color: rgb(24, 24, 24);
}



.ham-color {
  color: #ffffffae;
}

.ham-color svg:hover {
  color: #fff;
    transition: color 0.5s ease-in-out, box-shadow 0.5s ease-out;
}

@media (max-width: 920px) {
  .hideMenu {
    display: none;
  }
}

@media (min-width: 850px) {
  .repopsitionMenu {
    right: 4rem;
  }
}

@media (min-width: 414px) {
  .repopsitionMenu {
    right: 1.75rem;
  }
}

@media (min-width: 375px) {
  .repopsitionMenu {
    right: 2rem;
  }
}

@media (min-width: 920px) {
  .hideHamburgerMenu {
    display: none;
  }
}

ul {
  display: flex;
  flex-wrap: wrap;

  li {
    margin-left: 0.75em;
    margin-right: 0.75em;
  }
}

li>span {
  &:hover {
    color: #fff;
    box-shadow: 0 2px 0 0 currentcolor;
    transition: color 0.5s ease-in-out, box-shadow 0.5s ease-out;
  }
}
a {
  &:hover {
    color: #fff;
    /* box-shadow: 0 2px 0 0 currentcolor; */
    transition: color 0.5s ease-in-out, box-shadow 0.5s ease-out;
  }
}
</style>
