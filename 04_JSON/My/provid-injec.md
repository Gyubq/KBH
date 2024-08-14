-provide-

상위컴포넌트 -> 하위컴포넌트 데이터전달
props와 달리 계층구조 넘어서 전달가능 부모-자식 넘어서 (중개처리없이)
but 같은 조상을 가지고있어야한다.

상위 컴포넌트:

<template>
  <ChildComponent/>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  provide() {
    return {
      sharedData: 'Hello from parent!'
    }
  }
}
</script>

하위 컴포넌트 (ChildComponent.vue):

<template>
  <div>{{ sharedData }}</div>
</template>

<script>
export default {
  inject: ['sharedData']
}
</script>
