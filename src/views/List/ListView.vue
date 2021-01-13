<template>
   <div class="p-2">
      <div class="field">
         <div class="control">
            <input
               @input="onInput"
               placeholder="Type here..."
               type="text"
               class="input"
            />
         </div>
      </div>
      <Table :content="tableContent" :config="tableConfig" />
   </div>
</template>
<script>
import Table from '@/components/Table.vue'
import { computed, onMounted, reactive } from 'vue'
import { filterList, mapList } from './listHelper'
import dummy from '@/assets/dummy.json'
import timeout from 'q'
export default {
   components: { Table },
   setup() {
      const tableConfig = {
         columns: [
            { key: 'id', header: 'ID' },
            { key: 'name', header: 'Name' },
            { key: 'cords_display', header: 'Cords' },
            { key: 'tags_display', header: 'Tags' },
            { key: 'status', header: 'Status' }
         ]
      }
      const state = reactive({
         items: [],
         initLoading: true,
         search: '',
         timeout
      })
      const tableContent = computed(() =>
         state.items.filter(item => filterList(item, state.search)).map(mapList)
      )
      const onInput = ({ target: { value } }) => {
         clearTimeout(timeout)
         state.timeout = setTimeout(() => (state.search = value), 500)
      }
      const mockRequest = () => {
         return new Promise(resolve => {
            setTimeout(() => {
               state.items = dummy
               resolve()
            }, 500)
         })
      }
      onMounted(async () => {
         await mockRequest()
         state.loading = false
      })
      return { tableContent, tableConfig, onInput }
   }
}
</script>
