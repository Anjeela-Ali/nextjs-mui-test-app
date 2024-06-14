import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({
    title,
    description
}:{
    title:string,
    description:string
}) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius:'20px', background:'' }}>
      <CardMedia
        sx={{ height: 240, margin:'10px', borderRadius:'20px'}}
        image="/card.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div" sx={{
            fontFamily:'Basement Grotesque',
            fontSize:'18px'
        }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{
            color:"#EFEFEF"
        }}>
          {description}
        </Typography>
      </CardContent>
     
    </Card>
  );
}
