import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  gap: 10px;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d3fdf4e-75f4-4e10-8e54-749e36d105f9/d278qgd-08b1d62d-90a0-40a2-b866-e29c5874ef96.png/v1/fill/w_600,h_480,q_80,strp/titan_icon___draft_2_by_sebastianklammer_d278qgd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDgwIiwicGF0aCI6IlwvZlwvN2QzZmRmNGUtNzVmNC00ZTEwLThlNTQtNzQ5ZTM2ZDEwNWY5XC9kMjc4cWdkLTA4YjFkNjJkLTkwYTAtNDBhMi1iODY2LWUyOWM1ODc0ZWY5Ni5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.rC74exf_7oFNC-NSa1Ny93cjgsb7aMSO0bMiAAIG9YI" />
      <Details>
        <Title>
          Kyara <Date>3 days ago</Date>
        </Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim
          saepe modi similique quisquam ipsa repudiandae placeat ipsum quae quis
          cumque unde recusandae odio ratione, consequatur, rem totam expedita.
          Repellendus.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
