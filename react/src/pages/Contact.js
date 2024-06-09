import React, { useEffect, useState } from "react";


const Contact = () => {
    
    const [data, setData] = useState([{}]);

    useEffect(() => {
    fetch("http://localhost:8025/data")
        .then((response) => response.json())
        .then((data) => {
        console.log(data)
        setData(data)
        });
    }, []);

    return (
    <div>
        <h1>Contact</h1>
        {( typeof data.users == "undefined" ) ? (
            <p>Loading..</p> 
        ) : (
            data.users.map((user, i) => (
                <p key="{i}">{i} {user}</p>
            )
            )
        )}
    </div>
    );
};

export default Contact;
