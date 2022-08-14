import {useInput} from "../../hooks";

export const ValidationForm = (): JSX.Element => {
    const email = useInput('', {minLength: 3, isEmail: true, isEmpty: true});
    const password = useInput('', {isEmpty: true, minLength: 5, maxLength: 6});

    return (
        <form>
            <h1>Register</h1>
            <div>
                <input type="text" onChange={email.onChange} onBlur={email.onBlur} value={email.value}/>
                <div>
                    {(email.isDirty && email.isEmpty) &&
                        <div>
                            <mark>Поле не может быть пустым</mark>
                        </div>}
                    {(email.isDirty && email.minLength) &&
                        <div>
                            <mark>Некорректная длина</mark>
                        </div>}
                    {(email.isDirty && email.isEmail) &&
                        <div>
                            <mark>Поле не соответствует типу Email</mark>
                        </div>}
                </div>
            </div>
            <div>
                <input type="password" onChange={password.onChange} onBlur={password.onBlur} value={password.value}/>
                {(password.isDirty && password.maxLength) &&
                    <div>
                        <mark>Слишком много символов</mark>
                    </div>}
                {(password.isDirty && password.minLength) &&
                    <div>
                        <mark>Слишком мало символов</mark>
                    </div>}
            </div>
            <button disabled={!email.inputValid || !password.inputValid}>Register</button>
        </form>
    )
}