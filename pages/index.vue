<template>
  <div class="d-flex flex-column align-start ga-5 pa-4">
    <h1>Home Page</h1>

    <v-divider class="w-100" />

    <h3>Small Buttons</h3>
    
    <v-btn size="small" @click="handleClick">Primary Flat Button</v-btn>

    <v-btn size="small" variant="outlined" @click="handleClick">Primary Outlined Button</v-btn>

    <v-btn size="small" color="secondary" @click="handleClick">Secondary Flat Button</v-btn>

    <v-btn size="small" variant="outlined" color="secondary" @click="handleClick">Secondary Outlined Button</v-btn>

    <v-divider class="w-100" />

    <h3>Default Buttons</h3>
    
    <v-btn @click="handleClick">Primary Flat Button</v-btn>

    <v-btn variant="outlined" @click="handleClick">Primary Outlined Button</v-btn>

    <v-btn color="secondary" @click="handleClick">Secondary Flat Button</v-btn>

    <v-btn variant="outlined" color="secondary" @click="handleClick">Secondary Outlined Button</v-btn>

    <v-divider class="w-100" />

    <h3>Large Buttons</h3>
    
    <v-btn size="large" @click="handleClick">Primary Flat Button</v-btn>

    <v-btn size="large" variant="outlined" @click="handleClick">Primary Outlined Button</v-btn>

    <v-btn size="large" color="secondary" @click="handleClick">Secondary Flat Button</v-btn>

    <v-btn size="large" variant="outlined" color="secondary" @click="handleClick">Secondary Outlined Button</v-btn>
  </div>
</template>

<script lang="ts" setup>
function handleClick() {
  alert("YAY! I'm working!")
}
</script>
