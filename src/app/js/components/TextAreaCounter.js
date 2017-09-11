import React, {Component} from "react";
import DOM from 'react-dom-factories';

export default class TextAreaCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        };

        this._textChanged = this._textChanged.bind(this);
    }

    _textChanged(ev) {
        this.setState({
            text: ev.target.value
        });
    }

    render() {
        return DOM.div(null, DOM.textarea({
                defaultValue: this.state.text,
                onChange: this._textChanged,
            }),
            DOM.h3(null, "Długość napisu: " + this.state.text.length));
    }

}