import { Input } from 'antd';
import { FormContext } from '../Store/Form-Context';
import { useContext } from 'react';

const { TextArea } = Input;

const TextAreas = () => {
    const { placeholder, } = useContext(FormContext)
    return (
        <TextArea rows={4} placeholder={placeholder} />
    )
}

export default TextAreas