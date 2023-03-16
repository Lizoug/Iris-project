import { Menu, Row, Col, Divider } from "antd";
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';



export function PageHeader2() {
    return (
        <div className="header">
            <Row align="middle">
                <Col span={12}>
                    <div className="header__logo">
                        <a href="#">
                            <img src="https://countryroadsmagazine.com/downloads/12278/download/isi-web.jpg?cb=09a504f17c004fecc03f38f2797b02c3&w=1050&h=" alt="Header Image" />
                        </a>
                    </div>
                </Col>
                <Col span={12}>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">Home</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/About-Us" className="header__nav-link">About Us</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/Analysis" className="header__nav-link">Analysis</a>
                            </li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </div>
    );
}



const items: MenuProps['items'] = [
    {
        label:
            <a href="/">
                Home
            </a>,

        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label:
            <a href="/About-us">
                About us
            </a>,
        key: 'app',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Analysis',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label:
                            <a href="Analysis/Iris-flower">
                                Iris flower
                            </a>,
                        key: 'setting:1',
                    }
                ],
            },
        ],
    }
];

export function  PageHeader() {

    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div>
            <Row>
                <Col>
                    <h1 className={"title"}>
                        Iris Flower
                    </h1>
                </Col>
                <Col>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </Col>
            </Row>
        </div>
    )
};