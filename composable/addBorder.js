// import { ref } from 'vue'

// export default {
//   setup() {
//     const show = ref(false)
//     return { show }
//   }
// }
import { ref } from 'vue'

export function addBorder() {
  const show = ref(false)
  return {
    show
  }
}
