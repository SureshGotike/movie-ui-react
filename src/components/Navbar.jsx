import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'


function NavBar(props){

    return(

    <List component="nav">

        <ListItem component="div">

            <ListItemText>
                <TypoGraphy color={"inherit"} variant="title"> All Movies </TypoGraphy>
            </ListItemText>

            <ListItemText>
                <TypoGraphy color={"inherit"} variant="title"> Telugu Movies </TypoGraphy>
            </ListItemText>

            <ListItemText>
                <TypoGraphy color={"inherit"} variant="title"> English Movies </TypoGraphy>
            </ListItemText>

        </ListItem>

    </List>
    )
}

export default NavBar;