import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding-left: 42px;
  padding-right: 115px;
  justify-content: space-between;
`;

export const Category = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 24px;
  cursor: pointer;
`;

export const BarContainer = styled.div`
  padding-left: 22px;
  padding-right: 115px;
`;

export const CategoryBar = styled.div<{ x: number }>`
  background-color: #52734d;
  width: 129px;
  height: 4px;
  border-radius: 4px;
  margin-bottom: 100px;
  transform: translateX(${(props) => props.x}px);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const HiddenTextContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
`;

export const TextContainer = styled.div<{ x: number }>`
  display: flex;
  position: absolute;
  width: 300%;
  transform: translateX(${(props) => props.x}px);
  transition: transform 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
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
