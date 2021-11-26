import React, { useEffect, useState } from "react";
import * as s from "./styled";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  const clientId = process.env.REACT_APP_CLIENT_ID;
  

  const [codeUri, setUri] = useState("");
  useEffect(() => {
    setUri(
      "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=" + clientId + "&redirect_uri=http%3A%2F%2Flocalhost%3A3000&state=naver"
    );
  }, [clientId]);

  return (
    <s.Header>
      <s.Logo>Ah! Review</s.Logo>
      <s.Btns id="naverIdLogin">
        <a className="login" href={codeUri}>
          로그인
        </a>
        <Link to="/post">
          <li className="post">등록하기</li>
        </Link>
      </s.Btns>
    </s.Header>
  );
};

export default Header;
