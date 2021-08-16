import React from 'react';
import axios from 'axios'

async function getUser() {
    const res = await axios.get('https://randomuser.me/api');
    const username = await res.data.results[0].login.username;
    return username;
}

function User() {
    return (
        <div>
            <table>
                <tr>
                    <td>Username</td>
                    <td>{getUser()}</td>
                </tr>
            </table>
        </div>
    )
}

export default User
