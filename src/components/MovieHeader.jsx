import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/TypoGraphy';
import NavBar from './Navbar'
import { Home} from '@material-ui/icons'
import {Link} from 'react-router-dom';


export default class MovieHeader extends React.Component {

    render() {
        return (
            <div>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <TypoGraphy variant="title"
                                    color="inherit">
                            Movie Dash Board
                            <Link to={"/"}><Home/></Link>
                        </TypoGraphy>
                    </Toolbar>
                    <NavBar/>
                </AppBar>

            </div>

        );
    }
}
