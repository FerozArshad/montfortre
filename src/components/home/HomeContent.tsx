import ResourcesSection from "../shared/ResourcesSection";

export default function HomeContent() {
  return (
    <>
      <section data-screen-label="Hero" style={{ position: "relative", background: "#0F1729", overflow: "hidden" }}>
        <img src="https://assets.agentfire3.com/uploads/sites/312/2026/06/Brooklyn-Heights-Real-Estate.png" alt="Brooklyn Heights brownstone street" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 38%", display: "block" }} width="1536" height="1024" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(96deg, rgba(10,9,8,0.68) 0%, rgba(10,9,8,0.4) 42%, rgba(10,9,8,0.1) 68%, rgba(10,9,8,0.34) 100%)" }}></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,9,8,0.42) 0%, rgba(10,9,8,0) 22%)" }}></div>

        <div style={{ position: "relative", zIndex: 2, padding: "72px 64px 40px", display: "grid", gridTemplateColumns: "620px 1fr", gap: "48px", alignItems: "center", maxWidth: "1440px", margin: "0 auto", minHeight: "calc(100vh - 80px)" }}>
         <div style={{ animation: "v4-in 0.65s ease both", paddingBottom: "64px" }}>
          <div style={{ position: "relative", background: "#F9F6E6", border: "1px solid rgba(201,138,44,0.55)", borderRadius: "16px", boxShadow: "0 40px 90px rgba(17,59,95,0.4), inset 0 1px 0 rgba(255,255,255,0.6)", padding: "34px 38px 84px" }}>

           <div style={{ fontSize: "11.5px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52677A" }}>Buyer representation at no cost to you</div>

           <h1 style={{ fontWeight: 900, fontSize: "38px", lineHeight: 1.26, letterSpacing: "0.004em", wordSpacing: "0.06em", textTransform: "uppercase", color: "#0F1729", margin: "16px 0 0", textWrap: "pretty" }}>
            New York realtor buying assistance to <span style={{ background: "#C98A2C", color: "#0F1729", padding: "0 6px" }}>avoid overpaying</span> for real estate
           </h1>

           <p style={{ fontSize: "16.5px", lineHeight: 1.7, color: "#52677A", margin: "18px 0 0", textWrap: "pretty" }}>
            We'll make sure you make a smart real estate purchase by saving money and avoid owning real estate with maintenance and violation issues.
           </p>

           <div style={{ height: "1px", background: "#E0D9B8", margin: "26px 0 22px" }}></div>

           <div style={{ display: "flex", gap: "12px" }}>
            <a href="https://calendly.com/montfort" style={{ flex: "1 1 auto", display: "flex", alignItems: "center", justifyContent: "center", background: "#113B5F", color: "#F9F6E6", fontSize: "15.5px", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", padding: "16px 24px", borderRadius: "10px", minHeight: "54px", whiteSpace: "nowrap" }} {...{ "style-hover": "background:#C98A2C; color:#113B5F" }}>Book Now</a>
            <a href="tel:646-970-1078" style={{ flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #113B5F", color: "#113B5F", fontSize: "15.5px", fontWeight: 800, letterSpacing: "0.02em", padding: "14px 24px", borderRadius: "10px", minHeight: "54px", whiteSpace: "nowrap" }} {...{ "style-hover": "background:#F5EECB; color:#113B5F" }}>646-970-1078</a>
           </div><form className="lead-idx-form" style={{ marginTop: "12px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "stretch" }} {...{ "onsubmit": "event.preventDefault(); window.open('https://stanley.olridx.com/Search/'+this.searchtype.value,'_blank')" }}>
      <div style={{ flex: "1 1 auto", display: "flex", minHeight: "54px", border: "2px solid #113B5F", borderRadius: "10px", background: "#fff" }}>
      <div className="lif-dd" style={{ position: "relative", display: "flex", alignItems: "stretch" }}>
      <input type="hidden" name="searchtype" value="Sales" />
      <button type="button" className="lif-btn" aria-haspopup="listbox" style={{ display: "flex", alignItems: "center", gap: "12px", border: 0, outline: "none", padding: "0 18px", background: "#fff", color: "#0F1729", fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: "15px", fontWeight: 700, borderRight: "2px solid #113B5F", cursor: "pointer", whiteSpace: "nowrap", borderRadius: "8px 0 0 8px" }} {...{ "onclick": "var l=this.parentNode.querySelector('.lif-list'); l.style.display=l.style.display==='block'?'none':'block'" }}>
      <span className="lif-label">For Sale</span>
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ flex: "0 0 auto" }}><path d="M1 1.5l5 5 5-5" stroke="#C98A2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <div className="lif-list" role="listbox" style={{ display: "none", position: "absolute", top: "calc(100% + 10px)", left: 0, minWidth: "170px", background: "#fff", border: "1px solid #EAE1BE", borderTop: "3px solid #C98A2C", borderRadius: "12px", boxShadow: "0 24px 50px rgba(17,59,95,0.2)", overflow: "hidden", zIndex: 60 }}>
      <div role="option" data-v="Sales" style={{ padding: "14px 18px", fontSize: "14px", fontWeight: 700, color: "#0F1729", cursor: "pointer" }} {...{ "onclick": "var w=this.parentNode.parentNode; w.querySelector('input').value=this.getAttribute('data-v'); w.querySelector('.lif-label').textContent=this.textContent; this.parentNode.style.display='none'", "style-hover": "background:#F5EECB; color:#113B5F" }}>For Sale</div>
      <div role="option" data-v="Rentals" style={{ padding: "14px 18px", fontSize: "14px", fontWeight: 700, color: "#0F1729", cursor: "pointer" }} {...{ "onclick": "var w=this.parentNode.parentNode; w.querySelector('input').value=this.getAttribute('data-v'); w.querySelector('.lif-label').textContent=this.textContent; this.parentNode.style.display='none'", "style-hover": "background:#F5EECB; color:#113B5F" }}>For Rent</div>
      </div>
      </div>
      <button type="submit" style={{ flex: "1 1 auto", border: 0, background: "#113B5F", color: "#F9F6E6", fontFamily: "'DM Sans',system-ui,sans-serif", fontSize: "14px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0 24px", cursor: "pointer", whiteSpace: "nowrap", borderRadius: "0 8px 8px 0" }} {...{ "style-hover": "background:#C98A2C; color:#113B5F" }}>Search MLS Listings</button>
      </div>
      <a href="/whats-my-home-worth/" style={{ flex: "1 0 100%", textAlign: "center", fontWeight: 700, fontSize: "13.5px", color: "#113B5F", paddingTop: "2px" }} {...{ "style-hover": "color:#C98A2C" }}>What&#8217;s my home worth? &#8594;</a>
      </form>

           <div style={{ height: "1px", background: "#E0D9B8", margin: "30px 0 20px" }}></div>

           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52677A" }}>Where we work</span>
            <a href="/neighborhoods/" style={{ fontSize: "13px", fontWeight: 700, color: "#0F1729", whiteSpace: "nowrap" }}>All 10 neighborhoods →</a>
           </div>
           <div style={{ position: "relative", marginTop: "20px", overflow: "hidden", maskImage: "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)" }}>
            <div style={{ display: "flex", width: "max-content", animation: "v4-marquee 26s linear infinite" }}>
             <a href="/harlem/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Harlem</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
             <a href="/upper-west-side/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Upper West Side</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
             <a href="/chelsea/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Chelsea</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
             <a href="/brooklyn-heights/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Brooklyn Heights</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
             <a href="/williamsburg/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Williamsburg</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
             <a href="/upper-east-side/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Upper East Side</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
             <a href="/harlem/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Harlem</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
             <a href="/upper-west-side/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Upper West Side</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
             <a href="/chelsea/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Chelsea</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
             <a href="/brooklyn-heights/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Brooklyn Heights</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
             <a href="/williamsburg/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Williamsburg</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
             <a href="/upper-east-side/" style={{ fontSize: "14.5px", fontWeight: 600, color: "#0F1729", whiteSpace: "nowrap", padding: "0 16px" }} {...{ "style-hover": "color:#F29D4C" }}>Upper East Side</a>
             <span style={{ color: "#E0D9B8", fontSize: "14.5px" }}>•</span>
            </div>
           </div>

           <a href="https://maps.google.com/?cid=11378470238102062088" target="_blank" rel="noopener" aria-label="Read verified Google reviews" style={{ position: "absolute", left: "50%", bottom: 0, transform: "translate(-50%,50%)", display: "inline-flex", alignItems: "center", gap: "24px", background: "#FFFFFF", border: "1px solid rgba(201,138,44,0.6)", borderRadius: "16px", boxShadow: "0 18px 40px rgba(17,59,95,0.3)", padding: "18px 30px", whiteSpace: "nowrap", textDecoration: "none", color: "inherit" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingRight: "24px", borderRight: "1px solid #E0D9B8" }}>
             <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
              <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" style={{ width: "30px", height: "30px", display: "block" }} />
              <span style={{ fontSize: "30px", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", color: "#0F1729" }}>5.0</span>
             </div>
             <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#52677A" }}>Verified Google reviews</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
             <span style={{ color: "#F5A623", fontSize: "19px", letterSpacing: "0.14em", lineHeight: 1 }}>★★★★★</span>
             <span style={{ fontSize: "15px", lineHeight: 1.4, color: "#0F1729" }}>Over <strong style={{ fontWeight: 700 }}>57 reviews</strong></span>
            </div>
           </a>
          </div>
         </div>

         <div></div>
        </div>
       </section>

       <section data-screen-label="Buyer promises" style={{ background: "#0B1220", borderBottom: "1px solid rgba(201,138,44,0.35)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "24px 64px", display: "grid", gridTemplateColumns: "auto auto auto", gap: "44px", justifyContent: "space-between", alignItems: "center" }}>
         <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
          <svg viewBox="0 0 24 24" width="21" height="21" fill="none" style={{ flex: "0 0 auto", display: "block", marginTop: "2px" }}><circle cx="12" cy="12" r="11" fill="#C98A2C"></circle><path d="M7.4 12.3l3.1 3.1 6.1-6.6" stroke="#0F1729" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <div style={{ fontSize: "14px", fontWeight: 500, lineHeight: 1.4, color: "#F9F6E6", whiteSpace: "nowrap" }}>Smooth transaction with limited risk</div>
         </div>
         <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
          <svg viewBox="0 0 24 24" width="21" height="21" fill="none" style={{ flex: "0 0 auto", display: "block", marginTop: "2px" }}><circle cx="12" cy="12" r="11" fill="#C98A2C"></circle><path d="M7.4 12.3l3.1 3.1 6.1-6.6" stroke="#0F1729" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <div style={{ fontSize: "14px", fontWeight: 500, lineHeight: 1.4, color: "#F9F6E6", whiteSpace: "nowrap" }}>No pressure to over pay and buy within a certain time period</div>
         </div>
         <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
          <svg viewBox="0 0 24 24" width="21" height="21" fill="none" style={{ flex: "0 0 auto", display: "block", marginTop: "2px" }}><circle cx="12" cy="12" r="11" fill="#C98A2C"></circle><path d="M7.4 12.3l3.1 3.1 6.1-6.6" stroke="#0F1729" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <div style={{ fontSize: "14px", fontWeight: 500, lineHeight: 1.4, color: "#F9F6E6", whiteSpace: "nowrap" }}>A team of people that will be with you even after the transaction is complete</div>
         </div>
        </div>
       </section>

       <section data-screen-label="Hidden cost of buying alone" style={{ position: "relative", background: "#0F1729", padding: "130px 64px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-140px", right: "-160px", width: "620px", height: "620px", borderRadius: "50%", border: "1px solid rgba(201,138,44,0.16)" }}></div>
        <div style={{ position: "absolute", bottom: "-220px", left: "-180px", width: "520px", height: "520px", borderRadius: "50%", border: "1px solid rgba(201,138,44,0.12)" }}></div>
        <div style={{ position: "relative", maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "45fr 55fr", gap: "72px", alignItems: "center" }}>
         <div data-reveal="" style={{ position: "relative", aspectRatio: "1000/715" }}>
          <img src="/redesign-assets/hidden-cost.webp" alt="Buyer overwhelmed at a desk" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 42%", display: "block", WebkitMaskImage: "url('/redesign-assets/hidden-cost.webp')", maskImage: "url('/redesign-assets/hidden-cost.webp')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }} width="1100" height="787" />
          <div style={{ position: "absolute", left: "50%", bottom: "-6px", transform: "translateX(-50%)", background: "#C98A2C", color: "#0F1729", borderRadius: "100px", padding: "13px 30px", fontSize: "12px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", whiteSpace: "nowrap", boxShadow: "0 16px 34px rgba(0,0,0,0.4)" }}>The cost of going alone</div>
         </div>
         <div>
          <h2 data-reveal="" style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "46px", lineHeight: 1.2, letterSpacing: "-0.008em", color: "#F9F6E6", margin: 0, textWrap: "pretty" }}>Are you aware of the <span style={{ background: "#C98A2C", color: "#0F1729", padding: "2px 10px" }}>hidden cost</span> of buying real estate without a realtor?</h2>
          <div style={{ marginTop: "38px", borderTop: "1px solid rgba(201,138,44,0.3)" }}>
           <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: "26px", alignItems: "baseline", padding: "24px 0", borderBottom: "1px solid rgba(201,138,44,0.3)" }}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" style={{ display: "block", marginTop: "1px" }}><path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.5 21l1.6-5-2.6-1.4 3.2-4.1-.9 3.9 2.7 1.2-2.4 5.4" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <div style={{ fontSize: "20px", lineHeight: 1.6, fontWeight: 400, color: "rgba(249,246,230,0.9)" }}>Buying <a href="/featured-brownstones-for-sale/" style={{ color: "#C98A2C" }} {...{ "style-hover": "color:#F9F6E6" }}>real estate</a> then later finding out it has <strong style={{ fontWeight: 700, color: "#fff" }}>structural issues</strong></div>
           </div>
           <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: "26px", alignItems: "baseline", padding: "24px 0", borderBottom: "1px solid rgba(201,138,44,0.3)" }}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" style={{ display: "block", marginTop: "1px" }}><path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 15.5h8M12 11.5v8" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="m5.5 5.5 13 13" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round"></path></svg>
            <div style={{ fontSize: "20px", lineHeight: 1.6, fontWeight: 400, color: "rgba(249,246,230,0.9)" }}>Buying <a href="/featured-brownstones-for-sale/" style={{ color: "#C98A2C" }} {...{ "style-hover": "color:#F9F6E6" }}>real estate</a> then finding out you <strong style={{ fontWeight: 700, color: "#fff" }}>can't renovate it</strong></div>
           </div>
           <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: "26px", alignItems: "baseline", padding: "24px 0", borderBottom: "1px solid rgba(201,138,44,0.3)" }}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" style={{ display: "block", marginTop: "1px" }}><rect x="4" y="3.5" width="14" height="17" rx="1.5" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></rect><path d="M7.5 8h7M7.5 11.5h7M7.5 15h4" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="17.5" cy="17.5" r="4" fill="#0F1729" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle><path d="M17.5 15.6v3.8M15.9 17.5h3.2" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <div style={{ fontSize: "20px", lineHeight: 1.6, fontWeight: 400, color: "rgba(249,246,230,0.9)" }}>Buying a <a href="/featured-brownstones-for-sale/" style={{ color: "#C98A2C" }} {...{ "style-hover": "color:#F9F6E6" }}>real estate</a> then finding out that you <strong style={{ fontWeight: 700, color: "#fff" }}>inherited some bills</strong></div>
           </div>
           <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: "26px", alignItems: "baseline", padding: "24px 0", borderBottom: "1px solid rgba(201,138,44,0.3)" }}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" style={{ display: "block", marginTop: "1px" }}><circle cx="12" cy="12" r="8.5" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle><path d="M14.5 9.2c-.6-.8-1.6-1.2-2.7-1.2-1.6 0-2.7.8-2.7 2s1 1.7 2.8 2.1c1.9.4 3 .9 3 2.2s-1.2 2.1-2.9 2.1c-1.3 0-2.4-.5-3-1.4M12 6.2v11.6" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <div style={{ fontSize: "20px", lineHeight: 1.6, fontWeight: 400, color: "rgba(249,246,230,0.9)" }}>Purchasing a <a href="/featured-brownstones-for-sale/" style={{ color: "#C98A2C" }} {...{ "style-hover": "color:#F9F6E6" }}>real estate</a> with the <strong style={{ fontWeight: 700, color: "#fff" }}>wrong type of loan</strong></div>
           </div>
           <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: "26px", alignItems: "baseline", padding: "24px 0", borderBottom: "1px solid rgba(201,138,44,0.3)" }}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" style={{ display: "block", marginTop: "1px" }}><path d="M3.5 19.5h17" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="m5 15.5 4-3.5 3.5 2.5 6.5-6" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.5 8.5H19v3.5" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="m4.5 5 15 15" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round"></path></svg>
            <div style={{ fontSize: "20px", lineHeight: 1.6, fontWeight: 400, color: "rgba(249,246,230,0.9)" }}>Overpaying for <a href="/featured-brownstones-for-sale/" style={{ color: "#C98A2C" }} {...{ "style-hover": "color:#F9F6E6" }}>real estate</a> and <strong style={{ fontWeight: 700, color: "#fff" }}>not getting any appreciation</strong></div>
           </div>
          </div>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px", marginTop: "38px" }}>
           <p style={{ fontSize: "18px", lineHeight: 1.7, color: "rgba(249,246,230,0.9)", margin: 0, maxWidth: "520px", textWrap: "pretty" }}>We'll make sure you make a <strong style={{ fontWeight: 700, color: "#fff" }}>smart purchase</strong> by saving money and avoid owning <a href="/featured-brownstones-for-sale/" style={{ color: "#C98A2C" }}>real estate</a> that will <strong style={{ fontWeight: 700, color: "#fff" }}>give you a headache</strong>.</p>
           <a href="https://calendly.com/montfort" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#C98A2C", color: "#0F1729", fontSize: "14.5px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: "10px", padding: "19px 32px", minHeight: "56px" }} {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}>Schedule a Free Consultation</a>
          </div>
         </div>
        </div>
       </section>

       <section data-screen-label="Founder" style={{ background: "#F5EECB", padding: "130px 64px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 520px", gap: "88px", alignItems: "center" }}>
         <div data-reveal="">
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
           <span style={{ width: "34px", height: "1px", background: "#C98A2C", display: "block" }}></span>
           <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>Who you work with</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "54px", lineHeight: 1.1, letterSpacing: "-0.012em", color: "#0F1729", margin: "20px 0 0" }}>Stanley Montfort</h2>
          <p style={{ fontSize: "24px", lineHeight: 1.55, fontWeight: 600, color: "#113B5F", margin: "22px 0 0", maxWidth: "600px", textWrap: "pretty" }}>
           I'm a realtor that helps people make smart <a href="/featured-brownstones-for-sale/" style={{ color: "#113B5F", borderBottom: "2px solid #C98A2C" }}>real estate</a> purchases.
          </p>
          <p style={{ fontSize: "16.5px", lineHeight: 1.85, color: "#3B4C5E", margin: "28px 0 0", maxWidth: "620px", textWrap: "pretty" }}>
           We understand the <strong style={{ fontWeight: 700, color: "#0F1729" }}>stress of purchasing <a href="/featured-brownstones-for-sale/" style={{ color: "#113B5F" }}>real estate</a></strong>, the time it takes to <strong style={{ fontWeight: 700, color: "#0F1729" }}>find the <a href="/featured-brownstones-for-sale/" style={{ color: "#113B5F" }}>real estate</a></strong> and then after making a large purchase your life is disrupted with <strong style={{ fontWeight: 700, color: "#0F1729" }}>hidden maintenance costs</strong>, violation issues, and being harassed by the city.
          </p>
          <p style={{ fontSize: "16.5px", lineHeight: 1.85, color: "#3B4C5E", margin: "18px 0 0", maxWidth: "620px", textWrap: "pretty" }}>
           Since the start of the pandemic we have facilitated over a <strong style={{ fontWeight: 700, color: "#0F1729" }}>BILLION dollars</strong> of <a href="/featured-brownstones-for-sale/" style={{ color: "#113B5F" }}>real estate</a> transactions. Because of our experience <strong style={{ fontWeight: 700, color: "#0F1729" }}>we know the exact steps</strong> to make your purchase go smoothly and we can <strong style={{ fontWeight: 700, color: "#0F1729" }}>do it for you also</strong>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", marginTop: "44px", paddingTop: "36px", borderTop: "1px solid #D9CFA6" }}>
           <div style={{ padding: "0 32px", paddingLeft: 0 }}>
            <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "40px", lineHeight: 1, color: "#113B5F" }}>$1B+</div>
            <div style={{ fontSize: "14px", lineHeight: 1.6, color: "#3B4C5E", marginTop: "14px", maxWidth: "190px" }}>Transactions facilitated since 2020</div>
           </div>
           <div style={{ padding: "0 32px", borderLeft: "1px solid #D9CFA6" }}>
            <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "40px", lineHeight: 1, color: "#113B5F" }}>11</div>
            <div style={{ fontSize: "14px", lineHeight: 1.6, color: "#3B4C5E", marginTop: "14px", maxWidth: "190px" }}>Manhattan and Brooklyn neighborhoods</div>
           </div>
           <div style={{ padding: "0 32px", borderLeft: "1px solid #D9CFA6" }}>
            <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "40px", lineHeight: 1, color: "#113B5F" }}>$0</div>
            <div style={{ fontSize: "14px", lineHeight: 1.6, color: "#3B4C5E", marginTop: "14px", maxWidth: "190px" }}>Cost to buyers for representation</div>
           </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "40px" }}>
           <a href="https://calendly.com/montfort" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#113B5F", color: "#F9F6E6", fontSize: "14.5px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: "100px", padding: "19px 34px", minHeight: "56px" }} {...{ "style-hover": "background:#C98A2C; color:#0F1729" }}>Schedule a Free Consultation</a>
           <a href="/stanley-montfort/" style={{ fontSize: "12.5px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#113B5F", borderBottom: "2px solid #C98A2C", paddingBottom: "5px" }} {...{ "style-hover": "border-bottom-color:#0F1729" }}>More about Stanley →</a>
          </div>
         </div>
         <div data-reveal="" style={{ position: "relative", alignSelf: "center", padding: "34px 34px 0" }}>
          <div style={{ position: "absolute", inset: "0 0 60px", border: "1px solid rgba(201,138,44,0.55)", borderRadius: "50%" }}></div>
          <div style={{ position: "absolute", left: "-6px", top: "8px", width: "16px", height: "16px", borderRadius: "50%", background: "#C98A2C" }}></div>
          <div style={{ position: "absolute", right: "6px", bottom: "78px", width: "9px", height: "9px", borderRadius: "50%", background: "#113B5F" }}></div>
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "50%", background: "#E0D9B8", boxShadow: "0 40px 90px rgba(17,59,95,0.28)", aspectRatio: "1/1", border: "6px solid #F9F6E6" }}>
           <img src="/redesign-assets/stanley-portrait.webp" alt="Portrait of Stanley Montfort" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 12%", borderRadius: "50%" }} width="3277" height="4096" />
          </div>
          <div style={{ position: "relative", margin: "-34px auto 0", width: "88%", background: "#0F1729", borderRadius: "16px", boxShadow: "0 26px 54px rgba(17,59,95,0.32)", padding: "22px 28px", display: "grid", gridTemplateColumns: "1fr 1px 1fr", alignItems: "center", gap: "22px" }}>
           <div>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C98A2C" }}>Credential</div>
            <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "15px", fontWeight: 700, letterSpacing: "-0.01em", color: "#F9F6E6", marginTop: "6px" }}>Licensed NYC Broker</div>
           </div>
           <div style={{ width: "1px", height: "38px", background: "rgba(201,138,44,0.4)" }}></div>
           <div>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C98A2C" }}>Affiliation</div>
            <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "15px", fontWeight: 700, letterSpacing: "-0.01em", color: "#F9F6E6", marginTop: "6px" }}>REBNY Member Firm</div>
           </div>
          </div>
          <a href="/stanley-montfort/" className="founder-more-m" style={{ display: "none", margin: "22px auto 0", fontSize: "12.5px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#113B5F", borderBottom: "2px solid #C98A2C", paddingBottom: "5px", width: "fit-content" }}>More about Stanley →</a>
         </div>
        </div>
       </section>

       <section data-screen-label="Service areas" style={{ background: "#F9F6E6", padding: "130px 64px", borderTop: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
         <div data-reveal="" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>Manhattan &amp; Brooklyn</div>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "46px", lineHeight: 1.2, letterSpacing: "-0.008em", color: "#0F1729", margin: "16px 0 0", textWrap: "pretty" }}>Featured Realtor Service Areas</h2>
          <span style={{ display: "block", width: "76px", height: "3px", background: "#C98A2C", margin: "22px auto 0" }}></span>
         </div>
         <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "24px", marginTop: "60px" }}>
          <a data-reveal="" href="/harlem/" style={{ position: "relative", display: "block", height: "480px", overflow: "hidden", borderRadius: "16px", background: "#0F1729", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}>
           <img src="/redesign-assets/hoods/harlem.webp" alt="Harlem Realtor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" }} width="500" height="350" {...{ "style-hover": "transform:scale(1.07)" }} />
           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }}></div>
           <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: "100px" }}>Manhattan</div>
           <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "27px", lineHeight: 1.25, color: "#fff", textWrap: "pretty", margin: 0 }}>Harlem Realtor</h3>
            <div style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: "11px", maxWidth: "330px" }}>Historic brownstones, rich culture, and timeless Manhattan charm.</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Explore <span>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/upper-west-side/" style={{ position: "relative", display: "block", height: "480px", overflow: "hidden", borderRadius: "16px", background: "#0F1729", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}>
           <img src="/redesign-assets/hoods/upper-west-side.webp" alt="Upper West Side Realtor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" }} width="500" height="350" {...{ "style-hover": "transform:scale(1.07)" }} />
           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }}></div>
           <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: "100px" }}>Manhattan</div>
           <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "27px", lineHeight: 1.25, color: "#fff", textWrap: "pretty", margin: 0 }}>Upper West Side Realtor</h3>
            <div style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: "11px", maxWidth: "330px" }}>Elegant brownstones, cultural landmarks, and classic Manhattan living.</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Explore <span>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/upper-east-side/" style={{ position: "relative", display: "block", height: "480px", overflow: "hidden", borderRadius: "16px", background: "#0F1729", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}>
           <img src="/redesign-assets/hoods/upper-east-side.webp" alt="Upper East Side Realtor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" }} width="500" height="350" {...{ "style-hover": "transform:scale(1.07)" }} />
           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }}></div>
           <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: "100px" }}>Manhattan</div>
           <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "27px", lineHeight: 1.25, color: "#fff", textWrap: "pretty", margin: 0 }}>Upper East Side Realtor</h3>
            <div style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: "11px", maxWidth: "330px" }}>Luxury residences, world-class culture, and timeless Upper Manhattan elegance.</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Explore <span>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/chelsea/" style={{ position: "relative", display: "block", height: "480px", overflow: "hidden", borderRadius: "16px", background: "#0F1729", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}>
           <img src="/redesign-assets/hoods/chelsea.webp" alt="Chelsea Realtor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" }} width="1000" height="700" {...{ "style-hover": "transform:scale(1.07)" }} />
           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }}></div>
           <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: "100px" }}>Manhattan</div>
           <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "27px", lineHeight: 1.25, color: "#fff", textWrap: "pretty", margin: 0 }}>Chelsea Realtor</h3>
            <div style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: "11px", maxWidth: "330px" }}>Modern luxury, world-class art, and vibrant Manhattan living.</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Explore <span>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/downtown-brooklyn/" style={{ position: "relative", display: "block", height: "480px", overflow: "hidden", borderRadius: "16px", background: "#0F1729", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}>
           <img src="/redesign-assets/hoods/downtown-brooklyn.webp" alt="Downtown Brooklyn Realtor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" }} width="1000" height="700" {...{ "style-hover": "transform:scale(1.07)" }} />
           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }}></div>
           <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: "100px" }}>Brooklyn</div>
           <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "27px", lineHeight: 1.25, color: "#fff", textWrap: "pretty", margin: 0 }}>Downtown Brooklyn Realtor</h3>
            <div style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: "11px", maxWidth: "330px" }}>Modern high-rises, unmatched transit access, and vibrant Brooklyn living.</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Explore <span>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/dumbo/" style={{ position: "relative", display: "block", height: "480px", overflow: "hidden", borderRadius: "16px", background: "#0F1729", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}>
           <img src="/redesign-assets/hoods/dumbo.webp" alt="Dumbo Realtor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" }} width="1000" height="700" {...{ "style-hover": "transform:scale(1.07)" }} />
           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }}></div>
           <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: "100px" }}>Brooklyn</div>
           <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "27px", lineHeight: 1.25, color: "#fff", textWrap: "pretty", margin: 0 }}>Dumbo Realtor</h3>
            <div style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: "11px", maxWidth: "330px" }}>Waterfront views, luxury lofts, and iconic Brooklyn living.</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Explore <span>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/brooklyn-heights/" style={{ position: "relative", display: "block", height: "480px", overflow: "hidden", borderRadius: "16px", background: "#0F1729", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}>
           <img src="/redesign-assets/hoods/brooklyn-heights.webp" alt="Brooklyn Heights Realtor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" }} width="1000" height="700" {...{ "style-hover": "transform:scale(1.07)" }} />
           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }}></div>
           <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: "100px" }}>Brooklyn</div>
           <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "27px", lineHeight: 1.25, color: "#fff", textWrap: "pretty", margin: 0 }}>Brooklyn Heights Realtor</h3>
            <div style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: "11px", maxWidth: "330px" }}>Historic brownstones, skyline views, and timeless Brooklyn charm</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Explore <span>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/bedford-stuyvesant/" style={{ position: "relative", display: "block", height: "480px", overflow: "hidden", borderRadius: "16px", background: "#0F1729", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}>
           <img src="/redesign-assets/hoods/bedford-stuyvesant.webp" alt="Bedford stuyvesant Realtor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" }} width="1000" height="700" {...{ "style-hover": "transform:scale(1.07)" }} />
           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }}></div>
           <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: "100px" }}>Brooklyn</div>
           <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "27px", lineHeight: 1.25, color: "#fff", textWrap: "pretty", margin: 0 }}>Bedford stuyvesant Realtor</h3>
            <div style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: "11px", maxWidth: "330px" }}>Historic brownstones, rich culture, and authentic Brooklyn living.</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Explore <span>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/williamsburg/" style={{ position: "relative", display: "block", height: "480px", overflow: "hidden", borderRadius: "16px", background: "#0F1729", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}>
           <img src="/redesign-assets/hoods/williamsburg.webp" alt="Williamsburg Realtor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" }} width="1000" height="700" {...{ "style-hover": "transform:scale(1.07)" }} />
           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }}></div>
           <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: "100px" }}>Brooklyn</div>
           <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "27px", lineHeight: 1.25, color: "#fff", textWrap: "pretty", margin: 0 }}>Williamsburg Realtor</h3>
            <div style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: "11px", maxWidth: "330px" }}>Waterfront living, creative energy, and modern Brooklyn luxury</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Explore <span>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/crown-heights/" style={{ position: "relative", display: "block", height: "480px", overflow: "hidden", borderRadius: "16px", background: "#0F1729", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}>
           <img src="/redesign-assets/hoods/crown-heights.webp" alt="Crown Heights Realtor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" }} width="1000" height="700" {...{ "style-hover": "transform:scale(1.07)" }} />
           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }}></div>
           <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: "100px" }}>Brooklyn</div>
           <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "27px", lineHeight: 1.25, color: "#fff", textWrap: "pretty", margin: 0 }}>Crown Heights Realtor</h3>
            <div style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: "11px", maxWidth: "330px" }}>Historic brownstones, cultural diversity, and vibrant Brooklyn living</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Explore <span>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/park-slope/" style={{ position: "relative", display: "block", height: "480px", overflow: "hidden", borderRadius: "16px", background: "#0F1729", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}>
           <img src="/redesign-assets/hoods/park-slope.webp" alt="Park Slope Realtor" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" }} width="1000" height="700" {...{ "style-hover": "transform:scale(1.07)" }} />
           <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }}></div>
           <div style={{ position: "absolute", top: "20px", left: "20px", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: "100px" }}>Brooklyn</div>
           <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "27px", lineHeight: 1.25, color: "#fff", textWrap: "pretty", margin: 0 }}>Park Slope Realtor</h3>
            <div style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: "11px", maxWidth: "330px" }}>Historic brownstones, tree-lined streets, and timeless Brooklyn living</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Explore <span>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/neighborhoods/" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "480px", background: "#113B5F", borderRadius: "16px", padding: "40px 34px", transition: "background 0.4s ease, transform 0.4s ease" }} {...{ "style-hover": "background:#0F1729; transform:translateY(-8px)" }}>
           <div>
            <div style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8" }}>All eleven areas</div>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "32px", lineHeight: 1.28, color: "#F9F6E6", marginTop: "22px", textWrap: "pretty", margin: 0 }}>Not sure which neighborhood fits you?</h3>
            <div style={{ fontSize: "15.5px", lineHeight: 1.7, color: "rgba(249,246,230,0.85)", marginTop: "16px" }}>Compare every area we cover with local market data, or ask on a twenty-minute call.</div>
           </div>
           <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Browse all →</div>
          </a>
         </div>
        </div>
       </section>

       <section data-screen-label="Client expectations" style={{ background: "#F5EECB", padding: "130px 64px", borderTop: "1px solid #E0D9B8", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
         <div data-reveal="" style={{ maxWidth: "820px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
           <span style={{ width: "34px", height: "1px", background: "#C98A2C", display: "block" }}></span>
           <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>What you get</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "44px", lineHeight: 1.22, letterSpacing: "-0.008em", color: "#0F1729", margin: "18px 0 0", textWrap: "pretty" }}>What can our clients expect from working with a realtor?</h2>
         </div>
         <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 0, marginTop: "66px", paddingTop: "52px", borderTop: "2px solid #0F1729" }}>
          <div data-reveal="" style={{ display: "grid", gridTemplateRows: "auto auto auto 1fr auto", padding: "0 64px", paddingLeft: 0 }}>
           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img src="/redesign-assets/expect/offmarket.webp" alt="On and off market real estate search" style={{ width: "220px", height: "220px", display: "block", flex: "0 0 auto" }} width="250" height="250" />
           </div>
           <div style={{ height: "1px", background: "#D9CFA6", margin: "26px 0 0" }}></div>
           <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "25px", lineHeight: 1.34, color: "#0F1729", textWrap: "pretty", margin: "24px 0 0" }}>Identify On &amp; <strong style={{ fontWeight: 700, color: "#0F1729" }}>Off Market <a href="/advice-for-buyers-looking-to-purchase-brownstones/" style={{ color: "#113B5F" }}>Real Estate</a></strong></h3>
           <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3B4C5E", margin: "14px 0 0", textWrap: "pretty" }}>With our efficient <a href="/co-ownership-advantages-and-disadvantages-in-nyc/" style={{ color: "#113B5F" }}>real estate</a> searching process we'll provide you with weekly updates of both on and off market real estate to not waste your time seeing properties that do not fit your search criteria</p>
           <a href="/perfect-home-finder/" style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "28px", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#113B5F" }} {...{ "style-hover": "color:#C98A2C" }}>Perfect home finder <span style={{ color: "#C98A2C" }}>→</span></a>
          </div>
          <div data-reveal="" style={{ display: "grid", gridTemplateRows: "auto auto auto 1fr auto", padding: "0 64px", borderLeft: "1px solid #D9CFA6", borderRight: "1px solid #D9CFA6" }}>
           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img src="/redesign-assets/expect/troublesome.webp" alt="Troublesome brownstone interior" style={{ width: "231px", height: "220px", display: "block", flex: "0 0 auto" }} width="250" height="250" />
           </div>
           <div style={{ height: "1px", background: "#D9CFA6", margin: "26px 0 0" }}></div>
           <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "25px", lineHeight: 1.34, color: "#0F1729", textWrap: "pretty", margin: "24px 0 0" }}>Avoid a <strong style={{ fontWeight: 700, color: "#0F1729" }}>Troublesome <a href="/advice-for-buyers-looking-to-purchase-brownstones/" style={{ color: "#113B5F" }}>Real Estate</a></strong></h3>
           <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3B4C5E", margin: "14px 0 0", textWrap: "pretty" }}>With our <strong style={{ fontWeight: 700, color: "#0F1729" }}>real estate due diligence</strong> process you'll keep more money in your pocket and avoid costly mistakes</p>
           <a href="/whats-my-home-worth/" style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "28px", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#113B5F" }} {...{ "style-hover": "color:#C98A2C" }}>What’s my home worth <span style={{ color: "#C98A2C" }}>→</span></a>
          </div>
          <div data-reveal="" style={{ display: "grid", gridTemplateRows: "auto auto auto 1fr auto", padding: "0 64px", paddingRight: 0 }}>
           
           <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img src="/redesign-assets/expect/team.webp" alt="Attorneys, contractors and inspectors" style={{ width: "220px", height: "220px", display: "block", flex: "0 0 auto" }} width="250" height="250" />
           </div><div style={{ height: "1px", background: "#D9CFA6", margin: "26px 0 0" }}></div>
           <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "25px", lineHeight: 1.34, color: "#0F1729", marginTop: "24px", textWrap: "pretty" }}>Get Access To The <strong style={{ fontWeight: 700, color: "#0F1729" }}>Best Attorneys</strong>, Contractors, and Inspectors <strong style={{ fontWeight: 700, color: "#0F1729" }}>In The Industry</strong></div>
           <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3B4C5E", margin: "14px 0 0", textWrap: "pretty" }}>With our <strong style={{ fontWeight: 700, color: "#0F1729" }}>experienced team</strong>, you'll move through the <strong style={{ fontWeight: 700, color: "#0F1729" }}>transaction efficiently</strong> and will not go through the real estate <strong style={{ fontWeight: 700, color: "#0F1729" }}>purchasing process</strong> blind</p>
           <a href="/mortgage-calculator/" style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "28px", fontSize: "11.5px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#113B5F" }} {...{ "style-hover": "color:#C98A2C" }}>Mortgage calculator <span style={{ color: "#C98A2C" }}>→</span></a>
          </div>
         </div>
         <div data-reveal="" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "44px", marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #D9CFA6" }}>
          <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: 1.4, color: "#0F1729", maxWidth: "620px", textWrap: "pretty", margin: 0 }}>Twenty minutes on the phone tells you whether we are the right fit.</h3>
          <a href="https://calendly.com/montfort" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#113B5F", color: "#F9F6E6", fontSize: "14.5px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: "10px", padding: "19px 38px", minHeight: "56px" }} {...{ "style-hover": "background:#C98A2C; color:#0F1729" }}>Schedule Free Consultation</a>
         </div>
        </div>
       </section>

       <section data-screen-label="Buying plan" style={{ position: "relative", background: "#fff", padding: "120px 64px", borderTop: "1px solid #E0D9B8", borderBottom: "1px solid #E0D9B8", overflow: "hidden" }}>
        <div style={{ position: "relative", maxWidth: "1440px", margin: "0 auto" }}>
         <div data-reveal="" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "56px" }}>
          <div>
           <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ width: "34px", height: "1px", background: "#C98A2C", display: "block" }}></span>
            <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>How it works</span>
           </div>
           <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "46px", lineHeight: 1.2, letterSpacing: "-0.008em", color: "#0F1729", margin: "16px 0 0", maxWidth: "760px", textWrap: "pretty" }}>Efficient Realtor Buying Plan</h2>
          </div>
          <a href="https://calendly.com/montfort" style={{ fontSize: "13px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#113B5F", whiteSpace: "nowrap", borderBottom: "2px solid #C98A2C", paddingBottom: "5px" }} {...{ "style-hover": "border-bottom-color:#0F1729" }}>Schedule a Free Consultation</a>
         </div>
         <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "40px", marginTop: "64px" }}>
          <div data-reveal="">
           <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: "50%", overflow: "hidden", background: "#EFE7C4", border: "1px solid rgba(201,138,44,0.45)", boxShadow: "0 22px 48px rgba(17,59,95,0.14)" }}><img src="/redesign-assets/plan/step1.webp" alt="Realtor on a consultation call" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width="3000" height="2000" /></div>
           <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginTop: "8px" }}>
            <span style={{ fontSize: "15px", fontWeight: 900, letterSpacing: "0.16em", color: "#C98A2C" }}>01</span>
            <span style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "25px", lineHeight: 1.35, color: "#0F1729" }}>Schedule Free Consultation w/ Realtor</span>
           </div>
           <p style={{ fontSize: "16.5px", lineHeight: 1.85, color: "#3B4C5E", margin: "14px 0 0", maxWidth: "360px", textWrap: "pretty" }}>We'll listen to your requirements, give you an overview of the market/process and you can decide if we're a good fit</p>
          </div>
          <div data-reveal="">
           <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: "50%", overflow: "hidden", background: "#EFE7C4", border: "1px solid rgba(201,138,44,0.45)", boxShadow: "0 22px 48px rgba(17,59,95,0.14)" }}><img src="/redesign-assets/plan/step2.webp" alt="Realtor showing a couple a home" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width="3000" height="2000" /></div>
           <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginTop: "8px" }}>
            <span style={{ fontSize: "15px", fontWeight: 900, letterSpacing: "0.16em", color: "#C98A2C" }}>02</span>
            <span style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "25px", lineHeight: 1.35, color: "#0F1729" }}>Realtor Will Get to Work</span>
           </div>
           <p style={{ fontSize: "16.5px", lineHeight: 1.85, color: "#3B4C5E", margin: "14px 0 0", maxWidth: "360px", textWrap: "pretty" }}>We'll curate on market and off market real estate showings for you that fit your criteria</p>
          </div>
          <div data-reveal="">
           <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: "50%", overflow: "hidden", background: "#EFE7C4", border: "1px solid rgba(201,138,44,0.45)", boxShadow: "0 22px 48px rgba(17,59,95,0.14)" }}><img src="/redesign-assets/plan/step3.webp" alt="Couple celebrating their new home" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width="3000" height="2000" /></div>
           <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginTop: "8px" }}>
            <span style={{ fontSize: "15px", fontWeight: 900, letterSpacing: "0.16em", color: "#C98A2C" }}>03</span>
            <span style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "25px", lineHeight: 1.35, color: "#0F1729" }}>Enjoy your dream home</span>
           </div>
           <p style={{ fontSize: "16.5px", lineHeight: 1.85, color: "#3B4C5E", margin: "14px 0 0", maxWidth: "360px", textWrap: "pretty" }}>You'll live in your home without any worries</p>
          </div>
         </div>
        </div>
       </section>

       <section data-screen-label="Services" style={{ background: "#F9F6E6", padding: "120px 64px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
         <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "end" }}>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "46px", lineHeight: 1.2, letterSpacing: "-0.008em", color: "#0F1729", margin: 0, textWrap: "pretty" }}>Offered Realtor Services</h2>
          <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#3B4C5E", margin: 0, textWrap: "pretty" }}>Whether you are looking for realtors in <a href="/featured-brownstones-for-sale/manhattan/west-harlem/" style={{ color: "#113B5F" }}>Harlem</a>, Upper Westside, or other parts of NYC our dedicated, and highly qualified team of brokers is at your service to assist buyers like yourself with your real estate goals, whether purchasing or selling property.</p>
         </div>
         <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "28px", marginTop: "56px" }}>
          <a data-reveal="" href="/nyc-buyers-agent-service/" style={{ display: "flex", flexDirection: "column", background: "#F9F6E6", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ aspectRatio: "11/9", overflow: "hidden" }}><img src="/redesign-assets/services/buyers-agent.webp" alt="NYC Buyer's Agent materials on a desk" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="550" height="450" {...{ "style-hover": "transform:scale(1.06)" }} /></div>
           <div style={{ display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "30px 30px 32px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: 1.3, color: "#0F1729", textWrap: "pretty", margin: 0 }}>NYC Buyer’s Agent</h3>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3B4C5E", margin: "14px 0 0", flex: "1 1 auto", textWrap: "pretty" }}>Expert representation to protect your interests, surface the right opportunities, and negotiate favorable terms in NYC’s most competitive market.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "24px", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#113B5F" }}>Learn more <span style={{ color: "#C98A2C" }}>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/nyc-listing-agent-service/" style={{ display: "flex", flexDirection: "column", background: "#F9F6E6", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ aspectRatio: "11/9", overflow: "hidden" }}><img src="/redesign-assets/services/listing-agent.webp" alt="NYC Listing Agent materials on a desk" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="550" height="450" {...{ "style-hover": "transform:scale(1.06)" }} /></div>
           <div style={{ display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "30px 30px 32px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: 1.3, color: "#0F1729", textWrap: "pretty", margin: 0 }}>NYC Listing Agent</h3>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3B4C5E", margin: "14px 0 0", flex: "1 1 auto", textWrap: "pretty" }}>Strategic pricing, professional marketing, and skilled negotiation to maximize value across co-ops, condos, brownstones, and townhomes.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "24px", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#113B5F" }}>Learn more <span style={{ color: "#C98A2C" }}>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/nyc-multifamily-real-estate-agent-service/" style={{ display: "flex", flexDirection: "column", background: "#F9F6E6", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ aspectRatio: "11/9", overflow: "hidden" }}><img src="/redesign-assets/services/multifamily.webp" alt="NYC Multifamily Agent materials on a desk" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="550" height="450" {...{ "style-hover": "transform:scale(1.06)" }} /></div>
           <div style={{ display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "30px 30px 32px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: 1.3, color: "#0F1729", textWrap: "pretty", margin: 0 }}>NYC Multifamily Agent</h3>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3B4C5E", margin: "14px 0 0", flex: "1 1 auto", textWrap: "pretty" }}>Guidance on 2–4 unit buildings, brownstone conversions, and value-add investments to build long-term wealth across the boroughs.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "24px", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#113B5F" }}>Learn more <span style={{ color: "#C98A2C" }}>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/home-valuation/" style={{ display: "flex", flexDirection: "column", background: "#F9F6E6", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ aspectRatio: "11/9", overflow: "hidden" }}><img src="/redesign-assets/services/home-valuation.webp" alt="NYC Free Home Valuation flyer and tablet" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="550" height="450" {...{ "style-hover": "transform:scale(1.06)" }} /></div>
           <div style={{ display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "30px 30px 32px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: 1.3, color: "#0F1729", textWrap: "pretty", margin: 0 }}>NYC Free Home Valuation</h3>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3B4C5E", margin: "14px 0 0", flex: "1 1 auto", textWrap: "pretty" }}>Understand what your property is truly worth, beyond automated estimates, with expert, neighborhood-specific market insight.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "24px", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#113B5F" }}>Learn more <span style={{ color: "#C98A2C" }}>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="/mortgage-calculator/" style={{ display: "flex", flexDirection: "column", background: "#F9F6E6", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ aspectRatio: "11/9", overflow: "hidden" }}><img src="/redesign-assets/services/mortgage.webp" alt="NYC Mortgage Calculator on a laptop" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="550" height="450" {...{ "style-hover": "transform:scale(1.06)" }} /></div>
           <div style={{ display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "30px 30px 32px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: 1.3, color: "#0F1729", textWrap: "pretty", margin: 0 }}>NYC Mortgage Calculator</h3>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#3B4C5E", margin: "14px 0 0", flex: "1 1 auto", textWrap: "pretty" }}>See your full monthly cost, maintenance, common charges, taxes, and closing costs, before you make an offer.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "24px", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#113B5F" }}>Learn more <span style={{ color: "#C98A2C" }}>→</span></div>
           </div>
          </a>
          <a data-reveal="" href="https://calendly.com/montfort" target="_blank" rel="noopener" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#113B5F", borderRadius: "16px", padding: "34px 32px", transition: "background .4s ease, transform .4s ease" }} {...{ "style-hover": "background:#0F1729; transform:translateY(-7px)" }}>
           <div>
            <div style={{ fontSize: "10.5px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8" }}>Not sure where to start?</div>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "26px", lineHeight: 1.3, color: "#F9F6E6", marginTop: "18px", textWrap: "pretty", margin: 0 }}>Let’s find the right service for you.</h3>
            <p style={{ fontSize: "15.5px", lineHeight: 1.7, color: "rgba(249,246,230,0.85)", margin: "14px 0 0" }}>Twenty minutes on the phone is all it takes to map out your next move.</p>
           </div>
           <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "28px", paddingTop: "16px", borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F0D9A8" }}>Book a consultation <span>→</span></div>
          </a>
         </div>
        </div>
       </section>

       <section data-screen-label="Reviews" style={{ background: "#F5EECB", padding: "120px 64px", borderTop: "1px solid #E0D9B8", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
         <div data-reveal="" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "56px" }}>
          <div>
           <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ width: "34px", height: "1px", background: "#C98A2C", display: "block" }}></span>
            <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>What clients say</span>
           </div>
           <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "46px", lineHeight: 1.2, letterSpacing: "-0.008em", color: "#0F1729", margin: "16px 0 0" }}>Realtor Reviews</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "18px", paddingBottom: "14px", borderBottom: "2px solid #C98A2C" }}>
           <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" style={{ width: "24px", height: "24px", display: "block" }} />
           <span style={{ fontSize: "40px", fontWeight: 900, color: "#113B5F", lineHeight: 1, letterSpacing: "-0.03em" }}>5.0</span>
           <div>
            <span style={{ display: "block", color: "#113B5F", fontSize: "18px", letterSpacing: "0.14em", lineHeight: 1 }}>★★★★★</span>
            <a href="/success-stories/" style={{ display: "block", fontSize: "13px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#113B5F", marginTop: "9px" }}>Read all reviews →</a>
           </div>
          </div>
         </div>
         <div style={{ position: "relative", marginTop: "52px" }}>
          <div id="review-track" className="no-sb" style={{ display: "flex", gap: 0, overflowX: "auto", scrollSnapType: "x mandatory", scrollBehavior: "smooth", borderRadius: "16px" }}>
          <a href="https://www.google.com/maps/contrib/107286042219082422872/reviews?hl=en" target="_blank" rel="noopener" style={{ scrollSnapAlign: "center", flex: "0 0 100%", display: "grid", gridTemplateColumns: "300px 1fr", gap: "56px", alignItems: "center", background: "#FBF8EC", border: "1px solid #E0D9B8", borderRadius: "16px", padding: "56px 60px", boxSizing: "border-box" }}>
           <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <img src="https://lh3.googleusercontent.com/a-/ALV-UjViSqMG3KN7oLq8R0QnIw-DaXDyjT90luYGecAIkSmU_hO3gSPc=s120-c-rp-mo" alt="Anika Nfr-Ka Ma’at Daniels" referrerPolicy="no-referrer" style={{ width: "104px", height: "104px", borderRadius: "100px", objectFit: "cover", background: "#E0D9B8" }} />
            <div>
             <h4 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "21px", color: "#0F1729", lineHeight: 1.25, margin: 0 }}>Anika Nfr-Ka Ma’at Daniels</h4>
             <div style={{ display: "flex", alignItems: "center", gap: "7px", marginTop: "8px", fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3B4C5E" }}><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Googleg Standard Color 128Dp" style={{ width: "15px", height: "15px", display: "block", filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)" }} /> Posted on Google</div>
            </div>
            <span style={{ color: "#C98A2C", fontSize: "17px", letterSpacing: "0.18em", lineHeight: 1 }}>★★★★★</span>
           </div>
           <div>
            <span style={{ fontFamily: "Georgia,serif", fontSize: "82px", color: "#C98A2C", lineHeight: 0.4, display: "block", height: "44px" }}>“</span>
            <p style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 400, fontSize: "27px", lineHeight: 1.5, color: "#0F1729", margin: "24px 0 0", textWrap: "pretty" }}>Stan is extremely knowledgeable and professional. He also has the utmost patience! He helped me sell my home and purchase a condo at the same time. My home had all types of special contingencies but he was able to find me a buyer and get me very close to the price I wanted. I was very specific in terms of the property that I wanted to buy and although it took some time, he was able to find me the…</p>
           </div>
          </a>
          <a href="https://www.google.com/maps/contrib/108132066685824850224/reviews?hl=en" target="_blank" rel="noopener" style={{ scrollSnapAlign: "center", flex: "0 0 100%", display: "grid", gridTemplateColumns: "300px 1fr", gap: "56px", alignItems: "center", background: "#FBF8EC", border: "1px solid #E0D9B8", borderRadius: "16px", padding: "56px 60px", boxSizing: "border-box" }}>
           <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <img src="https://lh3.googleusercontent.com/a-/ALV-UjW2GJgbKFCs8CWRPaU68LmyIpJoffj2f9xx_ErBW95J1KmjMk0q=s120-c-rp-mo" alt="Davon Snipes" referrerPolicy="no-referrer" style={{ width: "104px", height: "104px", borderRadius: "100px", objectFit: "cover", background: "#E0D9B8" }} />
            <div>
             <h4 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "21px", color: "#0F1729", lineHeight: 1.25, margin: 0 }}>Davon Snipes</h4>
             <div style={{ display: "flex", alignItems: "center", gap: "7px", marginTop: "8px", fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3B4C5E" }}><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Googleg Standard Color 128Dp" style={{ width: "15px", height: "15px", display: "block", filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)" }} /> Posted on Google</div>
            </div>
            <span style={{ color: "#C98A2C", fontSize: "17px", letterSpacing: "0.18em", lineHeight: 1 }}>★★★★★</span>
           </div>
           <div>
            <span style={{ fontFamily: "Georgia,serif", fontSize: "82px", color: "#C98A2C", lineHeight: 0.4, display: "block", height: "44px" }}>“</span>
            <p style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 400, fontSize: "27px", lineHeight: 1.5, color: "#0F1729", margin: "24px 0 0", textWrap: "pretty" }}>Stan has been an incredibly patient, knowledge, and professional broker. He understands the market, and has many relationships in the industry. He was thoughtful and gracious about responding to our feedback, and left no stone unturned in helping us to find the property of our dreams. And he continues to provide guidance and counsel post-closing. If you're looking for a brilliant real estate…</p>
           </div>
          </a>
          <a href="https://www.google.com/maps/contrib/116771421068638089471/reviews?hl=en" target="_blank" rel="noopener" style={{ scrollSnapAlign: "center", flex: "0 0 100%", display: "grid", gridTemplateColumns: "300px 1fr", gap: "56px", alignItems: "center", background: "#FBF8EC", border: "1px solid #E0D9B8", borderRadius: "16px", padding: "56px 60px", boxSizing: "border-box" }}>
           <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <img src="https://lh3.googleusercontent.com/a/ACg8ocJF8BS2Xi87Fcaj122YKs-p4jY3uuigUkyo_LFIR4JEbnbvbg=s120-c-rp-mo" alt="Perry Witmer" referrerPolicy="no-referrer" style={{ width: "104px", height: "104px", borderRadius: "100px", objectFit: "cover", background: "#E0D9B8" }} />
            <div>
             <h4 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "21px", color: "#0F1729", lineHeight: 1.25, margin: 0 }}>Perry Witmer</h4>
             <div style={{ display: "flex", alignItems: "center", gap: "7px", marginTop: "8px", fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3B4C5E" }}><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Googleg Standard Color 128Dp" style={{ width: "15px", height: "15px", display: "block", filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)" }} /> Posted on Google</div>
            </div>
            <span style={{ color: "#C98A2C", fontSize: "17px", letterSpacing: "0.18em", lineHeight: 1 }}>★★★★★</span>
           </div>
           <div>
            <span style={{ fontFamily: "Georgia,serif", fontSize: "82px", color: "#C98A2C", lineHeight: 0.4, display: "block", height: "44px" }}>“</span>
            <p style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 400, fontSize: "27px", lineHeight: 1.5, color: "#0F1729", margin: "24px 0 0", textWrap: "pretty" }}>Stanley is amazing! No one knows the Harlem market better than him, and his deep expertise was a tremendous resource. He taught me along the way how to spot 'red flags' and talked me out of making an offer on a place that seemed amazing but had, upon his close inspection, evidence of poor workmanship and lots of cut corners. Other brokers remarked in private to me about both his expertise and his…</p>
           </div>
          </a>
          <a href="https://www.google.com/maps/contrib/109328620676722096746/reviews?hl=en" target="_blank" rel="noopener" style={{ scrollSnapAlign: "center", flex: "0 0 100%", display: "grid", gridTemplateColumns: "300px 1fr", gap: "56px", alignItems: "center", background: "#FBF8EC", border: "1px solid #E0D9B8", borderRadius: "16px", padding: "56px 60px", boxSizing: "border-box" }}>
           <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <img src="https://lh3.googleusercontent.com/a/ACg8ocJ_u11llTjoHDxUSwbwBOVjPqAEEYxXctnGw2ipJT0OmPkN0KAd=s120-c-rp-mo-ba12" alt="Corey A. Witmer" referrerPolicy="no-referrer" style={{ width: "104px", height: "104px", borderRadius: "100px", objectFit: "cover", background: "#E0D9B8" }} />
            <div>
             <h4 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "21px", color: "#0F1729", lineHeight: 1.25, margin: 0 }}>Corey A. Witmer</h4>
             <div style={{ display: "flex", alignItems: "center", gap: "7px", marginTop: "8px", fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3B4C5E" }}><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Googleg Standard Color 128Dp" style={{ width: "15px", height: "15px", display: "block", filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)" }} /> Posted on Google</div>
            </div>
            <span style={{ color: "#C98A2C", fontSize: "17px", letterSpacing: "0.18em", lineHeight: 1 }}>★★★★★</span>
           </div>
           <div>
            <span style={{ fontFamily: "Georgia,serif", fontSize: "82px", color: "#C98A2C", lineHeight: 0.4, display: "block", height: "44px" }}>“</span>
            <p style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 400, fontSize: "27px", lineHeight: 1.5, color: "#0F1729", margin: "24px 0 0", textWrap: "pretty" }}>Stanley was the dream real estate agent we didn’t know we deserved! From the beginning he was attentive to our curiosity to help us figure out what type of property we wanted - and could afford. Throughout the process he was a calm and patient presence in our lives, offering us sincere and sage perspectives to keep us grounded while managing our expectations. Even with the ups and downs -…</p>
           </div>
          </a>
          <a href="https://www.google.com/maps/contrib/100922205373403327263/reviews?hl=en" target="_blank" rel="noopener" style={{ scrollSnapAlign: "center", flex: "0 0 100%", display: "grid", gridTemplateColumns: "300px 1fr", gap: "56px", alignItems: "center", background: "#FBF8EC", border: "1px solid #E0D9B8", borderRadius: "16px", padding: "56px 60px", boxSizing: "border-box" }}>
           <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <img src="https://lh3.googleusercontent.com/a-/ALV-UjVd25nW1zHtfxUwKZuHN2Z62I2M2518k9vbRgSFDL7raRgZLhc=s120-c-rp-mo" alt="Seth Rabinowitz" referrerPolicy="no-referrer" style={{ width: "104px", height: "104px", borderRadius: "100px", objectFit: "cover", background: "#E0D9B8" }} />
            <div>
             <h4 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "21px", color: "#0F1729", lineHeight: 1.25, margin: 0 }}>Seth Rabinowitz</h4>
             <div style={{ display: "flex", alignItems: "center", gap: "7px", marginTop: "8px", fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3B4C5E" }}><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Googleg Standard Color 128Dp" style={{ width: "15px", height: "15px", display: "block", filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)" }} /> Posted on Google</div>
            </div>
            <span style={{ color: "#C98A2C", fontSize: "17px", letterSpacing: "0.18em", lineHeight: 1 }}>★★★★★</span>
           </div>
           <div>
            <span style={{ fontFamily: "Georgia,serif", fontSize: "82px", color: "#C98A2C", lineHeight: 0.4, display: "block", height: "44px" }}>“</span>
            <p style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 400, fontSize: "27px", lineHeight: 1.5, color: "#0F1729", margin: "24px 0 0", textWrap: "pretty" }}>We had a great experience working with Stanley. He taught us a lot about the specific market we were looking in, which enabled us to make a very good decision on purchase of a new home.</p>
           </div>
          </a>
          <a href="https://www.google.com/maps/contrib/101694945511048714275/reviews?hl=en" target="_blank" rel="noopener" style={{ scrollSnapAlign: "center", flex: "0 0 100%", display: "grid", gridTemplateColumns: "300px 1fr", gap: "56px", alignItems: "center", background: "#FBF8EC", border: "1px solid #E0D9B8", borderRadius: "16px", padding: "56px 60px", boxSizing: "border-box" }}>
           <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <img src="https://lh3.googleusercontent.com/a-/ALV-UjX0xFjJe65Or_gH4pidKtMzlHLnwtjHpiu1DGAeEo9WZQTVlvKdzg=s120-c-rp-mo-ba12" alt="Angelina Darrisaw" referrerPolicy="no-referrer" style={{ width: "104px", height: "104px", borderRadius: "100px", objectFit: "cover", background: "#E0D9B8" }} />
            <div>
             <h4 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "21px", color: "#0F1729", lineHeight: 1.25, margin: 0 }}>Angelina Darrisaw</h4>
             <div style={{ display: "flex", alignItems: "center", gap: "7px", marginTop: "8px", fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3B4C5E" }}><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Googleg Standard Color 128Dp" style={{ width: "15px", height: "15px", display: "block", filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)" }} /> Posted on Google</div>
            </div>
            <span style={{ color: "#C98A2C", fontSize: "17px", letterSpacing: "0.18em", lineHeight: 1 }}>★★★★★</span>
           </div>
           <div>
            <span style={{ fontFamily: "Georgia,serif", fontSize: "82px", color: "#C98A2C", lineHeight: 0.4, display: "block", height: "44px" }}>“</span>
            <p style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 400, fontSize: "27px", lineHeight: 1.5, color: "#0F1729", margin: "24px 0 0", textWrap: "pretty" }}>Incredible experience. Very knowledgeable about the brownstone buying process and helped me understand the budget differences for condo vs brownstones. Walked away more informed as a result.</p>
           </div>
          </a>
          </div>
          <button id="review-prev" aria-label="Previous review" style={{ position: "absolute", top: "50%", left: "-8px", transform: "translateY(-50%)", width: "56px", height: "56px", borderRadius: "100px", border: "1px solid #C98A2C", background: "#F9F6E6", color: "#113B5F", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 12px 30px rgba(17,59,95,0.22)", transition: "background .25s ease, color .25s ease" }} {...{ "onclick": "var t=document.getElementById('review-track'); var w=t.clientWidth||1; var n=t.children.length; var cur=Math.round(t.scrollLeft/w); var i=((cur+(-1))%n+n)%n; t.scrollTo({left:i*w, behavior:'smooth'}); return false;", "style-hover": "background:#113B5F; color:#F9F6E6" }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
          <button id="review-next" aria-label="Next review" style={{ position: "absolute", top: "50%", right: "-8px", transform: "translateY(-50%)", width: "56px", height: "56px", borderRadius: "100px", border: "1px solid #C98A2C", background: "#F9F6E6", color: "#113B5F", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 12px 30px rgba(17,59,95,0.22)", transition: "background .25s ease, color .25s ease" }} {...{ "onclick": "var t=document.getElementById('review-track'); var w=t.clientWidth||1; var n=t.children.length; var cur=Math.round(t.scrollLeft/w); var i=((cur+(1))%n+n)%n; t.scrollTo({left:i*w, behavior:'smooth'}); return false;", "style-hover": "background:#113B5F; color:#F9F6E6" }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
         </div>
         <div id="review-dots" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "32px" }}>
          <button className="rev-dot" data-i="0" aria-label="Go to review 1" style={{ width: "28px", height: "9px", padding: 0, border: 0, borderRadius: "100px", background: "#C98A2C", cursor: "pointer", transition: "background .25s ease, width .25s ease" }} {...{ "onclick": "var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" }}></button>
          <button className="rev-dot" data-i="1" aria-label="Go to review 2" style={{ width: "9px", height: "9px", padding: 0, border: 0, borderRadius: "100px", background: "#D9CFA6", cursor: "pointer", transition: "background .25s ease, width .25s ease" }} {...{ "onclick": "var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" }}></button>
          <button className="rev-dot" data-i="2" aria-label="Go to review 3" style={{ width: "9px", height: "9px", padding: 0, border: 0, borderRadius: "100px", background: "#D9CFA6", cursor: "pointer", transition: "background .25s ease, width .25s ease" }} {...{ "onclick": "var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" }}></button>
          <button className="rev-dot" data-i="3" aria-label="Go to review 4" style={{ width: "9px", height: "9px", padding: 0, border: 0, borderRadius: "100px", background: "#D9CFA6", cursor: "pointer", transition: "background .25s ease, width .25s ease" }} {...{ "onclick": "var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" }}></button>
          <button className="rev-dot" data-i="4" aria-label="Go to review 5" style={{ width: "9px", height: "9px", padding: 0, border: 0, borderRadius: "100px", background: "#D9CFA6", cursor: "pointer", transition: "background .25s ease, width .25s ease" }} {...{ "onclick": "var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" }}></button>
          <button className="rev-dot" data-i="5" aria-label="Go to review 6" style={{ width: "9px", height: "9px", padding: 0, border: 0, borderRadius: "100px", background: "#D9CFA6", cursor: "pointer", transition: "background .25s ease, width .25s ease" }} {...{ "onclick": "var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" }}></button>
         </div>
        </div>
       </section>

       <section data-screen-label="Instagram" style={{ background: "#F9F6E6", padding: "110px 64px", borderTop: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
         <div data-reveal="" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
           <div style={{ width: "64px", height: "64px", borderRadius: "100px", padding: "2.5px", background: "linear-gradient(135deg,#C98A2C,#F0D9A8)", flex: "0 0 auto" }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "100px", overflow: "hidden", background: "#0F1729", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <img src="https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png" alt="Montfort" style={{ width: "40px", height: "40px", objectFit: "contain", filter: "invert(1) brightness(2)" }} />
            </div>
           </div>
           <div>
            <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "26px", letterSpacing: "-0.01em", color: "#0F1729", lineHeight: 1.1 }}>@stanleymontfort</div>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "4px" }}>Follow the latest listings, sales &amp; NYC market insight</div>
           </div>
          </div>
          <a href="https://www.instagram.com/stanleymontfort/" target="_blank" rel="noopener" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", gap: "9px", background: "#0F1729", color: "#F9F6E6", fontSize: "13px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "100px", padding: "15px 28px", minHeight: "50px" }} {...{ "style-hover": "background:#C98A2C; color:#0F1729" }}>
           <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"></rect><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"></circle><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"></circle></svg>
           Follow
          </a>
         </div>
         <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "22px", marginTop: "52px" }}>
          <a href="https://www.instagram.com/p/DbZFQBTD4hS/" target="_blank" rel="noopener" style={{ position: "relative", display: "block", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", background: "#0F1729" }}>
           <img src="/instagram/ig-1.webp" alt="Instagram post" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} width="640" height="800" />
           
           <div className="ig-ov" style={{ position: "absolute", inset: 0, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%)", opacity: 0, transition: "opacity .35s ease" }}>
            <p style={{ fontSize: "13.5px", lineHeight: 1.5, color: "#F9F6E6", margin: "0 0 12px", fontWeight: 500, textWrap: "pretty" }}>Just Listed: 904 Gates Avenue, Bedford-Stuyvesant</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#F0D9A8", fontSize: "12.5px", fontWeight: 700 }}>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 22</span>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 3</span>
            </div>
           </div>
          </a>
          <a href="https://www.instagram.com/p/DbWdWwVCUnb/" target="_blank" rel="noopener" style={{ position: "relative", display: "block", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", background: "#0F1729" }}>
           <img src="/instagram/ig-2.webp" alt="Instagram post" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} width="1439" height="959" />
           
           <div className="ig-ov" style={{ position: "absolute", inset: 0, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%)", opacity: 0, transition: "opacity .35s ease" }}>
            <p style={{ fontSize: "13.5px", lineHeight: 1.5, color: "#F9F6E6", margin: "0 0 12px", fontWeight: 500, textWrap: "pretty" }}>A 4-unit Brooklyn property where the numbers really stand out</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#F0D9A8", fontSize: "12.5px", fontWeight: 700 }}>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 41</span>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 2</span>
            </div>
           </div>
          </a>
          <a href="https://www.instagram.com/p/DbHHdBzGiZ3/" target="_blank" rel="noopener" style={{ position: "relative", display: "block", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", background: "#0F1729" }}>
           <img src="/instagram/ig-3.webp" alt="Instagram post" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} width="1439" height="959" />
           
           <div className="ig-ov" style={{ position: "absolute", inset: 0, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%)", opacity: 0, transition: "opacity .35s ease" }}>
            <p style={{ fontSize: "13.5px", lineHeight: 1.5, color: "#F9F6E6", margin: "0 0 12px", fontWeight: 500, textWrap: "pretty" }}>SOLD: 481 West 145th Street, last asking $2,550,000</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#F0D9A8", fontSize: "12.5px", fontWeight: 700 }}>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 70</span>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 11</span>
            </div>
           </div>
          </a>
          <a href="https://www.instagram.com/p/DalKzvTEWlq/" target="_blank" rel="noopener" style={{ position: "relative", display: "block", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", background: "#0F1729" }}>
           <img src="/instagram/ig-4.webp" alt="Instagram post" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} width="720" height="900" />
           
           <div className="ig-ov" style={{ position: "absolute", inset: 0, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%)", opacity: 0, transition: "opacity .35s ease" }}>
            <p style={{ fontSize: "13.5px", lineHeight: 1.5, color: "#F9F6E6", margin: "0 0 12px", fontWeight: 500, textWrap: "pretty" }}>What if owning a brownstone cost less each month than renting?</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#F0D9A8", fontSize: "12.5px", fontWeight: 700 }}>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 65</span>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 9</span>
            </div>
           </div>
          </a>
          <a href="https://www.instagram.com/p/DadYwSGFTy_/" target="_blank" rel="noopener" style={{ position: "relative", display: "block", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", background: "#0F1729" }}>
           <img src="/instagram/ig-5.webp" alt="Instagram post" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} width="720" height="900" />
           
           <div className="ig-ov" style={{ position: "absolute", inset: 0, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%)", opacity: 0, transition: "opacity .35s ease" }}>
            <p style={{ fontSize: "13.5px", lineHeight: 1.5, color: "#F9F6E6", margin: "0 0 12px", fontWeight: 500, textWrap: "pretty" }}>SOLD: 49 East 126th Street, last asking $2,250,000</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#F0D9A8", fontSize: "12.5px", fontWeight: 700 }}>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 88</span>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 19</span>
            </div>
           </div>
          </a>
          <a href="https://www.instagram.com/p/DaQ7iNZicGp/" target="_blank" rel="noopener" style={{ position: "relative", display: "block", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", background: "#0F1729" }}>
           <img src="/instagram/ig-6.webp" alt="Instagram post" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} width="1080" height="1350" />
           
           <div className="ig-ov" style={{ position: "absolute", inset: 0, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%)", opacity: 0, transition: "opacity .35s ease" }}>
            <p style={{ fontSize: "13.5px", lineHeight: 1.5, color: "#F9F6E6", margin: "0 0 12px", fontWeight: 500, textWrap: "pretty" }}>How to create $2,000,000+ in equity buying a brownstone</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#F0D9A8", fontSize: "12.5px", fontWeight: 700 }}>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 67</span>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 5</span>
            </div>
           </div>
          </a>
          <a href="https://www.instagram.com/p/DaLXUDZkbRu/" target="_blank" rel="noopener" style={{ position: "relative", display: "block", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", background: "#0F1729" }}>
           <img src="/instagram/ig-7.webp" alt="Instagram post" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} width="1080" height="1350" />
           
           <div className="ig-ov" style={{ position: "absolute", inset: 0, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%)", opacity: 0, transition: "opacity .35s ease" }}>
            <p style={{ fontSize: "13.5px", lineHeight: 1.5, color: "#F9F6E6", margin: "0 0 12px", fontWeight: 500, textWrap: "pretty" }}>SOLD: 265 West 139th Street, a Strivers’ Row landmark</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#F0D9A8", fontSize: "12.5px", fontWeight: 700 }}>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 169</span>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 16</span>
            </div>
           </div>
          </a>
          <a href="https://www.instagram.com/reel/DY0PDihu1pt/" target="_blank" rel="noopener" style={{ position: "relative", display: "block", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", background: "#0F1729" }}>
           <img src="/instagram/ig-8.webp" alt="Instagram post" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} width="1080" height="1350" />
           <span style={{ position: "absolute", top: "14px", right: "14px", width: "34px", height: "34px", borderRadius: "100px", background: "rgba(15,23,41,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="14" height="14" viewBox="0 0 16 16" fill="#fff"><path d="M4 3l9 5-9 5z"></path></svg></span>
           <div className="ig-ov" style={{ position: "absolute", inset: 0, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%)", opacity: 0, transition: "opacity .35s ease" }}>
            <p style={{ fontSize: "13.5px", lineHeight: 1.5, color: "#F9F6E6", margin: "0 0 12px", fontWeight: 500, textWrap: "pretty" }}>In Contract: 49 East 126th Street, Harlem brownstone</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#F0D9A8", fontSize: "12.5px", fontWeight: 700 }}>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 58</span>
             <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 10</span>
            </div>
           </div>
          </a>
         </div>
        </div>
       </section>

       <section data-screen-label="What’s included" style={{ background: "#0F1729", padding: "110px 64px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
         <div data-reveal="" style={{ maxWidth: "820px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
           <span style={{ width: "34px", height: "1px", background: "#C98A2C", display: "block" }}></span>
           <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F0D9A8" }}>Included at no cost</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "46px", lineHeight: 1.2, letterSpacing: "-0.008em", color: "#F9F6E6", margin: "16px 0 0", textWrap: "pretty" }}>What’s Included When Working With A Realtor</h2>
         </div>
         <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "24px", marginTop: "56px" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", background: "rgba(249,246,230,0.05)", border: "1px solid rgba(201,138,44,0.3)", borderRadius: "16px", padding: "36px 34px 34px", transition: "transform .4s ease, border-color .4s ease" }} {...{ "style-hover": "transform:translateY(-6px); border-color:rgba(201,138,44,0.7)" }}>
           <div style={{ width: "96px", height: "96px", borderRadius: "16px", background: "rgba(201,138,44,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="https://assets.agentfire3.com/uploads/templates/home-2-2/5-200xAUTO.fit.png" alt="Closing Costs Savings" style={{ width: "64px", height: "64px", objectFit: "cover", display: "block" }} />
           </div>
           <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "23px", color: "#fff", lineHeight: 1.3, marginTop: "26px", margin: 0 }}>Closing Costs Savings</h3>
           <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(249,246,230,0.85)", margin: "12px 0 0", textWrap: "pretty" }}>We’ll assess each house to see if it qualifies to save you thousands of dollars at closing.</p>
          </div>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", background: "rgba(249,246,230,0.05)", border: "1px solid rgba(201,138,44,0.3)", borderRadius: "16px", padding: "36px 34px 34px", transition: "transform .4s ease, border-color .4s ease" }} {...{ "style-hover": "transform:translateY(-6px); border-color:rgba(201,138,44,0.7)" }}>
           <div style={{ width: "96px", height: "96px", borderRadius: "16px", background: "rgba(201,138,44,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="https://assets.agentfire3.com/uploads/templates/home-2-2/4-200xAUTO.fit.png" alt="Zero Cost Service" style={{ width: "64px", height: "64px", objectFit: "cover", display: "block" }} />
           </div>
           <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "23px", color: "#fff", lineHeight: 1.3, marginTop: "26px", margin: 0 }}>Zero Cost Service</h3>
           <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(249,246,230,0.85)", margin: "12px 0 0", textWrap: "pretty" }}>You’ll have an experienced team to rely on without any additional expenses.</p>
          </div>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", background: "rgba(249,246,230,0.05)", border: "1px solid rgba(201,138,44,0.3)", borderRadius: "16px", padding: "36px 34px 34px", transition: "transform .4s ease, border-color .4s ease" }} {...{ "style-hover": "transform:translateY(-6px); border-color:rgba(201,138,44,0.7)" }}>
           <div style={{ width: "96px", height: "96px", borderRadius: "16px", background: "rgba(201,138,44,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="https://assets.agentfire3.com/uploads/templates/home-2-2/7-200xAUTO.fit.png" alt="Pricing Analysis" style={{ width: "64px", height: "64px", objectFit: "cover", display: "block" }} />
           </div>
           <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "23px", color: "#fff", lineHeight: 1.3, marginTop: "26px", margin: 0 }}>Pricing Analysis</h3>
           <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(249,246,230,0.85)", margin: "12px 0 0", textWrap: "pretty" }}>We’ll pull historical data and conduct a pricing analysis so you never overpay for real estate.</p>
          </div>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", background: "rgba(249,246,230,0.05)", border: "1px solid rgba(201,138,44,0.3)", borderRadius: "16px", padding: "36px 34px 34px", transition: "transform .4s ease, border-color .4s ease" }} {...{ "style-hover": "transform:translateY(-6px); border-color:rgba(201,138,44,0.7)" }}>
           <div style={{ width: "96px", height: "96px", borderRadius: "16px", background: "rgba(201,138,44,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="https://assets.agentfire3.com/uploads/templates/home-2-2/6-200xAUTO.fit.png" alt="Off Market Properties" style={{ width: "64px", height: "64px", objectFit: "cover", display: "block" }} />
           </div>
           <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "23px", color: "#fff", lineHeight: 1.3, marginTop: "26px", margin: 0 }}>Off Market Properties</h3>
           <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(249,246,230,0.85)", margin: "12px 0 0", textWrap: "pretty" }}>A dedicated team regularly engages owners to find off-market opportunities that fit your needs.</p>
          </div>
         </div>
         <div data-reveal="" style={{ display: "flex", justifyContent: "center", marginTop: "56px" }}>
          <a href="https://calendly.com/montfort" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#C98A2C", color: "#0F1729", fontSize: "14.5px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: "100px", padding: "19px 40px", minHeight: "56px" }} {...{ "style-hover": "background:#F0D9A8" }}>Schedule Free Consultation</a>
         </div>
        </div>
       </section>

       <section data-screen-label="Listings" style={{ background: "#F9F6E6", padding: "120px 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 64px" }}>
         <div data-reveal="" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "40px" }}>
          <div>
           <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ width: "34px", height: "1px", background: "#C98A2C", display: "block" }}></span>
            <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>On the market</span>
           </div>
           <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "46px", lineHeight: 1.2, letterSpacing: "-0.008em", color: "#0F1729", margin: "16px 0 0", textWrap: "pretty" }}>Current Realtor Listings</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flex: "0 0 auto" }}>
           <button id="listings-prev" aria-label="Previous listings" style={{ width: "52px", height: "52px", borderRadius: "100px", border: "1px solid #C98A2C", background: "#F9F6E6", color: "#113B5F", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background .25s ease, color .25s ease" }} {...{ "onclick": "var t=document.getElementById('listings-track'); t.scrollBy({left:(-1)*Math.min(t.clientWidth,760), behavior:'smooth'}); return false;", "style-hover": "background:#113B5F; color:#F9F6E6" }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
           <button id="listings-next" aria-label="Next listings" style={{ width: "52px", height: "52px", borderRadius: "100px", border: "1px solid #C98A2C", background: "#F9F6E6", color: "#113B5F", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background .25s ease, color .25s ease" }} {...{ "onclick": "var t=document.getElementById('listings-track'); t.scrollBy({left:(1)*Math.min(t.clientWidth,760), behavior:'smooth'}); return false;", "style-hover": "background:#113B5F; color:#F9F6E6" }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
          </div>
         </div>
        </div>
        <div id="listings-track" className="no-sb" style={{ display: "flex", gap: "24px", marginTop: "48px", padding: "6px 64px 10px", overflowX: "auto", scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}>
          <a href="/523-west-121st-street-2/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2026/06/1a-Living-room-700x560.fit.jpg" alt="523 West 121st Street #2" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="467" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$799,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>523 West 121st Street #2</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>2 beds · 1 bath</div>
           </div>
          </a>
          <a href="/26-west-95th-street/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2026/04/26-West-95th-Street-700x560.fit.png" alt="26 West 95th Street" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="465" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$11,995,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>26 West 95th Street</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>1893 · 6,700 sqft · 5 stories</div>
           </div>
          </a>
          <a href="/124-west-131st-street-2/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2025/10/1-6-700x560.fit.png" alt="124 West 131st Street" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="472" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$3,495,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>124 West 131st Street</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>5 beds · 4.5 baths · 4,688 sqft</div>
           </div>
          </a>
          <a href="/14-west-121st-street/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2025/10/Listing-Photo-9h-14-West-121st-St-1-1-700x560.fit.jpg" alt="14 West 121st Street" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="373" height="560" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$2,999,999</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>14 West 121st Street</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>6 beds · 4.5 baths · 5,320 sqft</div>
           </div>
          </a>
          <a href="/475-west-144th-street/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2026/04/475-West-144th-Street-700x560.fit.png" alt="475 West 144th Street" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="464" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$2,249,999</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>475 West 144th Street</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>1901 · 4,608 sqft · 4 stories</div>
           </div>
          </a>
          <a href="/313-west-143rd-street-2a/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2025/10/Photo-1-Livingroom-313-West-143rd-St-2A-700x560.fit.jpg" alt="313 West 143rd Street #2A" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="467" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$1,250,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>313 West 143rd Street #2A</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>3 beds · 2 baths · 1,650 sqft</div>
           </div>
          </a>
          <a href="/542-cathedral-parkway/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-542-Catherdral-Parkway-700x560.fit.jpg" alt="542 Cathedral Parkway" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="467" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$4,950,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>542 Cathedral Parkway</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>1985 · 4,100 sqft · 4 stories</div>
           </div>
          </a>
          <a href="/544-west-148th-street/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-544-West-148th-Street-700x560.fit.jpg" alt="544 West 148th Street" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="467" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$2,699,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>544 West 148th Street</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>1910 · 3,536 sqft · 4 stories</div>
           </div>
          </a>
          <a href="/76-west-105th-street-thn/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-700x560.fit.png" alt="76 West 105th Street #THN" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="467" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$4,750,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>76 West 105th Street #THN</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>3 beds · 3+ baths · 4,232 sqft</div>
           </div>
          </a>
          <a href="/76-west-105th-street-ph/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-2-700x560.fit.jpg" alt="76 West 105th Street #PH" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="467" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$4,450,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>76 West 105th Street #PH</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>4 beds · 4 baths · 3,675 sqft</div>
           </div>
          </a>
          <a href="/2040-madison-avenue-4/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-2040-Madison-Ave-700x560.fit.jpg" alt="2040 Madison Avenue" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="467" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$2,250,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>2040 Madison Avenue</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>1899 · 3,240 sqft · 4 stories</div>
           </div>
          </a>
          <a href="/420-west-144th-street/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-420-W-144th-St-700x560.fit.jpg" alt="420 West 144th Street" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="467" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$3,199,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>420 West 144th Street</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>1920 · 3,615 sqft · 4 stories</div>
           </div>
          </a>
          <a href="/481-west-145th-street/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2025/03/1481w145-700x560.fit.jpg" alt="481 West 145th Street" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="467" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$2,550,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>481 West 145th Street</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>1926 · 3,666 sqft · 4 stories</div>
           </div>
          </a>
          <a href="/108-west-114th-street-4b/" target="_blank" rel="noopener" style={{ scrollSnapAlign: "start", flex: "0 0 380px", display: "flex", flexDirection: "column", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: "16px", overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease" }} {...{ "style-hover": "transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)" }}>
           <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", background: "#E0D9B8" }}>
            <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/108-West-114th-Street-4B-700x560.fit.png" alt="108 West 114th Street #4B" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }} width="700" height="467" {...{ "style-hover": "transform:scale(1.06)" }} />
            <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(15,23,41,0.92)", color: "#F9F6E6", fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", padding: "8px 16px", borderRadius: "100px" }}>$350,000</span>
           </div>
           <div style={{ padding: "24px 26px 26px" }}>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", lineHeight: 1.3, textWrap: "pretty", margin: 0 }}>108 West 114th Street #4B</h3>
            <div style={{ fontSize: "14px", color: "#3B4C5E", marginTop: "6px" }}>New York, NY</div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "16px", paddingTop: "15px", borderTop: "1px solid #E0D9B8", fontSize: "13.5px", fontWeight: 600, color: "#113B5F" }}>1 bed · 1 bath</div>
           </div>
          </a>
        </div>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 64px" }}>
         <div data-reveal="" style={{ display: "flex", justifyContent: "center", marginTop: "44px" }}>
          <a href="/current-listings/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#113B5F", color: "#F9F6E6", fontSize: "14px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: "100px", padding: "18px 40px", minHeight: "54px" }} {...{ "style-hover": "background:#C98A2C; color:#0F1729" }}>See all listings</a>
         </div>
        </div>
       </section>

      <ResourcesSection />

      <section data-screen-label="Download" style={{ background: "#113B5F", padding: "100px 64px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "stretch" }}>
         <div data-reveal="" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C98A2C" }}>Free Download</div>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "42px", lineHeight: 1.22, letterSpacing: "-0.008em", color: "#F9F6E6", margin: "16px 0 0", textWrap: "pretty" }}>11 Costly Mistakes Made When Buying a Brownstone</h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(249,246,230,0.78)", margin: "14px 0 0", maxWidth: "600px", textWrap: "pretty" }}>Educate yourself on these 11 costly mistakes, the difference between a successful purchase and a disastrous one.</p>
          <p style={{ fontSize: "17px", lineHeight: 1.85, color: "rgba(249,246,230,0.9)", margin: "14px 0 0", maxWidth: "600px", textWrap: "pretty" }}>
           Are you in the market for a <a href="/featured-brownstones-for-sale/harlem-brownstones/" style={{ color: "#C98A2C" }}>brownstone</a>? Taking the time to educate yourself on these 11 costly mistakes can make all the difference between a successful purchase and a disastrous one.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "32px", maxWidth: "460px" }}>
           <input type="text" placeholder="Your name" style={{ background: "rgba(249,246,230,0.1)", border: "1px solid rgba(201,138,44,0.45)", borderRadius: "10px", padding: "15px 16px", fontFamily: "inherit", fontSize: "15.5px", color: "#F9F6E6", minHeight: "52px" }} />
           <input type="email" placeholder="Email address" style={{ background: "rgba(249,246,230,0.1)", border: "1px solid rgba(201,138,44,0.45)", borderRadius: "10px", padding: "15px 16px", fontFamily: "inherit", fontSize: "15.5px", color: "#F9F6E6", minHeight: "52px" }} />
           <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#C98A2C", color: "#0F1729", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: "100px", fontSize: "15px", padding: "17px 24px", minHeight: "54px" }} {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}>Download the guide</a>
          </div>
         </div>
         <div data-reveal="" style={{ position: "relative", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(201,138,44,0.55)", boxShadow: "0 30px 70px rgba(11,18,32,0.4)", minHeight: "440px", background: "#0B1220" }}>
          <iframe title="Montfort Real Estate on Google Maps" src="https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&amp;output=embed" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, filter: "grayscale(1) contrast(0.92) brightness(0.92)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(120deg, rgba(17,59,95,0.34) 0%, rgba(17,59,95,0) 46%), linear-gradient(0deg, rgba(11,18,32,0.55) 0%, rgba(11,18,32,0) 34%)", mixBlendMode: "multiply" }}></div>
          <div style={{ position: "absolute", left: "24px", right: "24px", bottom: "24px", background: "#F9F6E6", borderRadius: "16px", borderTop: "3px solid #C98A2C", padding: "24px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", boxShadow: "0 20px 44px rgba(11,18,32,0.35)" }}>
           <div>
            <div style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C98A2C" }}>Visit our office</div>
            <h3 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: "20px", color: "#0F1729", marginTop: "8px", lineHeight: 1.3, margin: 0 }}>8 West 126th Street</h3>
            <div style={{ fontSize: "14.5px", color: "#3B4C5E", marginTop: "3px" }}>New York, NY 10027</div>
           </div>
           <a href="https://maps.google.com/?cid=11378470238102062088" target="_blank" rel="noopener" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", gap: "9px", background: "#113B5F", color: "#F9F6E6", fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "100px", padding: "14px 22px" }} {...{ "style-hover": "background:#C98A2C; color:#0F1729" }}>Directions <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8 3.5L12.5 8 8 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
          </div>
         </div>
        </div>
       </section>
    </>
  );
}
