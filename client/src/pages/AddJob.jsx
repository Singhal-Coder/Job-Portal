import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import { JobCategories } from '../assets/assets';

const AddJob = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('Delhi');
    const [category, setCategory] = useState('Programming');
    const [level, setLevel] = useState('Beginner level');
    const [salary, setSalary] = useState(0)
    const editorRef = useRef(null)
    const quillRef = useRef(null)
    useEffect(()=>{
        // Initiate Quill only once
        if (!quillRef.current && editorRef.current){
            quillRef.current = new Quill(editorRef.current,{
                theme:'snow'
            })
        }
    },[])
  return (
    <form className='container p-4 flex flex-col w-full items-start gap-3'>

        <div className='w-full'>
            <p className='mb-2'>Job Title</p>
            <input type="text" className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded' placeholder='Type here' value={title} onChange={e=>setTitle(e.target.value)} required/>

        </div>
        <div className='w-full max-w-lg'>
            <p className='my-2'>Job Description</p>
            <div ref={editorRef}>

            </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
            <div>
                <p className='mb-2'>Job Category</p>
                <select onChange={e=>setCategory(e.target.value)} className='w-full px-3 py-2 border-2 border-gray-300 rounded'>
                    {JobCategories.map((category, index)=>(
                        <option value={category} key={index}>{category}</option>
                    ))}
                </select>
            </div>
            <div>
                <p className='mb-2'>Job Location</p>
                <select onChange={e=>setLocation(e.target.value)} className='w-full px-3 py-2 border-2 border-gray-300 rounded'>
                    {JobCategories.map((location, index)=>(
                        <option value={location} key={index}>{location}</option>
                    ))}
                </select>
            </div>
            <div>
                <p className='mb-2'>Job Level</p>
                <select onChange={e=>setLevel(e.target.value)} className='w-full px-3 py-2 border-2 border-gray-300 rounded'>
                    <option value="Beginner level">Beginner level</option>
                    <option value="Intermediate level">Intermediate level</option>
                    <option value="Senior level">Senior level</option>
                </select>
            </div>
        </div>
        <div>
            <p className='mb-2'>Job Salary</p>
            <input min='0' className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' type="Number" onChange={e=>setSalary(e.target.value)} placeholder='2500'/>
        </div>
        <button className='w-28 py-3 mt-4 bg-black text-white rounded'>ADD</button>
    </form>
  )
}

export default AddJob