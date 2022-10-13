import { useEffect, useState } from "react";
import { Button, ButtonsWrapper, Container, DivsWrapper } from "./style";

export function Game() {
  const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const [typeUser, setTypeUser] = useState('')
  const [plays, setPlays] = useState(['', '', '',
                                      '', '', '',
                                      '', '', ''])
                                   
  const [gameState,setGameState] = useState('playng')
  const [winner, setWinner] = useState('')
  const [columnOrRowWinnerColor, setColumnOrRowWinnerColor] = useState('')

  interface GameMessegeProps {
    playng: string;
    win: string;
    Atie: string;
  }

  const gameMessege: GameMessegeProps = {
    playng : '',
    win: 'Vencedor',
    Atie: 'Empatou'
  }

  function verifyWin() {
    if(plays[0] != '' && plays[1] != '' && plays[0] == plays[1] && plays[2] != '' && plays[1] == plays[2]) {
      setGameState('win')
      setWinner(plays[0] && plays[1] && plays[2] == 'X' ? 'X' : 'O')
      setColumnOrRowWinnerColor('line-1')
      setTimeout(()=> {setPlays(['', '', '','', '', '','', '', '']),setGameState('playng'),setTypeUser(''),setWinner(''),setColumnOrRowWinnerColor('')},3000)
    } else if(plays[3] != '' && plays[4] != '' && plays[3] == plays[4] && plays[5] != '' && plays[4] == plays[5]) {
      setGameState('win')
      setWinner(plays[3] && plays[4] && plays[5] == 'X' ? 'X' : 'O')
      setColumnOrRowWinnerColor('line-2')
      setTimeout(()=> {setPlays(['', '', '','', '', '','', '', '']),setGameState('playng'),setTypeUser(''),setWinner(''),setColumnOrRowWinnerColor('')},3000)
    } else if(plays[6] != '' && plays[7] != '' && plays[6] == plays[7] && plays[8] != '' && plays[6] == plays[8]) {
      setGameState('win')
      setWinner(plays[6] && plays[7] && plays[8] == 'X' ? 'X' : 'O')
      setColumnOrRowWinnerColor('line-3')
      setTimeout(()=> {setPlays(['', '', '','', '', '','', '', '']),setGameState('playng'),setTypeUser(''),setWinner(''),setColumnOrRowWinnerColor('')},3000)
    } else if(plays[0] != '' && plays[3] != '' && plays[0] == plays[3] && plays[6] != '' && plays[3] == plays[6]) {
      setGameState('win')
      setWinner(plays[0] && plays[3] && plays[6] == 'X' ? 'X' : 'O')
      setColumnOrRowWinnerColor('column-1')
      setTimeout(()=> {setPlays(['', '', '','', '', '','', '', '']),setGameState('playng'),setTypeUser(''),setWinner(''),setColumnOrRowWinnerColor('')},3000)
    } else if(plays[1] != '' && plays[4] != '' && plays[1] == plays[4] && plays[7] != '' && plays[4] == plays[7]) {
      setGameState('win')
      setWinner(plays[1] && plays[4] && plays[7] == 'X' ? 'X' : 'O')
      setColumnOrRowWinnerColor('column-2')
      setTimeout(()=> {setPlays(['', '', '','', '', '','', '', '']),setGameState('playng'),setTypeUser(''),setWinner(''),setColumnOrRowWinnerColor('')},3000)
    } else if(plays[2] != '' && plays[5] != '' && plays[2] == plays[5] && plays[8] != '' && plays[5] == plays[8]) {
      setGameState('win')
      setWinner(plays[2] && plays[5] && plays[8] == 'X' ? 'X' : 'O')
      setColumnOrRowWinnerColor('column-3')
      setTimeout(()=> {setPlays(['', '', '','', '', '','', '', '']),setGameState('playng'),setTypeUser(''),setWinner(''),setColumnOrRowWinnerColor('')},3000)
    } else if(plays[0] != '' && plays[4] != '' && plays[0] == plays[4] && plays[8] != '' && plays[4] == plays[8]) {
      setGameState('win')
      setWinner(plays[0] && plays[4] && plays[8] == 'X' ? 'X' : 'O')
      setColumnOrRowWinnerColor('center-left')
      setTimeout(()=> {setPlays(['', '', '','', '', '','', '', '']),setGameState('playng'),setTypeUser(''),setWinner(''),setColumnOrRowWinnerColor('')},3000)
    } else if(plays[6] != '' && plays[4] != '' && plays[6] == plays[4] && plays[2] != '' && plays[4] == plays[2]) {
      setGameState('win')
      setWinner(plays[6] && plays[4] && plays[2] == 'X' ? 'X' : 'O')
      setColumnOrRowWinnerColor('center-right')
      setTimeout(()=> {setPlays(['', '', '','', '', '','', '', '']),setGameState('playng'),setTypeUser(''),setWinner(''),setColumnOrRowWinnerColor('')},3000)
    } else {
      if(plays[0] && plays[2] && plays[3] && plays[4] && plays[5] && plays[6] && plays[7] && plays[8] != '') {
        setGameState('Atie')
        setTimeout(()=> {setPlays(['', '', '','', '', '','', '', '']),setGameState('playng'),setTypeUser(''),setWinner(''),setColumnOrRowWinnerColor('')},3000)
      }
    }
  }

  useEffect( () => {
    verifyWin()
    console.log(columnOrRowWinnerColor)
  },[plays, typeUser])

  return (
    <Container>
      <h1>{gameMessege[gameState]}  {winner}</h1>
      <DivsWrapper columnOrRowWinnerColor={columnOrRowWinnerColor}>
        {keys.map(key => <div key={key} onClick={() => {
          switch (key) {
            case 0:
              if (plays[0] == '' && gameState == 'playng') {
                setPlays([typeUser, plays[1], plays[2], plays[3], plays[4], plays[5], plays[6], plays[7], plays[8]])
                setTypeUser(typeUser == 'X' ? 'O' : 'X')
              }
              break;

            case 1:
              if (plays[1] == '' && gameState == 'playng') {
                setPlays([plays[0], typeUser, plays[2], plays[3], plays[4], plays[5], plays[6], plays[7], plays[8]])
                setTypeUser(typeUser == 'X' ? 'O' : 'X')
              }
              break;

            case 2:
              if (plays[2] == '' && gameState == 'playng') {
                setPlays([plays[0], plays[1], typeUser, plays[3], plays[4], plays[5], plays[6], plays[7], plays[8]])
                setTypeUser(typeUser == 'X' ? 'O' : 'X')
              }
              break;

            case 3:
              if (plays[3] == '' && gameState == 'playng') {
                setPlays([plays[0], plays[1], plays[2], typeUser, plays[4], plays[5], plays[6], plays[7], plays[8]])
                setTypeUser(typeUser == 'X' ? 'O' : 'X')
              }
              break;

            case 4:
              if (plays[4] == '' && gameState == 'playng') {
                setPlays([plays[0], plays[1], plays[2], plays[3], typeUser, plays[5], plays[6], plays[7], plays[8]])
                setTypeUser(typeUser == 'X' ? 'O' : 'X')
              }
              break;

            case 5:
              if (plays[5] == '' && gameState == 'playng') {
                setPlays([plays[0], plays[1], plays[2], plays[3], plays[4], typeUser, plays[6], plays[7], plays[8]])
                setTypeUser(typeUser == 'X' ? 'O' : 'X')
              }
              break;

            case 6:
              if (plays[6] == '' && gameState == 'playng') {
                setPlays([plays[0], plays[1], plays[2], plays[3], plays[4], plays[5], typeUser, plays[7], plays[8]])
                setTypeUser(typeUser == 'X' ? 'O' : 'X')
              }
              break;

            case 7:
              if (plays[7] == '' && gameState == 'playng') {
                setPlays([plays[0], plays[1], plays[2], plays[3], plays[4], plays[5], plays[6], typeUser, plays[8]])
                setTypeUser(typeUser == 'X' ? 'O' : 'X')
              }
              break;

            case 8:
              if (plays[8] == '' && gameState == 'playng') {
                setPlays([plays[0], plays[1], plays[2], plays[3], plays[4], plays[5], plays[6], plays[7], typeUser])
                setTypeUser(typeUser == 'X' ? 'O' : 'X')
              }
              break;
          }
          console.log(plays)

        }}>{plays[key]}</div>)}
      </DivsWrapper>

      <ButtonsWrapper>
        <Button onClick={() => { setTypeUser('X')}} Apptt={typeUser}>
          Jogar com X
        </Button>

        <Button onClick={() => { setTypeUser('O')}} Apptt={typeUser}>
          Jogar com O
        </Button>
      </ButtonsWrapper>
    </Container>
  );
}