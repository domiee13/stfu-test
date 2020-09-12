import React, {useEffect, useState} from 'react';
import {makeStyles, AppBar, IconButton, Toolbar} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
const useStyles = makeStyles((theme) => ({
		root:{
			display:'flex',
			justifyContent:'center',
			alignItems:'center',
			height:'100vh',
		},
    appbar:{
        background: "none",
				padding: '20px',
				fontFamily: 'Luckiest Guy'
		},
		icon:{
			color:"#fff",
			fontSize: '2rem'
		},
		appbarTitle:{
			flexGrow: '1',
			
		},
		appbarWrapper:{
			width:"80%",
			margin:'0 auto'
		},
		colorText:{
			color:"#b300ff"
		},
		container:{
			textAlign:'center',
			fontFamily:'Luckiest Guy',
			fontSize:'3rem'
		},
		title:{
			fontSize: '5rem',
			color:"#fff"
		},
		goDown:{
			color:'#fff',
			fontSize:"3rem"
		}
}));

export default function Header(){
		const classes = useStyles();
		const [checked, setChecked] = useState(false);
		useEffect(() => {
			setChecked(true);
		}, []);
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation = {0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
											 <span className={classes.colorText}>STFU</span> Crew.
										</h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
						<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} 
						collapsedHeight={50}
						>
							<div className={classes.container}>
								<h1 className={classes.title}>Welcome to <br/>  
									<span className={classes.colorText}>STFU.</span> 
								</h1>
								<ExpandMoreIcon className={classes.goDown}/>
							</div>
						</Collapse>
        </div>
    )
}