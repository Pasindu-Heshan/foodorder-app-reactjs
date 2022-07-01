import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import React, {Component, useRef, useState} from "react";

class MealItemForm extends Component{
  // const [amountIsValid, setAmountIsValid] = useState(true);
  // const amountInputRef = useRef();

  state = {
      amountIsValid: true,
      amountInputRef: ''
  }

    handleChange = async (e) => {
        const {name, value} = e.target;
        await this.setState({
            [name]: value,
        })
    };


   submitHandler = async (event) => {
       event.preventDefault();

       const enteredAmount = this.state.amountInputRef;
       const enteredAmountNumber = +enteredAmount;

       if (
           enteredAmount.trim().length === 0 ||
           enteredAmountNumber < 1 ||
           enteredAmountNumber > 5
       ) {
           await this.setState({amountIsValid: false});
           return;
       }

       this.props.onAddToCart(enteredAmountNumber);

   }

    render() {
        return (
            <form className={classes.form} onSubmit={this.submitHandler}>
                <Input
                    onChange={this.handleChange}
                    name = "amountInputRef"
                    label="Amount"
                    input={{
                        id: "amount_" + this.props.id,
                        type: "number",
                        min: "1",
                        max: "5",
                        step: "1",
                        defaultValue: "1",
                    }}
                />
                <button>+ Add</button>
                {!this.state.amountIsValid && <p>Please enter a valid amount (1-5)</p>}
            </form>
        );
    }


}

export default MealItemForm;
