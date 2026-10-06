import { useState } from "react";
import { m } from "framer-motion";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { Field, inputClass } from "./formFields";
import { sendToWhatsApp } from "../../utils/whatsapp";

const initialState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  meetingType: "Video Call",
  message: "",
};

const meetingTypes = ["Video Call", "Phone Call", "In-Person (Office)"];

// Overriding default input baseline to align with luxury scheme properties
const luxuryInputClass = `${inputClass} bg-[#060913] border-white/5 text-white placeholder-white/30 focus:border-[#D4AF37]/50 focus:ring-0 rounded-none transition-all duration-300 font-sans`;

const ConsultationForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      sendToWhatsApp("New consultation booking from the website", [
        ["Name", form.name],
        ["Email", form.email],
        ["Phone", form.phone],
        ["Preferred date", form.date],
        ["Preferred time", form.time],
        ["Meeting type", form.meetingType],
        ["Notes", form.message],
      ]);
      setStatus("success");
      setForm(initialState);
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
          WhatsApp has opened with your request — just press send and we'll confirm your slot shortly.
        </p>
        <button 
          onClick={() => setStatus("idle")} 
          className="inline-flex items-center justify-center bg-[#060913] border border-white/10 text-[#F5D76E] font-mono text-xs uppercase tracking-widest font-bold px-6 py-3 transition-all duration-300 hover:border-[#D4AF37]/50 hover:text-white"
        >
          Book another slot
        </button>
      </m.div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative bg-[#0A0F1A] border border-white/5 p-6 sm:p-8 flex flex-col gap-5 shadow-2xl overflow-hidden"
    >
      {/* Structural Framing Corner Accents */}
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

      <Field label={<span className="text-xs font-mono uppercase tracking-wider text-white/50">Phone</span>}>
        <input required name="phone" value={form.phone} onChange={handleChange} className={luxuryInputClass} placeholder="+91 98765 43210" />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={<span className="text-xs font-mono uppercase tracking-wider text-white/50">Preferred Date</span>}>
          <input required type="date" name="date" value={form.date} onChange={handleChange} className={`${luxuryInputClass} [color-scheme:dark]`} />
        </Field>
        <Field label={<span className="text-xs font-mono uppercase tracking-wider text-white/50">Preferred Time</span>}>
          <input required type="time" name="time" value={form.time} onChange={handleChange} className={`${luxuryInputClass} [color-scheme:dark]`} />
        </Field>
      </div>

      <Field label={<span className="text-xs font-mono uppercase tracking-wider text-white/50">Meeting Type</span>}>
        <div className="grid grid-cols-3 gap-3">
          {meetingTypes.map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setForm({ ...form, meetingType: type })}
              className={`px-3 py-2.5 rounded-none text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 border ${
                form.meetingType === type
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0A0F1A] border-transparent shadow-lg scale-[1.01]"
                  : "border-white/5 bg-[#060913] text-white/40 hover:text-[#F5D76E] hover:border-[#D4AF37]/30"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </Field>

      <Field label={<span className="text-xs font-mono uppercase tracking-wider text-white/50">What would you like to discuss?</span>}>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className={luxuryInputClass}
          placeholder="Briefly describe what you'd like to cover..."
        />
      </Field>

      <button 
        type="submit" 
        disabled={status === "sending"} 
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#0A0F1A] font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 shadow-xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 self-start disabled:opacity-50"
      >
        {status === "sending" ? <Loader2 size={14} className="animate-spin stroke-[2.5]" /> : <Send size={14} className="stroke-[2.5]" />}
        <span>{status === "sending" ? "Booking..." : "Book Consultation"}</span>
      </button>

      {status === "error" && <p className="text-xs font-mono tracking-wide text-red-400 mt-2">✦ Something went wrong. Please try again.</p>}
    </form>
  );
};

export default ConsultationForm;  