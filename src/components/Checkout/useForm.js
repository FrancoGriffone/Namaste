import { useState } from "react"

export const useForm = (initialState, validateForm) => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});


    const handle = (e) => {
        const {name, value} = e.target;
        setForm ({
            ...form,
            [name]: value,
        })
    }

    const handleBlur = (e) => {
        handle(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = (e) => {
        e.preventDefault ();
        setErrors(validateForm(form));
    }

    return {
        form, 
        errors, 
        handle,
        handleBlur,
        handleSubmit,
    }
};