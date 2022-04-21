<template>
  <div class="container-fluid">
    <div class="container my-4">
      <header>
        <p>
          <router-link class="text-decoration-none text-muted" :to="{ name: 'Home' }">Back to courses</router-link>
        </p>
        <div>
          <h1 class="fw-bold">{{ title }}</h1>
          <h6>{{ description }}</h6>
        </div>
      </header>
    </div>
    <div>
      <LessonSummary v-for="(lesson, index) in lessons" :key="index" :course-id="courseId" :lesson="lesson"
        :num="index + 1" />
    </div>
  </div>

</template>

<script setup>
import { useRoute } from "vue-router";
import courses from "../courses";
import LessonSummary from "../components/LessonSummary.vue";

const route = useRoute();
const courseId = route.params.courseId;

const course = courses.find((course) => course.id === parseInt(courseId));
const { title, description, lessons } = course;
</script>
