import React, { useState } from 'react';
import styled from 'styled-components';

const Tab = () => {
  const menu = ['감자', '고구마', '카레라이스'];
  const [TabClicked, setTabClicked] = useState(0);

  return (
    <TabContainer>
      <Wrapper>
        {menu.map((menu, index) => {
          return (
            <TabButton
              key={menu}
              id={index}
              onClick={() => {
                setTabClicked(index);
              }}
              isClicked={TabClicked === index ? true : false}
            >
              {menu}
            </TabButton>
          );
        })}
      </Wrapper>
      <TabActiveBar>
        <ActiveLine activeLine={TabClicked} />
      </TabActiveBar>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  margin: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 450px;
  height: 40px;
`;

const TabButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  height: 40px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => (props.isClicked ? 'black' : 'lightgrey')};
  cursor: pointer;
`;

const TabActiveBar = styled.div`
  width: 450px;
  height: 3px;
  background-color: lightgrey;
`;

const ActiveLine = styled.div`
  width: 150px;
  height: 3px;
  background-color: blue;
  transition: all 0.4s ease;
  transform: translateX(calc(100% * ${(props) => props.activeLine}));
`;

export default Tab;
