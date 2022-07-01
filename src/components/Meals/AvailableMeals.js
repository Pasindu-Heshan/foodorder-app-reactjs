import {Component, useEffect, useState} from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import React from 'react';

class AvailableMeals extends Component {
    // const [meals, setMeals] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [httpError, setHttpError] = useState();

    state = {
        meals: [],
        isLoading: true,
        httpError: ''
    }

    fetchMeals = async () => {
        const response = await fetch(
            "https://react-http-4d6b1-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        const loadedMeals = [];

        for (const key in responseData) {
            loadedMeals.push({
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price,
            });
        }

        await this.setState({meals: loadedMeals});
        await this.setState({isLoading: false});

        this.fetchMeals().catch(async (error) => {
            await this.setState({
                isLoading: false, httpError: error.message
            });
        });
    }

    async componentDidMount() {
        await this.fetchMeals()

        if (this.state.isLoading) {
            return (
                <section className={classes.MealsLoading}>
                    <p>Loading...</p>
                </section>
            );
        }

        if (this.state.httpError) {
            return (
                <section className={classes.MealsError}>
                    <p>{this.state.httpError}</p>
                </section>
            );
        }


    }

    render(){
        let mealsList = null;
        if(this.state.meals !== null){
            mealsList = this.state.meals.map((meal) => (
                <MealItem
                    id={meal.id}
                    key={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}
                />
            ));
        }
        return (
            <section className={classes.meals}>
                <Card>
                    <ul>{mealsList}</ul>
                </Card>
            </section>
        );
    }

}

export default AvailableMeals;
