<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

const currentUser: UserProps = {
  isLogin: true,
  name: 'zs'
}

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1专栏',
    description: '这是test1专栏，有一段有意思的简介，可以更新一下',
    avatar:
      'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
  },
  {
    id: 2,
    title: 'test2专栏',
    description: '这是test2专栏，有一段有意思的简介，可以更新一下'
    // avatar: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
  },
  {
    id: 3,
    title: 'test3专栏',
    description: '这是test2专栏，有一段有意思的简介，可以更新一下',
    avatar:
      'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
  },
  {
    id: 4,
    title: 'test4专栏',
    description: '这是test2专栏，有一段有意思的简介，可以更新一下',
    avatar:
      'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
  }
]

export default defineComponent({
  name: 'App',
  components: { ColumnList, GlobalHeader },
  setup() {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
