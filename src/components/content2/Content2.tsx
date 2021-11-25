import * as S from "./styled";
import { Phone } from "../../assets";
import Pagination from "./Slider/Slider";

const Content2: React.FC = () => {
  return (
    <S.Background>
      <S.Container>
        <S.Phone src={Phone} alt="PhoneImg" />
        <S.ExplainService>
          <S.Title>Service</S.Title>
          <S.Preface>
            저희 <S.FirstEmpasis>Ah! Review</S.FirstEmpasis>는 다양한 리뷰를
            수합해 보여주고,
            <br />
            불건전한 댓글 혹은 악성리뷰를 검열하는 &nbsp;
            <S.SecondEmpasis>착한 리뷰 서비스</S.SecondEmpasis>를 제공합니다.
          </S.Preface>
          <Pagination />
        </S.ExplainService>
      </S.Container>
    </S.Background>
  );
};

export default Content2;
