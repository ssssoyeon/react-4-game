import React, { useState, useEffect, useRef } from 'react'
import './Game.scss'
import Button from './Button'
const Game = () => {
    const choices = ['✂️', '✊', '✋']


    const [userChoice, setUserChoice] = useState(null)
    const [comChoice, setComChoice] = useState(null)

    const [result, setResult] = useState('')
    const [winCount, setWinCount] = useState(0)


    useEffect(() => {

        if (userChoice !== null) {
            const reandomIndex = Math.floor(Math.random() * choices.length)

            setComChoice(choices[reandomIndex])
        }

    }, [userChoice])


    useEffect(() => {

        if (userChoice && comChoice) {
            if (userChoice == comChoice) {
                setResult("무승부")
            }
            else if (
                (userChoice === '✂️' && comChoice === '✋') ||
                (userChoice === '✊' && comChoice === '✂️') ||
                (userChoice === '✋' && comChoice === '✊')) {
                setResult('사용자 승리')
                setWinCount(prev=>prev+1)
            }
            else{
                setResult('컴퓨터 승리')
            }

        }

    }, [comChoice])

    return (
        <div className='game-container'>
            <div className="choices">

                {choices.map((choice) => (

                    <Button
                        key={choice}
                        className="choice-btn"
                        value={choice}
                        onClick={(value) => setUserChoice(value)}

                    />
                ))}
            </div>
            <div className="results">
                <p>
                    🙋‍♂️사용자: <span>{userChoice || "?"}</span>

                </p>
                <p>
                    🤖컴퓨터: <span>{comChoice || "?"}</span>

                </p>
                <p className="result-text">결과: {result}</p>
                <div className="win-count">🏆승리횟수:{winCount} </div>
            </div>
        </div>
    )
}

export default Game