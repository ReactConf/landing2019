import React from "react";
import Link from "next/link";
import Grid from "react-css-grid";

import Head from "../components/head";
import People from "../components/people";
import "../styles/styles.scss";

const peoples = [
	{
		slug: "manighasemi",
		name: "مانی قاسمی",
		is_speaker: true,
		is_skype: false,
		just_panel: true,
		panel: 1,
		position: "موسس و سردبیر دیجیاتو"
	},
	{
		slug: "drfarahani",
		name: "دکتر فراهانی",
		is_speaker: true,
		is_skype: false,
		just_panel: true,
		panel: 1,
		position: ""
	},
	{
		slug: "sbehjati",
		name: "سجاد بهجتی",
		is_speaker: true,
		is_skype: false,
		just_panel: true,
		panel: 1,
		position: ""
	},

	{
		slug: "pouyamahmoodian",
		name: "پویا محمودیان",
		is_speaker: false,
		is_skype: false,
		just_panel: true,
		panel: 2,
		position: "مدیرعامل عکس‌پرینت"
	},
	{
		slug: "mjshakouri",
		name: "محمدجواد شکوری",
		is_speaker: false,
		is_skype: false,
		just_panel: true,
		panel: 2,
		position: "مدیرعامل کلوب"
	},
	{
		slug: "nimanourmohammadi",
		name: "نیما نور محمدی",
		is_speaker: false,
		is_skype: false,
		just_panel: true,
		panel: 2,
		position: ""
	}
];

const Home = () => (
	<main>
		<style jsx>{`
			.header {
				padding: var(--baseline) 0;
				margin-bottom: var(--baseline);
			}
			.container-fluid {
				position: relative;
				z-index: 1;
			}
			.logo {
				width: 50rem;
				object-fit: cover;
				position: absolute;
				top: 0;
				z-index: 0;
				pointer-events: none;
				opacity: 0.25;
			}
			.brand {
				margin: var(--baseline) 0 0 0;
			}
			.btn {
				background: var(--secondary-color);
				display: table;
				text-decoration: none;
				color: var(--background-color);
				padding: 0.5rem 1.5rem;
				line-height: 1.75rem;
				border-radius: var(--radius);
				transition: 0.1s ease-in;
			}
			.btn:hover {
				background-color: var(--light-gray-color);
			}
			.btn svg {
				display: inline-block;
				vertical-align: -5px;
				margin-right: 0.5rem;
			}
			.heroConf {
				color: var(--black-color);
				text-transform: uppercase;
				width: 80rem;
				font-weight: 750;
				max-width: 100%;
				margin: var(--baseline) 0;
				word-spacing: 0.1em;
				letter-spacing: 0.05em;
				// background: linear-gradient(to right, #8c77f1 0%, #8c77f1 100%);
				// -webkit-background-clip: text;
				// -webkit-text-fill-color: transparent;
			}

			.tx-gr-pink {
				background-image: linear-gradient(to right, #ee2281, #ffba54);
				color: rgba(0, 0, 0, 0);
				-webkit-background-clip: text;
				background-clip: text;
				position: relative;
			}
			.tx-gr-blue {
				background-image: linear-gradient(to right, #009cf3, #16d6d9);
				color: rgba(0, 0, 0, 0);
				-webkit-background-clip: text;
				background-clip: text;
				position: relative;
			}
			.tx-gr-green {
				background-image: linear-gradient(to right, #16d6d9, #96cc29);
				color: rgba(0, 0, 0, 0);
				-webkit-background-clip: text;
				background-clip: text;
				position: relative;
			}
			.tx-gr-orange {
				background-image: linear-gradient(to right, #ffbf02, #ed0082);
				color: rgba(0, 0, 0, 0);
				-webkit-background-clip: text;
				background-clip: text;
				position: relative;
			}

			.tx-gr-purple {
				background-image: linear-gradient(to right, #61d4c9, #ffba54);
				color: rgba(0, 0, 0, 0);
				-webkit-background-clip: text;
				background-clip: text;
				position: relative;
			}

			.description {
				color: var(--light-gray-color);
				width: 40rem;
				max-width: 100%;
			}
		`}</style>

		<Head title="React Conf" />

		<header className="header">
			<div className="container-fluid">
				<div className="brand">
					<Link href="/">
						<svg
							width={150}
							height={48}
							viewBox="0 0 103 32"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<linearGradient
									x1="100%"
									y1="50%"
									x2="0%"
									y2="50%"
									id="a"
								>
									<stop stopColor="#33323E" offset="0%" />
									<stop stopColor="#8478FF" offset="100%" />
								</linearGradient>
							</defs>
							<g fill="none" fillRule="evenodd">
								<path
									d="M40.26 14.926V.201h5.841c3.361 0 5.306 1.884 5.306 4.81 0 2.014-.933 3.473-2.617 4.192l3.145 5.723h-3.456l-2.804-5.22H43.39v5.22h-3.13zm3.13-7.722h2.126c1.792 0 2.667-.733 2.667-2.193 0-1.466-.875-2.264-2.682-2.264h-2.11v4.457zm9.098 7.722V.201h9.976v2.567h-6.846v3.509h6.332v2.567h-6.332v3.515h6.875v2.567H52.488zm13.89 0h-3.354L68.135.201h4.034l5.103 14.725h-3.354l-1.099-3.357h-5.342l-1.099 3.357zm1.894-5.788h3.76L70.21 3.566h-.116l-1.822 5.572zm22.016-3.782h-3.166c-.239-1.617-1.475-2.602-3.188-2.602-2.292 0-3.795 1.747-3.795 4.81 0 3.149 1.525 4.81 3.773 4.81 1.67 0 2.913-.906 3.21-2.48l3.166.014c-.34 2.71-2.631 5.22-6.426 5.22-3.962 0-6.897-2.761-6.897-7.564C76.965 2.747 79.951 0 83.862 0c3.426 0 6.014 1.956 6.426 5.356zm.553-2.588V.201H103v2.567h-4.532v12.158h-3.094V2.768H90.84zm-37.518 19.46h-3.167c-.238-1.617-1.474-2.602-3.188-2.602-2.291 0-3.795 1.747-3.795 4.81 0 3.15 1.526 4.81 3.774 4.81 1.67 0 2.913-.906 3.21-2.48l3.166.014c-.34 2.71-2.632 5.22-6.427 5.22C42.935 32 40 29.24 40 24.436c0-4.817 2.985-7.564 6.896-7.564 3.427 0 6.015 1.956 6.427 5.357zm14.721 2.208c0 4.817-3.007 7.564-6.932 7.564-3.947 0-6.932-2.768-6.932-7.564 0-4.817 2.985-7.564 6.932-7.564 3.925 0 6.932 2.747 6.932 7.564zm-3.173 0c0-3.12-1.49-4.81-3.76-4.81-2.276 0-3.758 1.69-3.758 4.81 0 3.12 1.482 4.81 3.759 4.81 2.27 0 3.759-1.69 3.759-4.81zm16.738-7.362v14.725h-2.703l-6.441-9.268h-.108v9.268h-3.13V17.074h2.746l6.39 9.26h.13v-9.26h3.116zm1.45 14.725V17.074h9.802v2.567H86.19v3.508h6.022v2.567h-6.022v6.083h-3.13z"
									fill="url(#a)"
									fillRule="nonzero"
								/>
								<path
									d="M15.945 32c-.336-.773-.658-1.736-.946-2.873-.463-1.822-.821-3.987-1.056-6.363a65.883 65.883 0 0 0 2.596-.994 1.462 1.462 0 0 0 2.426-.094c.962.396 1.907.76 2.826 1.088-.235 2.376-.594 4.541-1.056 6.363a20.822 20.822 0 0 1-.74 2.37 16.03 16.03 0 0 1-4.05.503zm-.563-.012c-5.268-.2-9.883-2.947-12.65-7.044 2.22.328 6.121-.403 10.713-2.004.383 3.776 1.068 6.947 1.937 9.048zM2.35 24.35a15.958 15.958 0 0 1-.91-1.707c.406-.942 1.531-2.234 3.318-3.694a39.794 39.794 0 0 1 3.694-2.646 63.4 63.4 0 0 0 4.718 2.69c.048 1.181.124 2.326.225 3.422-2.252.79-4.366 1.381-6.212 1.732-2.17.412-3.834.459-4.833.203zm-1.173-2.317A15.954 15.954 0 0 1 0 16c0-2.134.418-4.17 1.176-6.033.934 1.664 3.384 3.824 6.8 6.033-3.416 2.209-5.866 4.37-6.8 6.033zM1.44 9.357c.269-.589.573-1.159.909-1.707 1-.256 2.662-.21 4.833.203 1.483.282 3.14.719 4.902 1.29v.048c0 .727.528 1.33 1.222 1.445-.058.77-.104 1.562-.137 2.371a63.4 63.4 0 0 0-4.718 2.69 39.794 39.794 0 0 1-3.694-2.646C2.97 11.591 1.845 10.3 1.44 9.357zm1.291-2.3C5.5 2.958 10.114.211 15.382.011c-.765 1.849-1.387 4.526-1.786 7.716l-.048-.001c-.614 0-1.139.377-1.357.912-4.044-1.306-7.445-1.88-9.46-1.583zM15.945 0H16c1.38 0 2.718.175 3.995.503.26.675.51 1.468.74 2.37.462 1.822.82 3.987 1.056 6.363-1.266.453-2.581.971-3.924 1.55-.99-.426-1.964-.82-2.915-1.179a1.465 1.465 0 0 0-.853-1.773c.227-1.828.53-3.504.9-4.961.288-1.137.61-2.1.946-2.873zm4.661.673a16.035 16.035 0 0 1 8.755 6.52c-2 .309-4.422.943-7.073 1.867-.344-3.399-.933-6.308-1.682-8.387zm9.056 6.994c.9 1.474 1.57 3.105 1.956 4.842a25.5 25.5 0 0 1-.642.542 39.794 39.794 0 0 1-3.694 2.646 63.4 63.4 0 0 0-4.717-2.69 66.746 66.746 0 0 0-.226-3.422c2.252-.79 4.366-1.381 6.213-1.732.386-.073.756-.135 1.11-.186zm2.073 5.418c.174.946.265 1.92.265 2.915 0 .995-.09 1.97-.265 2.915-1.096-.935-2.44-1.92-3.978-2.915 1.539-.995 2.882-1.98 3.978-2.915zm-.117 6.406a15.903 15.903 0 0 1-1.956 4.842c-.354-.05-.724-.113-1.11-.186-1.847-.35-3.961-.941-6.213-1.732.101-1.096.177-2.24.226-3.422a63.4 63.4 0 0 0 4.717-2.69c1.39.89 2.636 1.781 3.694 2.646.224.183.439.364.642.542zm-2.257 5.315a16.035 16.035 0 0 1-8.755 6.521c.749-2.08 1.338-4.988 1.682-8.387 2.651.924 5.072 1.558 7.073 1.866zm-10.2-4.164a75.059 75.059 0 0 0 2.88-1.38 66.215 66.215 0 0 1-.2 2.976 66.076 66.076 0 0 1-2.686-1.038 1.471 1.471 0 0 0 .006-.558zm-2.848.667c-.819.333-1.627.643-2.42.929a66.215 66.215 0 0 1-.2-2.977 74.044 74.044 0 0 0 2.614 1.26 1.466 1.466 0 0 0 .006.788zm.213-1.251a74.399 74.399 0 0 1-2.857-1.384 73.261 73.261 0 0 1 0-5.348 73.26 73.26 0 0 1 4.198-1.982 73.704 73.704 0 0 1 4.197 1.982 73.26 73.26 0 0 1 0 5.348 73.26 73.26 0 0 1-3.083 1.487 1.463 1.463 0 0 0-2.455-.103zm-2.705-9.428c.366-.07.684-.275.9-.562.82.309 1.656.643 2.5 1a74.65 74.65 0 0 0-3.528 1.67c.032-.715.075-1.419.128-2.108zm8.765 2.966c1.5.783 2.916 1.591 4.216 2.404a63.032 63.032 0 0 1-4.216 2.404 74.045 74.045 0 0 0 0-4.808zm-9.439 4.808A63.032 63.032 0 0 1 8.931 16a63.032 63.032 0 0 1 4.216-2.404 74.045 74.045 0 0 0 0 4.808zm5.365-7.337a66.982 66.982 0 0 1 3.329-1.305c.086.963.153 1.958.2 2.977a74.044 74.044 0 0 0-3.529-1.672z"
									fill="#6759FF"
								/>
							</g>
						</svg>
					</Link>
				</div>
				<h1 className="heroConf">
					<span className="tx-gr-purple">ReactJS</span> &{" "}
					<span className="tx-gr-orange">JS conference</span> —{" "}
					<span className="tx-gr-blue">August 23, 2019</span>.{" "}
					<span className="tx-gr-pink">Tehran, Iran</span>.
				</h1>
				<p className="description">
					<a href="https://twitter.com/hashtag/ReactConf">
						#ReactConf
					</a>{" "}
					Iran is a Iranian web, mobile development & everything about
					javascript development event.
				</p>
				<a className="btn" href="#reserve">
					<svg
						width={24}
						height={24}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g
							stroke="#000"
							strokeWidth="1.5"
							fill="none"
							fillRule="evenodd"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M8.993 23.25H2.451a1.5 1.5 0 0 1-1.487-1.694l1.858-14.25A1.5 1.5 0 0 1 4.31 6h1.116a1.5 1.5 0 0 1 1.487 1.306l2.08 15.944zM14.243 6h5.433a1.5 1.5 0 0 1 1.487 1.306l1.859 14.25a1.5 1.5 0 0 1-1.488 1.694H8.993M5.426 6h6.567" />
							<path d="M17.993 10.5V3.75a3 3 0 1 0-6 0v6.75M9.578 1.253a3.002 3.002 0 0 0-1.335 2.5V6" />
						</g>
					</svg>
					Buy ticket
				</a>
			</div>
			<svg
				className="logo"
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M510.23 1023.997c-10.751-24.738-21.038-55.563-30.27-91.93-14.8-58.295-26.27-127.603-33.797-203.606 27.061-9.698 54.818-20.314 83.078-31.81 8.525 11.628 22.285 19.178 37.807 19.178 16.821 0 31.572-8.866 39.835-22.181 30.797 12.656 61.02 24.276 90.42 34.813-7.527 76.003-18.996 145.311-33.796 203.605-7.328 28.865-15.32 54.239-23.681 75.849-40.86 10.5-83.69 16.085-127.826 16.085l-1.77-.003zm-17.998-.372c-168.573-6.4-316.274-94.297-404.833-225.424 71.048 10.488 195.912-12.893 342.85-64.114 12.234 120.827 34.155 222.302 61.983 289.538zM75.162 779.193a510.663 510.663 0 0 1-29.086-54.622c12.961-30.15 48.969-71.498 106.162-118.219 33.853-27.653 73.721-56.172 118.202-84.64 45.71 28.864 96.428 57.876 150.96 86.061 1.54 37.801 3.976 74.422 7.221 109.513-72.063 25.298-139.725 44.194-198.812 55.417-69.454 13.193-122.658 14.678-154.646 6.49zm-37.521-74.15C13.372 645.47 0 580.297 0 512s13.372-133.47 37.64-193.044C67.528 372.181 145.924 441.318 255.24 512 145.924 582.682 67.528 651.82 37.64 705.044zm8.435-405.614a510.663 510.663 0 0 1 29.087-54.622c31.988-8.188 85.192-6.703 154.646 6.49 47.481 9.019 100.5 22.992 156.89 41.26a47.72 47.72 0 0 0-.026 1.557c0 23.246 16.925 42.539 39.124 46.223a2184.042 2184.042 0 0 0-4.398 75.89c-54.531 28.185-105.248 57.197-150.959 86.062-44.48-28.47-84.35-56.988-118.202-84.641-57.193-46.72-93.2-88.069-106.162-118.219zm41.323-73.63C175.959 94.672 323.659 6.774 492.232.375c-24.49 59.169-44.404 144.853-57.168 246.907a47.705 47.705 0 0 0-1.54-.025c-19.622 0-36.426 12.064-43.402 29.18-129.419-41.776-238.238-60.158-302.723-50.638zM510.231.003C510.82.001 511.41 0 512 0c44.136 0 86.967 5.584 127.826 16.085 8.361 21.61 16.353 46.984 23.681 75.849 14.8 58.294 26.27 127.602 33.797 203.605-40.514 14.519-82.585 31.095-125.57 49.604-31.675-13.639-62.853-26.228-93.277-37.718a46.874 46.874 0 0 0 1.917-13.31c0-19.64-12.08-36.458-29.216-43.425 7.263-58.489 16.968-112.144 28.801-158.756 9.233-36.368 19.52-67.193 30.272-91.931zm149.163 21.53C775.467 56.368 874.207 131.28 939.538 230.197c-64.01 9.852-141.486 30.145-226.32 59.717-11.012-108.757-29.872-201.836-53.824-268.38zm289.778 223.82c28.827 47.163 50.238 99.354 62.608 154.95a816.049 816.049 0 0 1-20.552 17.345c-33.852 27.653-73.72 56.172-118.202 84.64-45.71-28.864-96.427-57.876-150.959-86.061-1.54-37.801-3.977-74.422-7.221-109.513 72.063-25.298 139.724-44.194 198.811-55.417 12.363-2.348 24.21-4.326 35.515-5.944zm66.354 173.382c5.566 30.241 8.474 61.413 8.474 93.265 0 31.852-2.908 63.024-8.474 93.265-35.087-29.899-78.056-61.425-127.3-93.265 49.244-31.84 92.213-63.366 127.3-93.265zm-3.746 204.963c-12.37 55.595-33.78 107.786-62.608 154.949-11.305-1.618-23.152-3.596-35.515-5.944-59.087-11.223-126.748-30.119-198.811-55.417 3.244-35.09 5.681-71.711 7.221-109.513 54.532-28.185 105.249-57.197 150.96-86.062 44.48 28.47 84.349 56.988 118.201 84.641a816.009 816.009 0 0 1 20.552 17.346zm-72.242 170.106c-65.331 98.917-164.07 173.83-280.144 208.662 23.952-66.543 42.812-159.622 53.824-268.379 84.834 29.572 162.31 49.865 226.32 59.717zM613.144 660.55a2401.853 2401.853 0 0 0 22.94-10.55 2369.426 2369.426 0 0 0 69.2-33.638c-1.463 32.587-3.605 64.429-6.386 95.248-28.117-10.148-56.848-21.239-85.95-33.201.624-3.048.951-6.204.951-9.437 0-2.875-.259-5.69-.755-8.422zM522 681.89c-26.19 10.64-52.06 20.564-77.431 29.72-2.781-30.82-4.923-62.66-6.386-95.248a2369.426 2369.426 0 0 0 69.2 33.638c4.823 2.248 9.637 4.474 14.444 6.677a46.92 46.92 0 0 0-1.63 12.295c0 4.48.63 8.814 1.803 12.918zm6.838-40.038c-4.838-2.217-9.68-4.455-14.525-6.714a2344.351 2344.351 0 0 1-76.895-37.569A2344.35 2344.35 0 0 1 435.866 512c0-28.913.526-57.493 1.552-85.568a2344.351 2344.351 0 0 1 76.895-37.57 2358.522 2358.522 0 0 1 57.42-25.851 2358.524 2358.524 0 0 1 57.42 25.852 2344.35 2344.35 0 0 1 76.896 37.569A2344.348 2344.348 0 0 1 707.6 512c0 28.913-.525 57.493-1.551 85.568a2344.35 2344.35 0 0 1-76.896 37.57 2377.688 2377.688 0 0 1-21.753 10.01c-8.155-13.788-23.174-23.034-40.352-23.034-15.77 0-29.72 7.792-38.21 19.737zm-86.58-301.692c11.73-2.212 21.916-8.797 28.8-17.997 26.276 9.9 53.01 20.586 80.013 31.997a2388.802 2388.802 0 0 0-43.688 19.842 2369.426 2369.426 0 0 0-69.2 33.638 2159.808 2159.808 0 0 1 4.075-67.48zm280.5 94.908c47.977 25.05 93.306 50.928 134.913 76.933-41.607 26.005-86.936 51.882-134.914 76.933.819-25.19 1.241-50.867 1.241-76.933 0-26.066-.422-51.744-1.24-76.933zM420.708 588.933c-47.978-25.05-93.306-50.928-134.913-76.933 41.607-26.005 86.935-51.882 134.913-76.933A2369.426 2369.426 0 0 0 419.47 512c0 26.066.422 51.744 1.24 76.933zm171.687-234.774c36.132-15.27 71.784-29.238 106.502-41.768 2.781 30.82 4.923 62.66 6.385 95.248a2369.426 2369.426 0 0 0-69.2-33.638 2388.8 2388.8 0 0 0-43.687-19.842z"
					fill="#000"
					fillRule="evenodd"
				/>
			</svg>
		</header>

		<section className="section">
			<div className="container">
				<section className="section__main">
					<h2 className="tx-gr-orange">Presenter</h2>
					<Grid width={300} gap={"var(--gap)"}>
						<People
							className="hero"
							name={"Sara Hashemi"}
							subject={null}
							avatar="https://reactconf.ir/static/image/presenter.jpg"
							socials={[
								{
									twitter: "@sia_mac",
									linkedin: "siamakmokhtari",
									github: "siamak",
									codepen: "siamak",
									dribbble: "siamak"
								}
							]}
							bio="Founder and CEO of Wink App. Experienced Product Manager with a demonstrated history of working in the marketing and advertising industry. Skilled in Negotiation, Business Planning, Retail, and Customer Relationship Management (CRM). Strong product management professional with a Master of Business Administration (M.B.A.) focused in MEBA from IMI (Industrial Management Institute)."
						/>
					</Grid>
				</section>
			</div>
		</section>

		<section className="section">
			<div className="container-fluid">
				<section className="Grid">
					<aside className="section__outline">
						<h3 className="heading">REACT CONF SPEAKERS</h3>
					</aside>
					<section className="section__main">
						<Grid width={300} gap={"var(--gap)"}>
							{peoples.map((p, i) => (
								<People
									name={p.slug}
									subject="What is Graphql and how to implement a scalable GraphQL project with React & Apollo?"
									avatar={`https://i.pravatar.cc/30${i}`}
									socials={[
										{
											twitter: "@sia_mac",
											linkedin: "siamakmokhtari",
											github: "siamak",
											codepen: "siamak",
											dribbble: "siamak"
										}
									]}
									bio="full-stack Javascript web developer and a full-time Software Engineering student.developer at Ezerus.com, and we make enterprise Javascript applications with React, powered by lovely GraphQL, Apollo and Prisma."
								/>
							))}
						</Grid>
					</section>
				</section>
			</div>
		</section>

		<section className="section">
			<div className="container-fluid">
				<section className="Grid">
					<aside className="section__outline">
						<h3 className="heading">Schedules</h3>
					</aside>
					<section className="section__main">
						<section className="table">
							<header className="table-row table-head_featured">
								<div className="wrap-row">23 Auguest 2019</div>
							</header>
							<section id="schedule-1" className="table-row">
								<div className="wrap-row">
									<div className="col">
										<h4 className="subject">
											What is Graphql and how to implement
											a scalable GraphQL project with
											React & Apollo?
										</h4>
										<p className="summary">
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
											Cupiditate quidem pariatur sed
											similique expedita ab accusamus
											ratione consequatur, nihil
											perferendis maxime voluptatibus ut
											unde dicta nobis sint sunt tempore
											neque?
										</p>
										<div className="speaker">
											<img
												src="https://reactconf.ir/static/image/presenter.jpg"
												alt="Hossein"
											/>{" "}
											Milad Heydari
										</div>
									</div>
									<div className="side">
										<time className="gray">
											07:00 — 08:00
										</time>
									</div>
								</div>
							</section>
							<section id="schedule-1" className="table-row">
								<div className="wrap-row">
									<div className="col">
										<h4 className="subject">
											What is Graphql and how to implement
											a scalable GraphQL project with
											React & Apollo?
										</h4>
										<p className="summary">
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
											Cupiditate quidem pariatur sed
											similique expedita ab accusamus
											ratione consequatur, nihil
											perferendis maxime voluptatibus ut
											unde dicta nobis sint sunt tempore
											neque?
										</p>
										<div className="speaker">
											<img
												src="https://reactconf.ir/static/image/presenter.jpg"
												alt="Hossein"
											/>{" "}
											Milad Heydari
										</div>
									</div>
									<div className="side">
										<time className="gray">
											07:00 — 08:00
										</time>
									</div>
								</div>
							</section>
							<section id="schedule-1" className="table-row">
								<div className="wrap-row">
									<div className="col">
										<h4 className="subject">
											What is Graphql and how to implement
											a scalable GraphQL project with
											React & Apollo?
										</h4>
										<p className="summary">
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
											Cupiditate quidem pariatur sed
											similique expedita ab accusamus
											ratione consequatur, nihil
											perferendis maxime voluptatibus ut
											unde dicta nobis sint sunt tempore
											neque?
										</p>
										<div className="speaker">
											<img
												src="https://reactconf.ir/static/image/presenter.jpg"
												alt="Hossein"
											/>{" "}
											Milad Heydari
										</div>
									</div>
									<div className="side">
										<time className="gray">
											07:00 — 08:00
										</time>
									</div>
								</div>
							</section>
							<section id="schedule-1" className="table-row">
								<div className="wrap-row">
									<div className="col">
										<h4 className="subject">
											What is Graphql and how to implement
											a scalable GraphQL project with
											React & Apollo?
										</h4>
										<p className="summary">
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
											Cupiditate quidem pariatur sed
											similique expedita ab accusamus
											ratione consequatur, nihil
											perferendis maxime voluptatibus ut
											unde dicta nobis sint sunt tempore
											neque?
										</p>
										<div className="speaker">
											<img
												src="https://reactconf.ir/static/image/presenter.jpg"
												alt="Hossein"
											/>{" "}
											Milad Heydari
										</div>
									</div>
									<div className="side">
										<time className="gray">
											07:00 — 08:00
										</time>
									</div>
								</div>
							</section>
						</section>
					</section>
				</section>
			</div>

			<section className="section">
				<div className="container">
					<section className="section__main">
						<h2 className="tx-gr-pink">Location</h2>
						<div className="location">
							<div className="location__query">
								<h3>Holy Shit Museum Hall Conf.</h3>
								<p>
									Keas 69 Str. 15234, Chalandri Tehran, Iran.
								</p>
								<a href="#" className="btn">
									Show on Google Map
								</a>
							</div>
						</div>
					</section>
				</div>
			</section>

			<section className="section">
				<div className="container-fluid">
					<section className="Grid">
						<aside className="section__outline">
							<h3 className="heading">Jury</h3>
						</aside>
						<section className="section__main">
							<Grid width={300} gap={"var(--gap)"}>
								{peoples.map((p, i) => (
									<People
										name={p.slug}
										subject="What is Graphql and how to implement a scalable GraphQL project with React & Apollo?"
										avatar={`https://i.pravatar.cc/30${i}`}
										socials={[
											{
												twitter: "@sia_mac",
												linkedin: "siamakmokhtari",
												github: "siamak",
												codepen: "siamak",
												dribbble: "siamak"
											}
										]}
										bio="full-stack Javascript web developer and a full-time Software Engineering student.developer at Ezerus.com, and we make enterprise Javascript applications with React, powered by lovely GraphQL, Apollo and Prisma."
									/>
								))}
							</Grid>
						</section>
					</section>
				</div>
			</section>
		</section>
	</main>
);

export default Home;
