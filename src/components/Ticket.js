import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
    return (
        <React.Fragment>
            <div onClick={() => props.whenTicketClicked(props.id)}>
                <h3>{props.location} - {props.names}</h3>
                <p><em>{props.issue}</em></p>
                <hr />
            </div>
        </React.Fragment>
    );
}

Ticket.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issue: PropTypes.string,
    id: PropTypes.string,
    whenTicketClicked: PropTypes.func
};

export default Ticket;

// example of PropTypes
// MyExampleComponent.propTypes = {
// exampleArray: PropTypes.array,
// exampleBoolean: PropTypes.bool,
// exampleFunction: PropTypes.func,
// exampleNumber: PropTypes.number,
// exampleObject: PropTypes.object,
// exampleString: PropTypes.string,
// exampleSymbol: PropTypes.symbol,
// exampleReactElement: PropTypes.element,
// exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
// exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),
// exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),
// }