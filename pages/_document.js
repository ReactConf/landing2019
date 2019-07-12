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
					<link
						rel="shortcut icon"
						href="/static/images/icon/favicon.ico"
						type="image/x-icon"
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',"GTM-MKF6XHF");`
						}}
					/>
					<noscript
						dangerouslySetInnerHTML={{
							__html: `
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-MKF6XHF
								}"
                            height="0"
                            width="0"
                            style={{display:'none",visibility:"hidden"}}
                        >
                        </iframe>
                    `
						}}
					/>
					<meta charSet="utf-8" />
					<title>
						ReactConf 2019 | Javascript & ReactJS Conference
					</title>
					<meta
						name="google-site-verification"
						content="xyvPYPKo2DCCYlIRzLEqKNFVVLximNJ-QVej3jo0NcE"
					/>
					<meta name="robots" content="index, follow" />
					<meta
						name="description"
						content="First Javascript & ReactJS Conference in IRAN, Algorithm, Data Structure,ReactJS,NodeJS,Graphql and etc…"
					/>
					<meta name="image" content="/static/images/reactconf.jpg" />
					<meta
						itemProp="name"
						content="React Conf | Javascript & ReactJS Conference"
					/>
					<meta
						itemProp="description"
						content="First Javascript & ReactJS Conference in IRAN, Algorithm, Data Structure,ReactJS,NodeJS,Graphql and etc…"
					/>
					<meta
						itemProp="image"
						content="/static/images/reactconf.jpg"
					/>
					<meta name="twitter:card" content="summary" />
					<meta
						name="twitter:title"
						content="React Conf | Javascript & ReactJS Conference"
					/>
					<meta
						name="twitter:description"
						content="First Javascript & ReactJS Conference in IRAN, Algorithm, Data Structure,ReactJS,NodeJS,Graphql and etc…"
					/>
					<meta name="twitter:site" content="@reactconf_ir" />
					<meta
						name="twitter:image:src"
						content="/static/images/icon/apple-touch-icon.png"
					/>
					<meta
						name="og:title"
						content="React Conf | Javascript & ReactJS Conference"
					/>
					<meta
						name="og:description"
						content="First Javascript & ReactJS Conference in IRAN, Algorithm, Data Structure,ReactJS,NodeJS,Graphql and etc…"
					/>
					<meta
						name="og:image"
						content="/static/images/reactconf.jpg"
					/>
					<meta name="og:url" content="http://reactconf.ir" />
					<meta
						name="og:site_name"
						content="React Conf | Javascript & ReactJS Conference"
					/>
					<meta name="og:locale" content="en_US" />
					<meta name="og:type" content="website" />
					<link
						rel="apple-touch-icon"
						href="/static/images/icon/apple-touch-icon.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="57x57"
						href="/static/images/icon/apple-touch-icon-57x57.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="72x72"
						href="/static/images/icon/apple-touch-icon-72x72.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/static/images/icon/apple-touch-icon-76x76.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="114x114"
						href="/static/images/icon/apple-touch-icon-114x114.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="120x120"
						href="/static/images/icon/apple-touch-icon-120x120.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="144x144"
						href="/static/images/icon/apple-touch-icon-144x144.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href="/static/images/icon/apple-touch-icon-152x152.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/static/images/icon/apple-touch-icon-180x180.png"
					/>
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
