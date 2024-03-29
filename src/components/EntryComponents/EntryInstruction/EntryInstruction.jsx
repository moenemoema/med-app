﻿import React, { useState } from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps, Button, message } from 'antd';
import s from "./entryInstruction.module.css"


const steps = [
    {
        title: 'First...',
        content: 'Find a doctor from the HomePage and you can contact them',
    },
    {
        title: 'Second...',
        content: 'Follow the link below to find our contacts and contact us',
    },
    {
        title: 'Last!',
        content: 'Or you can contact support',
    },
];

const EntryInstruction = () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    return (
        <div id="inst">
            <div className={s.container}>
                <div className={s.main_container}>
                    <div className={s.tag}>
                        <h1 className={s.main_tag}>How to make an appointment  </h1>
                        <p>with a doctor?</p>
                    </div>
                    <div className={s.container_info}>
                        <Steps
                            items={[
                                {
                                    title: 'Register',
                                    status: 'finish',
                                    icon: <UserOutlined />,
                                },
                                {
                                    title: 'Find a Doctor',
                                    status: 'finish',
                                    icon: <SolutionOutlined />,
                                },
                                {
                                    title: 'Describe your health problems...',
                                    status: 'process',
                                    icon: <LoadingOutlined />,
                                },
                                {
                                    title: 'Done',
                                    status: 'wait',
                                    icon: <SmileOutlined />,
                                },
                            ]}
                        />
                        <span className={s.main_tag}>Where can you describe your problems?:</span>
                        <div className={s.container_after}>
                            <Steps current={current} items={items} />
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                                {current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => next()}>
                                        Next
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={() => message.success('Good luck!')}>
                                        Done
                                    </Button>
                                )}
                                {current > 0 && (
                                    <Button
                                        style={{
                                            margin: '0 8px',
                                        }}
                                        onClick={() => prev()}
                                    >
                                        Previous
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default EntryInstruction;