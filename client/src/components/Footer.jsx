import React from 'react';
import {
	CopyrightOutlined,
	GithubOutlined,
	LinkedinOutlined,
} from '@ant-design/icons';
import { Notifications } from './Notifications';

export default function Footer() {
	return (
		<>
			<div className="footer">
				<nav className="footer__socials">
					<a
						href="https://github.com/jdays2/"
						target="_blank"
						className="footer__socials-link">
						<GithubOutlined />
					</a>
					
				</nav>

				<div className="footer__copyright">
					<CopyrightOutlined />
					<span>completely unprotected</span>
				</div>

				<a
						href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%BA-%D0%B3%D0%BE%D1%80%D1%89%D0%B0%D1%80%D0%B8%D0%BA-4a626a273/  "
						target="_blank"
						className="footer__socials-link">
						<LinkedinOutlined />
					</a>
			</div>

			<Notifications />
		</>
	);
}
