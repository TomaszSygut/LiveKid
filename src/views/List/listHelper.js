export const filterList = (item, search) => {
   const keysToFilter = ['name', 'status', 'tags']
   return Object.entries(item).some(
      ([key, value]) => keysToFilter.includes(key) && value.includes(search.charAt(0).toUpperCase()) || keysToFilter[1].includes(key) && value.includes(search.charAt(0).toLowerCase()),

      //  keysToFilter.includes(key) && value.toLowerCase().includes(search) usunąłem wcześniejszy błąd z toLowerCase.
      // w key "name" i "status" ustawiłem żeby zawsze pierwsza wpisywana litera była zamieniana w dużą a w key "status" żeby zawsze była mała.


   )

}
export const mapList = item => {

   const tags_display = item.tags.join(', ')
   const cords_display = item.cords.join(', ')
   return { ...item, tags_display, cords_display }
}
