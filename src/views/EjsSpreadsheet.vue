<template>
  <main style="margin-top:150px;">
    <ejs-spreadsheet ref="ejsSpreadsheetRef">
        <e-sheets>
            <e-sheet>
                <e-ranges><e-range :dataSource="data"></e-range></e-ranges>
            </e-sheet>
        </e-sheets>
    </ejs-spreadsheet>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const ejsSpreadsheetRef = ref(null)
const data = ref([
  { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCity: 'Reims' },
  { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCity: 'Münster' },
  { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCity: 'Lyon' }
])

onMounted(() => {
  console.log(ejsSpreadsheetRef.value)
})
</script>

<style lang='scss' scope></style>
