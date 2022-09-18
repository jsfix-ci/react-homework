// libraires
import * as React from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import {Button} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {pink, grey} from '@mui/material/colors';
import {POSTS} from "../../utils/constants/routs";

export const MediaCard = ({id, image, date, title, isFavorite}) => {
    return (
        <Card sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <CardMedia component="img" height="140" image={image} alt=""/>
            <CardContent>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {new Date(date).toDateString()}
                </Typography>
                <Typography variant="subtitle1" color="text.primary">
                    {title}
                </Typography>
            </CardContent>
            <CardActions sx={{mt: 'auto'}}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{color: isFavorite ? pink[400] : grey[300]}}/>
                </IconButton>
                <Button component={Link} to={`${POSTS}/${id}`} size="small">
                    Show More
                </Button>
            </CardActions>
        </Card>
    );
};
