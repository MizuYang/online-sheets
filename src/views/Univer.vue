<template>
  <div id="sheetsWrap">
    <div>
      <button type="button"
              @click="getData">
        取得資料
      </button>
    </div>
    <UniverSheet id="sheet" ref="univerRef" :data="data" />
  </div>
</template>

<script>
import UniverSheet from '@/components/UniverSheet.vue'
import { DEFAULT_WORKBOOK_DATA } from '@/assets/default-workbook-data'

export default {
  name: 'App',
  components: {
    UniverSheet
  },
  data () {
    return {
      data: JSON.parse(localStorage.getItem('sheets')) || DEFAULT_WORKBOOK_DATA
    }
  },
  watch: {
    data: {
      handler () {
        const result = this.$refs.univerRef?.getData()
        console.log('儲存', result)
        localStorage.setItem('sheets', JSON.stringify(result))
      },
      deep: true
    }
  },
  methods: {
    getData () {
      const result = this.$refs.univerRef?.getData()
      console.log('result', result)
      // console.log(JSON.stringify(result, null, 2))
    }
  },
  mounted () {
    // console.log(getCellAtRowCol('C', '8', 'sheet1'))
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#sheetsWrap {
  height: 90vh;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

#sheet {
  /** The height of the Union uses the height of the parent container */
  flex: 1;
}
</style>
