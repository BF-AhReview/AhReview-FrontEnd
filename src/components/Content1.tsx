import React, { useState } from 'react';
import * as s from './Content1_s';
import * as i from '../assets/index';

const Content1: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const onModal = () => {
        setShowModal(true);
    }

    return (
        <s.Contents>
            <s.Header>
                <s.Logo>Ah! Review</s.Logo>
                <s.Btns>
                    <li className="login" onClick={onModal}>로그인</li>
                    <li className="register">등록하기</li>
                </s.Btns>
            </s.Header>
            {
                showModal ?
                    <s.Background>
                        <s.ModalContainer>
                            <p className="HeaderText">로그인</p>
                            <i.Naver className="Naver" />
                        </s.ModalContainer>
                    </s.Background>
                    : null
            }
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
