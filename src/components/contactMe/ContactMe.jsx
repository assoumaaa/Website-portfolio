import { React, useRef, useState } from 'react';
import "./ContactMe.scss"
import { BiPhoneCall } from "react-icons/bi";
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import emailjs from 'emailjs-com'
import swal from 'sweetalert';





export default function ContactMe() {

    const formRef = useRef();
    const [checkDetails, setCheckDetails] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const [name, subject, email, message] = formRef.current;
        if (name.value === '' || subject.value === '' || email.value === '' || message.value === '') {
            setTimeout(function () {
                setCheckDetails(true)
            }, 100);
            setTimeout(function () {
                setCheckDetails(false)
            }, 3000);
        }
        else {
            setTimeout(function () {
                setLoading(true)
            });
            setTimeout(function () {
                setLoading(false)
            }, 3000);
            setCheckDetails(false);
            emailjs.sendForm('service_wj24n5j', 'template_5k4q4hb', formRef.current, '0e6LsyaGfbA3QoQlp')
                .then((result) => {
                    e.target.reset();
                    swal({
                        title: "Success",
                        text: "Thank you for sending me an email!",
                        icon: "success",
                        button: "Ok!"
                    });          
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    return (
        <div className='contactMe' id='contactMe'>
            <div className="decoration"></div>
            <div className="left">
                <div className="wrapper">
                    <h1><span>Contact Me!</span></h1>
                    <h2><BiPhoneCall className='icon' /> +90 (531) 961 5995</h2>
                    <h2><IoLogoWhatsapp className='icon' /> +961 (76) 88 99 95</h2>
                    <h2><IoIosMail className='icon' /> omarassouma@hotmail.com</h2>
                    <div className="icons">
                        <a target="somethingUnique" href='https://www.linkedin.com/in/omar-assouma-a60275210/'  > <AiFillLinkedin /> </a>
                        <a target="somethingUnique" href='https://github.com/assoumaaa'> <AiOutlineGithub />  </a>
                    </div>
                </div></div>
            <div className="right">
                <div className="form-container">
                    <h2>Got any questions or comments? </h2>
                    <h2 className='h2-style'>Get in touch.</h2>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' />
                        <input type="texxt" placeholder='Subject' name='user_subject' />
                        <input type="text" placeholder='Email' name='user_email' />
                        <textarea rows={5} placeholder='Message' name='user_message' />
                        <button>Submit</button>
                        {loading &&
                            <div>Please Wait!</div>
                        }
                        {checkDetails &&
                            <div> Check Again!</div>
                        }
                    </form>
                </div>
            </div>

        </div>
    )
}
