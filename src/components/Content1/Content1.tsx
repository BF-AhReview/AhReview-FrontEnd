import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import * as s from "./styled";
import * as i from "../../assets";

interface User {
  nickname: string;
  image: string;
}

const Content1: React.FC = () => {
  const [data, setData] = useState<User>({ nickname: "", image: "" });

  return (
    <s.Contents>
      <Header />
      <s.Main>
        <s.Wrapper>
          <s.Texts>
            <p className="MainText">Ah! Review</p>
            <div className="SubTexts">
              <div className="SubText">
                <p className="BoldText">Ah! Review</p>는 소상공인 대상의
                악성리뷰,
              </div>
              <div className="SubText">
                악성댓글으로 부터 보호해주는{" "}
                <p className="BoldTextTwo"> 플랫폼</p>입니다
              </div>
            </div>
          </s.Texts>
          <i.PlayBtn className="PlayBtn" />
        </s.Wrapper>
        <i.Feedback className="FeedBack" />
      </s.Main>
    </s.Contents>
  );
};

export default Content1;
