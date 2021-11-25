import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding-left: 42px;
  padding-right: 137px;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const Category = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 24px;
  cursor: pointer;
`;

export const HiddenTextContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  /* overflow: hidden; */
`;

export const TextContainer = styled.div<{width: number, x:number}>`
  display: flex;
  position: absolute;
  width: ${(props) => props.width}px;
  transform: translateX(${(props) => props.x}px);
`;

export const Text = styled.div`
  font-size: 24px;
  white-space: pre-wrap;
  margin-bottom: 98px;
  position: relative;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 17px;
`;
