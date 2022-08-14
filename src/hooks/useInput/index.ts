import {ChangeEvent, FocusEvent, useState} from "react";

export const useInput = (initialValue: string = '') => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const onBlur = (e: FocusEvent<HTMLInputElement>) => setDirty(true);

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        setValue
    }
}