import * as React from "react";
import * as DOM from "react/lib/ReactDOMFactories";

export default class Sum extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            a: 0,
            b: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        this.setState({
           [ev.target.name]: Number(ev.target.value)
        });
    }

    render() {
        const sum = this.state.a + this.state.b;

        return DOM.div(null,
            <form>
                <label>Liczba a: </label>
                <input type="number" name="a" onChange={this.handleChange} />

                <br />

                <label>Liczba b: </label>
                <input type="number" name="b" onChange={this.handleChange} />

                <br />

                <label>Suma: {sum}</label>
            </form>
        );
    }

}