import React from "react";

//Images
import { GitHubLogo, GmailLogo, LinkedInLogo } from "assets/images";

export function Footer() {
	return (
		<div className="footer">
			<div className="container-one-third text-center">
				<div className="container-fluid footer-link">
					<img src={GitHubLogo} alt="GitHub Ian Cross" />
					<a
						href="https://github.com/Ian-Cross"
						target="_blank"
						rel="noopener noreferrer">
						<p>GitHub/Ian-Cross</p>
					</a>
				</div>
			</div>
			{/* <div className="container-one-third text-center">
				<div className="container-fluid footer-link">
					<img src={GmailLogo} alt="Email Ian Cross" />
					<a
						href="mailto:contact@iancross.ca"
						target="_blank"
						rel="noopener noreferrer">
						<p>echo Y29udGFjdEBpYW5jcm9zcy5jYQo= | base64 -d</p>
					</a>
				</div>
			</div> */}
			<div className="container-one-third text-center">
				<div className="container-fluid footer-link">
					<img src={LinkedInLogo} alt="LinkedIn Ian Cross" />
					<a
						href="https://www.linkedin.com/in/ian--cross"
						target="_blank"
						rel="noopener noreferrer">
						<p>LinkedIn/Ian-Cross</p>
					</a>
				</div>
			</div>
			<div className="clear-space"></div>
		</div>
	);
}
