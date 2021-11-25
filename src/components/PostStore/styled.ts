import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#feffde, white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: white;
  margin-top: 138px;
  width: 696px;
  height: 766px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.div`
  margin-top: 32px;
  color: #52734d;
  font-size: 32px;
  margin-bottom: 147px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  font-family: "Poppins", "Noto Sans Kr", sans-serif;
  width: 583px;
  padding: 15px 30px 15px 18px;
  /* margin-bottom: 27px; */
  outline: none;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  ::placeholder {
    color: #bababa;
  }
`;

export const Dodbogi = styled.img`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 19px;
  right: 20px;
`;

export const ErrorMessage = styled.div`
  margin-top: 7px;
  margin-bottom: 2px;
  color: red;
`;

export const PostButton = styled.button`
  font-family: "Poppins", "Noto Sans Kr", sans-serif;
  margin-top: 199px;
  border: solid 2px #91c788;
  background-color: white;
  color: #91c788;
  padding: 8px 59px 5px 59px;
  border-radius: 10px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
`;
