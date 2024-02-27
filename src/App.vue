<template>
  <RouterView />
</template>

<script setup>
console.log(import.meta.env.VITE_APP_TITLE)

</script>

<style lang="scss">
@import "src/assets/styleSheets/all.scss";

// 載入 ej2-vue-spreadsheet 樣式
@import  '../node_modules/@syncfusion/ej2-base/styles/material.css' ;
@import  '../node_modules/@syncfusion/ej2-buttons/styles/material.css' ;
@import  '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css' ;
@import  '../node_modules/@syncfusion/ej2-inputs/styles/material.css' ;
@import  '../node_modules/@syncfusion/ej2-navigations/styles/material.css' ;
@import  '../node_modules/@syncfusion/ej2-popups/styles/material.css' ;
@import  '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css' ;
@import  '../node_modules/@syncfusion/ej2-grids/styles/material.css' ;
@import  '../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css' ;
</style>
