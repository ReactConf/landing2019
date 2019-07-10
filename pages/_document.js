import Document, { Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";

class SiteDocument extends Document {
	render() {
		// const sheet = new ServerStyleSheet();
		// const main = sheet.collectStyles(<Main />);
		// const styleTags = sheet.getStyleElement();
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="robots" content="index, follow" />

					<meta name="msapplication-TileColor" content="#6759FF" />
					<meta name="theme-color" content="#6759FF" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					{/* {styleTags} */}
				</Head>
				<body>
					<div id="root">
						<Main />
					</div>
					<NextScript />
				</body>
			</html>
		);
	}
}

export default SiteDocument;
