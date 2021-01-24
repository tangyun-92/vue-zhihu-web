<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      @click.prevent="toggleOpen"
      href="#"
      class="btn btn-outline-light my-2 mx-4 dropdown-toggle"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    // 控制下拉菜单显示隐藏
    const isOpen = ref(false)
    // 获取下拉菜单的 DOM
    const dropdownRef = ref<null | HTMLElement>(null)
    // 点击事件
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
      // 点击其他位置隐藏下拉菜单
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>