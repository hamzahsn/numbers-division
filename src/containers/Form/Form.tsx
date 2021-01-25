import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Form.scss'
import { LabelInput } from '@components/LabelInput/LabelInput'
import { Button } from '@components/Button/Button'
import { calculateNumbers } from '../../utils/calculateNumbers'

interface IHandleInput {
  firstNumber: number
  secondNumber: number
}

const initialState = {
  firstNumber: '',
  secondNumber: ''
}
export const Form: React.FC = () => {
  const [formInputControls, setFormInputControls] = useState<IHandleInput>({
    firstNumber: 0,
    secondNumber: 0
  })
  const { register, errors, handleSubmit, reset } = useForm({
    defaultValues: { firstNumber: '', secondNumber: '' }
  })

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>, field: keyof IHandleInput) => {
    setFormInputControls({
      ...formInputControls,
      [field]: event.target.value
    })
  }

  const handleSubmitForm = () => {
    const resultat = calculateNumbers(formInputControls.firstNumber, formInputControls.secondNumber)
    reset(initialState)
    alert(resultat)
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(handleSubmitForm)}>
      <LabelInput
        id="firstNumber"
        type="text"
        name="firstNumber"
        labelText="First Number"
        placeholder="Put a number"
        data-testid="first-number"
        defaultValue={formInputControls.firstNumber}
        register={register({
          required: true,
          validate: {
            smallerThanSecondNumber: value => parseInt(value) < formInputControls.secondNumber
          },
          pattern: {
            value: /^[0-9]+$/i,
            message: 'invalid number'
          }
        })}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputs(event, 'firstNumber')}
      />
      {errors.firstNumber && (
        <p data-testid="firstNumber-error" className={styles.error}>
          First number not valid
        </p>
      )}
      <LabelInput
        id="secondNumber"
        type="text"
        name="secondNumber"
        labelText="Second Number"
        placeholder="Put a number"
        data-testid="second-number"
        defaultValue={formInputControls.firstNumber}
        register={register({
          required: true,
          validate: {
            biggerThanFirstNumber: value => parseInt(value) > formInputControls.firstNumber
          },
          pattern: {
            value: /^[0-9]+$/i,
            message: 'invalid number'
          }
        })}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputs(event, 'secondNumber')}
      />
      {errors.secondNumber && <p className={styles.error}>Second number not valid</p>}
      <Button data-testid="submit-button">PROCESS</Button>
    </form>
  )
}
