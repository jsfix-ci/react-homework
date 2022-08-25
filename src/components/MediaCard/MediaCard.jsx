// libraires
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

export const MediaCard = ({ image, date, title, isFavorite }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={image} alt="" />
            <CardContent>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {date}
                </Typography>
                <Typography variant="subtitle1" color="text.primary">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: isFavorite ? pink[400] : grey[300] }} />
                </IconButton>
            </CardActions>
        </Card>
    );
};
