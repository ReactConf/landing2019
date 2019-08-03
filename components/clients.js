import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import cx from "classnames";

export default class Clients extends Component {
	render() {
		const {data} = this.props;
		const {name, avatar} = data;
		return (
			<figure className={cx("clients")} key={name}>
				<LazyLoad height={50} offset={50}>
						<div className="clients__avatar">
							<img src={avatar} alt={name} />
						</div>
				</LazyLoad>
			</figure>
		);
	}
}
