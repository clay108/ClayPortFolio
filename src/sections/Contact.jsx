import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // handleSubmit now uses async/await for cleaner handling of asynchronous code
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email using EmailJS, await the result
      // console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
      // console.log(import.meta.env.VITE_APP_EMAILJS_TEMPLATEID);
      // console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
      
      await emailjs.send(
      //  "service_39z45nv","template_676afdv",         // Correct template ID

      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
        {
          from_name: form.name,             // Sender's name
          to_name: 'Himanshu Singh',        // Recipient's name
          from_email: form.email,           // Sender's email
          to_email: 'hsgbxrssm@gmail.com',  // Recipient's email
          message: form.message,            // Message content
        },
        // 'WjadJ8qoPem-RuMtz'   
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY              // Correct user ID
      );

      // Success case
      setLoading(false);
      showAlert({
        show: true,
        text: 'Thank you for your message 😃',
        type: 'success',
      });

      // Hide alert and reset form after 3 seconds
      setTimeout(() => {
        hideAlert(false);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      // Error case
      setLoading(false);
      console.error(error);
      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: 'danger',
      });
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
