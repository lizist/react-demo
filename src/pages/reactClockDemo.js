import React from 'react';

class Clock extends React.Component {
    render() {
        let { onWakeup, onSleep, time } = this.props
        if (time === 9) {
            onWakeup()
        }
        if (time === 21) {
            onSleep()
        }
        return (
            <div>
                clock
            </div>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <Clock
                    time={12}
                    onWakeup={() => {
                        alert('wake up')
                    }}
                    onSleep={
                        () => {
                            alert('sleep')
                        }
                    }
                ></Clock>
            </div>
        )
    }
}

export default App