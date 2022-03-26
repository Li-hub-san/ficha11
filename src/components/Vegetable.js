import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';
import {useNavigate} from "react-router-dom";

export default function Vegetable(props) {
    const {vegetable} = props;

    const navigate = useNavigate();

    return (
        <Card sx={{maxWidth: 300, maxHeight: 300}} className="vegetable"
              onClick={function () {
                  navigate("/home/" + vegetable.id);
              }}>
            <CardActionArea>
                <CardMedia component="img"
                           height="140"
                           src={vegetable.url}
                           onError={(e) => {
                               e.target.src = "https://sociology.indiana.edu/images/publications/book-cover-placeholder.jpg"
                           }}
                           alt="vegetable image"
                />
            </CardActionArea>
        </Card>
    );
}