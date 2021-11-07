import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PsychotherapistCard({psychotherapists}) {

    const familyName = psychotherapists.map((name) => {
        return name.family
    });

    const firstName = psychotherapists.map((name) => {
        return name.given
    });

    const prefixName = psychotherapists.map((name) => {
        return name.prefix
    });


    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {psychotherapists.identifier.value}
                </Typography>
                <Typography variant="h5" component="div">
                    {prefixName}
                    {firstName}
                    {familyName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Speichern</Button>
            </CardActions>
        </Card>
    );
}