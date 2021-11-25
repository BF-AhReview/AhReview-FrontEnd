import { useState } from "react";
import { dodbogi } from "../../assets";
import * as S from "./styled";

const PostStore = () => {

  const [errorMessage,setErrorMessage] = useState("");

  return (
    <S.Background>
      <S.Container>
        <S.Title>등록</S.Title>
        <S.InputContainer>
          <S.Input placeholder="가게 이름을 입력하세요." />
          <S.Dodbogi src={dodbogi} />
        </S.InputContainer>
        <S.ErrorMessage>&nbsp;</S.ErrorMessage>
        <S.InputContainer>
          <S.Input placeholder="가게 위치를 입력하세요." />
          <S.Dodbogi src={dodbogi} />
        </S.InputContainer>
        <S.ErrorMessage>&nbsp;</S.ErrorMessage>
        <S.PostButton>등록하기</S.PostButton>
      </S.Container>
    </S.Background>
  );
};

export default PostStore;
