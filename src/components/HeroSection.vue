<template>
  <section class="w-full  flex justify-center items-center flex-col mt-28 mb-28 lg:mt-32">
    <div class="flex flex-col items-center justify-center">
    <div class="rearrange-section w-4/5 flex   items-center justify-between gap-4">
      <div
        class="intro align-text md:text-1xl flex justify-center align-middle sm:text-center flex-col items-baseline w-3/4 m-auto">
        <p class="text-red-400 center-paragraph">Hello, my name is </p>
        <h1 class="m-auto lg:ml-0">Joaldo<span> Costa</span></h1>
        <h3 class="mb-3 mt-4">
          I'm a <span class="text-red-400">Web Developer/Software developer</span>
        </h3>
        <p class="mb-2 text-left align-text">
          Junior Web & Software Developer Ready to Tackle Real-World Challenges.
          With a solid foundation in modern technologies
          I am eager to apply my skills to real-world projects and contribute to creative solutions.
        </p>
      </div>
      <div class="img-container">
        <img class="" src="../assets/prof.JPEG" alt="" srcset="" width="" />
      </div>
    </div>
    <div class="w-4/5 flex flex-col justify-start m-auto mt-8 text-left align-text md:text-1xl">
      <h3>Tech Stack</h3>
      <div class="icon-container align-text w-2/3 m-auto md:ml-auto lg:ml-0 mt-4 mb-4 grid grid-cols-4 gap-4 md:flex md:justify-between lg:w-2/3 max-w-2xl">
        <img class="icon" title="HTML" src="https://skillicons.dev/icons?i=html" alt="HTML5" />
        <img class="icon" title="CSS" src="https://skillicons.dev/icons?i=css" />
        <img class="icon" title="JavaScript" src="https://skillicons.dev/icons?i=javascript" />
        <img class="icon" title="Vue.js" src="https://skillicons.dev/icons?i=vue" />
        <img class="icon" title="Node.js" src="https://skillicons.dev/icons?i=nodejs" />
        <img class="icon" title="Amazon Web Services" src="https://skillicons.dev/icons?i=aws" />
        <img class="icon" title="Java" src="https://skillicons.dev/icons?i=java" />
        <img class="icon" title="MYSSQL" src="https://skillicons.dev/icons?i=mysql" />

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


}

.img-container img {
  position: relative;
  width: 32vw;
  border-radius: 50%;
  box-shadow: 0 0 25px rgb(255, 0, 0);
  transition: 0.3s ease-in-out;
}

img-container>img:hover {
  box-shadow: 0 0 25px rgb(255, 0, 0), 0 0 50px rgb(255, 0, 0),
    0 0 100px rgb(255, 0, 0);
}
.icon {
  transition: transform 0.3s cubic-bezier(1, 1, 1, 1);
}

.icon:hover {
    transform: translateY(-10px);
}
@keyframes rotatePath {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

#rotateGroup path {
  animation: rotatePath 5s linear infinite;
  transform-origin: center;
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
    color: #fff;
    box-shadow: 0 2px 0 0 currentcolor;
    transition: color 0.5s ease-in-out, box-shadow 0.5s ease-out;
  }
}
</style>
