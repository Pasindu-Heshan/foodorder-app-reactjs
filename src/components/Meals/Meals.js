import React, {Component, Fragment} from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

class Meals extends Component {

    render() {
        return <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>;
    }
}

export default Meals;
