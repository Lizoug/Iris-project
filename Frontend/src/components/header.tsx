import { Menu, Row, Col } from "antd";
import React, { useState} from 'react';
import { HomeOutlined, DotChartOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';


const items: MenuProps['items'] = [
    {
        label:
            <a href="/">
                Home
            </a>,
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label:
            <a href="/About-us">
                About us
            </a>,
        key: '/About-us',
        icon: <UserOutlined />,
    },
    {
        label: 'Analysis',
        key: 'SubMenu',
        icon: <DotChartOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label:
                            <a href="/Analysis/Iris-flower">
                                Overview
                            </a>,
                        key: '/Iris-flower',
                    }
                ],
            },

            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label:
                            <a href="/Analysis/FlowerPredictor">
                                Flower prediction
                            </a>,
                        key: '/interactive',
                    }
                ],
            },

        ],
    }
];

export function  PageHeader() {

    const [current, setCurrent] = useState(window.location.pathname);

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    return (
        <div className="header">
            <Row>
                <Col className="header-tabs" span={24}>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </Col>
            </Row>
        </div>
            )
};
