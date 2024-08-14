-props - 부모컴포넌트 [부모-> 자식]

<template>
  <ChildComponent message="Hello from parent!"/>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  }
}
</script>

자식 컴포넌트 (ChildComponent.vue):

<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

-emit- 자식-> 부모 로 이벤트전달

자식 컴포넌트 (ChildComponent.vue):

<template>
  <button @click="sendMessage">Send Message</button>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      this.$emit('messageSent', 'Hello from child!');
    }
  }
}
</script>

부모 컴포넌트:

<template>
  <ChildComponent @messageSent="handleMessage"/>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  methods: {
    handleMessage(message) {
      console.log(message); // 'Hello from child!'
    }
  }
}
</script>
