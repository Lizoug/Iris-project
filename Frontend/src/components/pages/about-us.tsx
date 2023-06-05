
import { Row, Col } from "antd";
import myImage from "../images/my_pic.jpg";

export function AboutUs() {
    return (
        <div className="babyblue-body">
            <div className="page-container">
                <Row className="title-row">
                    <Col xs={24}>
                        <h2 className="page-h2">About Us</h2>
                    </Col>
                </Row>
                <Row className="content-row" justify={"space-between"}>
                    <Col span={8}>
                        <div className="page-box">
                            <img src={myImage} alt="" className="profile-image" />
                        </div>
                    </Col>
                    <Col span={15}>
                        <div className="page-box">
                            <h3 className="page-h3">Welcome</h3>
                            <p className="page-p">
                                Welcome to my website! I am a data science student at Hochschule Düsseldorf and passionate about improving my skills in coding and developing projects.
                            </p>
                        </div>
                        <div className="page-box">
                            <h3 className="page-h3">Mission</h3>
                            <p className="page-p">
                                My goal is to provide you with the latest insights and tools so that you can also improve your skills in the field of data science.
                            </p>
                        </div>
                        <div className="page-box page-box-text">
                            <h3 className="page-h3">Practical Experience</h3>
                            <p className="page-p">
                                As a student, I know how important practical experience is in our field. That's why I'm working on creating meaningful projects that challenge my skills and allow me to expand my knowledge. My focus is on using data to solve real-world problems and have a positive impact on society.
                            </p>
                        </div>
                        <div className="page-box page-box-text">
                            <h3 className="page-h3">Accessible Learning</h3>
                            <p className="page-p">
                                I believe that learning should be accessible to everyone. That's why I offer free tutorials, resources, and project ideas to make it easier for you to get started on your data science journey. I'm committed to fostering a supportive community where learners of all levels can come together to share their knowledge and insights.
                            </p>
                        </div>
                        <div className="page-box page-box-text">
                            <h3 className="page-h3">Get in Touch</h3>
                            <p className="page-p">
                                Thank you for visiting my website. I hope you find my content helpful and inspiring. If you have any questions or feedback, please don't hesitate to contact me.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
