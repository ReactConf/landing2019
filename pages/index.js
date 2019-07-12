import React, { Component } from "react";
import Link from "next/link";
import Grid from "react-css-grid";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Head from "../components/head";
import Schedule from "../components/schedule";
import People from "../components/people";
import Countdown from "../components/countdown";
import { SmoothScroll } from "../components/utils/utils";
import data from "./data";
import "../styles/styles.scss";

const { peoples, juries, team } = data;

export default class Main extends Component {
	componentDidMount() {
		const isServer = typeof window === "undefined";
		if (!isServer) {
			new SmoothScroll(document, 27, 1);
		}
	}

	render() {
		return (
			<ParallaxProvider>
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
							background-color: var(--primary-color);
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
							// background: linear-gradient(to right, #8c77f1 0%, #8c77f1 100%);
							// -webkit-background-clip: text;
							// -webkit-text-fill-color: transparent;
						}

						.tx-gr-pink {
							background-image: linear-gradient(
								to right,
								#ee2281,
								#ffba54
							);
							color: rgba(0, 0, 0, 0);
							-webkit-background-clip: text;
							background-clip: text;
							position: relative;
						}
						.tx-gr-blue {
							background-image: linear-gradient(
								to right,
								#009cf3,
								#16d6d9
							);
							color: rgba(0, 0, 0, 0);
							-webkit-background-clip: text;
							background-clip: text;
							position: relative;
						}
						.tx-gr-green {
							background-image: linear-gradient(
								to right,
								#16d6d9,
								#96cc29
							);
							color: rgba(0, 0, 0, 0);
							-webkit-background-clip: text;
							background-clip: text;
							position: relative;
						}
						.tx-gr-orange {
							background-image: linear-gradient(
								to right,
								#ffbf02,
								#ed0082
							);
							color: rgba(0, 0, 0, 0);
							-webkit-background-clip: text;
							background-clip: text;
							position: relative;
						}

						.tx-gr-purple {
							background-image: linear-gradient(
								to right,
								#61d4c9,
								#ffba54
							);
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
												<stop
													stopColor="#ffba54"
													offset="0%"
												/>
												<stop
													stopColor="#8478FF"
													offset="100%"
												/>
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

							<Parallax y={[-20, 20]} tagOuter="div">
								<h1 className="heroConf">
									<span className="tx-gr-purple">
										ReactJS
									</span>{" "}
									&{" "}
									<span className="tx-gr-orange">
										JS conference
									</span>{" "}
									—{" "}
									<span className="tx-gr-blue">
										August 29, 2019
									</span>
									.{" "}
									<span className="tx-gr-pink">
										Tehran, Iran
									</span>
									.
								</h1>
							</Parallax>

							<Parallax y={[-20, 60]} tagOuter="div">
								<p className="description">
									<a href="https://twitter.com/hashtag/ReactConfIran2019">
										#ReactConfIran2019
									</a>{" "}
									Iran is a Iranian web, mobile development &
									everything about javascript development
									event.
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
							</Parallax>

							<Countdown />
						</div>
					</header>

					<section className="section">
						<div className="container">
							<section className="section__main">
								<h2 className="tx-gr-orange">Presenter</h2>
								<Grid width={300} gap={"var(--gap)"}>
									<People
										className="hero"
										name={"Sara Hashemi"}
										avatar="https://reactconf.ir/static/image/presenter.jpg"
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
									<h3 className="heading">
										REACT CONF SPEAKERS
									</h3>
								</aside>
								<section className="section__main">
									<Grid width={300} gap={"var(--gap)"}>
										{peoples.map((p, i) => (
											<People
												key={i}
												name={p.slug}
												subject={p.subject}
												avatar={p.avatar}
												socials={p.socials}
												bio={p.bio}
											/>
										))}
									</Grid>
								</section>
							</section>
						</div>
					</section>

					<section className="section">
						<div className="container">
							<h2 className="tx-gr-blue">Ticket</h2>
						</div>
						<section className="section__main">
							<div className="ticket">
								<div className="ticket--card">
									<h2>
										590,000 <small>Tomans</small>
									</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Excepturi facere
										tempora dignissimos beatae dolor aliquid
										quas esse, sapiente magni obcaecati
										expedita qui possimus alias sit voluptas
										atque rerum, officia eius!
									</p>
									<a href="/" className="btn" target="_blank">
										Preorder
									</a>
								</div>
							</div>
						</section>
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
											<div className="wrap-row">
												23 Auguest 2019
											</div>
										</header>
										<Schedule
											id={1}
											people={"Ana Lava"}
											type={"Presentation"}
											subject={`What is Graphql and how to implement a scalable GraphQL project with React & Apollo?`}
											summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem pariatur sed similique expedita ab accusamus ratione consequatur, nihil perferendis maxime voluptatibus ut unde dicta nobis sint sunt tempore neque?`}
											time={["07:00", "8:00"]}
										/>
										<Schedule
											id={2}
											people={"Ana Lava"}
											type={"Presentation"}
											subject={`What is Graphql and how to implement a scalable GraphQL project with React & Apollo?`}
											summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem pariatur sed similique expedita ab accusamus ratione consequatur, nihil perferendis maxime voluptatibus ut unde dicta nobis sint sunt tempore neque?`}
											time={["07:00", "8:00"]}
										/>
										<Schedule
											id={3}
											people={"Ana Lava"}
											type={"Presentation"}
											subject={`What is Graphql and how to implement a scalable GraphQL project with React & Apollo?`}
											summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem pariatur sed similique expedita ab accusamus ratione consequatur, nihil perferendis maxime voluptatibus ut unde dicta nobis sint sunt tempore neque?`}
											time={["07:00", "8:00"]}
										/>
										<Schedule
											id={4}
											type={"Break"}
											subject={`Breakfast`}
											summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem pariatur sed similique expedita ab accusamus ratione consequatur, nihil perferendis maxime voluptatibus ut unde dicta nobis sint sunt tempore neque?`}
											time={["07:00", "8:00"]}
										/>
										<Schedule
											id={5}
											people={"Ana Lava"}
											type={"Presentation"}
											subject={`What is Graphql and how to implement a scalable GraphQL project with React & Apollo?`}
											summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem pariatur sed similique expedita ab accusamus ratione consequatur, nihil perferendis maxime voluptatibus ut unde dicta nobis sint sunt tempore neque?`}
											time={["07:00", "8:00"]}
										/>
									</section>
								</section>
							</section>
						</div>
					</section>

					<section className="section">
						<div className="container">
							<section className="section__main">
								<h2 className="tx-gr-pink">Location</h2>
								<Parallax y={[-10, 10]} tagOuter="div">
									<div className="location">
										<div className="location__query">
											<h3>Holy Defense Museum Hall</h3>
											<p>
												Sarv St. Haqani Highway,
												Vanak.Tehran, Iran
											</p>
											<a
												href="https://www.google.com/maps/place/Holy+Defense+Museum/@35.7533039,51.4255214,15z/data=!4m2!3m1!1s0x0:0x936f271446787a93?sa=X&ved=2ahUKEwicvKjh-anjAhWNW80KHfgkC8UQ_BIwDnoECA8QCA"
												className="btn"
												target="_blank"
											>
												Show on Google Map
											</a>
										</div>
									</div>
								</Parallax>
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
										{juries.map((p, i) => (
											<People
												key={i}
												name={p.slug}
												avatar={p.avatar}
												socials={p.socials}
											/>
										))}
									</Grid>
								</section>
							</section>
						</div>
					</section>

					<section className="section">
						<div className="container">
							<section className="section__main">
								<h2 className="tx-gr-purple">Sponsors</h2>
								<Grid width={180} gap={"var(--gap)"}>
									<figure className="sponsors--item">
										<a href="/" target="_blank">
											<img
												src="/static/images/partners/afkar.png"
												alt="Afkar News"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													Afkar News
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a href="/" target="_blank">
											<img
												src="/static/images/partners/Binosha.png"
												alt="Binosha"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													Binosha
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a href="/" target="_blank">
											<img
												src="/static/images/partners/aasaam.png"
												alt="AASAAM"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													AASAAM
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a href="/" target="_blank">
											<img
												src="/static/images/partners/arjang.png"
												alt="Arjang"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													Arjang
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a href="/" target="_blank">
											<img
												src="/static/images/partners/ciw.png"
												alt="CIW"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													CIW
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a href="/" target="_blank">
											<img
												src="/static/images/partners/frontcast.png"
												alt="Front Cast"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													Front Cast
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a href="/" target="_blank">
											<img
												src="/static/images/partners/gadgetnews.png"
												alt="gadgetnews"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													gadgetnews
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
								</Grid>
							</section>
						</div>
					</section>

					<section className="section">
						<div className="container-fluid">
							<section className="Grid">
								<aside className="section__outline">
									<h3 className="heading">CORE TEAM</h3>
								</aside>
								<section className="section__main">
									<Grid width={300} gap={"var(--gap)"}>
										{team.map((p, i) => (
											<People
												key={i}
												name={p.slug}
												avatar={p.avatar}
												socials={p.socials}
												bio={p.bio}
											/>
										))}
									</Grid>
								</section>
							</section>
						</div>
					</section>

					<footer className="footer">
						<div className="container">
							<Link href="/">
								<svg
									width={200}
									height={64}
									className="_logo"
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
											<stop
												stopColor="#ffba54"
												offset="0%"
											/>
											<stop
												stopColor="#8478FF"
												offset="100%"
											/>
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

							<p>
								<a href="https://twitter.com/hashtag/ReactConfIran2019">
									#ReactConfIran2019
								</a>{" "}
								Iran is a Iranian web, mobile development &
								everything about javascript development event.
							</p>
							<div className="socials">
								<a href="/" target="_blank">
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
									</svg>
								</a>
								<a href="/" target="_blank">
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>WhatsApp icon</title>
										<path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
									</svg>
								</a>
								<a href="/" target="_blank">
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
									</svg>
								</a>
								<a href="/" target="_blank">
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24zM12 3.975H9c-2.775 0-5.025 2.25-5.025 5.025v6c0 2.774 2.25 5.024 5.025 5.024h6c2.774 0 5.024-2.25 5.024-5.024v-3.975c0-.6-.45-1.05-1.05-1.05H18c-.524 0-.976-.45-.976-.976 0-2.776-2.25-5.026-5.024-5.026zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975h3.6z" />
									</svg>
								</a>
								<a href="/" target="_blank">
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
									</svg>
								</a>
								<a href="/" target="_blank">
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
								</a>
								<a href="/" target="_blank">
									<svg
										width="24"
										height="24"
										className="icon"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
									</svg>
								</a>
							</div>
						</div>
					</footer>
				</main>
			</ParallaxProvider>
		);
	}
}
