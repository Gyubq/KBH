<template>
  <div>
    <h2>콘솔을 확인합니다. 이거슨 app.vue 다잉</h2>
  </div>
</template>
<script setup>
import axios from 'axios';

const listUrl = '/api/todos';
const todoUrlPrefix = 'api/todos';

// 4건의 목록을 조회한 후  첫번째 , 두번째 할일을 순차적으로 조회합니다.

const requestAPI = () => {
  // const url = 'http://localhost:3000/todos/1';
  let todoList = [];
  axios.get(listUrl);
};

.then((Response) => {
  todoList= response.data;
  console.log("")
})
</script>
