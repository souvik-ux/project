import axios from 'axios';
import React, { useState } from 'react'

const Forms = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const formSubmit = async (e) => {
        e.preventDefault();
        await axios.get("https://api.agify.io/?name=" + name)
            .then(resp => {
                setAge(resp.data.age);
            })
        await axios.get("https://api.genderize.io?name=" + name)
            .then(resp => {
                setGender(resp.data.gender);
            })
    }

    const formReset = (e) => {
        e.preventDefault();
        setName("");
        setAge("");
        setGender("");
    }
    return (
        <div>
            <form onSubmit={formSubmit} onReset={formReset}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name" type="text" name="name" id="name" />
                <input type="submit" value="Check" />
                <input type="reset" value="Reset" />
            </form>
            {
                age !== "" &&
                <>
                    <p>Your age : {age}</p>
                    <p>Your Gender : {gender}</p>
                </>
            }
        </div>
    )
}

export default Forms
