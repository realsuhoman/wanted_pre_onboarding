import React, { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Wrapper>
      <Active click={clicked}></Active>
      <ToggleBtn click={clicked} onClick={() => setClicked(false)}>
        기본
      </ToggleBtn>
      <ToggleBtn click={clicked} onClick={() => setClicked(true)}>
        상세
      </ToggleBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 3px;
  margin: 10px;
  background-color: #ebebeb;
  width: 400px;
  height: 50px;
  border-radius: 100px;
  z-index: 1;
`;

const Active = styled.div`
  position: absolute;
  width: 200px;
  height: 50px;
  border-radius: 100px;
  background-color: white;
  transition: all 0.4s ease;
  transform: ${(props) => (props.click ? 'translateX(100%)' : 'translateX(0%)')};
  z-index: 2;
`;

const ToggleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  z-index: 3;
`;

export default Toggle;
