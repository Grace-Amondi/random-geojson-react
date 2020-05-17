import React, { Component } from 'react'

export default class GenerateForm extends Component {
    render() {
        return (
            <div id="generate">
                <form id="generateForm">

                    <select id="geometry" name="geometry" required>
                        <option value="" disabled  >Geometry Type</option>
                        <option value="Point">Point</option>
                        <option value="Line">Line</option>
                        <option value="Polygon">Polygon</option>
                    </select>
                    <div>
                        <p>
                            <input className="with-gap  black-text" type="number" name="pointCount"
                                id="pointCount" placeholder="Number of features" required />
                        </p>

                    </div>
                    <div id="attributeInfo">

                        <select id="variables" name="variable" className="variableClass" multiple>
                            <option disabled>Select Attributes (Optional)</option>
                        </select>

                    </div>

                    <div className="row">
                        <div className="col s12 m6 l6">
                            <div className="btn waves-effect waves-light #0277bd light-blue darken-3"
                                id="generateButton">
                                <input id="generateInput" type="submit" value="GENERATE" />
                            </div>
                        </div>
                        <div className="col s12 m6 l6">
                            <div className="btn waves-effect waves-light red" id="clearButton" style={{ visibility: 'hidden' }}>
                                <span className="white-text" id="clearSpan">CLEAR</span>
                                <input id="clearInput" type="button" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
