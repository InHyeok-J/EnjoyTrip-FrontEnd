<template>
	<span>
		{{ TimerStr }}
	</span>
</template>

<script>
export default {
	name: 'EmailTimer',
	data: function () {
		return {
			Timer: null,
			TimeCounter: 360,
			TimerStr: '05:00',
		};
	},
	mounted: function () {
		//문자발송성공시 호출
		if (this.Timer != null) {
			this.timerStop(this.Timer);
			this.Timer = null;
		}
		this.Timer = this.timerStart();
	},
	methods: {
		timerStart: function () {
			// 1초에 한번씩 start 호출
			this.TimeCounter = 300;
			var interval = setInterval(() => {
				this.TimeCounter--; //1초씩 감소
				this.TimerStr = this.prettyTime();
				if (this.TimeCounter <= 0) this.timerStop(interval);
			}, 1000);
			return interval;
		},
		timerStop: function (Timer) {
			clearInterval(Timer);
			this.TimeCounter = 0;
		},
		prettyTime: function () {
			// 시간 형식으로 변환 리턴
			let time = this.TimeCounter / 60;
			let minutes = parseInt(time);
			let secondes = Math.round((time - minutes) * 60);
			return (
				minutes.toString().padStart(2, '0') +
				':' +
				secondes.toString().padStart(2, '0')
			);
		},
	},
};
</script>

<style></style>
