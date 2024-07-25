import { useState } from 'react';
import emailjs from 'emailjs-com';
import {motion} from 'framer-motion'

export default function Contact() {
  const [email, setEmail] = useState({
    user_name: '',
    subject: '',
    user_email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmail((prevEmail) => ({
      ...prevEmail,
      [name]: value
    }));
  };

  const sendEmail = (event) => {
    event.preventDefault();

    // EmailJS configuration
    const templateParams = {
      from_name: email.user_name,
      to_name: 'dlrdev92@gmail.com', // Replace with your name or email
      subject: email.subject,
      user_email: email.user_email,
      message: email.message
    };

    if (email.user_name === '' || email.subject === '' || email.user_email === '' || email.message === '') {
      alert('Please, I will need all the information to send the email.🙂');
      return;
    }

    // EmailJS service ID, template ID, and user ID
    const serviceId = import.meta.env.VITE_SERVICE_ID 
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const userId = import.meta.env.VITE_USER_ID

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(() => {
        // Clear form after successful submission
        setEmail({
          user_name: '',
          subject: '',
          user_email: '',
          message: ''
        });
        alert('Your message has been sent successfully!🙂');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded:[20px] lg:rounded-[50px] gap-10 ">
      <motion.h1 className="lg:text-[4rem] text-[3rem] font-Jost -bold relative border-b-8 border-blueBackground text-center mt-[7%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
              duration: 1, 
              delay: 0.4
          }}>
        Let's Talk
      </motion.h1>
      <motion.form className="flex flex-col items-center w-full h-[80%] focus:outline-none gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
              duration: 1, 
              delay: 0.4
          }}>
        <div className="w-4/5 lg:w-1/2 flex h-[10%] text-[1.5rem] justify-center font-Jost items-center border-b-2 border-blueBackground focus:outline-none">
          <input
            type="text"
            value={email.user_name}
            name="user_name"
            placeholder="Name"
            onChange={handleChange}
            required={true}
            className="border-none w-full h-full focus:outline-none"
          />
        </div>
        <div className="w-4/5 lg:w-1/2 h-[10%] text-[1.5rem]  flex justify-center font-Jost items-center border-b-2 border-blueBackground focus:outline-none">
          <input
            type="text"
            value={email.subject}
            required={true}
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            className="border-none w-full h-full focus:outline-none"
          />
        </div>
        <div className="w-4/5 lg:w-1/2 h-[10%] text-[1.5rem]  flex justify-center font-Jost items-center border-b-2 border-blueBackground focus:outline-none">
          <input
            type="text"
            value={email.user_email}
            name="user_email"
            placeholder="Email"
            onChange={handleChange}
            required={true}
            className="border-none w-full h-full focus:outline-none"
          />
        </div>
        <div className="w-4/5 lg:w-1/2 h-[30%] text-[1.5rem]  flex justify-center font-Jost items-center border-b-2 border-blueBackground focus:outline-none">
          <textarea
            type="text"
            value={email.message}
            name="message"
            placeholder="Message"
            onChange={handleChange}
            required={true}
            className="border-none w-full h-full focus:outline-none"
          />
        </div>
        <button
          className="font-Jost tracking-wider text-white border-2 bg-blueBackground font-bold p-1 w-[40%] lg:w-[30%] rounded-[35px] h-[65px] flex items-center justify-center hover:scale-110 duration-500 cursor-pointer lg:shadow-xl"
          onClick={sendEmail}
        >
          Send Email
        </button>
      </motion.form>
    </div>
  );
}