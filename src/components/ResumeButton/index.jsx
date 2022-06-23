import { FaFileDownload } from 'react-icons/fa';
import StyledResumeButton from './styles';

import resumeSource from '../../downloads/curriculo.pdf';

export default function ResumeButton() {
	return (
		<StyledResumeButton href={resumeSource} download>
			CV - William Diogo
			<FaFileDownload />
		</StyledResumeButton>
	);
}
