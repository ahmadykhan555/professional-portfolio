import React from 'react';
import './Footer.scss';
import { AiFillLinkedin, AiFillGithub, AiFillGitlab} from 'react-icons/ai';

const Footer: React.FC<any> = () => {
    return (
        <div className="footer">
            <h4 className="copyright-info">© 2020 All rights reserved</h4>
            <div className="social">
                <a href="https://www.linkedin.com/in/ahmad-yar-khan-709870118/"><AiFillLinkedin/></a>
                <a href="https://github.com/ahmadykhan555"><AiFillGithub/></a>
                <a href="https://gitlab.com/ahmadyarkhan555"><AiFillGitlab/></a>
            </div>
        </div>
    );
}
export default Footer;