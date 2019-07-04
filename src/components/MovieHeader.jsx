import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavBar from './Navbar'
import { Home} from '@material-ui/icons'
import {Link} from 'react-router-dom';


export default class MovieHeader extends React.Component {

    render() {
        return (
            <div>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <Typography variant="title"
                                    color="inherit">
                            Movie Dash Board
                            <Link to={"/"}><Home/></Link>
                        </Typography>
                    </Toolbar>
                    <NavBar/>
                </AppBar>

            </div>

        );
    }
}
