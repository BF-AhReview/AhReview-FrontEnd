import React, { useState, useEffect } from 'react';
import * as s from './styled';
import * as i from '../../assets'

declare global {
    interface Window {
        naver: any;
    }
}

const { naver } = window;

interface User {
    nickname: string;
    image: string;
}

interface Image {
    url: string;
}

const Content1: React.FC = () => {
    const [data, setData] = useState<User>({ nickname: '', image: '' });
    useEffect(CDM, []);

    function CDM() {
        Naver();
        GetProfile();
    }

    function Naver() {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: 'S0OAHuxMBd6gwiSnnys3',
            callbackUrl: 'http://localhost:3000',
            callbackHandle: true,
            loginButton: {
                color: 'black',
                type: 1,
                height: 20,
            }
        });
        naverLogin.init();
    }

    function GetProfile() {
        window.location.href.includes('access_token') && GetUser();

        function GetUser() {
            const location = window.location.href.split('=')[1];
            const loca = location.split('&')[0];
            const header = {
                Authorization: loca,
            };

            fetch('http://27.96.134.100:8080/swagger-ui/index.html', {
                method: 'get',
                headers: header,
            })
                .then((res) => res.json())
                .then((res) => {
                    localStorage.setItem('wtw-token', res.token);
                    setData(res.user);
                });
        }
    }

    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'id': 'jeongtaehwan',
            'password': '1234',
        })
    })
        .then(response => response.json())
        .then(response => {
            if (response.token) {
                localStorage.setItem('wtw-token', response.token);
            }
        })
    return (
        <s.Contents>
            <s.Header>
                <s.Logo>Ah! Review</s.Logo>
                <s.Btns id="naverIdLogin" >
                    <li className="login" onClick={Naver}>로그인</li>
                    <li className="register">등록하기</li>
                </s.Btns>
            </s.Header>
            <s.Main>
                <s.Wrapper>
                    <s.Texts>
                        <p className="MainText">Ah! Review</p>
                        <div className="SubTexts">
                            <div className="SubText"><p className="BoldText">Ah! Review</p>는 소상공인 대상의 악성리뷰,</div>
                            <div className="SubText">악성댓글으로 부터 보호해주는 <p className="BoldTextTwo"> 플랫폼</p>입니다</div>
                        </div>
                    </s.Texts>
                    <i.PlayBtn className="PlayBtn" />
                </s.Wrapper>
                <i.Feedback className="FeedBack" />
            </s.Main>
        </s.Contents >
    );
}

export default Content1;
