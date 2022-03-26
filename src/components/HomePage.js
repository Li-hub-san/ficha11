import {useEffect, useState} from "react";
import Vegetable from "./Vegetable";
import "../css/homePage.css"

export default function HomePage() {
    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        fectchVegetables();
    }, []);

    function fectchVegetables() {
        fetch("/backend.json", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("There was an error finding books");
                }

                return response.json();
            })
            .then((parsedResponse) => {
                setVegetables(parsedResponse)
            })
            .catch((error) => {
                alert(error);
            })
    }

    return (
        <div className="veggie-wrapper">
            <div className="veggie">
                {vegetables.map(function (vegetable, index) {
                    return (
                        <Vegetable key={vegetable.id} vegetable={vegetable}/>
                    )
                })}
            </div>
        </div>
    );
}