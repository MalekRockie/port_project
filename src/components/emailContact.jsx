import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { TextField, Button, Box } from '@mui/material';
import './css/responsive-styles.css';


const labelStyle = {
display: 'block',
marginBottom: '8px',
color: '#fff',
fontSize: '14px'
};
  
const inputStyle = {
width: '600px',
padding: '10px 12px',
border: '1px solid white',
borderRadius: '5px',
backgroundColor: 'transparent',
color: 'white',
outline: 'none',
fontSize: '16px',
boxSizing: 'border-box',
};
  

export function ContactUs() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function sendEmail(e) {
     e.preventDefault();

     emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID)
        .then((result) => {
        console.log(result.text);
        setName("");
        setEmail("");
        setMessage("");
        alert("Your message has been sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Oops! Something went wrong. Please try again.");
        });
    }

    return (
        <form onSubmit={sendEmail}>
            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center"
                style={{minWidth: '300px'}}
                
            >
                <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="user_name" style={labelStyle}>Name</label>
                    <input
                        id="user_name"
                        name="user_name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                    />
                                    </div>

                    <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="user_email" style={labelStyle}>Email</label>
                    <input
                        id="user_email"
                        type="email"
                        name="user_email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={inputStyle}
                    />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="message" style={labelStyle}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: '80px'
                        }}
                    />
                    </div>
                
                <button 
                type="submit"
                className='submitButton'
                >
                Send
                </button>
            </Box>
        </form>
    );
}
