import InputField1 from "@/components/InputField1";
import { error } from "console";
import { useState } from "react";
export interface InputFieldPropsType1 {
  id: number
  title: string
  description: string
  error?: string
}
export interface InputFieldPropsType2 {
  id: number
  heading: string
  description: string
  error?: string
}


export default function Home() {
  const [inputFields1, setInputFields1] = useState<InputFieldPropsType1[]>([])
  const [inputFields2, setInputFields2] = useState<InputFieldPropsType1[]>([])
  const AddInputField1 = () => {
    let newData: InputFieldPropsType1 = {
      id: inputFields1.length + 10,
      title: '',
      description: ''
    }
    setInputFields1([...inputFields1, newData])
  }
  const ChangeValue1 = (data: InputFieldPropsType1) => {
    const nextData = inputFields1.map(item => {
      if (item.id == data.id) {
        return data;
      }
      return item
    })
    setInputFields1(nextData)
  }

  const DeleteArray1 = (id: number) => {
    let newData = inputFields1.filter(item => item.id !== id)
    setInputFields1(newData)
  }

  const ValidateData = () => {
    inputFields1.forEach(item => {
      if (item.title === '') {
        ChangeValue1({ ...item, error: 'Title Cannot Be Empty' })
      } else {
        ChangeValue1({ ...item, error: undefined })
      }
      if (item.description === '') {
        ChangeValue1({ ...item, error: 'Description Cannot Be Empty' })
      } else {
        ChangeValue1({ ...item, error: undefined })
      }
    })
  }

  return (
    <div className="w-full flex flex-col items-center justify-center p-10 gap-5">
      <div className="w-full flex flex-col">
        {inputFields1.map((item: InputFieldPropsType1) => <InputField1 data={item} onChange={(data) => { ChangeValue1(data) }} onDelete={(id: number) => { DeleteArray1(id) }} key={item.id} />)}
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => AddInputField1()}>Add Shit 1</button>
      </div>
      <button className="bg-green-600 px-4 py-2 rounded-md" onClick={() => ValidateData()}>Continue</button>
    </div>
  );
}
