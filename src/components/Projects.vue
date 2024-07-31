<template>
  <section class="bg-black text-white w-full flex flex-col mb-12">
    
    <div class="m-auto w-4/5 pt-36">
      <h1 class="text-white text-left mb-10 align-text">Projects</h1>
      <div class="w-full grid md:grid-cols-3 gap-4 mb-20">
        <div class="w-full rounded">
          <div class="relative flex justify-center">
            <img class="rounded w-full"  src="../assets/project-1.png" alt="" >
            <div class="absolute p-2 bg-black/50 bottom-0 left-0 w-full h-full opacity-1 lg:opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div class="relative w-full h-full">
                  <div class=" absolute bottom-4 left-2">
                    <h3 class="mb-4 text-left">Price Comparison Website</h3>
                    <img class="mb-4"  src="https://skillicons.dev/icons?i=html,css,javascript,nodejs,java,mysql" />
                    <a class="link-to-project bg-black flex justify-between items-center w-40 " href="https://github.com/Jo-costa/Shoe-Comparison-Website"  target="_blank"  >GitHub <img class="ml-2" src="https://skillicons.dev/icons?i=github" width="25" />
                    </a>
                  </div>
                </div>

            </div>
          </div>
        </div>
        <div class="w-full rounded">
          <div class="relative flex justify-center">
            <img class="rounded w-full"  src="../assets/project-1.png" alt="" >
            <div class="absolute p-2 bg-black/50 bottom-0 left-0 w-full h-full opacity-1 lg:opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div class="relative w-full h-full">

                  <div class="absolute bottom-4 left-2">
                    <h3 class="mb-4 text-left">Price Comparison Website</h3>
                    <img class="mb-4"  src="https://skillicons.dev/icons?i=html,css,javascript,nodejs,java,mysql" />
                    <a class="link-to-project bg-black flex justify-between items-center w-40 " href="https://github.com/Jo-costa/Shoe-Comparison-Website"  target="_blank"  >GitHub <img class="ml-2" src="https://skillicons.dev/icons?i=github" width="25" />
                    </a>
                  </div>
                </div>

            </div>
          </div>
        </div>
        <div class="w-full rounded">
          <div class="relative flex justify-center">
            <img class="rounded w-full"  src="../assets/project-1.png" alt="" >
            <div class="absolute p-2 bg-black/50 bottom-0 left-0 w-full h-full opacity-1 lg:opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div class="relative w-full h-full">

                  <div class="absolute bottom-4 left-2">
                    <h3 class="mb-4 text-left">Price Comparison Website</h3>
                    <img class="mb-4"  src="https://skillicons.dev/icons?i=html,css,javascript,nodejs,java,mysql" />
                    <a class="link-to-project bg-black flex justify-between items-center w-40 " href="https://github.com/Jo-costa/Shoe-Comparison-Website"  target="_blank"  >GitHub <img class="ml-2" src="https://skillicons.dev/icons?i=github" width="25" />
                    </a>
                  </div>
                </div>

            </div>
          </div>
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
@media(hover:hover){

  .show-info{
    opacity: 1;
  }

}

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
    transition: color 0.5s ease-in-out, box-shadow 0.5s ease-out;
  }
}
</style>
