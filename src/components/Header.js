import React from 'react'
import propTypes from "prop-types"

// (props) => props.title, props.name, props.gender
// {title, name, gender} => title, name, gender

function Header({ title, name, birthYear }) {
    return (
        <div>
            <h1>Welcome to {title} {name}, you are {2021 - birthYear} years</h1>
        </div >
    )
}

Header.defaultProps = {
    name: "User"
}

Header.propTypes = {
    title: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    birthYear: propTypes.number.isRequired
}

const headerStyle = {
    color: "red",
    background: "#00FF00"
}

export default Header