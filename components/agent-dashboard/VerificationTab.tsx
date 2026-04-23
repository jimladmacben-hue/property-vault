"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  Building2, 
  User, 
  UploadCloud, 
  CheckCircle2, 
  ChevronRight, 
  AlertCircle,
  FileCheck,
  Lock,
} from "lucide-react";

type AgentType = "company" | "individual";
type Step = 1 | 2;

interface VerificationData {
  agentType: AgentType;
  rcNumber?: string;
  cacDocument?: File | null;
  ninNumber?: string;
  identityDocument?: File | null;
  directorName?: string;
  directorId?: File | null;
}

export default function VerificationTab() {
  const [step, setStep] = useState<Step>(1);
  const [agentType, setAgentType] = useState<AgentType>("company");
  const [status, setStatus] = useState<"initial" | "pending" | "verified" | "rejected">("initial");
  const [formData, setFormData] = useState<Partial<VerificationData>>({
    agentType: "company",
  });

  const handleFileChange = (field: keyof VerificationData, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("pending");
  };

  if (status === "pending") {
    return (
      <div className="bg-white rounded-[2rem] border border-gray-100 p-8 sm:p-12 text-center shadow-sm animate-in fade-in zoom-in duration-500">
        <div className="relative w-20 h-20 sm:w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-amber-100 rounded-full animate-ping opacity-25"></div>
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-amber-50 text-[#F5A623] rounded-full flex items-center justify-center shadow-inner">
            <ShieldCheck size={40} className="sm:w-12 sm:h-12" strokeWidth={1.5} />
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#1a1f3c] mb-3">Verification Under Review</h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-sm mx-auto mb-10 leading-relaxed">
          We&apos;re currently verifying your documents. This process typically takes **24-48 hours**. We&apos;ll notify you immediately once approved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setStatus("initial")}
            className="w-full sm:w-auto px-8 py-3 bg-gray-50 text-gray-600 font-bold rounded-2xl hover:bg-gray-100 transition-all"
          >
            Go Back
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-[#1a1f3c] text-white font-bold rounded-2xl shadow-lg shadow-amber-900/20 hover:scale-[1.02] active:scale-95 transition-all">
            View Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start animate-in fade-in duration-700">
      {/* Main Verification Form */}
      <div className="lg:col-span-8 bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
        {/* Header with Progress */}
        <div className="px-6 sm:px-8 py-6 border-b border-gray-50 bg-gray-50/30">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#1a1f3c]">Account Verification</h2>
              <p className="text-xs sm:text-sm text-gray-500">Complete your KYC to unlock premium features</p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 rounded-full border border-amber-100">
              <Lock size={12} />
              <span className="text-[10px] font-black uppercase tracking-wider">Secure</span>
            </div>
          </div>
          
          {/* Step Indicators */}
          <div className="flex items-center gap-3 sm:gap-4">
            <StepIndicator current={step} target={1} label="Identity" />
            <div className={`h-[2px] flex-1 rounded-full transition-all duration-500 ${step === 2 ? "bg-[#F5A623] shadow-[0_0_8px_rgba(245,166,35,0.4)]" : "bg-gray-200"}`} />
            <StepIndicator current={step} target={2} label="Documents" />
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {step === 1 ? (
            <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-4">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">I am verifying as a...</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TypeCard 
                    selected={agentType === "company"}
                    onClick={() => setAgentType("company")}
                    icon={<Building2 size={24} />}
                    title="Registered Company"
                    desc="I have a business registered with CAC"
                  />
                  <TypeCard 
                    selected={agentType === "individual"}
                    onClick={() => setAgentType("individual")}
                    icon={<User size={24} />}
                    title="Independent Agent"
                    desc="Individual professional/freelancer"
                  />
                </div>
              </div>

              {agentType === "company" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-gray-50">
                  <InputField label="RC Number" placeholder="e.g. RC 1234567" />
                  <InputField label="Director Name" placeholder="Full name of a director" />
                </div>
              ) : (
                <div className="pt-6 border-t border-gray-50">
                  <InputField label="NIN Number" placeholder="11-digit National Identity Number" />
                </div>
              )}

              <button 
                onClick={() => setStep(2)}
                className="w-full py-4 bg-[#1a1f3c] text-white font-black rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-amber-900/20 hover:bg-[#2a3060] active:scale-[0.98] transition-all"
              >
                Continue to Upload <ChevronRight size={18} />
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Required Documents</label>
                  <button onClick={() => setStep(1)} className="text-xs font-bold text-[#F5A623] hover:underline flex items-center gap-1">
                    Change Type
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {agentType === "company" ? (
                    <>
                      <FileUploadCard 
                        label="CAC Certificate" 
                        hint="Official registration document"
                        onFileSelect={(f) => handleFileChange("cacDocument", f)}
                      />
                      <FileUploadCard 
                        label="Director's Valid ID" 
                        hint="Passport or NIN Slip"
                        onFileSelect={(f) => handleFileChange("directorId", f)}
                      />
                    </>
                  ) : (
                    <>
                      <FileUploadCard 
                        label="Identity Document" 
                        hint="NIN Slip or Government ID"
                        onFileSelect={(f) => handleFileChange("identityDocument", f)}
                      />
                      <div className="p-5 sm:p-6 bg-amber-50/50 rounded-3xl border border-amber-100 flex flex-col justify-center text-center sm:text-left">
                        <p className="text-sm font-bold text-amber-900 mb-1">Upload Guidelines</p>
                        <ul className="text-[10px] sm:text-[11px] text-amber-700/70 space-y-1.5">
                          <li className="flex items-center gap-1.5">• Ensure all text is legible</li>
                          <li className="flex items-center gap-1.5">• No glare or blur in photos</li>
                          <li className="flex items-center gap-1.5">• Document must be valid</li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-50">
                  <button 
                    onClick={() => setStep(1)}
                    className="order-2 sm:order-1 flex-1 py-4 bg-gray-50 text-gray-600 font-black rounded-2xl transition-all hover:bg-gray-100"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="order-1 sm:order-2 flex-[2] py-4 bg-[#F5A623] text-white font-black rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-amber-600/20 hover:bg-amber-600 active:scale-[0.98] transition-all"
                  >
                    Submit Application <FileCheck size={18} />
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 flex-shrink-0 shadow-sm">
                    <Lock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#1a1f3c] mb-1">Your data is safe & private</p>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      We use industry-standard encryption to protect your sensitive documents. Your personal information (NIN, IDs) is strictly used for verification purposes.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Benefits Sidebar */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-[#1a1f3c] text-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-amber-900/10 overflow-hidden relative group">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
          <div className="relative z-10">
            <h3 className="text-lg font-black mb-6">Verification Perks</h3>
            <div className="space-y-6">
              <BenefitItem 
                icon={<CheckCircle2 size={18} className="text-green-400" />}
                title="Trust Badge"
                desc="A verified badge increases buyer response by up to 45%."
              />
              <BenefitItem 
                icon={<Building2 size={18} className="text-amber-400" />}
                title="Search Boost"
                desc="Verified agents appear at the top of search results."
              />
              <BenefitItem 
                icon={<UploadCloud size={18} className="text-blue-400" />}
                title="Advanced Tools"
                desc="Unlock premium listing insights and analytics."
              />
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-[1.5rem] sm:rounded-[2rem] p-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0">
              <AlertCircle size={20} />
            </div>
            <div>
              <p className="text-sm font-black text-amber-900 mb-1">Helpful Tip</p>
              <p className="text-xs text-amber-700/80 leading-relaxed">Ensure your RC Number matches exactly as it appears on your CAC certificate for faster approval.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepIndicator({ current, target, label }: { current: number; target: number; label: string }) {
  const isActive = current >= target;
  const isCompleted = current > target;

  return (
    <div className="flex items-center gap-2">
      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-[10px] sm:text-xs font-black transition-all duration-300 ${
        isActive 
          ? "bg-[#F5A623] text-white shadow-lg shadow-amber-600/20" 
          : "bg-gray-100 text-gray-400"
      }`}>
        {isCompleted ? <CheckCircle2 size={14} className="sm:w-4 sm:h-4" /> : target}
      </div>
      <span className={`text-[10px] sm:text-xs font-bold whitespace-nowrap transition-colors ${isActive ? "text-[#1a1f3c]" : "text-gray-400"}`}>
        {label}
      </span>
    </div>
  );
}

function TypeCard({ selected, onClick, icon, title, desc }: { selected: boolean; onClick: () => void; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-5 sm:p-6 rounded-3xl border-2 text-left transition-all group relative overflow-hidden ${
        selected 
          ? "border-[#F5A623] bg-amber-50/20 ring-4 ring-amber-50" 
          : "border-gray-100 hover:border-gray-200 hover:bg-gray-50/50"
      }`}
    >
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-4 transition-all ${
        selected ? "bg-[#F5A623] text-white shadow-lg shadow-amber-600/20" : "bg-gray-100 text-gray-400 group-hover:text-[#F5A623]"
      }`}>
        {icon}
      </div>
      <p className={`text-xs sm:text-sm font-black mb-1 transition-colors ${selected ? "text-amber-900" : "text-[#1a1f3c]"}`}>{title}</p>
      <p className="text-[10px] sm:text-[11px] text-gray-400 leading-relaxed">{desc}</p>
      {selected && (
        <div className="absolute top-4 right-4 text-[#F5A623]">
          <CheckCircle2 size={16} />
        </div>
      )}
    </button>
  );
}

function InputField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest">{label}</label>
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full px-5 py-3.5 sm:py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#F5A623] focus:ring-4 focus:ring-amber-50 outline-none transition-all text-xs sm:text-sm font-medium"
      />
    </div>
  );
}

function FileUploadCard({ label, hint, onFileSelect }: { label: string; hint: string; onFileSelect: (f: File | null) => void }) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="space-y-2">
      <label className="text-[10px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest">{label}</label>
      <div className="relative group">
        <input 
          type="file" 
          onChange={(e) => {
            const f = e.target.files?.[0] || null;
            setFile(f);
            onFileSelect(f);
          }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
        />
        <div className={`w-full p-6 sm:p-8 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center text-center transition-all ${
          file 
            ? "border-green-300 bg-green-50/30 shadow-inner" 
            : "border-gray-100 group-hover:border-amber-300 group-hover:bg-amber-50/20"
        }`}>
          {file ? (
            <div className="animate-in zoom-in duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                <FileCheck size={20} className="sm:w-6 sm:h-6" />
              </div>
              <p className="text-[10px] sm:text-xs font-black text-green-900 max-w-[120px] sm:max-w-[150px] truncate mx-auto mb-1">{file.name}</p>
              <button 
                type="button" 
                onClick={(e) => { e.stopPropagation(); setFile(null); onFileSelect(null); }}
                className="text-[9px] sm:text-[10px] font-black text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ) : (
            <>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center group-hover:bg-amber-100 group-hover:text-[#F5A623] transition-colors mb-3">
                <UploadCloud size={20} className="sm:w-6 sm:h-6" />
              </div>
              <p className="text-[10px] sm:text-xs font-black text-[#1a1f3c] mb-1">Select File</p>
              <p className="text-[9px] sm:text-[10px] text-gray-400">{hint}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs sm:text-sm font-black mb-1">{title}</p>
        <p className="text-[10px] sm:text-xs text-white/50 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
