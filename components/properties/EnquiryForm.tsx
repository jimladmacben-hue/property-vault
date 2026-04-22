"use client";

import { useState } from "react";

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  agentName: string;
}

export default function EnquiryForm({ isOpen, onClose, agentName }: EnquiryFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white w-full max-w-md rounded-[24px] p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="text-[28px] font-bold text-[#000814] mb-2">Enquiry Form</h2>
        <p className="text-[#666] text-[16px] mb-8 leading-snug">
          Your enquiry goes straight to {agentName} — no middlemen.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-[16px] font-medium text-[#000814] mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-4 rounded-xl border border-[#D4C3A3] focus:outline-none focus:ring-2 focus:ring-[#D4C3A3]/50 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[16px] font-medium text-[#000814] mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="07048851136"
              className="w-full px-4 py-4 rounded-xl border border-[#D4C3A3] focus:outline-none focus:ring-2 focus:ring-[#D4C3A3]/50 transition-all placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[16px] font-medium text-[#000814] mb-2">Message</label>
            <textarea
              rows={4}
              placeholder="I am interested in this property..."
              className="w-full px-4 py-4 rounded-xl border border-[#D4C3A3] focus:outline-none focus:ring-2 focus:ring-[#D4C3A3]/50 transition-all placeholder:text-gray-400 resize-none"
            />
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="button"
              className="w-full bg-[#000814] text-white font-bold py-4 rounded-xl hover:bg-[#00122e] transition-colors text-[16px]"
            >
              Send enquiry
            </button>
            <button
              type="button"
              className="w-full bg-[#00c853] text-white font-bold py-4 rounded-xl hover:bg-[#00b34a] transition-colors flex items-center justify-center gap-2 text-[16px]"
            >
              Whatsapp agent
            </button>
          </div>

          <p className="text-center text-[14px] text-gray-500 mt-4">
            Your details are shared only with this agent
          </p>
        </form>
      </div>
    </div>
  );
}
