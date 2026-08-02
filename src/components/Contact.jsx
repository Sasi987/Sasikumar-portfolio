import React, { useState } from 'react';
import '../styles/contact.css';

/**
 * Contact section — validated React contact form with success UI,
 * contact info cards, Google Map placeholder, and WhatsApp floating button.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    // Simulated submit — replace with real API/EmailJS in production
    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let&rsquo;s Build Something Great</h2>
          <p className="section-subtitle">
            Have a project in mind or a role to fill? I&rsquo;m one message away.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left: contact info */}
          <div className="contact__info reveal">
            <div className="contact-info-card glass-card">
              <div className="contact-info-card__icon">📧</div>
              <div>
                <span className="contact-info-card__label">Email</span>
                <a href="mailto:srsasikumar987@gmail.com" className="contact-info-card__value">
                  srsasikumar987@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-card glass-card">
              <div className="contact-info-card__icon">📱</div>
              <div>
                <span className="contact-info-card__label">Phone</span>
                <a href="tel:+916382694335" className="contact-info-card__value">
                  +91 63826 94335
                </a>
              </div>
            </div>

            <div className="contact-info-card glass-card">
              <div className="contact-info-card__icon">📍</div>
              <div>
                <span className="contact-info-card__label">Location</span>
                <span className="contact-info-card__value">
                  Sholinganallur, Chennai
                </span>
              </div>
            </div>

            {/* Google Map placeholder */}
            <div className="map-card glass-card">
              <div className="map-placeholder" aria-hidden="true">
                <div className="map-grid" />
                <div className="map-pin">
                  <div className="pin-outer" />
                  <div className="pin-inner" />
                </div>
                <div className="map-label">Sholinganallur, Chennai</div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            className="contact__form glass-card reveal"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={errors.name ? 'has-error' : ''}
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={errors.email ? 'has-error' : ''}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What&rsquo;s this about?"
                className={errors.subject ? 'has-error' : ''}
              />
              {errors.subject && <span className="error-msg">{errors.subject}</span>}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className={errors.message ? 'has-error' : ''}
              />
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="btn btn-primary contact-submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <>
                  <span className="spinner" /> Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="success-toast">
                <div className="success-toast__icon">✓</div>
                <div>
                  <strong>Message Sent Successfully!</strong>
                  <p>Thanks for reaching out — I&rsquo;ll get back to you soon.</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/916382694335"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.017 2C6.484 2 2 6.484 2 12.017c0 2.083.635 4.019 1.723 5.63L2 22l4.474-1.68a9.972 9.972 0 0 0 5.542 1.72h.004c5.528 0 10.03-4.484 10.03-10.017C22.05 6.484 17.55 2 12.017 2z" />
        </svg>
        <span className="whatsapp-pulse" />
      </a>
    </section>
  );
}
