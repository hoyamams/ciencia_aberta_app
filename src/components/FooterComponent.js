import React, { Component } from 'react'
import {enableDismissTrigger} from "bootstrap/js/src/util/component-functions";

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer text-end" >
                    <span className="text-dark" >All Rights Reserved 2021 @Hoy</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent