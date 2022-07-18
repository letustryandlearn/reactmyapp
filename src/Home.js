import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
    const [msg, setMessage] = useState("");

    useEffect(() => {
        console.log(" effect")
        axios.get("http://localhost:8888/hello")
            .then((response) => {
                if (response.data) {
                    setMessage(response.data)
                }

            })
    }, [])
    return (
        <>
            <h2>Home page</h2>
            <h1>{msg}</h1>
        </>
    )
}
export default Home