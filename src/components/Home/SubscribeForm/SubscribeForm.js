import React from 'react'
import styles from './SubscribeForm.module.css'
import { useForm } from "react-hook-form";
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

export default () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <form className={styles.SubscribeForm}
          onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formInput}>
        <Input
          name="email"
          placeholder="Your email address..."
          inputRef={register({
            required: "Enter your email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email"
            }
          })}
        />
        <Button type="submit"
                buttonStyle="AccentButton"
                text="Subscribe"/>
      </div>
      <p className="error-message">
        {errors.email && errors.email.message}
      </p>
    </form>
  );
}
