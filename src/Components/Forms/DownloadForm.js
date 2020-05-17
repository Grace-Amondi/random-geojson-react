import React, { Component } from 'react'

export default class DownloadForm extends Component {
    render() {
        return (
            <div id="download">
                <form>
                    <div className="btn waves-effect waves-light #0277bd light-blue darken-3 pulse disabled"
                        id="downloadButton">
                        <span className="white-text">Download<i
                            className="material-icons right">file_download</i></span>
                        <input id="download" type="button" />
                    </div>
                </form>

            </div>
        )
    }
}
