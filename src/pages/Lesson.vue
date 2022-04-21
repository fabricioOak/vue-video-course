<template>
  <div class="m-4">
    <header>
      <p>
        <router-link class="text-decoration-none text-muted" :to="'/courses/' + course.id"> Back to {{ course.title }}
        </router-link>
      </p>
      <h1>{{ lesson.title }}</h1>
    </header>
    <div class="mt-4 container">
      <vue-vimeo-player :video-id="lesson.videoId" :options="{ responsive: true }" />
      <CompleteAndContinueButton :courseId="courseId" :lessonId="nextLessonId" />
    </div>
  </div>
</template>

<script setup>
import courses from '../courses'
import { useRoute } from 'vue-router'
import { vueVimeoPlayer } from 'vue-vimeo-player'
import CompleteAndContinueButton from '../components/CompleteAndContinueButton.vue'

const route = useRoute()
const { courseId, lessonId } = route.params
const course = courses.find(course => course.id === parseInt(courseId))
const lesson = course.lessons.find(lesson => lesson.id === parseInt(lessonId))
const currentIndex = course.lessons.indexOf(lesson)
const nextIndex = (currentIndex + 1) % course.lessons.length
const nextLessonId = course.lessons[nextIndex].id.toString()
</script>