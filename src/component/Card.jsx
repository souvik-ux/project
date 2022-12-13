import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, body, linkText, cardImg }) => {
    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            <img src={cardImg} className="card-img-top" height="150" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {body}
                </p>
                <Link to="/forms" className="btn btn-primary">
                    {linkText}
                </Link>
            </div>
        </div>
    )
}

export default Card
