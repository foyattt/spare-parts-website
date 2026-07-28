import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

export default function ContactForm({ className }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "fd47775e-e8e9-4d2b-85c4-0aa20b4907f3", // Paste your key here
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Form error:", error);
    alert("Something went wrong. Please check your connection.");
  }
};

  const inputClass = cn(
    'w-full rounded-[14px] border border-gray-light bg-white px-4 py-3 text-body',
    'placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
  );

  const labelClass = 'mb-1.5 block text-sm font-medium text-navy';

  const errorClass = 'mt-1 text-sm text-red-600';

  if (submitted) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center rounded-[14px] border border-gray-light bg-white p-12 text-center',
          className,
        )}
      >
        <CheckCircle className="mb-4 h-12 w-12 text-primary" />
        <h3 className="text-xl font-semibold text-navy">Message Sent Successfully</h3>
        <p className="mt-2 text-muted">
          Thank you for contacting us. Our team will respond to your inquiry shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        'rounded-[14px] border border-gray-light bg-white p-6 shadow-[var(--shadow-card)] sm:p-8',
        className,
      )}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className={inputClass}
            placeholder="Your full name"
            {...register('fullName', { required: 'Full name is required' })}
          />
          {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            placeholder="your@email.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            })}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            placeholder="+251 ..."
            {...register('phone', { required: 'Phone number is required' })}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className={inputClass}
            placeholder="How can we help?"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(inputClass, 'resize-none')}
          placeholder="Tell us about the parts you need..."
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' },
          })}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit Message'}
      </Button>
    </form>
  );
}
