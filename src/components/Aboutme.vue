<template>
  <section class="bg-slate-50 text-black w-full flex flex-col pb-36">

    <div class="m-auto w-4/5 pt-36">
      <h1 class="text-black text-left align-text">About me</h1>
      <div class="w-full flex flex-row gap-6 mt-10 rearrange-section">
        <div class="w-1/3 width-full pt-5">
          <img class="rounded max-w-80" src="../assets/coding-img.jpg" alt="" >
        </div>
        <p class="w-8/12 bg-slate-100 rounded p-5 text-black text-left text-lg width-full">
          I am a recent graduate with a degree in computer science, passionate about web development and software
          engineering.
          Throughout my academic journey I have developed a solid foundation in both front-end and back-end
          technologies, and
          I am eager to learn even more and apply those skills in a professional environment.

          Outside of my professional interests, I enjoy exercising, playing video games, reading manga and so on.
          <br>
          Thank you for visiting my portfolio, I look forward to connecting with you!
        </p>
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
