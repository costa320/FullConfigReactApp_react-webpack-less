import React, {Component} from 'react';
/* REDUX */

/* Styles */
import App_less from '../assets/styles/less/app.less';
import App_css from '../assets/styles/css/app.css';

export default class App extends Component {

    render() {
        return (
            <div >
                <span className={App_less.color_blue}>HELLO!
                </span>
                <span className={App_css.color_red}>HELLO!
                </span>
            </div>

        );
    }
}