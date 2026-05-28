import React, { useState } from 'react'

import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../services/operations/authAPI';
import DummyEmailModal from './EmailPasswordModal';

const Login = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formdata, SetFormData] = useState({
        email:"studynotaiontest@gmail.com", password:"12345" 
    })

    const { email, password } = formdata;

    
    function changeHandler(event){
        const {name, value} = event.target;
        SetFormData((prev)=>({
            ...prev, [name] : value,
        }))
    }

    function handleOnSubmit(e){
        e.preventDefault();
        dispatch(login(email,password,navigate))
    }

  return (
    <form action="" className='flex flex-col gap-[12px] ' onSubmit={handleOnSubmit}>
                      {/* <DummyEmailModal /> */}
                      
                    <div className='flexcolgap'>
                   
                        <span>Email Address <sup>*</sup> </span>
                        <input type="email"
                                placeholder='Enter email address' 
                                name='email'
                                value={formdata.email}
                                onChange={changeHandler}
                        />
                    </div>
                        
                        <div className='flexcolgap'>
                            <span>Password <sup>*</sup> </span>
                            <div className='relative'>
                                <span className='eyebutton' onClick={()=>(setShowPassword(prev => !prev))}>
                                    {
                                        showPassword?
                                        <AiOutlineEye/>
                                        :
                                        <AiOutlineEyeInvisible/>
                                    }
                                </span>
                                <input type={`${showPassword? "text" : "password"}`}    
                                        placeholder='Enter password' 
                                        name='password'
                                        value={formdata.password}
                                        onChange={changeHandler}
                                />
                            </div>
                            <Link to='/forgot-password'
                                className='self-end capitalize text-blue-100 text-[14px]'
                            >
                                forgot password
                            </Link>
                    </div>
                    

                    <div className='mt-6' >
                        
              
                        <button type='submit'
                            className='font-[500] text-[16px] leading-[24px] w-full text-center  py-[12px] px-[18px] lg:px-[24px] rounded-[8px] hover:scale-95 hover:shadow-none transition-all duration-200 flex items-center gap-2 justify-center text-richblack-900 bg-yellow-50 shadow-[inset_-2px_-2px_0px_rgba(255,255,255,0.51)'    
                        >
                            Login
                        </button>
   
                        
                    </div>

                </form>
  )
}

export default Login