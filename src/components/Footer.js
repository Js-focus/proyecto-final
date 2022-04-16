import React from 'react';
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer>
            
                <p>
                    Hecho por Juan Carlos Maya
                </p>
                <div>
                    <a href="https://www.linkedin.com/in/js-focus/" target='blank'>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Js-focus" target='blank'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UC3jBbdy_KvGe9ajj_8Cjwnw" target='blank'>
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            
        </footer>
    );
};

export default Footer;