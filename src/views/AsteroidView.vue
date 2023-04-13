<script>
import { sendMessage } from '../modules/websocketFunctions';
import useEventBus from "../modules/eventbus"
import { watch } from "vue"

export default {
  data() {
    return {
      recasteroids: [],
      asteroids: [
        {magnitude: 10, launch: '2022-01-01', minΔV: 5.774, name: 'asteroid 1' },
        {magnitude: 8, launch: '2023-05-01', minΔV: 3.778, name: 'asteroid 2'},
        {magnitude: 6, launch: '2023-08-15', minΔV: 5.994, name: 'asteroid 3' },
        {magnitude: 4, launch: '2023-05-12', minΔV: 5.77, name: 'DEG 2022'}
      ],
      newwasteroids:["2021 jg6", "2009 BW2", "2017 SV19"],
      selectedAsteroid: null,
      searchTerm: ''
    }
  },
  mounted(){
    this.newwasteroids.forEach(this.sendMessage)
    const {bus} = useEventBus();
       watch(()=>bus.value.get('data-received'), (val) => {
      const [dataReceivedBus] = val ?? []
      console.log(dataReceivedBus)
      this.recasteroids.push(dataReceivedBus)
      // console.log(this.recasteroids)

    })
  },
  computed: {
    filteredAsteroids() {
      return this.recasteroids.filter((asteroid) => {
        return asteroid.des.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
  },
  methods: {
    showDetails(asteroid) {
      this.selectedAsteroid = asteroid;
    },
    sendMessage($event){
      sendMessage($event)
    },
    search() {
     
    },
    getAsteroids(){
        console.log("test")
        return sendMessage('2021 JG6')
    }
  }
}
</script>

<template>
  <v-container class="grey lighten-3 fluid" elevation="10">
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-row>
            <v-col cols="10">
              <v-text-field label="Search asteroid" v-model="searchTerm"></v-text-field>
            </v-col>
            <v-col cols="2" class="d-flex align-center justify-center">
              <v-btn color="primary" @click="search">Search</v-btn>
            </v-col>
          </v-row>
          <v-list>
            <v-list-item v-for="asteroid in filteredAsteroids" :key="asteroid.id" @click="showDetails(asteroid)">
              <v-list-item-content>
                <v-list-item-title class="grey--text text--darken-2">{{ asteroid.des }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title>{{ selectedAsteroid ? selectedAsteroid.name : 'No asteroid selected' }}</v-card-title>
          <v-row v-if="selectedAsteroid">
            <v-col cols="6" v-for="(value, key) in selectedAsteroid" :key="key">
              <v-label v-if="key !== 'des'">{{ key }}:</v-label>
             <v-label v-if="key !== 'des'">{{ value || '-' }}</v-label>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>


.fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.v-col {
  width: calc(50% - 24px); /* subtracting margin to make them touch */
}

.v-card {
  height: calc(100vh - 120px); 
  width: auto;
}
</style>
