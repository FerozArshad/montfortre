import { FormEvent, useState } from "react";

type ToolStep = "address" | "details" | "lock" | "error" | "success";

const PROPERTY_TYPES = [
  "Single-Family",
  "Condo",
  "Multi-Family",
  "Townhouse",
  "Mobile/Manufactured",
  "Timeshare",
  "Land",
  "Commercial",
  "Other",
] as const;

const BED_OPTIONS = [
  { value: "1", label: "1 Bedroom" },
  { value: "2", label: "2 Bedrooms" },
  { value: "3", label: "3 Bedrooms" },
  { value: "4", label: "4 Bedrooms" },
  { value: "5", label: "5 Bedrooms" },
  { value: "6", label: "6 Bedrooms" },
  { value: "7", label: "7 Bedrooms" },
  { value: "8", label: "8 Bedrooms" },
  { value: "9", label: "9 Bedrooms" },
  { value: "10", label: "10 Bedrooms" },
  { value: "11", label: "More than 10 Beds" },
] as const;

const BATH_OPTIONS = [
  { value: "1", label: "1 Bathroom" },
  { value: "1.5", label: "1.5 Bathrooms" },
  { value: "2", label: "2 Bathrooms" },
  { value: "2.5", label: "2.5 Bathrooms" },
  { value: "3", label: "3 Bathrooms" },
  { value: "3.5", label: "3.5 Bathrooms" },
  { value: "4", label: "4 Bathrooms" },
  { value: "4.5", label: "4.5 Bathrooms" },
  { value: "5", label: "5 Bathrooms" },
  { value: "6", label: "More than 5 Bathrooms" },
] as const;

const CONDITIONS = ["Poor", "Fair", "Good", "Great", "Excellent"] as const;

const INTERESTS = [
  "I need to sell soon",
  "I need to sell so that I can buy a home",
  "I am thinking about selling",
  "I need to refinance",
  "I need a mortgage",
  "Just curious",
] as const;

const LIVE_TOOL_URL = "https://montfortre.com/home-valuation/";

const emptyLead = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export default function HomeValuationTool() {
  const [step, setStep] = useState<ToolStep>("address");
  const [waiting, setWaiting] = useState(false);
  const [showEmailFields, setShowEmailFields] = useState(false);
  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [footage, setFootage] = useState("");
  const [condition, setCondition] = useState("");
  const [interest, setInterest] = useState("");
  const [lead, setLead] = useState(emptyLead);

  function resetTool() {
    setStep("address");
    setWaiting(false);
    setShowEmailFields(false);
    setAddress("");
    setUnit("");
    setPropertyType("");
    setBeds("");
    setBaths("");
    setFootage("");
    setCondition("");
    setInterest("");
    setLead(emptyLead);
  }

  function handleAddressSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!address.trim()) {
      return;
    }
    setStep("details");
  }

  function handleGenerate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!propertyType || !beds || !baths || !condition || !interest) {
      return;
    }
    setWaiting(true);
    window.setTimeout(() => {
      setWaiting(false);
      setShowEmailFields(false);
      setStep("lock");
    }, 900);
  }

  function handleLockSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!lead.email.trim()) {
      return;
    }
    setShowEmailFields(true);
    setStep("error");
  }

  function handleErrorSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!lead.email.trim()) {
      return;
    }
    setStep("success");
  }

  function socialButtons(onEmail: () => void) {
    return (
      <div className="hv-social">
        <a className="hv-social-btn" href={LIVE_TOOL_URL} target="_blank" rel="noopener noreferrer">
          Continue With Facebook
        </a>
        <a className="hv-social-btn" href={LIVE_TOOL_URL} target="_blank" rel="noopener noreferrer">
          Continue with Google
        </a>
        <button className="hv-social-btn" type="button" onClick={onEmail}>
          Continue with Email
        </button>
      </div>
    );
  }

  function leadFields() {
    return (
      <div className="hv-lead-fields">
        <div className="hv-lead-names">
          <input
            className="hv-field"
            type="text"
            name="first_name"
            placeholder="First name"
            autoComplete="given-name"
            value={lead.firstName}
            onChange={(event) => setLead({ ...lead, firstName: event.target.value })}
          />
          <input
            className="hv-field"
            type="text"
            name="last_name"
            placeholder="Last name"
            autoComplete="family-name"
            value={lead.lastName}
            onChange={(event) => setLead({ ...lead, lastName: event.target.value })}
          />
        </div>
        <input
          className="hv-field"
          type="email"
          name="email"
          placeholder="Your email address *"
          autoComplete="email"
          required
          value={lead.email}
          onChange={(event) => setLead({ ...lead, email: event.target.value })}
        />
        <input
          className="hv-field"
          type="text"
          name="phone"
          placeholder="Phone number"
          autoComplete="tel"
          value={lead.phone}
          onChange={(event) => setLead({ ...lead, phone: event.target.value })}
        />
      </div>
    );
  }

  return (
    <div className="hv-tool">
      {waiting ? (
        <p className="hv-wait">Please wait while we generate your report</p>
      ) : null}

      {step === "address" ? (
        <form className="hv-form" onSubmit={handleAddressSearch}>
          <div className="hv-address-row">
            <input
              className="hv-field hv-field--address"
              type="text"
              autoComplete="off"
              placeholder="Enter your street, city, state, and zip"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
            <input
              className="hv-field hv-field--unit"
              type="text"
              autoComplete="off"
              placeholder="Unit #"
              value={unit}
              onChange={(event) => setUnit(event.target.value)}
            />
            <button className="tf-hero-book hv-submit" type="submit" title="Search">
              Search
            </button>
          </div>
        </form>
      ) : null}

      {step === "details" ? (
        <form className="hv-form" onSubmit={handleGenerate}>
          <div className="hv-details-grid">
            <label className="hv-select-wrap">
              <span className="hv-sr">Property Type</span>
              <select
                className="hv-field"
                name="home_valuation_property_type"
                value={propertyType}
                onChange={(event) => setPropertyType(event.target.value)}
                required
              >
                <option value="">Property Type</option>
                {PROPERTY_TYPES.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="hv-select-wrap">
              <span className="hv-sr">Beds</span>
              <select
                className="hv-field"
                name="home_valuation_beds"
                value={beds}
                onChange={(event) => setBeds(event.target.value)}
                required
              >
                <option value="">Beds</option>
                {BED_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="hv-select-wrap">
              <span className="hv-sr">Baths</span>
              <select
                className="hv-field"
                name="home_valuation_baths"
                value={baths}
                onChange={(event) => setBaths(event.target.value)}
                required
              >
                <option value="">Baths</option>
                {BATH_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <input
              className="hv-field"
              type="text"
              name="home_valuation_footage"
              placeholder="0"
              value={footage}
              onChange={(event) => setFootage(event.target.value)}
            />
            <label className="hv-select-wrap">
              <span className="hv-sr">Condition</span>
              <select
                className="hv-field"
                name="home_valuation_condition"
                value={condition}
                onChange={(event) => setCondition(event.target.value)}
                required
              >
                <option value="">Condition</option>
                {CONDITIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="hv-select-wrap">
              <span className="hv-sr">Interest</span>
              <select
                className="hv-field"
                name="home_valuation_interested"
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
                required
              >
                <option value="">Interest</option>
                {INTERESTS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button className="tf-hero-book hv-submit" type="submit" title="Generate Report">
            Generate Report
          </button>
        </form>
      ) : null}

      {step === "lock" ? (
        <form className="hv-panel" onSubmit={handleLockSubmit}>
          <h2>Get Your Free Report</h2>
          <p>
            Enter in your information below to view your full report. Don&apos;t worry, we will also email you a copy as
            well so you have it saved!
          </p>
          {socialButtons(() => setShowEmailFields(true))}
          {showEmailFields ? leadFields() : null}
          {showEmailFields ? (
            <button className="tf-hero-book hv-submit" type="submit" title="">
              I Am Ready for My Home&apos;s Value!
            </button>
          ) : null}
        </form>
      ) : null}

      {step === "error" ? (
        <form className="hv-panel" onSubmit={handleErrorSubmit}>
          <h2>Uh Oh!</h2>
          <p>
            There doesn&apos;t seem to be an automatic way to determine the price of your home. If you enter in your
            information below we can create a personalized report just for you!
          </p>
          {socialButtons(() => setShowEmailFields(true))}
          {showEmailFields ? leadFields() : null}
          {showEmailFields ? (
            <button className="tf-hero-book hv-submit" type="submit">
              Send Me My Report
            </button>
          ) : null}
        </form>
      ) : null}

      {step === "success" ? (
        <div className="hv-panel">
          <h2>Thanks for requesting a free home valuation!</h2>
          <p>
            Please allow up to 48hrs for us to research and deliver your personal comprehensive analysis. If you have
            any questions in the meantime, feel free to give us a call or drop us a note.
          </p>
          <button className="tf-hero-book hv-submit" type="button" onClick={resetTool}>
            Estimate New Address
          </button>
          <div className="hv-sell">
            <h2>Interested in selling your home?</h2>
            <p>
              Get a free in-depth home analysis by a local expert. <span>(it&apos;s free)</span>
            </p>
            <a className="tf-hero-book" href="/whats-my-home-worth/">
              I Want To Speak With An Expert
            </a>
            <p>
              or give us a call at <a href="tel:+19084146006">(908) 414-6006</a>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
