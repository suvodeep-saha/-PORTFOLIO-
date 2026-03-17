import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheck } from 'react-icons/fi';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (data) => {
  const e = {};
  if (!data.name.trim())        e.name    = 'Name is required';
  if (!data.email.trim())       e.email   = 'Email is required';
  else if (!EMAIL_RE.test(data.email)) e.email = 'Enter a valid email address';
  if (!data.message.trim())     e.message = 'Message is required';
  else if (data.message.trim().length < 10) e.message = 'At least 10 characters please';
  return e;
};

export default function Contact() {
  const [form, setForm]         = useState({ name: '', email: '', message: '' });
  const [errors, setErrors]     = useState({});
  const [touched, setTouched]   = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name]) setErrors(validate(updated));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setIsSubmitting(true);
    setTimeout(() => {
      window.location.href = `mailto:your@email.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const fieldClass = (name) =>
    `w-full bg-slate-900 border ${
      errors[name] && touched[name]
        ? 'border-red-500 focus:border-red-400'
        : 'border-slate-700 hover:border-slate-600 focus:border-cyan-500'
    } focus:outline-none rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 transition-colors`;

  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Contact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Got a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-4">Let's Work Together</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. Whether
              you have a project, a question, or just want to connect — reach out!
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: FiMail, label: 'ssuvodeep1@gmail.com', href: 'mailto:your@email.com' },
                { icon: FiMapPin, label: 'Kolkata , India ', href: null },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Icon size={17} />
                  </div>
                  {href ? (
                    <a href={href} className="text-slate-400 hover:text-cyan-400 transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span className="text-slate-400">{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: 'https://github.com/', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/suvodeep-saha-/', label: 'LinkedIn' },
                
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-400/50 hover:bg-cyan-400/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form / Success */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="w-18 h-18 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 p-5"
                  >
                    <FiCheck size={30} />
                  </motion.div>
                  <p className="text-slate-200 text-xl font-semibold">Message sent!</p>
                  <p className="text-slate-400 text-sm">I’ll get back to you as soon as possible.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); setTouched({}); setErrors({}); }}
                    className="text-xs text-slate-500 hover:text-cyan-400 transition-colors underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <input
                      name="name" type="text" placeholder="Your Name"
                      value={form.name} onChange={handleChange} onBlur={handleBlur}
                      className={fieldClass('name')}
                    />
                    <AnimatePresence>
                      {errors.name && touched.name && (
                        <motion.p key="ne"
                          initial={{ opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -4, height: 0 }}
                          className="text-red-400 text-xs mt-1 ml-1"
                        >{errors.name}</motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      name="email" type="email" placeholder="Your Email"
                      value={form.email} onChange={handleChange} onBlur={handleBlur}
                      className={fieldClass('email')}
                    />
                    <AnimatePresence>
                      {errors.email && touched.email && (
                        <motion.p key="ee"
                          initial={{ opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -4, height: 0 }}
                          className="text-red-400 text-xs mt-1 ml-1"
                        >{errors.email}</motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message" placeholder="Your Message (min. 10 characters)"
                      rows={5} value={form.message} onChange={handleChange} onBlur={handleBlur}
                      className={`${fieldClass('message')} resize-none`}
                    />
                    <div className="flex items-center justify-between mt-1 px-1">
                      <AnimatePresence>
                        {errors.message && touched.message && (
                          <motion.p key="me"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-red-400 text-xs"
                          >{errors.message}</motion.p>
                        )}
                      </AnimatePresence>
                      <span className={`text-xs ml-auto ${
                        form.message.length > 10 ? 'text-slate-500' : 'text-slate-600'
                      }`}>{form.message.length} chars</span>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-slate-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 rounded-full border-2 border-slate-950/30 border-t-slate-950 animate-spin" />
                    ) : (
                      <FiSend size={17} />
                    )}
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
