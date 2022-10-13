import styled, { createGlobalStyle, css } from 'styled-components';

export const MyGlobalStyle = createGlobalStyle`

:root {
  --black: #181818;
  --gray:#848478;
  --blue: #12122B;
  --white: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    background: var(--blue);
  }
`;