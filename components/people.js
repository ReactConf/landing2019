import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import cx from "classnames";

export default class People extends Component {
	render() {
		const { name, subject, avatar, socials, bio, className } = this.props;
		return (
			<figure className={cx("people", className)} key={name}>
				<LazyLoad offset={200} height={300} debounce={500}>
					<div className="people__avatar">
						<img src={avatar} alt={name} />
					</div>
				</LazyLoad>

				<figcaption>
					<h3 className="people__name">{name}</h3>
					<p>{subject}</p>
					<p className="people__bio">{bio}</p>
				</figcaption>
			</figure>
		);
	}
}
