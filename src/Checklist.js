import React, { useState } from 'react'
import { Fireworks } from 'fireworks/lib/react'
import Confetti from './Confetti'

const Checklist = () => {
    const [showFireworks, setShowFireworks] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)

    const handleInputClicked = () => {
        setShowFireworks(true)
        setTimeout(() => setShowFireworks(false), 1000)
    }
    const fxProps = {
        count: 3,
        interval: 200,
        colors: ['#5edbc6', '#dbd95e', '#d95edb'],
        calc: (props, i) => ({
            ...props,
            x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
            y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
        })
    }
    return (
        <>
            {showFireworks && <Fireworks {...fxProps} />}
            {showConfetti && <Confetti />}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column" }}>
                <div style={{ marginTop: "12px" }}>
                    <input type="checkbox" id="service" onClick={handleInputClicked} />
                    <label>Deprecate legacy counters service</label>
                </div>
                <div style={{ marginTop: "12px" }}>
                    <input type="checkbox" id="worker" onClick={handleInputClicked} />
                    <label>Deprecate legacy counters worker</label>
                </div>

                <div style={{ marginTop: "12px" }}>
                    <input type="checkbox" id="redis" onClick={() => setShowConfetti(true)} />
                    <label>Deprecate legacy counters redis</label>
                </div>
            </div>
        </>
    )
}

export default Checklist