import axios from "axios";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComment, FaMapMarkedAlt, FaGithub, FaLinkedin, FaDownload, FaCommentDots, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RESUME_PDF from "../assets/Kumaresan_FSD.pdf";


const initalForm = { name: "", email: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initalForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Validation
  const validate = () => {
    const e = {};
    if (!form.name.trim()) {
      e.name = "Name is required"
    } else if (form.name.trim().length < 4) {
      e.name = "Name too short(min 04 chars)";
    }
    if (!form.email.trim()) {
      e.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email"
    }
    if (!form.message.trim()) {
      e.message = "Message is required"
    } else if (form.message.trim().length < 10) {
      e.message = "Message too short(min 10 chars)";
    }
    return e

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // clear error on type
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return
    }

    setLoading(true);

    try {
      const response = await axios.post("https://portfolio-be-sigma.vercel.app/send-mail", form);
      setSent(true);
      setForm(initalForm);
      setErrors({});
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="ct-section">
      <ToastContainer position="top-right" autoClose={4000} />
      <div className="container">

        {/* Heading */}
        <div className="ct-heading-wrap">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-heading">Contact Me</h2>
          <p className="ct-subhead">
            Open to full-time roles, freelance projects and collaborations.
            Drop a message - I reply with in 24 hours.
          </p>
        </div>

        <div className="ct-card">

          {/* Left panel */}
          <div className="ct-left">
            <div className="ct-blob ct-blob-1" aria-hidden="true" />
            <div className="ct-blob ct-blob-2" aria-hidden="true" />

            <div className="ct-left-inner">

              <div className="ct-available">
                <span className="ct-available-dot" />
                Available for opportunities
              </div>

              <h3 className="ct-left-title">Let's work<br />together</h3>
              <p className="ct-left-desc">
                I'm a MERN stack developer based in Tamil Nadu.
                Whether it's a full-time role, freelance project,
                or just a chat - I'd love to hear from you.
              </p>


              {/* Social links */}
              <div className="ct-info-list">

                <div className="ct-info-item">
                  <span className="ct-info-icon"><FaEnvelope size={14} /></span>
                  <div>
                    <div className="ct-info-label">Email</div>
                    <a
                      href="mailto:kumaresansubramani8015@gmail.com"
                      className="ct-info-value">
                      kumaresansubramani8015@gmail.com
                    </a>
                  </div>
                </div>
                <div className="ct-info-item">
                  <span className="ct-info-icon"><FaMapMarkedAlt size={14} /></span>
                  <div>
                    <div className="ct-info-label">Location</div>
                    <div className="ct-info-label">Tamil Nadu, India</div>
                  </div>
                </div>
                <div className="ct-info-item">
                  <span className="ct-info-icon"><FaGithub size={14} /></span>
                  <div>
                    <div className="ct-info-label">GitHub</div>
                    <a
                      href="mailto:kumaresansubramani8015@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="ct-info-value">
                      github.com/kumaresh231299
                    </a>
                  </div>
                </div>

                <div className="ct-actions">
                  <a
                    href="https://www.linkedin.com/in/kumaresan-subramani-0a09aa191/"
                    target="_blank"
                    rel="noreferrer"
                    className="ct-action-btn"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={15} />
                  </a>
                  <a
                    href={RESUME_PDF}
                    download="Kumaresan_MERN-Resume.pdf"
                    className='ct-action-btn ct-action-outline'
                    aria-label="Resume"
                  >
                    <FaDownload size={13} className="me-2" />
                    Resume
                  </a>
                </div>

              </div>

            </div>
          </div>


          {/* Right panel */}
          <div className="ct-right">
            {
              sent ? (
                <div className="ct-success">
                  <div className="ct-success-icon">
                    <FaCheckCircle size={56} />
                  </div>
                  <h3 className="ct-success-title">Message Sent</h3>
                  <p className="ct-sucess-msg">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <button
                    className="ct-submit"
                    onClick={() => setSent(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>

                  <h3 className="ct-form-title">Send a Message</h3>
                  {/* Name */}
                  <div className="ct-field">
                    <label className="ct-label">
                      <FaUser size={11} /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`ct-input ${errors.name ? "ct-input-err" : ""}`}
                      disabled={loading}
                    />
                    {errors.name && <span className="ct-err-msg">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="ct-field">
                    <label className="ct-label">
                      <FaEnvelope size={11} /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`ct-input ${errors.email ? "ct-input-err" : ""}`}
                      disabled={loading}
                    />
                    {errors.email && <span className="ct-err-msg">{errors.email}</span>}
                  </div>

                  {/* Message */}
                  <div className="ct-field">
                    <label className="ct-label">
                      <FaCommentDots size={11} /> Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={5}
                      className={`ct-input ct-textarea ${errors.message ? "ct-input-err" : ""}`}
                      disabled={loading}
                    />
                    {errors.message && <span className="ct-err-msg">{errors.message}</span>}
                    <span className="ct-char">{form.message.length}/2000</span>
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="ct-submit"
                  >
                    {loading ?
                      <><span className="spinner" aria-hidden="true" />Sending...</>
                      : <><FaPaperPlane size={14} /> Send Message</>
                    }
                  </button>

                </>
              )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
