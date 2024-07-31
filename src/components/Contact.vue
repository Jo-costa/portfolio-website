<template>
  <section class="bg-white text-white w-full flex flex-col mb-12 pb-40">
    <div class="m-auto  w-4/5 pt-36 md:flex mds:text-center md:flex-col">
      <h1 class="text-black text-center lg:text-left">Get in touch</h1>
      <div class="mt-10 w-2/4 md:flex md:flex-col  mds:justify-center lg:ml-0 md:m-auto md:mt-10 m-auto">
        <div class="flex flex-col justify-center lg:justify-start  mds:flex-row lg:ml-0">
          <svg xmlns="http://www.w3.org/2000/svg" min-width="30" height="30" viewBox="0 0 512 512">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
          </svg>
          <a class="text-black md:ml-2" href="mailto:joaldocosta07@gmail.com">joaldocosta97@gmail.com</a>
        </div>
        
        <div class="flex flex-col justify-center mt-4 lg:justify-start  mds:flex-row lg:ml-0">
          <svg  xmlns="http://www.w3.org/2000/svg" min-width="30" height="30" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
          </svg>
          <p class="text-black md:ml-2 ">London, UK</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";



defineProps({
  msg: String,
});
</script>

<style scoped>
 @media (max-width: 920px) {
  .rearrange-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .intro {
    order: 2
  }

  .align-text {
    text-align: center;
  }

  .center-paragraph {
    margin: auto;
  }

  .img-container {
    order: 1
  }

  .width-full {
    width: 100%;
    display: flex;
    justify-content: center;
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

a {
  &:hover {
    color: #85a8f3;
    transition: color 0.5s ease-in-out, box-shadow 0.5s ease-out;
  }
}
</style>
