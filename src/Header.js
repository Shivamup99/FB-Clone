import React,{useStateValue} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {IconButton} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import "./Header.css"

function Header() {
    const [{user},dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="./img/1.png"  alt="Logo"/>
                <div className="header__input">
                    <SearchIcon />
                    <input  placeholder="Search Facebook" type="text" />
                </div>

            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <SubscriptionsIcon  fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>

            </div>
            
            <div className="header__right">
                <div className="header__info">
                    <PersonOutlineIcon src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>

            </div>
        </div>
    )
}

export default Header
