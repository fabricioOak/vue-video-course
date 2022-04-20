<template>
  <div class="home-page">
    <header>
      <h1>Online Course Site</h1>
    </header>
    <CourseSummary v-for="course in courses" :key="course.id" :course="course"/>
  </div>
</template>

<script setup>
import courses from '../courses';
import CourseSummary from '../components/CourseSummary.vue';
</script>