import React from 'react';
import * as s from './styled';
import * as i from '../../assets/index';

const Content3: React.FC = () => {
    return (
        <s.Contents>
            <s.Main>
                <s.Wrapper>
                    <s.Texts>
                        <p className="MainText">LET'S DO IT!</p>
                        <div className="SubTexts">
                            <div className="SubText"><p className="BoldText">Ah! Review</p>에서 가게를 등록하고 좋은 리뷰를 받아보세요.</div>
                            <div className="SubText">다양한 인공지능들이 소상공인 여러분을 환영합니다!</div>
                        </div>
                    </s.Texts>
                    <i.PlayBtn className="PlayBtn" />
                </s.Wrapper>
                <i.Business className="Business" />
            </s.Main>
            <s.Footer>
                <a href="https://github.com/BF-AhReview"><i.Github className="Github" /></a>
                <p className="copylight">Copyright© BF</p>
            </s.Footer>
        </s.Contents>
    );
}

export default Content3;