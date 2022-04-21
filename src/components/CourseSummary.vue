<template>
	<section class="border-0 card hover-shadow p-3 mb-5 bg-white rounded">
		<div class="card-body">
			<div>
				<h2 class="card-title">
					<router-link :style="{ 'color': randomColor() }" class="text-decoration-none"
						:to="{ name: 'Course', params: { courseId: course.id } }">
						{{ course.title }}
					</router-link>
				</h2>
			</div>
			<p class="card-subtitle mt-3">
				{{ course.description }}
			</p>
			<router-link class="btn btn-primary mt-4 card-link text-decoration-none"
				:to="{ name: 'Course', params: { courseId: course.id } }">
				Go to course
			</router-link>
		</div>
	</section>
</template>

<script setup>
defineProps({
	course: {
		type: Object,
		required: true,
	},
});

const randomColor = () => {
	let hex = Math.floor(Math.random() * 0xffffff);
	return "#" + hex.toString(16).padStart(6, "0");
};

</script>

<style>
</style>
