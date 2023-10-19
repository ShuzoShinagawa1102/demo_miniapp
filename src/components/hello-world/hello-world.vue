<template>
  <view class="hello-area">
    <button type="primary" class="hello-button" @click="count++">
      カウントは：{{ count }}
    </button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ title: string }>();

const count = ref(0);
</script>

<style scoped>
.hello-area {
  margin-top: 20px;
}

.hello-button {
  background: #ffedcb;
  color: #ff4343;
}
</style>
