<script>
export default {
    props: {
        msg: {
          type: String, 
          default: 'Error on passing data, check console.'
        },
        content:String,
        info:String
    },
    data(){
      return{
        aspectRatio: null
      }
    },
    computed: {
    aspectRatio() {
      // Calculate the aspect ratio of the image based on its dimensions
      const img = new Image()
      img.src = this.content
      img.onload = () => {
      const aspectRatio = img.width / img.height
      this.aspectRatio = aspectRatio.toFixed(2);
      console.log(this.aspectRatio)
      };
      }
    }
  }
</script>

<template>
    <div class="gridcontent" v-bind:style="{ backgroundImage: `url(${content})`, aspectRatio: aspectRatio }">
        <h5 class="text">{{ msg }}</h5>
    </div>
</template>

<style>
.gridcontent {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: auto;

  align-items: center;
  text-align: center;
  margin: 10px;
  border: 1px solid black;
  position: relative;
  aspect-ratio: 0.97
}

h5 {
  position: absolute;
  justify-content: center;
  float: left;
  width: 100%;
  bottom: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.342);
  color: purple;
}

</style>