import {useEffect, useState} from "react";

export const useValidation = (value: string, validations: { [K: string]: any }) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLength, setMinLength] = useState(false);
    const [maxLength, setMaxLength] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
            for (const validation in validations) {
                switch (validation) {
                    case 'minLength':
                        value.length < Number(validations[validation]) ? setMinLength(true) : setMinLength(false);
                        break;
                    case 'isEmpty':
                        value ? setEmpty(false) : setEmpty(true);
                        break;
                    case 'maxLength':
                        value.length > Number(validations[validation]) ? setMaxLength(true) : setMaxLength(false);
                        break;
                    case 'isEmail':
                        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                        re.test(String(value).toLowerCase()) ? setIsEmail(false) : setIsEmail(true);
                        break
                }
            }
        }, [value, validations]
    );

    useEffect(() => {
        if (isEmpty || isEmail || maxLength || minLength) {
            setInputValid(false)
        } else {
            setInputValid(true);
        }
    }, [validations])

    return {
        isEmpty,
        isEmail,
        maxLength,
        minLength,
        inputValid
    }
}