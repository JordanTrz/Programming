import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//#region classes
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => props.type === "sm" ? "10px" : "25px"};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => props.type === "sm" ? "130px" : "202px"};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "8px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

//#endregion

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <Image type={type} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pfchvFfM0SCPLT_bQuKROyyRn5N3u1fmN_mWANn2p9pv3uUvKty1dEbQXIf4_HqzfC4&usqp=CAU" />
        <Details type={type}>
          <ChannelImage type={type} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d3fdf4e-75f4-4e10-8e54-749e36d105f9/d278qgd-08b1d62d-90a0-40a2-b866-e29c5874ef96.png/v1/fill/w_600,h_480,q_80,strp/titan_icon___draft_2_by_sebastianklammer_d278qgd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDgwIiwicGF0aCI6IlwvZlwvN2QzZmRmNGUtNzVmNC00ZTEwLThlNTQtNzQ5ZTM2ZDEwNWY5XC9kMjc4cWdkLTA4YjFkNjJkLTkwYTAtNDBhMi1iODY2LWUyOWM1ODc0ZWY5Ni5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.rC74exf_7oFNC-NSa1Ny93cjgsb7aMSO0bMiAAIG9YI" />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Clone</ChannelName>
            <Info>660,908 views - 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;