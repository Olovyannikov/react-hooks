import {ChangeEvent, FocusEvent, useState} from "react";
import {useValidation} from "../useValidation";

export const useInput = (initialValue: string = '', validations: { [K: string]: any }) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const onBlur = (e: FocusEvent<HTMLInputElement>) => setDirty(true);

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        setValue,
        ...valid,
    }
}