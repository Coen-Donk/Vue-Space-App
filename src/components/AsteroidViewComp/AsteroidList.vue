<script>
export default{
data(){
    return{
    recasteroids: [],
    asteroids: [
        {magnitude: 10, launch: '2022-01-01', minΔV: 5.774, name: 'asteroid 1' },
        {magnitude: 8, launch: '2023-05-01', minΔV: 3.778, name: 'asteroid 2'},
        {magnitude: 6, launch: '2023-08-15', minΔV: 5.994, name: 'asteroid 3' },
        {magnitude: 4, launch: '2023-05-12', minΔV: 5.77, name: 'DEG 2022'}
      ],
    }
},
computed: {
    filteredAsteroids() {
      return this.recasteroids.filter((asteroid) => {
        return asteroid.des.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
  }
}

</script>

<template>
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