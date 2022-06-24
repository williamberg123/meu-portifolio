import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail, SiWhatsapp, SiInstagram } from 'react-icons/si';

import ResumeButton from '../ResumeButton';
import StyledFooter from './styles';

export default function Footer() {
	return (
		<StyledFooter id="footer-contatos">
			<ul>
				<li>
					<a href="mailto:williamberg567@gmail.com" target="_blank" rel="noreferrer">
						<SiGmail /> williamberg567@gmail.com
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/william-diogo/" target="_blank" rel="noreferrer">
						<FaLinkedin /> William Diogo
					</a>
				</li>
				<li>
					<a href="https://github.com/williamberg123/" target="_blank" rel="noreferrer">
						<FaGithub /> williamber123
					</a>
				</li>
				<li>
					<a href="https://api.whatsapp.com/send?phone=5588997830537" target="_blank" rel="noreferrer">
						<SiWhatsapp /> (88) 99783-0537
					</a>
				</li>
				<li>
					<a className="instagram-link" href="https://www.instagram.com/wi_diogo/" target="_blank" rel="noreferrer">
						<SiInstagram /> wi_diogo
					</a>
				</li>
			</ul>
			<ResumeButton />
		</StyledFooter>
	);
}
