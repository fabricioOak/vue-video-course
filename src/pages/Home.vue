<template>
	<div class="container py-4">
		<header class="mb-4 display-4">
			<h1 class="text-center fw-bold text-uppercase">Super
				<span class="text-success">
					VUE
				</span>
				Courses 🏆
			</h1>
		</header>
		<CourseSummary v-for="course in courses" :key="course.id" :course="course" />
	</div>
</template>

<script setup>
import courses from "../courses";
import CourseSummary from "../components/CourseSummary.vue";
</script>
