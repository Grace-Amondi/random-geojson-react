import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize'
import UploadForm from "./Forms/UploadForm";
import GenerateForm from "./Forms/GenerateForm";
import DownloadForm from './Forms/DownloadForm';

export default class Sidebar extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.tabs');
            var elem = document.querySelector('select')
            M.Tabs.init(elems, {});
            M.FormSelect.getInstance(elem);
        });
    }

    render() {
        return (
            <div className="card #81d4fa light-blue lighten-1">
                <div className="card-content black-text">
                    <h5>Generate Random Geojson Data</h5>
                    <p>A tool for creating random point,line or polygon geojson data within a user-defined polygon
                        </p>
                </div>
                <div className="card-tabs ">
                    <ul className="tabs tabs-fixed-width tabs-transparent ">
                        <li className="tab"><a className="active" href="#upload">Upload</a></li>
                        <li className="tab"><a href="#generate">Generate</a></li>
                        <li className="tab"><a href="#download">Download</a></li>
                    </ul>
                </div>
                <div className="card-content #81d4fa light-blue lighten-3">
                    <UploadForm />
                    <GenerateForm />
                    <DownloadForm/>
                    
                </div>
            </div>
        )
    }
}
