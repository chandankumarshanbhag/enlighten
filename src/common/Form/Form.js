import React, { Component } from 'react'
import { Formik } from 'formik';

class Form extends Component {
    constructor(props){
        super(props);
        this.undo = this.undo.bind(this);
        this.redo = this.redo.bind(this)
    }
    undo(){
        console.log("undo")
    }
    redo(){
        console.log("redo")
    }
    render () {
        return (
            <Formik {...this.props}>
                {this.props.children}
            </Formik>
        )
    }
}

export default Form