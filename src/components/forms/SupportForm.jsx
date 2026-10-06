import { useState } from "react";
import { m } from "framer-motion";
import { CheckCircle2, Paperclip, Send, Loader2 } from "lucide-react";
import { Field, inputClass } from "./formFields";
import { sendToWhatsApp } from "../../utils/whatsapp";

const initialState = {
  name: "",
  email: "",
  issueType: "Technical Issue",
  priority: "Medium",
  description: "",
};

const issueTypes = ["Technical Issue", "Billing Query", "Tax Filing Query", "Account Access", "Other"];

// Configured tracking markers using custom premium typography rules instead of generic blue classes
const priorities = [
  { label: "Low", color: "text-white/40 border-white/5" },
  { label: "Medium", color: "text-[#F5D76E]/80 border-white/5" },
  { label: "High", color: "text-[#D4AF37] border-[#D4AF37]/20" },
  { label: "Urgent", color: "text-red-500 border-red-900/40 bg-red-950/10" },
];

// Luxury Dark-Gold architecture framework inputs class overrides
const luxuryInputClass = `${inputClass} bg-[#060913] border-white/5 text-white placeholder-white/20 focus:border-[#D4AF37]/50 focus:ring-0 rounded-none transition-all duration-300 font-sans`;

const SupportForm = () => {
  const [form, setForm] = useState(initialState);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      sendToWhatsApp("New support ticket from the website", [
        ["Name", form.name],
        ["Email", form.email],
        ["Issue type", form.issueType],
        ["Priority", form.priority],
        ["Description", form.description],
        ["Attachment", fileName ? `${fileName} (please share it in this chat)` : ""],
      ]);
      setStatus("success");
      setForm(initialState);
      setFileName("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <m.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="relative bg-[#0A0F1A] border border-white/5 p-10 text-center shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]" />
        <CheckCircle2 size={40} className="text-[#D4AF37] mx-auto mb-4" />
        <h3 className="font-serif text-xl font-bold text-white mb-2 tracking-wide">Almost there!</h3>
        <p className="text-white/60 text-sm mb-6 font-sans">
          WhatsApp has opened with your ticket — just press send and our support team will respond based on the priority you selected.
        </p>
        <button 
          onClick={() => setStatus("idle")} 
          className="inline-flex items-center justify-center bg-[#060913] border border-white/10 text-[#F5D76E] font-mono text-xs uppercase tracking-widest font-bold px-6 py-3 transition-all duration-300 hover:border-[#D4AF37]/50 hover:text-white"
        >
          Submit another ticket
        </button>
      </m.div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative bg-[#0A0F1A] border border-white/5 p-6 sm:p-8 flex flex-col gap-5 shadow-2xl overflow-hidden"
    >
      {/* Heritage Architecture Corner Elements */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/30" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37]/30" />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={<span className="text-xs font-mono uppercase tracking-wider text-white/50">Full Name</span>}>
          <input required name="name" value={form.name} onChange={handleChange} className={luxuryInputClass} placeholder="Your name" />
        </Field>
        <Field label={<span className="text-xs font-mono uppercase tracking-wider text-white/50">Email</span>}>
          <input required type="email" name="email" value={form.email} onChange={handleChange} className={luxuryInputClass} placeholder="you@company.com" />
        </Field>
      </div>

      <Field label={<span className="text-xs font-mono uppercase tracking-wider text-white/50">Issue Type</span>}>
        <select name="issueType" value={form.issueType} onChange={handleChange} className={luxuryInputClass}>
          {issueTypes.map((t) => (
            <option key={t} value={t} className="bg-[#0A0F1A] text-white">{t}</option>
          ))}
        </select>
      </Field>

      <Field label={<span className="text-xs font-mono uppercase tracking-wider text-white/50">Priority Level</span>}>
        <div className="grid grid-cols-4 gap-3">
          {priorities.map((p) => (
            <button
              type="button"
              key={p.label}
              onClick={() => setForm({ ...form, priority: p.label })}
              className={`px-3 py-2.5 rounded-none text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 border ${
                form.priority === p.label
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0A0F1A] border-transparent shadow-lg scale-[1.01]"
                  : `${p.color} bg-[#060913] hover:text-[#F5D76E]`
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </Field>

      <Field label={<span className="text-xs font-mono uppercase tracking-wider text-white/50">Describe the issue</span>}>
        <textarea
          required
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={5}
          className={luxuryInputClass}
          placeholder="What's happening? Include any relevant details or error messages."
        />
      </Field>

      <Field label={<span className="text-xs font-mono uppercase tracking-wider text-white/50">Attachment (optional)</span>}>
        <label className="flex items-center gap-3 rounded-none bg-[#060913] border border-dashed border-white/10 px-4 py-3.5 text-xs font-mono text-white/40 cursor-pointer hover:border-[#D4AF37]/40 hover:text-white/60 transition-all duration-300">
          <Paperclip size={14} className="flex-shrink-0 text-[#D4AF37]" />
          <span className="truncate">{fileName || "Click to attach a screenshot or file"}</span>
          <input
            type="file"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
        </label>
      </Field>

      <button 
        type="submit" 
        disabled={status === "sending"} 
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0A0F1A] font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 shadow-xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 self-start disabled:opacity-50"
      >
        {status === "sending" ? <Loader2 size={14} className="animate-spin stroke-[2.5]" /> : <Send size={14} className="stroke-[2.5]" />}
        <span>{status === "sending" ? "Submitting..." : "Submit Ticket"}</span>
      </button>

      {status === "error" && (
        <p className="text-xs font-mono tracking-wide text-red-400 mt-2">✦ Something went wrong. Please try again.</p>
      )}
    </form>
  );
};

export default SupportForm;