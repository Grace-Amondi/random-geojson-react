import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize'

export default class Navbar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <div>
                <nav className="#0277bd light-blue darken-3">
                    <div className="nav-wrapper">
                        <a href="index.html" className="brand-logo"><i className="material-icons">blur_on</i>Random Geojson</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons ">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="https://github.com/Grace-Amondi/random-geojson" target="_blank" rel="noopener noreferrer" >Github</a></li>

                            <li><a id="menu" className="waves-effect waves-light btn btn-floating #81d4fa light-blue lighten-3"
                            ><i className="material-icons right">help</i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="https://github.com/Grace-Amondi/random-geojson" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a id="menu" className="waves-effect waves-light btn btn-floating #81d4fa light-blue lighten-3"
                    ><i className="material-icons right">help</i></a>
                    </li>
                </ul>
            </div>
        )
    }
}
