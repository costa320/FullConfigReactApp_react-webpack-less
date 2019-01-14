import React, {Component} from 'react';
/* COMPONENTS */

/* Styles */
import L, {mainContainer} from '../../assets/styles/less/views/HomePage.less';
import '../../assets/styles/sass/homePage.scss';
import '../../assets/styles/sass/homePage1.scss';

export default class HomePage extends Component {

    render() {
        return (
            <div className="">
                <div id='COMPONENT'>
                    <span className={'mainContainer_ '}>Colore rosso</span>
                </div>
                <span className={'mainContainer_ '}>Colore Verde</span>
            </div>
        );
    }
}