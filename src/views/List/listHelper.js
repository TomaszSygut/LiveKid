export const filterList = (item, search) => {
   const keysToFilter = ['name', 'status', 'img', 'tags']
   return Object.entries(item).some(
      ([key, value]) =>
         keysToFilter.includes(key) && value.toLowerCase().includes(search)
   )
}
export const mapList = item => {
   const tags_display = item.tags.join(', ')
   const cords_display = item.cords.join(', ')
   return { ...item, tags_display, cords_display }
}
