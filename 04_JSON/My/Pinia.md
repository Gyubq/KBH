Pinia는 Vue의 상태 관리 라이브러리입니다. Vuex의 대체제로, 더 간단하고 직관적인 API를 제공합니다

-Pinia-

Pinia store 설정:

// store.js
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
state: () => ({
count: 0
}),
actions: {
increment() {
this.count++;
}
}
});

컴포넌트에서 Pinia store 사용:

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { useStore } from './store';

export default {
  setup() {
    const store = useStore();

    return {
      count: store.count,
      increment: store.increment
    };
  }
}
</script>
