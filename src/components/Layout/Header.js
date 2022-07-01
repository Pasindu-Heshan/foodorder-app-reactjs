import React, {Component, Fragment} from "react";
import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

class Header extends Component{
    render() {
        return <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={this.props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A tablle full of delicious food!' />
            </div>
        </Fragment>
    }
}

export default Header;