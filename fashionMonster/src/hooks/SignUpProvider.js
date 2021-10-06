import React, { createContext, useContext, useState } from "react";

const FormStateContext = createContext();
const FormDispatchContext = createContext();
const FormChangeContext = createContext();

const initialState = {
  name: "",
  email: "",
  password: "",
  tel: "",
  location: "",
  manager: "",
  bank: "",
  accountNumber: "",
  accountName: "",
  StoreId: null,
}

export default function SignUpProvider({ children }) {
  const [signupForm, setSignupForm] = useState(initialState);

  const onChangeSetSignupForm = (key, value) => {
    setSignupForm(prev => ({
      ...prev,
      [key]: value
    }));
  }

  return (
    <FormStateContext.Provider value={signupForm}>
      <FormDispatchContext.Provider value={setSignupForm}>
        <FormChangeContext.Provider value={onChangeSetSignupForm}>
          {children}
        </FormChangeContext.Provider>
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  )
}

export const useSignupState = () => {
  const context = useContext(FormStateContext)
  if (!context) throw new Error('cannot find state');
  return context;
}
export const useSetSignup = () => {
  const context = useContext(FormDispatchContext);
  if (!context) throw new Error('connot find setStateAction')
  return context
}
export const useChangeSignup = () => {
  const context = useContext(FormChangeContext);
  if (!context) throw new Error('connot find onChangeHandler')
  return context
}