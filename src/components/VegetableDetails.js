import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import "../css/veggieDetail.css";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";

export default function VegetableDetails() {
    const [vegetable, setVegetable] = useState({});

    const params = useParams();
    const navigate = useNavigate();

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
                    throw new Error("There was an error finding vegetables");
                }

                return response.json();
            })
            .then((vegetables) => {
                let veggieToPrint = vegetables.filter(vegetable => vegetable.id === +params.id);
                if (veggieToPrint.length > 0) {
                    console.log(veggieToPrint[0]);
                    setVegetable(veggieToPrint[0]);
                } else {
                    throw new Error("Vegetable with id:" + params.id + " not found")
                }
            })
            .catch((error) => {
                alert(error);
            })
    }

    return (
        <div className="veggie-wrapper">
            <div className="veggie-detail">
                <img src={vegetable.url}/>
                <h1>{vegetable.name}</h1>
                <p>{vegetable.description}</p>
                <Box>
                    <Button id="go-back" variant="contained" onClick={() => {
                        navigate(-1);
                    }}>GO BACK
                    </Button>
                    <Button variant="contained" onClick={() => {
                    }}>ADD TO LIST {vegetable.price + "€"}
                    </Button>
                </Box>
            </div>
        </div>
    )
        ;
}