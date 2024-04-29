<template>
  <v-list 
  bg-color="transparent"
  >
    <v-list-item class="px-0">
      <template #prepend>
        <v-avatar class="elevation-4 bg-gradient px-0" size="x-large" >
          <v-img src="@/assets/img/selfie.png" position="60%"/>
        </v-avatar>
      </template>
      <v-list-item-title class="font-weight-black text-uppercase"> 
        Rafał Borowski
      </v-list-item-title>
      <v-list-item-subtitle>
        Fullstack web developer
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>

  <v-list bg-color="transparent mt-5">
    <v-list-item
    title="Gdynia, Poland"
    prepend-icon="mdi: mdi-city"
    href="https://www.google.com/maps/place/Gdynia/"
    target="_blank"
    />
    <v-list-item
    title="work@rborowski.pl"
    prepend-icon="mdi: mdi-email"
    href="mailto:work@rborowski.pl"
    target="_blank"
    />
    <v-list-item
    title="github.com/rborowski"
    prepend-icon="mdi: mdi-github"
    href="https://github.com/rborowski"
    target="_blank"
    />
    <v-list-item
    title="linkedin.com/in/r-borowski"
    prepend-icon="mdi: mdi-linkedin"
    href="https://linkedin.com/in/r-borowski"
    target="_blank"
    />


  </v-list>
  <h1 class="font-weight-bold text-subtitle-1 mb-5 mt-15">
    © 2024 Rafał Borowski — rborowski.pl
  </h1>
</template>