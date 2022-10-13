import styled from "styled-components";

export const Container = styled.div`
  max-width: 390px;
  padding: 5px;
  margin: 5vh auto 0 auto;
`
export const DivsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    div {
      color: var(--white);
      font-size: 128px;
      font-family: 'Fuzzy Bubbles', cursive, sans-serif;
      background: var(--gray);
      width: 120px;
      height: 120px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`
interface ButtonProps {
  Apptt: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: var(--black);
  color: white;
  border: none;
  border-radius: 4px;
  width: 150px;
  height: 80px;
  cursor: pointer;
  display: ${(props) => props.Apptt != '' ? 'none' : 'block'};
`