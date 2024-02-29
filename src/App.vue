<template>
  <ul class="position-absolute top-0 d-flex" style="z-index:99999999999;">
    <li>
      <RouterLink to='/' active-class='active'>Univer 套件</RouterLink>
    </li>
    <li class="mx-10"> | </li>
    <li>
      <RouterLink to='/ejsSpreadsheet' active-class='active'>ejsSpreadsheet(需收費)</RouterLink>
    </li>
  </ul>

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
