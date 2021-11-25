import * as S from "./styled";
import { useEffect, useRef, useState } from "react";

interface Pagenation {
  index: number;
  text: string;
}

const Pagination = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageText = [
    "감정 파악 기능을 사용하여\n댓글의 감정을 파악해보세요!",
    "원하시는 가게를 선택하고\n신뢰성 높은 리뷰들을 한눈에 볼 수 있습니다!",
    "가게에 대한 리뷰를\n한눈에 쉽고, 빠르게 관리하실 수 있습니다!",
  ];
  const category = ["댓글 감정", "리뷰 확인", "리뷰 관리"];
  const [categoryActive, onCategoryActive] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const container = useRef<HTMLDivElement>(null);
  const page = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPageNation();
  }, []);

  useEffect(() => {
    setContainerTrans();
  }, [pageIndex]);

  const setPageNation = () => {
    setPageIndex(1);
  };

  const changeIndex = () => {
    console.log(categoryActive);
    onCategoryActive((state) =>
      state.map((item, index) => (index === pageIndex ? !item : item))
    );
  };

  const setContainer = () => {
    const width = container.current?.clientWidth;
    if(width !== undefined){
      return width * 3;
    } else {
      return 0;
    }  
}

  const setContainerTrans = () => {
    const width = container.current?.clientWidth;
    const x = page.current?.clientWidth;
    if( width !== undefined && x !== undefined ) {
      return (-x) * (pageIndex);
    } else {
      return 0;
    }
  }

  return (
    <div>
      <S.Header>
        {category.map((value, i) => {
          return (
            <S.Category
              key={i}
              color={categoryActive ? "#91c788" : "#52734d"}
              ref={page}
              onClick={changeIndex}
            >
              {value}
            </S.Category>
          );
        })}
      </S.Header>
      <S.HiddenTextContainer ref={container}>
        <S.TextContainer width={setContainer()} x={setContainerTrans()} ref={page}>
          {pageText.map((value, i) => {
            return <S.Text key={i}>{value}</S.Text>;
          })}
        </S.TextContainer>
      </S.HiddenTextContainer>
    </div>
  );
};

export default Pagination;
