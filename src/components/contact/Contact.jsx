import "./contact.scss";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_w3jmpyr",
      "template_w816jzj",
      formRef.current,
      "EjKcQulWVOFshx4FE"
    )
    .then(
      (result) => {
        setSuccess(true);
        setError(false);
        console.log(result.text);
      },
      (error) => {
        setSuccess(false);
        setError(true);
        console.log(error.text);
      }
    );
  };

  return (
    <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Hello street New York</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1 234 5678</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message"></textarea>
          <button type="submit">Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.858-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
              M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666,0.001C25.312,11.735,21.436,7.856,16.666,7.856z
              M7.326,0.007L7.326,16.334c9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.007-1.006-1.006
              c-7.896,0-14.318-6.424-14.318-14.319c0-7.896,6.568-14.318,14.317-14.319c7.896,0-1.903,0.751-2.959,0.761
              c-1.756-0.632-0.634-0.377,1.183-0.887,1.591-1.529-1.591-1.529-1.591-1.529s3.5761-1.684,4.658-3.143c5.084-1.814
              c-2.265-1.35,4.703-2.143,8.312-2.265c-1.433-2.736,10.438-1.098c3.670-2.021,5.312-6.338z"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
