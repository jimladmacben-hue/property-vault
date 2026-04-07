"use client";
import { useState } from "react";
import GetStarted from "./steps/GetStarted";
import Step1, { Step1Data } from "@/components/list-property/steps/Step1";
import Step2, { Step2Data } from "@/components/list-property/steps/Step2";
import Step3, { Step3Data } from "@/components/list-property/steps/Step3";
// import Step4 from "./steps/Step4";

interface FormData {
  step1: Step1Data;
  step2: Step2Data;
  step3: Step3Data;
  // step4: Step4Data;
}

const defaultFormData: FormData = {
  step1: {
    listingPurpose: "",
    listingHeadline: "",
    propertyType: "",
  },
  step2: {
    state: "",
    lga: "",
    cityNeighbourhood: "",
    streetAddress: "",
    nearestLandmark: "",
  },
  step3: {
    photos: [],
  },
};

export default function ListPropertyForm() {
  const [step, setStep] = useState(0);
  const [listingType, setListingType] = useState("For sale");
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleGetStarted = () => {
    setStep(1);
  };

  const updateStep1 = (data: Step1Data) =>
    setFormData((prev) => ({ ...prev, step1: data }));

  const updateStep2 = (data: Step2Data) =>
    setFormData((prev) => ({ ...prev, step2: data }));

  const updateStep3 = (data: Step3Data) =>
    setFormData((prev) => ({ ...prev, step3: data }));

  const handleSaveDraft = () => {
    console.log("Saving draft…", formData);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] pt-24 pb-16 px-4">
      {step === 0 && (
        <GetStarted
          listingType={listingType}
          setListingType={setListingType}
          onGetStarted={handleGetStarted}
        />
      )}
      {step === 1 && (
        <Step1
          data={formData.step1}
          onChange={updateStep1}
          onNext={() => setStep(2)}
          onBack={() => setStep(0)}
          onSaveDraft={handleSaveDraft}
        />
      )}
      {step === 2 && (
        <Step2
          data={formData.step2}
          onChange={updateStep2}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
          onSaveDraft={handleSaveDraft}
        />
      )}
      {step === 3 && (
        <Step3
          data={formData.step3}
          onChange={updateStep3}
          onNext={() => setStep(4)}
          onBack={() => setStep(2)}
          onSaveDraft={handleSaveDraft}
        />
      )}
      {/* step === 4 && (
        <Step4
          data={formData.step4}
          onChange={(data) => setFormData((prev) => ({ ...prev, step4: data }))}
          onBack={() => setStep(3)}
          onSaveDraft={handleSaveDraft}
        />
      ) */}
    </div>
  );
}
