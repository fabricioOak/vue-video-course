<template>
  <button class="mt-2 btn btn-primary" @click="completeAndContinue">
    Complete and continue
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  lessonId: {
    type: String,
    required: true
  },
  courseId: {
    type: String,
    required: true
  }
})
function completeAndContinue() {
  router.push(`/courses/${props.courseId}/lessons/${props.lessonId}`)
}
</script>
