<template>
  <section class="summary">
    <div>
      <div class="title">
        <h2>
          <router-link :to="{name: 'Course', params : {courseId: course.id}}">
            {{course.title}}
          </router-link>
        </h2>
      </div>
      <p>
        <router-link :to="{name: 'Course', params : {courseId: course.id}}">
          {{course.description}}
        </router-link>
      </p>
    </div>
  </section>
</template>

<script setup>
  defineProps({
    course: {
      type: Object,
      required: true
    }
  })
</script>

<style>

</style>