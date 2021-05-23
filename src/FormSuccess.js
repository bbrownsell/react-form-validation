import React from 'react'
import Image from './image.svg';

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We have received your request</div>
            <img src={Image} alt="success" className="form-img-2" />
        </div>
    )
}

export default FormSuccess
