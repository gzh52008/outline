<template>
	<view class="content">
		
		<img class="logo" src="/static/logo.png"/>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<h1>UniApp测试</h1>
		<button @click="handleClick">qty:{{qty}}</button>
	</view>
</template>

<script>
	const app = getApp();
	console.log('app=',app)
	export default {
		data() {
			return {
				title: 'Hello 2008',
				qty:1
			}
		},
		onLoad() {
			

		},
		methods: {
			handleClick(){
				this.qty++;
			}
		}
	}
</script>

<style>
	h1{color:#f00;}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
