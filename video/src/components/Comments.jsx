import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';

const Container = styled.div``;
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d3fdf4e-75f4-4e10-8e54-749e36d105f9/d278qgd-08b1d62d-90a0-40a2-b866-e29c5874ef96.png/v1/fill/w_600,h_480,q_80,strp/titan_icon___draft_2_by_sebastianklammer_d278qgd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDgwIiwicGF0aCI6IlwvZlwvN2QzZmRmNGUtNzVmNC00ZTEwLThlNTQtNzQ5ZTM2ZDEwNWY5XC9kMjc4cWdkLTA4YjFkNjJkLTkwYTAtNDBhMi1iODY2LWUyOWM1ODc0ZWY5Ni5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.rC74exf_7oFNC-NSa1Ny93cjgsb7aMSO0bMiAAIG9YI"/>
            <Input placeholder='Add a comment...'/>
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </Container>
  )
}

export default Comments