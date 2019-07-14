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
								<a className="btn" href="/ticket">
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
								<Grid width={320} gap={"var(--gap)"}>
									<People
										className="hero"
										name={"Sara Hashemi"}
										avatar="/static/images/people/sara.jpg"
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
									<Grid width={320} gap={"var(--gap)"}>
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
									<h2 className="offer small">
										280,000 <small>Tomans</small>
									</h2>
									<h2>
										200,000 <small>Tomans</small>
									</h2>
									<p>
										One full days of knowledge sharing and
										community with people who Code and LOVE
										React.
									</p>
									<a
										href="/ticket"
										className="btn"
										target="_blank"
									>
										Preorder
									</a>
								</div>
							</div>
						</section>
					</section>

					{/*<section className="section">*/}
					{/*	<div className="container-fluid">*/}
					{/*		<section className="Grid">*/}
					{/*			<aside className="section__outline">*/}
					{/*				<h3 className="heading">Schedules</h3>*/}
					{/*			</aside>*/}
					{/*			<section className="section__main">*/}
					{/*				<section className="table">*/}
					{/*					<header className="table-row table-head_featured">*/}
					{/*						<div className="wrap-row">*/}
					{/*							23 Auguest 2019*/}
					{/*						</div>*/}
					{/*					</header>*/}
					{/*					<Schedule*/}
					{/*						id={1}*/}
					{/*						people={"Ana Lava"}*/}
					{/*						type={"Presentation"}*/}
					{/*						subject={`What is Graphql and how to implement a scalable GraphQL project with React & Apollo?`}*/}
					{/*						summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem pariatur sed similique expedita ab accusamus ratione consequatur, nihil perferendis maxime voluptatibus ut unde dicta nobis sint sunt tempore neque?`}*/}
					{/*						time={["07:00", "8:00"]}*/}
					{/*					/>*/}
					{/*					<Schedule*/}
					{/*						id={2}*/}
					{/*						people={"Ana Lava"}*/}
					{/*						type={"Presentation"}*/}
					{/*						subject={`What is Graphql and how to implement a scalable GraphQL project with React & Apollo?`}*/}
					{/*						summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem pariatur sed similique expedita ab accusamus ratione consequatur, nihil perferendis maxime voluptatibus ut unde dicta nobis sint sunt tempore neque?`}*/}
					{/*						time={["07:00", "8:00"]}*/}
					{/*					/>*/}
					{/*					<Schedule*/}
					{/*						id={3}*/}
					{/*						people={"Ana Lava"}*/}
					{/*						type={"Presentation"}*/}
					{/*						subject={`What is Graphql and how to implement a scalable GraphQL project with React & Apollo?`}*/}
					{/*						summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem pariatur sed similique expedita ab accusamus ratione consequatur, nihil perferendis maxime voluptatibus ut unde dicta nobis sint sunt tempore neque?`}*/}
					{/*						time={["07:00", "8:00"]}*/}
					{/*					/>*/}
					{/*					<Schedule*/}
					{/*						id={4}*/}
					{/*						type={"Break"}*/}
					{/*						subject={`Breakfast`}*/}
					{/*						summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem pariatur sed similique expedita ab accusamus ratione consequatur, nihil perferendis maxime voluptatibus ut unde dicta nobis sint sunt tempore neque?`}*/}
					{/*						time={["07:00", "8:00"]}*/}
					{/*					/>*/}
					{/*					<Schedule*/}
					{/*						id={5}*/}
					{/*						people={"Ana Lava"}*/}
					{/*						type={"Presentation"}*/}
					{/*						subject={`What is Graphql and how to implement a scalable GraphQL project with React & Apollo?`}*/}
					{/*						summary={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem pariatur sed similique expedita ab accusamus ratione consequatur, nihil perferendis maxime voluptatibus ut unde dicta nobis sint sunt tempore neque?`}*/}
					{/*						time={["07:00", "8:00"]}*/}
					{/*					/>*/}
					{/*				</section>*/}
					{/*			</section>*/}
					{/*		</section>*/}
					{/*	</div>*/}
					{/*</section>*/}

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
									<Grid width={320} gap={"var(--gap)"}>
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
										<a
											href="http://vira.co.com/"
											target="_blank"
										>
											<img
												src="/static/images/partners/vira.png"
												alt="VIRA"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													Vira
												</b>
												<span className="sponsors--item-type black-light">
													VIP Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a
											href="http://baharnet.ir/"
											target="_blank"
										>
											<img
												src="/static/images/partners/baharsamaneh.png"
												alt="baharnet"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													baharnet
												</b>
												<span className="sponsors--item-type black-light">
													Gold Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a
											href="https://siamak.us"
											target="_blank"
										>
											<img
												src="/static/images/partners/siamak.png"
												alt="Siamak Mokhtari"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													Siamak Mokhtari
												</b>
												<span className="sponsors--item-type black-light">
													Designer of
													ReactConfIran2019
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a
											href="hhttps://tavanito.com/"
											target="_blank"
										>
											<img
												src="/static/images/partners/tavanito.png"
												alt="tavanito"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													Tavanito
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a
											href="https://ponisha.ir/"
											target="_blank"
										>
											<img
												src="/static/images/partners/ponisha.png"
												alt="ponisha"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													ponisha
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a
											href="https://virgool.io/"
											target="_blank"
										>
											<img
												src="/static/images/partners/virgool.png"
												alt="virgool"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													virgool
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a
											href="https://zoomtech.org/"
											target="_blank"
										>
											<img
												src="/static/images/partners/zoomtech.png"
												alt="zoomtech"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													zoomtech
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a
											href="https://www.instagram.com/radismedia/"
											target="_blank"
										>
											<img
												src="/static/images/partners/radismedia.png"
												alt="radismedia"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													radismedia
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a
											href="https://roocket.ir/"
											target="_blank"
										>
											<img
												src="/static/images/partners/rocket.png"
												alt="roocket"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													roocket
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a
											href="https://flerbo.ir/"
											target="_blank"
										>
											<img
												src="/static/images/partners/flerbo.png"
												alt="flerbo"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													Flerbo
												</b>
												<span className="sponsors--item-type black-light">
													Sticker Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a
											href="https://macneed.ir/"
											target="_blank"
										>
											<img
												src="/static/images/partners/macneed.png"
												alt="macneed"
												className="sponsors--item-image"
											/>
											<figcaption>
												<b className="sponsors--item-title">
													macneed
												</b>
												<span className="sponsors--item-type black-light">
													Media Sponsor
												</span>
											</figcaption>
										</a>
									</figure>
									<figure className="sponsors--item">
										<a
											href="https://www.afkarnews.com/"
											target="_blank"
										>
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
										<a
											href="https://binosha.com"
											target="_blank"
										>
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
										<a
											href="https://aasaam.com/"
											target="_blank"
										>
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
										<a
											href="https://arjang.ac.ir/"
											target="_blank"
										>
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
										<a
											href="https://ciwiran.com/"
											target="_blank"
										>
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
										<a
											href="http://frontcast.ir/"
											target="_blank"
										>
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
										<a
											href="https://gadgetnews.net"
											target="_blank"
										>
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
									<Grid width={320} gap={"var(--gap)"}>
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
							<a
								href="http://hastnama.com"
								className="footer-logo"
								target="_blank"
							>
								<svg
									width="180px"
									height="60px"
									viewBox="0 0 4514 1120"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g
										id="Page-1"
										stroke="none"
										strokeWidth="1"
										fill="none"
										fillRule="evenodd"
									>
										<g
											id="Hastnama_New_Logo_2"
											transform="translate(1.000000, 1.000000)"
											fillRule="nonzero"
											stroke="#373435"
											strokeWidth="0.900032"
										>
											<g
												id="Group"
												transform="translate(0.000000, 29.000000)"
												fill="#ffffff"
											>
												<path
													d="M2288,479 L2288,574 L2897,574 L2897,377 C2897,312 2872,249 2826,204 C2780,158 2719,132 2653,132 C2614,132 2575,142 2541,160 C2511,175 2486,196 2466,222 C2393,245 2342,314 2342,394 C2342,425 2350,454 2363,479 L2288,479 Z M2608,479 L2522,479 C2475,479 2437,441 2437,394 C2437,346 2475,308 2522,308 C2569,308 2608,346 2608,394 L2608,479 Z M2802,479 L2703,479 L2703,394 C2703,325 2665,266 2609,234 C2623,230 2638,227 2653,227 C2735,227 2802,294 2802,377 L2802,479 Z"
													id="Shape"
												/>
												<path
													d="M2107,432 C2107,458 2085,479 2059,479 C2032,479 2012,458 2012,432 L2012,260 C2012,234 1990,212 1964,212 C1938,212 1917,234 1917,260 L1917,432 C1917,458 1895,479 1869,479 C1842,479 1820,458 1820,432 L1820,260 C1820,234 1799,212 1773,212 C1746,212 1725,234 1725,260 L1725,432 C1725,458 1704,479 1678,479 L1638,479 L1638,574 L1678,574 C1714,574 1747,561 1773,539 C1798,561 1831,574 1869,574 C1905,574 1939,561 1964,539 C1989,561 2022,574 2059,574 C2095,574 2129,561 2154,539 C2179,561 2212,574 2249,574 L2289,574 L2289,479 L2249,479 C2223,479 2202,458 2202,432 L2202,260 C2202,234 2180,212 2154,212 C2128,212 2107,234 2107,260 L2107,432 Z"
													id="Path"
												/>
												<path
													d="M1456,432 L1456,434 C1456,459 1434,479 1409,479 L964,479 L964,574 L1409,574 C1445,574 1478,561 1504,538 C1529,561 1563,574 1599,574 L1639,574 L1639,479 L1599,479 C1573,479 1553,459 1551,434 L1551,432 L1551,260 C1551,235 1530,212 1504,212 C1477,212 1456,235 1456,260 L1456,432 Z"
													id="Path"
												/>
												<path
													d="M1346,0 C1316,0 1291,23 1291,53 C1291,83 1316,107 1346,107 C1375,107 1399,83 1399,53 C1399,23 1375,0 1346,0 Z"
													id="Path"
												/>
												<path
													d="M1217,0 C1187,0 1163,23 1163,53 C1163,83 1187,107 1217,107 C1246,107 1271,83 1271,53 C1271,23 1246,0 1217,0 Z"
													id="Path"
												/>
												<path
													d="M811,432 C811,458 789,479 763,479 L709,479 L709,574 L763,574 C841,574 906,511 906,432 L906,260 C906,235 884,212 858,212 C832,212 811,235 811,260 L811,432 Z"
													id="Path"
												/>
												<path
													d="M853,0 C823,0 799,23 799,53 C799,83 823,107 853,107 C882,107 907,83 907,53 C907,23 882,0 853,0 Z"
													id="Path"
												/>
												<path
													d="M0,432 C0,511 64,574 143,574 L182,574 L182,479 L143,479 C116,479 95,458 95,432 L95,49 C95,23 73,1 48,1 C21,1 0,23 0,49 L0,432 Z"
													id="Path"
												/>
												<path
													d="M446,574 L446,574 L446,574 C399,574 356,556 323,527 C297,556 260,574 218,574 L177,574 L177,479 L218,479 C244,479 265,458 265,431 L265,394 C265,293 346,212 446,212 L446,212 L446,212 L446,212 C546,212 627,293 627,394 L627,431 C627,458 648,479 674,479 L714,479 L714,574 L674,574 C632,574 594,556 569,527 C536,556 493,574 446,574 L446,574 Z M446,308 L446,308 L446,308 C399,308 360,346 360,394 C360,441 399,479 446,479 L446,479 L446,479 L446,479 C493,479 532,441 532,394 C532,346 493,308 446,308 L446,308 Z"
													id="Shape"
												/>
												<path
													d="M101,1049 C87,1049 74,1048 62,1045 C51,1042 42,1037 34,1029 C27,1022 21,1012 17,1000 C13,988 11,972 11,954 L0,954 C0,971 2,986 5,999 C8,1012 14,1023 21,1033 C29,1042 39,1049 52,1054 C65,1059 82,1061 101,1061 C119,1061 134,1060 146,1057 C158,1054 168,1050 176,1045 C183,1040 188,1033 192,1026 C195,1019 196,1011 196,1002 C196,997 196,992 194,987 C193,983 190,979 187,975 C184,971 179,968 174,965 C168,961 161,958 152,956 C145,953 137,950 131,947 C124,944 118,941 113,937 C108,933 105,928 102,923 C99,918 98,913 98,906 C98,890 101,877 108,868 C115,859 126,854 141,854 C147,854 153,856 158,858 C163,861 167,865 171,870 C174,875 177,880 179,886 C181,892 182,899 182,905 L193,905 C192,886 186,870 177,859 C167,848 155,843 141,843 C131,843 122,845 115,848 C108,852 103,857 98,863 C94,868 91,875 89,883 C87,890 86,898 86,906 C86,919 89,930 97,940 C104,950 115,957 132,962 C141,966 149,969 156,971 C163,974 168,977 172,980 C177,983 180,987 181,990 C183,994 184,998 184,1002 C184,1011 182,1018 178,1024 C175,1030 169,1035 162,1039 C155,1043 146,1045 136,1047 C126,1048 114,1049 101,1049 Z M239,1049 C235,1049 232,1049 229,1048 C226,1047 223,1046 220,1044 L220,1056 C222,1057 223,1058 226,1059 C227,1059 230,1060 232,1061 C235,1061 238,1061 242,1061 C256,1061 266,1055 272,1043 C278,1030 281,1013 281,991 L281,862 L269,862 L269,991 C269,1002 268,1011 267,1018 C267,1026 265,1032 263,1036 C260,1041 257,1044 253,1046 C249,1048 245,1049 239,1049 Z M356,1061 C370,1061 382,1059 392,1055 C402,1051 410,1043 416,1033 C422,1023 427,1010 429,994 C432,977 433,957 433,932 C433,919 432,906 431,895 C429,884 426,875 421,867 C417,859 411,853 403,849 C395,845 386,843 374,843 C363,843 353,845 345,849 C338,854 332,859 327,866 C323,873 320,882 318,891 C316,900 315,910 315,920 C315,930 316,939 319,948 C321,956 324,963 329,970 C334,976 340,981 347,985 C355,988 364,990 374,990 L417,990 C415,1001 412,1011 409,1019 C406,1026 401,1032 396,1037 C391,1041 386,1045 379,1046 C372,1048 364,1049 356,1049 C354,1049 352,1049 349,1049 C347,1049 345,1048 342,1048 C340,1047 338,1047 335,1046 C333,1046 332,1045 330,1044 L330,1057 C332,1058 335,1058 337,1059 C339,1060 342,1060 345,1061 C348,1061 352,1061 356,1061 Z M328,920 C328,910 329,902 330,894 C332,886 335,879 338,873 C342,867 347,863 353,860 C359,856 366,855 375,855 C392,855 403,861 410,874 C417,887 421,906 421,931 C421,941 420,949 420,957 C420,965 419,972 418,979 L374,979 C358,979 346,974 339,964 C331,953 328,939 328,920 Z M455,726 C449,726 444,728 440,731 C437,735 435,740 435,747 L443,747 C443,744 444,741 446,739 C448,737 451,736 456,736 C458,736 461,736 464,737 C467,738 470,739 474,740 C477,741 480,742 483,743 C487,744 490,744 493,744 C499,744 503,743 507,739 C511,736 513,731 513,723 L505,723 C505,727 504,729 502,731 C499,733 496,734 491,734 C488,734 485,734 482,733 C479,732 475,731 472,730 C470,729 467,728 464,727 C461,727 458,726 455,726 Z M468,990 L480,990 L480,776 L468,776 L468,990 Z M555,1061 C566,1061 575,1060 584,1058 C592,1055 599,1051 605,1045 C611,1040 616,1032 620,1023 C624,1014 627,1003 629,990 L668,990 C670,990 672,990 672,989 C673,988 673,988 673,987 L673,983 C673,981 672,980 672,980 C671,979 670,979 668,979 L630,979 C631,972 631,965 632,957 C632,950 632,941 632,932 C632,919 631,906 629,895 C628,884 625,875 620,867 C616,859 609,853 602,849 C594,845 585,843 573,843 C562,843 552,845 544,849 C537,854 531,859 526,866 C522,873 519,882 517,891 C515,900 514,910 514,920 C514,930 515,939 517,948 C520,956 523,963 528,970 C533,976 539,981 546,985 C554,988 563,990 573,990 L616,990 C614,1001 611,1011 608,1019 C604,1026 600,1032 595,1037 C590,1041 584,1045 578,1046 C571,1048 563,1049 555,1049 C553,1049 551,1049 548,1049 C546,1049 543,1048 541,1048 C539,1047 536,1047 534,1046 C532,1046 531,1045 529,1044 L529,1057 C531,1058 533,1058 536,1059 C538,1060 541,1060 544,1061 C547,1061 551,1061 555,1061 Z M527,920 C527,910 528,902 529,894 C531,886 534,879 537,873 C541,867 546,863 552,860 C558,856 565,855 573,855 C590,855 602,861 609,874 C616,887 620,906 620,931 C620,941 619,949 619,957 C619,965 618,972 617,979 L573,979 C557,979 545,974 537,964 C530,953 527,939 527,920 Z M732,776 L732,811 L744,811 L744,776 L732,776 Z M729,979 L668,979 C667,979 665,979 665,980 C664,980 663,981 663,983 L663,987 C663,988 664,988 664,989 C665,990 666,990 668,990 L741,990 L741,862 L729,862 L729,979 Z M890,1061 C904,1061 916,1059 926,1055 C936,1051 944,1043 950,1033 C956,1023 961,1010 963,994 C966,977 967,957 967,932 C967,919 966,906 965,895 C963,884 960,875 955,867 C951,859 945,853 937,849 C929,845 920,843 908,843 C897,843 887,845 880,849 C872,854 866,859 861,866 C857,873 854,882 852,891 C850,900 849,910 849,920 C849,930 850,939 853,948 C855,956 858,963 863,970 C868,976 874,981 881,985 C889,988 898,990 908,990 L951,990 C949,1001 946,1011 943,1019 C940,1026 935,1032 930,1037 C926,1041 920,1045 913,1046 C906,1048 898,1049 890,1049 C888,1049 886,1049 883,1049 C881,1049 879,1048 876,1048 C874,1047 872,1047 870,1046 C867,1046 866,1045 864,1044 L864,1057 C866,1058 869,1058 871,1059 C873,1060 876,1060 879,1061 C882,1061 886,1061 890,1061 Z M862,920 C862,910 863,902 864,894 C866,886 869,879 873,873 C876,867 881,863 887,860 C893,856 900,855 909,855 C926,855 938,861 944,874 C951,887 955,906 955,931 C955,941 955,949 954,957 C954,965 953,972 952,979 L908,979 C892,979 880,974 873,964 C865,953 862,939 862,920 Z M1198,802 L1198,837 L1210,837 L1210,802 L1198,802 Z M1160,802 L1160,837 L1172,837 L1172,802 L1160,802 Z M1127,990 L1269,990 C1273,990 1278,989 1282,988 C1286,987 1290,985 1293,983 C1297,981 1300,978 1303,974 C1306,970 1308,965 1310,959 C1311,963 1313,967 1315,971 C1318,975 1321,978 1325,981 C1329,983 1333,986 1338,987 C1342,989 1347,990 1352,990 L1360,990 C1362,990 1364,990 1364,989 C1365,988 1365,988 1365,987 L1365,983 C1365,981 1364,980 1364,980 C1363,979 1362,979 1360,979 L1352,979 C1346,979 1341,978 1336,976 C1331,973 1327,970 1324,966 C1320,962 1318,957 1316,952 C1314,946 1313,941 1313,935 L1313,862 L1301,862 L1301,936 C1301,965 1291,979 1269,979 L1127,979 C1097,979 1081,960 1081,921 L1081,901 L1071,901 L1071,921 C1071,944 1076,961 1086,972 C1096,984 1110,990 1127,990 Z M1423,1018 L1423,1053 L1435,1053 L1435,1018 L1423,1018 Z M1385,1018 L1385,1053 L1397,1053 L1397,1018 L1385,1018 Z M1397,979 L1360,979 C1358,979 1357,979 1356,980 C1356,980 1355,981 1355,983 L1355,987 C1355,988 1355,988 1356,989 C1356,990 1358,990 1360,990 L1397,990 C1402,990 1406,989 1410,988 C1414,987 1418,985 1421,983 C1425,981 1428,978 1431,974 C1434,970 1436,965 1438,959 C1439,963 1441,967 1443,971 C1446,975 1449,978 1453,981 C1457,983 1461,986 1466,987 C1470,989 1475,990 1480,990 L1488,990 C1490,990 1492,990 1492,989 C1493,988 1493,988 1493,987 L1493,983 C1493,981 1493,980 1492,980 C1491,979 1490,979 1488,979 L1480,979 C1474,979 1469,978 1464,975 C1459,973 1455,970 1452,965 C1448,961 1446,956 1444,950 C1442,945 1441,939 1441,933 L1441,862 L1430,862 L1430,936 C1430,965 1419,979 1397,979 Z M1597,776 L1597,811 L1609,811 L1609,776 L1597,776 Z M1559,776 L1559,811 L1571,811 L1571,776 L1559,776 Z M1581,979 C1574,979 1567,978 1561,975 C1555,972 1549,968 1545,963 C1540,958 1537,951 1534,943 C1531,935 1530,927 1530,917 C1530,897 1535,881 1544,871 C1552,860 1565,855 1581,855 C1597,855 1609,860 1618,871 C1627,881 1631,897 1631,917 C1631,937 1627,952 1618,963 C1609,974 1597,979 1581,979 Z M1488,990 L1581,990 C1591,990 1600,988 1608,984 C1616,980 1623,975 1628,969 C1633,962 1637,954 1640,945 C1643,936 1644,927 1644,917 C1644,906 1643,896 1640,887 C1637,878 1633,870 1628,864 C1622,857 1615,852 1608,848 C1600,845 1591,843 1581,843 C1571,843 1562,845 1554,848 C1546,852 1539,857 1534,864 C1529,870 1525,878 1522,887 C1519,896 1518,906 1518,917 C1518,930 1520,942 1525,953 C1530,964 1537,973 1545,979 L1488,979 C1487,979 1485,979 1485,980 C1484,980 1483,981 1483,983 L1483,987 C1483,988 1484,988 1484,989 C1485,990 1486,990 1488,990 Z M1668,990 L1773,990 C1777,990 1781,989 1786,988 C1790,987 1793,985 1797,983 C1801,981 1804,978 1807,974 C1810,970 1812,965 1814,959 C1815,963 1816,967 1819,971 C1822,975 1825,978 1829,981 C1833,983 1837,986 1841,987 C1846,989 1851,990 1855,990 L1865,990 C1868,990 1869,990 1869,989 C1870,988 1870,988 1870,987 L1870,983 C1870,981 1870,980 1869,980 C1868,979 1867,979 1865,979 L1856,979 C1850,979 1844,978 1839,975 C1835,973 1830,970 1827,965 C1824,961 1821,956 1820,950 C1818,945 1817,939 1817,933 L1817,776 L1805,776 L1805,936 C1805,965 1794,979 1773,979 L1721,979 L1721,831 L1709,831 L1709,979 L1668,979 L1668,990 Z M1963,776 L1963,811 L1975,811 L1975,776 L1963,776 Z M1966,855 C1975,855 1983,857 1990,860 C1997,863 2003,868 2008,874 C2013,880 2018,887 2021,896 C2025,904 2027,913 2029,923 C2030,927 2031,932 2032,938 C2033,944 2034,949 2035,955 C2036,961 2037,966 2038,970 C2039,975 2040,978 2041,979 L1865,979 C1864,979 1863,979 1862,980 C1861,980 1861,981 1861,983 L1861,987 C1861,988 1861,988 1861,989 C1862,990 1863,990 1865,990 L2056,990 C2055,986 2054,983 2053,979 C2052,975 2051,971 2050,966 C2049,961 2048,955 2047,949 C2045,943 2044,935 2043,926 C2041,915 2039,904 2035,894 C2031,884 2026,875 2019,868 C2013,860 2005,854 1996,850 C1988,845 1977,843 1966,843 C1955,843 1944,845 1936,848 C1927,852 1919,857 1913,863 C1907,869 1902,877 1898,885 C1894,893 1892,901 1891,909 L1903,909 C1904,901 1906,893 1910,886 C1913,879 1918,874 1923,869 C1929,865 1935,861 1943,859 C1950,856 1958,855 1966,855 Z M2218,981 C2209,981 2201,979 2195,976 C2188,973 2183,969 2179,963 C2175,958 2172,951 2170,944 C2168,936 2167,927 2167,918 C2167,909 2168,900 2170,893 C2172,885 2175,878 2179,873 C2183,867 2188,863 2195,860 C2201,857 2209,855 2218,855 C2227,855 2235,857 2241,860 C2247,863 2253,867 2257,873 C2261,878 2264,885 2266,893 C2268,900 2269,909 2269,918 C2269,927 2268,936 2266,944 C2264,951 2261,958 2257,963 C2253,969 2247,973 2241,976 C2235,979 2227,981 2218,981 Z M2218,993 C2229,993 2238,991 2246,987 C2254,983 2260,978 2266,971 C2271,964 2275,956 2277,947 C2280,938 2281,928 2281,918 C2281,908 2280,898 2277,889 C2275,880 2271,872 2266,865 C2260,858 2254,853 2246,849 C2238,845 2229,843 2218,843 C2207,843 2198,845 2190,849 C2182,853 2175,858 2170,865 C2165,872 2161,880 2158,889 C2156,898 2155,908 2155,918 C2155,928 2156,938 2159,947 C2161,956 2165,964 2170,971 C2175,978 2182,983 2190,987 C2198,991 2207,993 2218,993 Z M2357,979 L2328,979 L2328,776 L2316,776 L2316,990 L2357,990 C2359,990 2360,990 2361,989 C2361,988 2361,988 2361,987 L2361,983 C2361,981 2361,980 2360,980 C2359,979 2358,979 2357,979 Z M2377,848 L2449,776 L2434,776 L2362,848 L2377,848 Z M2357,990 L2567,990 L2567,924 C2567,914 2566,904 2563,895 C2561,886 2558,878 2553,871 C2548,864 2541,858 2533,854 C2525,850 2514,848 2502,848 L2438,848 L2509,776 L2493,776 L2421,848 L2421,859 L2504,859 C2519,859 2531,864 2541,874 C2550,885 2555,901 2555,924 L2555,979 L2357,979 C2355,979 2354,979 2353,980 C2352,980 2352,981 2352,983 L2352,987 C2352,988 2352,988 2353,989 C2353,990 2354,990 2357,990 Z M2610,1049 C2607,1049 2604,1049 2601,1048 C2598,1047 2595,1046 2592,1044 L2592,1056 C2593,1057 2595,1058 2597,1059 C2599,1059 2601,1060 2604,1061 C2607,1061 2610,1061 2614,1061 C2628,1061 2638,1055 2644,1043 C2650,1030 2653,1013 2653,991 L2653,862 L2641,862 L2641,991 C2641,1002 2640,1011 2639,1018 C2638,1026 2637,1032 2634,1036 C2632,1041 2629,1044 2625,1046 C2621,1048 2616,1049 2610,1049 Z M2733,979 L2703,979 L2703,776 L2691,776 L2691,990 L2733,990 C2735,990 2736,990 2737,989 C2737,988 2737,988 2737,987 L2737,983 C2737,981 2737,980 2736,980 C2735,979 2734,979 2733,979 Z M2733,990 L2898,990 L2898,924 C2898,914 2897,904 2894,895 C2892,886 2889,878 2884,871 C2879,864 2872,858 2864,854 C2856,850 2845,848 2833,848 L2769,848 L2840,776 L2824,776 L2752,848 L2752,859 L2835,859 C2850,859 2862,864 2872,874 C2881,885 2886,901 2886,924 L2886,979 L2733,979 C2731,979 2730,979 2729,980 C2728,980 2728,981 2728,983 L2728,987 C2728,988 2728,988 2728,989 C2729,990 2730,990 2733,990 Z"
													id="Shape"
												/>
											</g>
											<path
												d="M4090,110 L4286,450 L4482,790 C4502,825 4512,862 4512,899 C4512,937 4502,974 4482,1009 C4462,1043 4435,1071 4402,1090 C4370,1108 4332,1118 4292,1118 L3900,1118 L3507,1118 C3468,1118 3430,1108 3398,1090 C3365,1071 3338,1043 3318,1009 C3298,974 3288,937 3288,899 C3288,862 3298,825 3318,790 L3514,450 L3710,110 C3730,76 3757,48 3790,29 L3790,29 C3823,10 3860,0 3900,0 C3940,0 3977,10 4010,29 L4010,29 C4042,48 4070,76 4090,110 Z M3781,186 C3840,211 3893,247 3938,292 C4026,379 4080,500 4080,634 C4080,768 4026,889 3938,977 C3923,992 3907,1006 3890,1019 L3900,1019 L4292,1019 C4315,1019 4335,1014 4352,1004 C4370,993 4385,978 4396,959 C4407,940 4413,920 4413,899 C4413,879 4407,858 4396,839 L4200,499 L4004,160 C3993,140 3978,125 3960,115 L3960,115 C3943,105 3922,100 3900,100 C3878,100 3857,105 3840,115 L3840,115 C3822,125 3807,140 3796,160 L3781,186 Z M3610,1019 L3610,1019 C3710,1015 3801,973 3867,906 C3937,837 3980,740 3980,634 C3980,528 3937,432 3867,362 C3829,323 3782,293 3730,274 L3600,499 L3404,839 C3393,858 3387,879 3387,899 C3387,920 3393,940 3404,959 C3415,978 3430,993 3447,1004 C3465,1014 3485,1019 3507,1019 L3610,1019 Z"
												id="Shape"
												fill="#FFB142"
											/>
										</g>
									</g>
								</svg>
							</a>
							<a
								href="https://azinro.com"
								className="footer-logo space"
								target="_blank"
							>
								<img src="/static/images/partners/azinro.png" />
							</a>
							<p>
								Organized with {"<love/>"} by{" "}
								<a href="http://hastnama.com" target="_blank">
									Hastnama Creative Solutions
								</a>{" "}
								&{" "}
								<a href="http://azinro.com" target="_blank">
									Azinro
								</a>
								.
							</p>
							<div className="socials">
								<a
									href="https://twitter.com/reactconf_ir"
									target="_blank"
								>
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
								<a href="tel:989129476829" target="_blank">
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
								<a
									href="mailto:info@reactconf.ir"
									target="_blank"
								>
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
								<a
									href="https://blog.reactconf.ir/"
									target="_blank"
								>
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
								<a
									href="https://www.instagram.com/reactconf/"
									target="_blank"
								>
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
								<a
									href="https://github.com/reactconf"
									target="_blank"
								>
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
