import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { TextField, Button, Box } from '@mui/material';

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
        }, (error) => {
            console.log(error.text);
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
                <TextField 
                name="user_name" 
                label="Name" 
                margin="normal"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '300px' }}
                />
                <TextField 
                type="email" 
                name="user_email" 
                label="Email" 
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '300px' }}
                required
                />
                <TextField 
                name="message" 
                label="Message" 
                multiline 
                rows={4} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                margin="normal"
                style={{ width: '300px' }}
                required
                />
                <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                style={{marginTop: '1rem'}}
                >
                Send
                </Button>
            </Box>
        </form>
    );
}
