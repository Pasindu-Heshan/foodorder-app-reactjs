import {Component, useRef, useState} from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

class Checkout extends Component{
  // const [formInputsValidity, setFormInputsValidity] = useState({
  //   name: true,
  //   street: true,
  //   city: true,
  //   postalCode: true,
  // });

  state = {
      formInputsValidity: {
          name: true,
          street: true,
          city: true,
          postalCode: true,
      }
  }

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const eneteredNameIsValid = !isEmpty(enteredName);
    const eneteredStreetIsValid = !isEmpty(enteredStreet);
    const eneteredCityIsValid = !isEmpty(enteredCity);
    const eneteredPostalCodeIsValid =
      !isEmpty(enteredPostalCode) && isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: eneteredNameIsValid,
      street: eneteredStreetIsValid,
      city: eneteredCityIsValid,
      postalCode: eneteredPostalCodeIsValid,
    });

    const formIsValid =
      eneteredNameIsValid &&
      eneteredStreetIsValid &&
      eneteredCityIsValid &&
      eneteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode,
    })
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetCntrolClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetCntrolClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid Street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code! (5 charaters long)</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
