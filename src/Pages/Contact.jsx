// import React, { useState } from 'react'

// function Contact() {
//   const [formStatus, setFormStatus] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormStatus(alert("Submitting..."));
//     setTimeout(() => {
//       setFormStatus(alert("Message Sent!"))
//     }, 2000);
//   };

//   return (
//     <section id='contact' className='contact'>
//       <div className='container my-5'>
//         <h2>Contact Me</h2>
//         {/* <p>Email : abc@gmail.com</p>
//         <p>Phone : +91 0123456789</p>
//         <div className='mb-3'>
//           <label for='name' className='form-label'>Name</label>
//           <input type='text' className='form-control' id='name' name='name' required></input>
//         </div>
//         <div className='mb-3'>
//           <label for='email' className='form-label'>Email</label>
//           <input type='email' className='form-control' id='email' name='email' required></input>
//         </div>
//         <div className='mb-3'>
//           <label for='message' className='form-label'>Name</label>
//           <textarea className='form-control' id='message' name='message' required></textarea>
//         </div>
//         <button type='button' className='btn btn-primary'>Send</button> */}
//         <form onSubmit={handleSubmit}>
//           <div className='mb-3'>
//             <label for='name' className='form-label'>Name</label>
//             <input type='text' className='form-control' id='name' name='name' required></input>
//           </div>
//           <div className='mb-3'>
//             <label for='email' className='form-label'>Email</label>
//             <input type='email' className='form-control' id='email' name='email' required></input>
//           </div>
//           <div className='mb-3'>
//             <label for='message' className='form-label'>Message</label>
//             <textarea className='form-control' id='message' name='message' required></textarea>
//           </div>
//           <button type='button' className='btn btn-success'>Send</button>
//         </form>
//         {formStatus && <p className='mt-3 text-success'>{formStatus}</p>}
//       </div>
//     </section>
//   )
// }

// export default Contact

// 1
// import React, { useState } from 'react';
// import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';

// function Contact() {
//   const [formStatus, setFormStatus] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormStatus("Submitting...");
//     setTimeout(() => {
//       setFormStatus("Message Sent! Thank you for reaching out.");
//     }, 2000);
//   };

//   return (
//     <section id="contact" className="contact py-5 bg-light">
//       <div className="container">
//         <div className="text-center mb-4">
//           <h2 className="fw-bold">Contact Me</h2>
//           <p className="text-muted">I'd love to hear from you! Feel free to reach out using the form below.</p>
//         </div>
//         <div className="row justify-content-center">
//           <div className="col-lg-6">
//             <div className="card shadow">
//               <div className="card-body p-4">
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="name" className="form-label">
//                       <FaUser className="me-2 text-primary" /> Name
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="name"
//                       name="name"
//                       placeholder="Enter your full name"
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">
//                       <FaEnvelope className="me-2 text-primary" /> Email
//                     </label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       name="email"
//                       placeholder="Enter your email address"
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="message" className="form-label">
//                       <FaPhoneAlt className="me-2 text-primary" /> Message
//                     </label>
//                     <textarea
//                       className="form-control"
//                       id="message"
//                       name="message"
//                       rows="4"
//                       placeholder="Write your message here"
//                       required
//                     />
//                   </div>
//                   <button type="submit" className="btn btn-primary w-100">
//                     Send Message
//                   </button>
//                 </form>
//                 {formStatus && (
//                   <p className="mt-3 text-success text-center">{formStatus}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

// 2
// import React, { useState } from 'react';

// function Contact() {
//   const [formStatus, setFormStatus] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormStatus("Submitting...");
//     setTimeout(() => {
//       setFormStatus("Message Sent!");
//     }, 2000);
//   };

//   return (
//     <section id="contact" className="contact py-5 bg-light">
//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="fw-bold">Contact Me</h2>
//           <p className="text-muted">I'd love to hear from you! Feel free to drop me a message below.</p>
//         </div>
//         <div className="row justify-content-center">
//           <div className="col-lg-6 col-md-8">
//             <form 
//               onSubmit={handleSubmit} 
//               className="p-4 p-md-5 shadow rounded bg-white"
//             >
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   name="name"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="message" className="form-label">Message</label>
//                 <textarea
//                   className="form-control"
//                   id="message"
//                   name="message"
//                   rows="4"
//                   placeholder="Write your message here"
//                   required
//                 ></textarea>
//               </div>
//               <div className="d-grid">
//                 <button
//                   type="submit"
//                   className="btn btn-success btn-lg"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//             {formStatus && (
//               <p className="mt-3 text-center text-success fw-semibold">
//                 {formStatus}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

//3
import axios from "axios";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  // const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Submitting your message...");
    try {
      const response = await axios.post("https://portfolio-be-epu1.onrender.com/send-mail", formData);
      toast.success(response.data || "Message sent successfully");
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again later.")
    }
  };

  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label d-flex align-items-center">
                      <FaUser className="me-2" /> Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label d-flex align-items-center">
                      <FaEnvelope className="me-2" /> Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label d-flex align-items-center">
                      <FaComment className="me-2" /> Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-success w-100">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
}

export default Contact;
