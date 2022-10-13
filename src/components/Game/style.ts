import styled from "styled-components";

export const Container = styled.div`
  max-width: 390px;
  padding: 5px;
  margin: 15vh auto 0 auto;

  h1 {
    text-transform: uppercase;
    color: white;
    text-align: center;
    margin-bottom: 40px;
  }
`
interface DivsProps {
  columnOrRowWinnerColor: string;
}

export const DivsWrapper = styled.div<DivsProps>`
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

    
    div:nth-of-type(1) {
      color: ${(props) => props.columnOrRowWinnerColor == 'line-1' ||props.columnOrRowWinnerColor == 'column-1' || props.columnOrRowWinnerColor == 'center-left' ? 'green' : ''};
    }

    div:nth-of-type(2) {
      color: ${(props) => props.columnOrRowWinnerColor == 'line-1' ||props.columnOrRowWinnerColor == 'column-2' ? 'green' : ''};
    }
    
    div:nth-of-type(3) {
      color: ${(props) => props.columnOrRowWinnerColor == 'line-1' || props.columnOrRowWinnerColor == 'column-3' || props.columnOrRowWinnerColor == 'center-right' ? 'green' : ''};
    }

    div:nth-of-type(4) {
      color: ${(props) => props.columnOrRowWinnerColor == 'line-2' || props.columnOrRowWinnerColor == 'column-1' ? 'green' : ''};
    }

    div:nth-of-type(5) {
      color: ${(props) => props.columnOrRowWinnerColor == 'line-2' || props.columnOrRowWinnerColor == 'column-2' || props.columnOrRowWinnerColor == 'center-left' || props.columnOrRowWinnerColor == 'center-right' ? 'green' : ''};
    }

    div:nth-of-type(6) {
      color: ${(props) => props.columnOrRowWinnerColor == 'line-2' || props.columnOrRowWinnerColor == 'column-3' ? 'green' : ''};
    }

    div:nth-of-type(7) {
      color: ${(props) => props.columnOrRowWinnerColor == 'line-3' || props.columnOrRowWinnerColor == 'column-1' || props.columnOrRowWinnerColor == 'center-right' ? 'green' : ''};
    }

    div:nth-of-type(8) {
      color: ${(props) => props.columnOrRowWinnerColor == 'line-3' || props.columnOrRowWinnerColor == 'column-2' ? 'green' : ''};
    }

    div:nth-of-type(9) {
      color: ${(props) => props.columnOrRowWinnerColor == 'line-3' || props.columnOrRowWinnerColor == 'column-3' || props.columnOrRowWinnerColor == 'center-left' ? 'green' : ''};
    }

/* columns */
`
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
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
  height: 40px;
  cursor: pointer;
  display: ${(props) => props.Apptt != '' ? 'none' : 'block'};
`