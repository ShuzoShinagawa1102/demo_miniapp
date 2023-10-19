<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="/hybrid/html/map.html"></web-view>
		<!-- <web-view :webview-styles="webviewStyles" src="https://isyadoko.net/doctor/map.php/30/20610618/"></web-view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		}
	}
</script>

<style>

</style>