import React from 'react';
import NewTicketForm from './NewTicketForm';

class StepsControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionsAnswered: false,
            q1Answered: false,
            q2Answered: false,
            q3Answered: false
        };
    }

    handleAnswer = () => {
        this.setState(prevState => ({
            questionsAnswered: !prevState.questionsAnswered
        }));
    };

    handleQ1Answer = () => {
        this.setState(prevState => ({
            q1Answered: !prevState.q1Answered
        }));
    }

    handleQ2Answer = () => {
        this.setState(prevState => ({
            q2Answered: !prevState.q2Answered
        }));
    }

    handleQ3Answer = () => {
        this.setState(prevState => ({
            q3Answered: !prevState.q3Answered
        }));
    }

    render() {
        let currentlyVisibleQuestion = null;
        let buttonHandle = null;
        if (!this.state.q1Answered) {
            currentlyVisibleQuestion = <h3>Have you gone through all the steps on the Learn How to Program debugging lesson?</h3>;
            buttonHandle = this.handleQ1Answer;
        } else if (!this.state.q2Answered) {
            currentlyVisibleQuestion = <h3>Have you asked another pair for help?</h3>;
            buttonHandle = this.handleQ2Answer;
        } else if (!this.state.q3Answered) {
            currentlyVisibleQuestion = <h3>Have you spent 15 minutes going through through the problem documenting every step?</h3>;
            buttonHandle = this.handleQ3Answer;
        } else if (!this.state.questionsAnswered) {
            currentlyVisibleQuestion = <NewTicketForm />;
            buttonHandle = this.handleAnswer;
        }

        return (
            <React.Fragment>
                {currentlyVisibleQuestion}
                <button onClick={buttonHandle}>Yes</button>
            </React.Fragment>
        );
    }
}

export default StepsControl;