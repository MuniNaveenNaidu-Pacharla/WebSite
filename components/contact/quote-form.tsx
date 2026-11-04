"use client";

import * as React from "react";
import { Send, CheckCircle2, Mail, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_DETAILS } from "@/lib/constants";

interface FormState {
  name: string;
  mobile: string;
  emailId: string;
  subject: string;
  messages: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  mobile: "",
  emailId: "",
  subject: "",
  messages: "",
};

export function QuoteForm() {
  const [formData, setFormData] = React.useState<FormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.mobile.trim()) newErrors.mobile = "Please provide your phone or mobile number.";
    if (!formData.emailId.trim()) {
      newErrors.emailId = "Please enter your corporate email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId)) {
      newErrors.emailId = "Please provide a valid email format.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!formData.messages.trim()) newErrors.messages = "Please provide details in the message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData(INITIAL_STATE);
    setIsSubmitted(false);
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0070E0] border border-[#BFDBFE] shadow-xs">
          <CheckCircle2 className="h-8 w-8 text-[#0084FF]" />
        </div>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#171717]">
          Thank You, {formData.name}!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-[#525252]">
          Your inquiry regarding <strong className="text-[#171717]">&ldquo;{formData.subject}&rdquo;</strong> has been successfully received. A technology consultant from Lorvish Technologies will review your message and reach out to {formData.emailId} shortly.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={handleReset}
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Send Another Inquiry</span>
          </Button>

          <a
            href={`mailto:${COMPANY_DETAILS.contactEmail}?subject=${encodeURIComponent(
              formData.subject || "Technology Consultation Inquiry"
            )}&body=${encodeURIComponent(
              `Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.emailId}\n\nMessage:\n${formData.messages}`
            )}`}
          >
            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4 text-[#0084FF]" />
              <span>Send via Email Client</span>
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#E8E8EB] bg-white p-8 sm:p-10 shadow-sm">
      <div className="mb-8 border-b border-[#E8E8EB] pb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0070E0]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0084FF]" />
          Direct Consultation Request
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#171717] sm:text-3xl">
          Send an Inquiry
        </h2>
        <p className="mt-2 text-sm text-[#525252]">
          Fill in your technology requirements below to connect directly with our consultants in Durham, NC or Hyderabad.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label
              htmlFor="quote-name"
              className="block text-xs font-semibold uppercase tracking-wider text-[#171717]"
            >
              Name <span className="text-[#0084FF]">*</span>
            </label>
            <input
              id="quote-name"
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className="mt-2 block w-full rounded-lg border border-[#E8E8EB] bg-[#F8F8FA] px-4 py-3 text-sm text-[#171717] placeholder-[#737373] transition-colors focus:border-[#0084FF] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0084FF]"
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-[#DC2626] font-medium">{errors.name}</p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label
              htmlFor="quote-mobile"
              className="block text-xs font-semibold uppercase tracking-wider text-[#171717]"
            >
              Phone / Mobile <span className="text-[#0084FF]">*</span>
            </label>
            <input
              id="quote-mobile"
              type="tel"
              required
              placeholder="e.g. +1 919-999-0626"
              value={formData.mobile}
              onChange={(e) => {
                setFormData({ ...formData, mobile: e.target.value });
                if (errors.mobile) setErrors({ ...errors, mobile: undefined });
              }}
              className="mt-2 block w-full rounded-lg border border-[#E8E8EB] bg-[#F8F8FA] px-4 py-3 text-sm text-[#171717] placeholder-[#737373] transition-colors focus:border-[#0084FF] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0084FF]"
            />
            {errors.mobile && (
              <p className="mt-1.5 text-xs text-[#DC2626] font-medium">{errors.mobile}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* EmailId */}
          <div>
            <label
              htmlFor="quote-email"
              className="block text-xs font-semibold uppercase tracking-wider text-[#171717]"
            >
              Corporate Email <span className="text-[#0084FF]">*</span>
            </label>
            <input
              id="quote-email"
              type="email"
              required
              placeholder="e.g. s.jenkins@company.com"
              value={formData.emailId}
              onChange={(e) => {
                setFormData({ ...formData, emailId: e.target.value });
                if (errors.emailId) setErrors({ ...errors, emailId: undefined });
              }}
              className="mt-2 block w-full rounded-lg border border-[#E8E8EB] bg-[#F8F8FA] px-4 py-3 text-sm text-[#171717] placeholder-[#737373] transition-colors focus:border-[#0084FF] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0084FF]"
            />
            {errors.emailId && (
              <p className="mt-1.5 text-xs text-[#DC2626] font-medium">{errors.emailId}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="quote-subject"
              className="block text-xs font-semibold uppercase tracking-wider text-[#171717]"
            >
              Subject <span className="text-[#0084FF]">*</span>
            </label>
            <input
              id="quote-subject"
              type="text"
              required
              placeholder="e.g. Cloud Offerings & ERP Integration Consultation"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
                if (errors.subject) setErrors({ ...errors, subject: undefined });
              }}
              className="mt-2 block w-full rounded-lg border border-[#E8E8EB] bg-[#F8F8FA] px-4 py-3 text-sm text-[#171717] placeholder-[#737373] transition-colors focus:border-[#0084FF] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0084FF]"
            />
            {errors.subject && (
              <p className="mt-1.5 text-xs text-[#DC2626] font-medium">{errors.subject}</p>
            )}
          </div>
        </div>

        {/* Messages */}
        <div>
          <label
            htmlFor="quote-messages"
            className="block text-xs font-semibold uppercase tracking-wider text-[#171717]"
          >
            Message / Requirements <span className="text-[#0084FF]">*</span>
          </label>
          <textarea
            id="quote-messages"
            rows={5}
            required
            placeholder="Please outline your technology challenges, current stack, timeline, or consultation requirements..."
            value={formData.messages}
            onChange={(e) => {
              setFormData({ ...formData, messages: e.target.value });
              if (errors.messages) setErrors({ ...errors, messages: undefined });
            }}
            className="mt-2 block w-full rounded-lg border border-[#E8E8EB] bg-[#F8F8FA] px-4 py-3 text-sm text-[#171717] placeholder-[#737373] transition-colors focus:border-[#0084FF] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0084FF] resize-y"
          />
          {errors.messages && (
            <p className="mt-1.5 text-xs text-[#DC2626] font-medium">{errors.messages}</p>
          )}
        </div>

        {/* Action Button - Blue Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-xs text-[#525252]">
            Direct email:{" "}
            <a
              href={`mailto:${COMPANY_DETAILS.contactEmail}`}
              className="font-semibold text-[#171717] underline decoration-[#E8E8EB] underline-offset-2 hover:text-[#0084FF]"
            >
              {COMPANY_DETAILS.contactEmail}
            </a>
          </p>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="h-12 w-full sm:w-auto px-8 font-semibold shadow-sm"
          >
            {isSubmitting ? (
              <span>Sending Inquiry...</span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
