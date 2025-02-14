/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMounted, onUnmounted } from 'vue'

export function useMouse(event: any) {
  let x: number = 0
  let y: number = 0

  const updateMouse = () => {
    x = event.clientX
    y = event.clientY
  }

  onMounted(() => window.addEventListener('mousemove', updateMouse))
  onUnmounted(() => window.removeEventListener('mousemove', updateMouse))

  return { x, y }
}

export function getMousePosition(event: any) {
  return { x: event.clientX, y: event.clientY }
}
