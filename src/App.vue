<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <form action="">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailVal"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'

const currentUser: UserProps = {
  isLogin: true,
  name: 'zs'
}

// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     title: 'test1专栏',
//     description: '这是test1专栏，有一段有意思的简介，可以更新一下',
//     avatar:
//       'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
//   },
//   {
//     id: 2,
//     title: 'test2专栏',
//     description: '这是test2专栏，有一段有意思的简介，可以更新一下'
//     // avatar: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
//   },
//   {
//     id: 3,
//     title: 'test3专栏',
//     description: '这是test2专栏，有一段有意思的简介，可以更新一下',
//     avatar:
//       'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
//   },
//   {
//     id: 4,
//     title: 'test4专栏',
//     description: '这是test2专栏，有一段有意思的简介，可以更新一下',
//     avatar:
//       'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
//   }
// ]

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup() {
    const emailVal = ref('tangy')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱地址' }
    ]
    return {
      // list: testData,
      currentUser,
      emailRules,
      emailVal
    }
  }
})
</script>
