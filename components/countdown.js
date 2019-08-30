import React, { PureComponent } from "react";
import { Parallax } from "react-scroll-parallax";

export default class Countdown extends PureComponent {
	static defaultProps = {
		confDate: "August 29, 2019 08:00:00"
	};

	state = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		isEnd: false
	};

	componentDidMount() {
		// this.countDownTimer();
	}

	componentWillUnmount() {
		// clearInterval(this.timeinterval);
	}

	countDownTimer() {
		this.timeinterval = setInterval(() => {
			const t = this.getTimeRemaining();
			this.setState({
				days: ("0" + t.days).slice(-2),
				hours: ("0" + t.hours).slice(-2),
				minutes: ("0" + t.minutes).slice(-2),
				seconds: ("0" + t.seconds).slice(-2),
				isEndTimer: t.isEnd
			});

			if (t.isEnd) {
				clearInterval(this.timeinterval);
			}

			return t;
		}, 1000);
	}

	getTimeRemaining() {
		const currentTime = new Date();
		const confTime = new Date(this.props.confDate);
		const timeToConf = confTime - currentTime;
		const days = Math.floor(timeToConf / 86400000);
		const hours = Math.floor((timeToConf % 86400000) / 3600000);
		const minutes = Math.floor(((timeToConf % 86400000) % 3600000) / 60000);
		const seconds = Math.floor(
			(((timeToConf % 86400000) % 3600000) % 60000) / 1000
		);

		return {
			isEnd: seconds <= 0 && minutes <= 0 && hours <= 0 ? true : false,
			days,
			hours,
			minutes,
			seconds
		};
	}

	render() {
		const { days, hours, minutes, seconds, isEnd } = this.state;
		if (!isEnd) {
			return (
				<React.Fragment>
					<style jsx>{`
						.composition {
							position: absolute;
							right: var(--gap);
							font-weight: 545;
							font-size: 25vw;
							color: #070708;
							top: 0;
							line-height: 0.75;
							text-align: right;
							letter-spacing: -0.02em;
							z-index: -1;
						}
						.month {
							font-size: 0.75em;
							position: relative;
							top: 20px;
						}
						.counter {
							display: flex;
							font-weight: 500;
							color: var(--gray-color);
							opacity: 0.15;
							justify-content: center;
							margin: -1rem 0 0;
							letter-spacing: -0.07em;
							padding-right: var(--gap);
							min-height: 42px;

							// .days,
							// .hours,
							// .minutes,
							// .seconds {
							// 	position: relative;
							// 	min-width: 72px;
							// 	text-align: center;

							// 	.value {
							// 		display: block;
							// 		font-size: 3rem;
							// 		width: 100%;
							// 		display: block;
							// 		line-height: 1;
							// 	}
							// }

							// .minutes::before,
							// .seconds::before {
							// 	content: ":";
							// 	position: absolute;
							// 	font-size: 2.5rem;
							// 	top: 8px;
							// 	left: -4px;
							// 	animation: blink 1s ease-in-out infinite;
							// }

							// &-text {
							// 	display: block;
							// 	text-align: center;

							// 	.time {
							// 		display: block;
							// 		font-size: 1.25em;
							// 		margin: 1em 0 1.5em;

							// 		.icon {
							// 			display: inline-block;
							// 			vertical-align: middle;
							// 			margin-left: 0.35em;
							// 		}
							// 	}
							// }
						}
					`}</style>
					<section className="composition">
						<Parallax y={[-100, 60]} tagOuter="div">
							<div className="days">29</div>
							{/* <div className="days">{days}</div> */}
						</Parallax>
						<Parallax y={[-20, 60]} tagOuter="div">
							<div className="counter month">August</div>
							{/* <div className="counter">Days</div> */}
						</Parallax>
					</section>
				</React.Fragment>
			);
		} else {
			return null;
		}
	}
}
