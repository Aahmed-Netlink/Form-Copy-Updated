import { Button } from 'antd';
import { FormContext } from '../Store/Form-Context';
import { useContext } from 'react';
const Buttons = () => {
    const { placeholder,} = useContext(FormContext)
    let id = placeholder.length-1
    return (
        <>
            <Button type="primary">{placeholder[id]}</Button>
        </>
    )
}

export default Buttons