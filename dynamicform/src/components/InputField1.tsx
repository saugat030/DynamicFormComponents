import { InputFieldPropsType1 } from '@/pages'
import { error } from 'console'
import React from 'react'

interface InputFieldProps1 {
    data: InputFieldPropsType1
    onChange: (data: InputFieldPropsType1) => void
    onDelete: (id: number) => void
}

const InputField1: React.FC<InputFieldProps1> = ({ data, onChange, onDelete }) => {
    return (
        <div className={`flex flex-col p-5 gap-3 rounded-md border-2 ${data.error ? 'border-red-500' : 'border-black'} bg-[#AAAAAA]`}>
            <button onClick={() => onDelete(data.id)}>Delete {data.id}</button>

            <input
                className='text-black'
                placeholder='Title' onChange={(e) => {
                    onChange({ ...data, title: e.target.value })
                }}
            />
            <input
                className='text-black'
                placeholder='Description' onChange={(e) => {
                    onChange({ ...data, description: e.target.value })
                }} />
            {data.error && <div className='text-red-400'>{data.error}</div>}
        </div>
    )
}

export default InputField1