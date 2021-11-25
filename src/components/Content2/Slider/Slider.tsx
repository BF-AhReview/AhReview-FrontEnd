import * as S from "./styled";
import { useEffect, useRef, useState } from "react";

const Slider = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageText = [
    "감정 파악 기능을 사용하여\n댓글의 감정을 파악해보세요!",
    "원하시는 가게를 선택하고\n신뢰성 높은 리뷰들을 한눈에 볼 수 있습니다!",
    "가게에 대한 리뷰를\n한눈에 쉽고, 빠르게 관리하실 수 있습니다!",
  ];
  const category = ["댓글 감정", "리뷰 확인", "리뷰 관리"];
  const container = useRef<HTMLDivElement>(null);
  const page = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPageIndex(0);
    setContainerTrans();
  }, []);

  useEffect(() => {
    setContainerTrans();
  }, [pageIndex]);

  const setContainerTrans = () => {
    const width = container.current?.clientWidth;
    const x = page.current?.clientWidth;
    if (width !== undefined && x !== undefined) {
      return -width * pageIndex;
    } else {
      return 0;
    }
  };

  const setBarTrans = () => {
    const x = bar.current?.clientWidth;
    if( x !== undefined){
      return (104+x) * pageIndex;
    } else {
      return 0;
    }
  }
  return (
    <div>
      <S.Header>
        {category.map((value, index) => {
          return (
            <S.Category
              key={index}
              color={pageIndex === index ? "#52734d" : "#91c788"}
              onClick={() => setPageIndex(index)}
            >
              {value}
            </S.Category>
          );
        })}
      </S.Header>
      <S.BarContainer>
        <S.CategoryBar x={setBarTrans()} ref={bar}/>
      </S.BarContainer>
      <S.HiddenTextContainer ref={container}>
        <S.TextContainer x={setContainerTrans()} ref={page}>
          {pageText.map((value, i) => {
            return <S.Text key={i}>{value}</S.Text>;
          })}
        </S.TextContainer>
      </S.HiddenTextContainer>
    </div>
  );
};

export default Slider;
