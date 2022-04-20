<template>
  <div class="lesson-page">
    <header>
      <p>
        <router-link :to="`/courses/${course.id}`"
          >Back to {{ course.title }}</router-link
        >
      </p>
      <h1>{{ lesson.title }}</h1>
    </header>
    <div class="content">
      <vue-vimeo-player
        :video-id="lesson.videoId"
        :options="{ responsive: true }"
      />
    </div>
  </div>
</template>

<script setup>
import courses from "../courses";
import { useRoute } from "vue-router";
import { vueVimeoPlayer } from "vue-vimeo-player";

const route = useRoute();
const { courseId, lessonId } = route.params;
const course = courses.find((course) => course.id === parseInt(courseId));
const lesson = course.lessons.find(
  (lesson) => lesson.id === parseInt(lessonId)
);
</script>
