import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #fff;
  margin: .25rem 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`

type Props = {
  title: string;
  onClick(): void;
}

const Button = (props: Props) => {
  return (
    <button {...props}>{props.title}</button>
  );
};

export default (props: Props) => <StyledButton as={Button} {...props} />;