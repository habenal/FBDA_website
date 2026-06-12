import { useState } from 'react';
import { Phone, Mail, Globe, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const empty: FormData = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormData>(empty);
  const [status, setStatus] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      message: form.message.trim(),
    });

    if (error) {
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    } else {
      setStatus('success');
      setForm(empty);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* White top — logo + brand */}
      <div className="bg-white py-12 md:py-16 px-6 sm:px-8 flex flex-col items-center gap-5 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 pointer-events-none opacity-15"
          aria-hidden="true"
          style={{ background: '#E8A800', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />
        <div
          className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 pointer-events-none opacity-15"
          aria-hidden="true"
          style={{ background: '#6B9C1F', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
        />

        <div className="relative z-10">
          <svg viewBox="0 0 200 80" className="w-40 sm:w-48 md:w-56 h-auto">
            <path d="M10 75 Q100 8 190 75" fill="none" stroke="#6B9C1F" strokeWidth="14" strokeLinecap="round" />
            <path d="M32 75 Q100 22 168 75" fill="none" stroke="#E8A800" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="text-center relative z-10">
          <div className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide" style={{ color: '#6B9C1F' }}>
            Future Bridge
          </div>
          <div className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mt-1" style={{ color: '#E8A800' }}>
            Development Action
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-1 w-full" style={{ background: '#E8A800' }} />

      {/* Green band — info + form */}
      <div className="relative py-12 md:py-16 px-6 sm:px-8 overflow-hidden" style={{ background: '#6B9C1F' }}>
        <div
          className="absolute top-0 right-0 w-24 h-24 sm:w-36 sm:h-36 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'rgba(0,0,0,0.08)', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'rgba(232,168,0,0.2)', clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight text-center mb-10 md:mb-12">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-start">
            {/* Contact info */}
            <div className="space-y-6">
              <p className="text-white/80 text-sm leading-relaxed">
                Reach out to us — we'd love to hear from you. Whether you're a partner, donor, or community member, our team is ready to connect.
              </p>
              <div className="space-y-4">
                <ContactItem icon={Phone} text="+251 912 038 304" />
                <ContactItem icon={Mail} text="info@futurebridgeda.org" />
                <ContactItem icon={Globe} text="www.futurebridgeda.com" />
              </div>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              {status === 'success' ? (
                <SuccessBanner onReset={() => setStatus('idle')} />
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Full Name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+251 … (optional)"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6B9C1F' }}>
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 transition-shadow"
                      style={{ '--tw-ring-color': '#6B9C1F' } as React.CSSProperties}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-white text-sm font-bold uppercase tracking-widest transition-opacity disabled:opacity-60"
                    style={{ background: '#6B9C1F' }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="bg-gray-900 py-4 sm:py-5 px-6 text-center">
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          &copy; 2026 Future Bridge Development Action. All rights reserved.
        </p>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6B9C1F' }}>
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-shadow"
        style={{ '--tw-ring-color': '#6B9C1F' } as React.CSSProperties}
      />
    </div>
  );
}

function ContactItem({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: '#E8A800' }}
      >
        <Icon size={16} className="text-white" />
      </div>
      <span className="text-white font-medium text-sm sm:text-base break-all">{text}</span>
    </div>
  );
}

function SuccessBanner({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 py-8">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ background: '#6B9C1F' }}
      >
        <CheckCircle size={28} className="text-white" />
      </div>
      <div>
        <h3 className="text-lg font-black text-gray-900 mb-1">Message Sent!</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
      </div>
      <button
        onClick={onReset}
        className="mt-2 text-sm font-bold uppercase tracking-widest underline underline-offset-4 transition-opacity hover:opacity-70"
        style={{ color: '#6B9C1F' }}
      >
        Send another message
      </button>
    </div>
  );
}
