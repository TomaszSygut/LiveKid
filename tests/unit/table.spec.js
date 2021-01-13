import { shallowMount } from '@vue/test-utils'
import Table from '@/components/Table.vue'
describe('Check table component', () => {
   const config = { columns: [{ key: 'foo', header: 'Foo header' }] }
   const content = [{ foo: 'Foo data 1' }]
   const wrapper = shallowMount(Table, { props: { config, content } })
   const rows = wrapper.findAll('.table-row')
   const headers = wrapper.findAll('.table-top')
   it('Renders correctly', async () => {
      expect(rows.length).toBe(4)
      expect(headers[0].text()).toBe(config.columns[0].header)
      expect(rows[0].text()).toBe(content[0].foo)
   })
   it('Emits on select', async () => {
      await rows[0].trigger('click')
      const emit = wrapper.emitted('click')[0]
      expect(emit[0]).toEqual(content[0])
   })
})
