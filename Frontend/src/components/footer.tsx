import React from 'react';
import { Row, Col } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

export default function PageFooter() {
    return (
        <div className="footer">
            <Row justify="center" align="middle">
                <Col className="footer-col footer-spacing" xs={24} sm={8}>
                    <h6 className="footer-title">Kontakt</h6>
                    <a className="footer-link" href="mailto:liza.kaladjian@study.hs-duesseldorf.de">
                        liza.kaladjian@study.hs-duesseldorf.de
                    </a>
                </Col>
                <Col className="footer-col footer-spacing" xs={24} sm={8}>
                    <h6 className="footer-title">Social Media</h6>
                    <div className="social-links">
                        <a className="footer-link" href="https://www.facebook.com/lizoug.happy/" target="_blank" rel="noopener noreferrer">
                            <FacebookOutlined />
                        </a>
                        <a className="footer-link" href="https://www.instagram.com/lisa.kaladjian/" target="_blank" rel="noopener noreferrer">
                            <InstagramOutlined />
                        </a>
                        <a className="footer-link" href="https://twitter.com/KalaijianL" target="_blank" rel="noopener noreferrer">
                            <TwitterOutlined />
                        </a>
                        <a className="footer-link" href="https://github.com/Lizoug" target="_blank" rel="noopener noreferrer">
                            <GithubOutlined />
                        </a>
                        <a className="footer-link" href="https://www.linkedin.com/in/liza-kaladjian-588aa7235/" target="_blank" rel="noopener noreferrer">
                            <LinkedinOutlined />
                        </a>
                    </div>
                </Col>
                <Col className="footer-col">
                    {/* dynamically display the current year*/}
                    <h6 className="footer-title">© {new Date().getFullYear()} Liza's Project</h6>
                </Col>
            </Row>
        </div>
    );
}
