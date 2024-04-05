import { Input } from 'antd';
import { FormContext } from '../Store/Form-Context';
import { useContext } from 'react';

const TextFields = () => {
    const { placeholder, } = useContext(FormContext)
    return (
        <>
            <Input className='outline-gray-50' placeholder={placeholder} />
        </>
    )
}

export default TextFields