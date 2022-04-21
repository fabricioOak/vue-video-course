<template>
  <section class="container">
    <div class="border-0 card hover-shadow p-3 mb-3 bg-white rounded">
      <div>
        <h2>
          <router-link class="text-decoration-none" :to="`/courses/${courseId}/lessons/${lesson.id}`">
            {{ num }}. {{ lesson.title }}
          </router-link>
        </h2>
      </div>
      <p>
        <router-link class="text-decoration-none" :to="`/courses/${courseId}/lessons/${lesson.id}`">
          {{ lesson.description }}
        </router-link>
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  courseId: {
    type: String,
    required: true,
  },
  num: {
    type: Number,
    required: true,
  },
  lesson: {
    type: Object,
    required: true,
  },
});
</script>
