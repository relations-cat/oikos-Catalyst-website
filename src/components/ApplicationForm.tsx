"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const RELATIONS_EMAIL = "relations-cat@oikos-international.org";

const fundingOptions = ["<50k", "<100k", "<250k", ">250k"];
const hearAboutOptions = [
  "Search Engine",
  "Social Media",
  "LinkedIn",
  "Startup Network",
  "Friend or Family",
  "Other",
];

type FormState = {
  companyName: string;
  companyHomepage: string;
  companyLinkedin: string;
  foundingYear: string;
  founders: string;
  employees: string;
  industry: string;
  description: string;
  aim: string;
  problems: string;
  status: string;
  email: string;
  phone: string;
  hearAboutUs: string;
  otherDetails: string;
};

const initialState: FormState = {
  companyName: "",
  companyHomepage: "",
  companyLinkedin: "",
  foundingYear: "",
  founders: "",
  employees: "",
  industry: "",
  description: "",
  aim: "",
  problems: "",
  status: "",
  email: "",
  phone: "",
  hearAboutUs: "",
  otherDetails: "",
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputClasses =
  "w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

export default function ApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [funding, setFunding] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleFunding(option: string) {
    setFunding((current) =>
      current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option],
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const required: [string, string][] = [
      [form.companyName, "Company name"],
      [form.companyLinkedin, "Company LinkedIn profile"],
      [form.foundingYear, "Founding year"],
      [form.founders, "Founders & co-founders"],
      [form.employees, "Number of employees"],
      [form.industry, "Industry"],
      [form.description, "Startup description"],
      [form.aim, "Startup aim"],
      [form.problems, "Problems you solve"],
      [form.status, "Current status/progress"],
      [form.email, "Email"],
    ];
    const missing = required.find(([value]) => !value.trim());
    if (missing) {
      setError(`Please fill in: ${missing[1]}`);
      return;
    }

    const bodyLines = [
      `Company name: ${form.companyName}`,
      `Company homepage: ${form.companyHomepage || "N/A"}`,
      `Company LinkedIn: ${form.companyLinkedin}`,
      `Founding year: ${form.foundingYear}`,
      `Founders & co-founders: ${form.founders}`,
      `Funding received: ${funding.length ? funding.join(", ") : "N/A"}`,
      `Employees: ${form.employees}`,
      `Industry: ${form.industry}`,
      `Startup description: ${form.description}`,
      `Aim of the startup: ${form.aim}`,
      `Problems solved: ${form.problems}`,
      `Current status/progress: ${form.status}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "N/A"}`,
      `How they heard about us: ${form.hearAboutUs || "N/A"}`,
      `Other details: ${form.otherDetails || "N/A"}`,
    ];

    const subject = encodeURIComponent(
      `oikos Catalyst Application: ${form.companyName}`,
    );
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${RELATIONS_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Field label="What is your company's name?" required>
        <input
          type="text"
          className={inputClasses}
          value={form.companyName}
          onChange={(e) => update("companyName", e.target.value)}
        />
      </Field>

      <Field label="What is your company's homepage?">
        <input
          type="text"
          className={inputClasses}
          value={form.companyHomepage}
          onChange={(e) => update("companyHomepage", e.target.value)}
        />
      </Field>

      <Field label="What is your company's LinkedIn profile?" required>
        <input
          type="text"
          className={inputClasses}
          value={form.companyLinkedin}
          onChange={(e) => update("companyLinkedin", e.target.value)}
        />
      </Field>

      <Field label="Founding year" required>
        <input
          type="text"
          className={inputClasses}
          value={form.foundingYear}
          onChange={(e) => update("foundingYear", e.target.value)}
        />
      </Field>

      <Field label="Founders & co-founders (Full name + LinkedIn, Full name + LinkedIn, ...)" required>
        <textarea
          rows={3}
          className={inputClasses}
          value={form.founders}
          onChange={(e) => update("founders", e.target.value)}
        />
      </Field>

      <Field label="How much funding have you received?">
        <div className="flex flex-wrap gap-3">
          {fundingOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-sm"
            >
              <input
                type="checkbox"
                checked={funding.includes(option)}
                onChange={() => toggleFunding(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </Field>

      <Field label="How many employees do you have?" required>
        <input
          type="text"
          className={inputClasses}
          value={form.employees}
          onChange={(e) => update("employees", e.target.value)}
        />
      </Field>

      <Field label="What industry are you in?" required>
        <input
          type="text"
          className={inputClasses}
          value={form.industry}
          onChange={(e) => update("industry", e.target.value)}
        />
      </Field>

      <Field label="Describe the startup shortly" required>
        <textarea
          rows={3}
          className={inputClasses}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
        />
      </Field>

      <Field label="What is the aim of the startup?" required>
        <textarea
          rows={3}
          className={inputClasses}
          value={form.aim}
          onChange={(e) => update("aim", e.target.value)}
        />
      </Field>

      <Field label="What problems do you solve?" required>
        <textarea
          rows={3}
          className={inputClasses}
          value={form.problems}
          onChange={(e) => update("problems", e.target.value)}
        />
      </Field>

      <Field label="What is your current status/progress?" required>
        <textarea
          rows={3}
          className={inputClasses}
          value={form.status}
          onChange={(e) => update("status", e.target.value)}
        />
      </Field>

      <Field label="Email" required>
        <input
          type="email"
          className={inputClasses}
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </Field>

      <Field label="Phone">
        <input
          type="tel"
          className={inputClasses}
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </Field>

      <Field label="How did you hear about us?">
        <select
          className={inputClasses}
          value={form.hearAboutUs}
          onChange={(e) => update("hearAboutUs", e.target.value)}
        >
          <option value="">Select one option</option>
          {hearAboutOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Other details">
        <textarea
          rows={3}
          className={inputClasses}
          value={form.otherDetails}
          onChange={(e) => update("otherDetails", e.target.value)}
        />
      </Field>

      {error && <p className="text-sm font-semibold text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light sm:w-auto"
      >
        Submit Application
      </button>

      {submitted && (
        <p className="text-sm text-foreground/70">
          Your email app should now be open with your application ready to send
          to {RELATIONS_EMAIL}. Please review it and hit send to complete your
          application.
        </p>
      )}
    </form>
  );
}
