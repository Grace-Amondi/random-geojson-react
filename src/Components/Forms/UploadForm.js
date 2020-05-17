import React, { Component } from 'react'

export default class UploadForm extends Component {
    render() {
        return (
            <div id="upload">
                <form id="uploadtrainForm">
                    <div className="file-field input-field">
                        <div className="row">
                            <div className="col s12 m6 l6">
                                <div className="btn waves-effect waves-light #0277bd light-blue darken-3"
                                    id="upload_polygon_button">
                                    <span className=" white-text" id="uploadSpan">Upload File<i
                                        className="material-icons right">attach_file</i></span>
                                    <input id="upload_polygon" type="file" accept=".geojson"></input>

                                </div>
                            </div>
                            <div className="col s12 m6 l6">
                                <div className="btn waves-effect waves-light red" id="remove_polygon_button"
                                    style={{ visibility: 'hidden' }}>
                                    <span className="white-text">Remove File<i
                                        className="material-icons right">delete_forever
                                                    </i></span>
                                    <input id="remove_polygon" type="button" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <p style={{ textAlign: 'center' }}>--- OR ---</p>
                    <div className="btn waves-effect waves-light green" id="drawbbox">
                        <span className="white-text" id="drawSpan">DRAW EXTENT</span>
                        <input id="bbox" type="button" />
                    </div>
                </form>
            </div>
        )
    }
}
