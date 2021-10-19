import React from 'react';
import NewTicketForm from './NewTicketForm';
import Steps from './Steps';

class StepsControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionsAnswered: false
        };
    }

    handleAnswer = () => {
        this.setState(prevState => ({
            questionsAnswered: !prevState.questionsAnswered
        }));
    };

    render() {
        let currentlyVisibleState = null;
        let buttonYes = false;
        if (this.state.questionsAnswered) {

        }
    }
}