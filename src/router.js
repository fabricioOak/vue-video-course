import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Course from "./pages/Course.vue";
import Lesson from "./pages/Lesson.vue";

const routes = [
  {name: 'Home', path: '/', component: Home},
  { name: 'Course', path: '/courses/:courseId', component: Course },
  { name: 'Lesson', path: '/courses/:courseId/lessons/:lessonId', component: Lesson }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router