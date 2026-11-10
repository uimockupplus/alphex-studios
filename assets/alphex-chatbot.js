(() => {
  if (window.__alphexStudioAssistant) return;
  window.__alphexStudioAssistant = true;

  const style = document.createElement("style");
  style.textContent = `
  #alphex-assistant{
    --ax-bg:#080a0d;--ax-panel:rgba(16,19,23,.78);--ax-surface:rgba(255,255,255,.055);
    --ax-text:#f2f2e9;--ax-muted:#a1a69e;--ax-yellow:#F4E747;--ax-line:rgba(255,255,255,.13);
    position:fixed;right:28px;bottom:28px;z-index:54;color:var(--ax-text);
    font-family:Inter,system-ui,sans-serif;isolation:isolate
  }
  #alphex-assistant *{box-sizing:border-box}
  #alphex-assistant button,#alphex-assistant input{font:inherit}
  /* Animated glass robot launcher */
  #ax-launch{
    position:relative;width:72px;height:72px;padding:0;display:grid;place-items:center;
    border-radius:25px;cursor:pointer;overflow:visible;color:var(--ax-yellow);
    border:1px solid rgba(255,255,255,.23);
    background:linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.025) 42%,rgba(244,231,71,.075));
    -webkit-backdrop-filter:blur(22px) saturate(170%);backdrop-filter:blur(22px) saturate(170%);
    box-shadow:0 16px 42px rgba(0,0,0,.52),inset 0 1px 1px rgba(255,255,255,.2),inset 0 -1px rgba(255,255,255,.045),0 0 26px rgba(244,231,71,.10);
    transition:transform .28s cubic-bezier(.2,.8,.2,1),border-color .28s,box-shadow .28s
  }
  #ax-launch::before{content:"";position:absolute;inset:1px;border-radius:24px;pointer-events:none;background:linear-gradient(135deg,rgba(255,255,255,.19),transparent 34%,transparent 70%,rgba(244,231,71,.09));opacity:.8}
  #ax-launch::after{content:"";position:absolute;right:8px;top:8px;width:7px;height:7px;border-radius:50%;background:var(--ax-yellow);box-shadow:0 0 12px rgba(244,231,71,.8);border:1px solid rgba(8,10,13,.8)}
  #ax-launch:hover{transform:translateY(-5px) rotate(-2deg) scale(1.035);border-color:rgba(244,231,71,.62);box-shadow:0 22px 50px rgba(0,0,0,.58),inset 0 1px 1px rgba(255,255,255,.24),0 0 32px rgba(244,231,71,.17)}
  #ax-launch:active{transform:translateY(-1px) scale(.97)}
  #ax-launch:focus-visible,#ax-close:focus-visible,#ax-send:focus-visible{outline:2px solid var(--ax-yellow);outline-offset:4px}
  .ax-bot-face{position:relative;z-index:1;width:52px;height:52px;filter:drop-shadow(0 4px 9px rgba(0,0,0,.35));animation:ax-bob 3.2s ease-in-out infinite}
  .ax-bot-face svg{width:100%;height:100%;overflow:visible}
  .ax-bot-pupil{transform-box:fill-box;transform-origin:center;animation:ax-look 4.8s ease-in-out infinite}
  .ax-eye-right .ax-bot-pupil{animation-delay:-.08s}
  .ax-bot-lid{transform-box:fill-box;transform-origin:top;animation:ax-blink 5.3s infinite}
  .ax-eye-right .ax-bot-lid{animation-delay:.04s}
  .ax-antenna{transform-origin:50% 100%;animation:ax-antenna 2.8s ease-in-out infinite}
  @keyframes ax-bob{0%,100%{transform:translateY(1px)}50%{transform:translateY(-2px)}}
  @keyframes ax-look{0%,16%,100%{transform:translateX(0)}25%,37%{transform:translateX(3px)}55%,68%{transform:translateX(-3px)}80%{transform:translateX(1px)}}
  @keyframes ax-blink{0%,42%,46%,78%,82%,100%{transform:scaleY(0)}44%,80%{transform:scaleY(1)}}
  @keyframes ax-antenna{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(6deg)}}
  #ax-panel{
    position:absolute;right:0;bottom:91px;width:min(410px,calc(100vw - 32px));
    height:min(650px,calc(100dvh - 145px));min-height:470px;display:none;
    grid-template-rows:auto 1fr auto;overflow:hidden;border-radius:27px;
    border:1px solid rgba(255,255,255,.19);
    background:linear-gradient(145deg,rgba(255,255,255,.12),rgba(255,255,255,.025) 22%,rgba(10,13,17,.72) 58%,rgba(244,231,71,.035)),
      rgba(12,15,19,.76);
    -webkit-backdrop-filter:blur(32px) saturate(165%);backdrop-filter:blur(32px) saturate(165%);
    box-shadow:0 32px 100px rgba(0,0,0,.68),inset 0 1px 1px rgba(255,255,255,.2),inset 0 -1px rgba(255,255,255,.05),0 0 35px rgba(244,231,71,.045);
    transform-origin:bottom right
  }
  #ax-panel::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;border-radius:inherit;background:radial-gradient(420px circle at var(--mx,90%) var(--my,0%),rgba(255,255,255,.095),transparent 48%),linear-gradient(125deg,rgba(255,255,255,.07),transparent 23%,transparent 74%,rgba(244,231,71,.045))}
  #ax-panel::after{content:"";position:absolute;inset:1px;z-index:0;border-radius:26px;pointer-events:none;border:1px solid rgba(255,255,255,.055)}
  #ax-panel.ax-open{display:grid;animation:ax-enter .36s cubic-bezier(.2,.8,.2,1) both}
  @keyframes ax-enter{from{opacity:0;transform:translateY(16px) scale(.965);filter:blur(5px)}to{opacity:1;transform:none;filter:blur(0)}}
  .ax-head{position:relative;z-index:1;display:flex;align-items:center;gap:12px;padding:16px 17px;border-bottom:1px solid rgba(255,255,255,.11);background:rgba(255,255,255,.035);box-shadow:inset 0 1px rgba(255,255,255,.1)}
  .ax-mark{width:40px;height:40px;flex:none;display:grid;place-items:center;border-radius:14px;color:var(--ax-yellow);font:700 19px Sora,Inter,sans-serif;background:linear-gradient(145deg,rgba(255,255,255,.14),rgba(255,255,255,.025));border:1px solid rgba(255,255,255,.17);box-shadow:inset 0 1px rgba(255,255,255,.15),0 5px 16px rgba(0,0,0,.2)}
  .ax-brand{font:700 11px Sora,Inter,sans-serif;letter-spacing:.16em;color:#f2f2e9}
  .ax-sub{display:flex;align-items:center;gap:7px;margin-top:5px;color:var(--ax-muted);font-size:10px}
  .ax-online{width:6px;height:6px;border-radius:50%;background:var(--ax-yellow);box-shadow:0 0 8px rgba(244,231,71,.65)}
  #ax-close{margin-left:auto;width:34px;height:34px;border-radius:12px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.055);color:#d8d9d2;font-size:19px;line-height:1;cursor:pointer;backdrop-filter:blur(10px);transition:background .2s,border-color .2s,color .2s,transform .2s}
  #ax-close:hover{background:rgba(244,231,71,.1);border-color:rgba(244,231,71,.4);color:var(--ax-yellow);transform:rotate(90deg)}
  #ax-feed{position:relative;z-index:1;overflow:auto;display:flex;flex-direction:column;gap:13px;padding:20px 18px 18px;scroll-behavior:smooth;overscroll-behavior:contain}
  #ax-feed::-webkit-scrollbar{width:5px}#ax-feed::-webkit-scrollbar-thumb{background:rgba(255,255,255,.18);border-radius:8px}
  .ax-intro{padding:2px 1px 7px}
  .ax-kicker{display:inline-flex;align-items:center;gap:8px;color:var(--ax-yellow);font-size:9px;font-weight:750;letter-spacing:.17em;text-transform:uppercase}
  .ax-kicker::before{content:"";width:16px;height:1px;background:var(--ax-yellow)}
  .ax-intro h3{font:600 26px/1.13 Sora,Inter,sans-serif;letter-spacing:-.055em;margin:12px 0 9px;color:#f3f3ec}
  .ax-intro h3 em{font-style:normal;color:var(--ax-yellow)}
  .ax-intro p{font-size:11.5px;line-height:1.75;color:var(--ax-muted);margin:0;max-width:315px}
  .ax-quick{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:18px}
  .ax-quick button{position:relative;min-height:58px;text-align:left;padding:11px 30px 11px 12px;border:1px solid rgba(255,255,255,.13);border-radius:14px;background:linear-gradient(145deg,rgba(255,255,255,.095),rgba(255,255,255,.025));box-shadow:inset 0 1px rgba(255,255,255,.09);color:#e7e8e0;font-size:10.5px;line-height:1.45;cursor:pointer;backdrop-filter:blur(12px);transition:background .2s,border-color .2s,transform .2s}
  .ax-quick button::after{content:"↗";position:absolute;right:11px;top:10px;color:var(--ax-yellow);font-size:13px}
  .ax-quick button:hover{background:rgba(244,231,71,.075);border-color:rgba(244,231,71,.4);transform:translateY(-2px)}
  .ax-bubble{max-width:88%;padding:11px 13px;border-radius:16px;font-size:12px;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;backdrop-filter:blur(12px)}
  .ax-bubble.bot{align-self:flex-start;border:1px solid rgba(255,255,255,.13);background:linear-gradient(145deg,rgba(255,255,255,.105),rgba(255,255,255,.035));box-shadow:inset 0 1px rgba(255,255,255,.08);border-top-left-radius:5px;color:#e9eae4}
  .ax-bubble.user{align-self:flex-end;border:1px solid rgba(244,231,71,.3);background:rgba(244,231,71,.105);box-shadow:inset 0 1px rgba(244,231,71,.1);border-top-right-radius:5px;color:#f7f5d8;font-weight:550}
  .ax-typing{display:flex;align-items:center;gap:4px;height:15px}
  .ax-typing i{width:5px;height:5px;border-radius:50%;background:var(--ax-yellow);animation:ax-dot .8s infinite alternate}
  .ax-typing i:nth-child(2){animation-delay:.15s}.ax-typing i:nth-child(3){animation-delay:.3s}
  @keyframes ax-dot{to{transform:translateY(-5px);opacity:.4}}
  .ax-actions{display:flex;gap:16px;flex-wrap:wrap;padding:0 2px 3px}
  .ax-link{color:var(--ax-yellow);font-size:11px;text-decoration:none;border-bottom:1px solid rgba(244,231,71,.38);padding-bottom:3px}
  .ax-link:hover{border-color:var(--ax-yellow)}
  .ax-foot{position:relative;z-index:1;padding:13px 15px 14px;border-top:1px solid rgba(255,255,255,.12);background:rgba(7,9,12,.43);backdrop-filter:blur(24px)}
  #ax-form{display:flex;align-items:center;gap:9px;padding:5px 5px 5px 14px;border:1px solid rgba(255,255,255,.16);border-radius:15px;background:rgba(255,255,255,.065);box-shadow:inset 0 1px rgba(255,255,255,.08);transition:border-color .2s,box-shadow .2s}
  #ax-form:focus-within{border-color:rgba(244,231,71,.52);box-shadow:0 0 0 3px rgba(244,231,71,.055),inset 0 1px rgba(255,255,255,.08)}
  #ax-input{flex:1;min-width:0;padding:9px 0;border:0;outline:0;background:transparent;color:var(--ax-text);font-size:12px}
  #ax-input::placeholder{color:#92978f}
  #ax-send{width:38px;height:38px;flex:none;border:1px solid rgba(244,231,71,.58);border-radius:12px;background:var(--ax-yellow);color:#11120b;cursor:pointer;font-size:19px;font-weight:800;transition:transform .2s,filter .2s}
  #ax-send:hover{transform:translateY(-1px) scale(1.03);filter:brightness(.94)}
  #ax-send:disabled{opacity:.5;cursor:wait}
  .ax-note{text-align:center;margin-top:9px;color:#858a82;font-size:9px;letter-spacing:.025em}
  @media(max-width:900px){#alphex-assistant{right:16px;bottom:88px}#alphex-assistant.ax-dock-visible{bottom:92px}}
  @media(max-width:540px){#alphex-assistant{right:14px;bottom:86px}#ax-launch{width:66px;height:66px;border-radius:23px}#ax-panel{position:fixed;right:9px;bottom:78px;width:calc(100vw - 18px);height:min(72dvh,650px);min-height:430px;border-radius:23px}#ax-feed{padding:17px 15px}.ax-intro h3{font-size:24px}}
  @media(max-width:360px){.ax-quick{grid-template-columns:1fr}.ax-quick button{min-height:45px}}
  @media(prefers-reduced-motion:reduce){#ax-panel.ax-open{animation:none}#ax-launch,.ax-bot-face,.ax-bot-pupil,.ax-bot-lid,.ax-antenna{animation:none!important;transition:none}}
  `;
  document.head.appendChild(style);

  const root = document.createElement("div");
  root.id = "alphex-assistant";
  root.innerHTML = `
    <section id="ax-panel" role="dialog" aria-label="Chat with Alphex Studio" aria-modal="false">
      <header class="ax-head">
        <div class="ax-mark" aria-hidden="true">α</div>
        <div><div class="ax-brand">ALPHEX STUDIO</div><div class="ax-sub"><i class="ax-online"></i> AI assistant · Here to help</div></div>
        <button id="ax-close" type="button" aria-label="Close chat">×</button>
      </header>
      <div id="ax-feed" aria-live="polite">
        <div class="ax-intro">
          <div class="ax-kicker">ALPHEX / ASSISTANT</div>
          <h3>Ideas start here.<br><em>What can we build?</em></h3>
          <p>Get clear answers about our services, pricing and process. Or tell us what you're planning.</p>
          <div class="ax-quick">
            <button type="button" data-prompt="What services does Alphex Studio offer?">Explore services</button>
            <button type="button" data-prompt="Show me your website packages and starting prices.">Packages & pricing</button>
            <button type="button" data-prompt="I want to discuss a website project.">Discuss a project</button>
          </div>
        </div>
      </div>
      <footer class="ax-foot">
        <form id="ax-form">
          <input id="ax-input" type="text" maxlength="1200" autocomplete="off" placeholder="Ask us anything..." aria-label="Your message">
          <button id="ax-send" type="submit" aria-label="Send message">↗</button>
        </form>
        <div class="ax-note">AI-assisted · Human-refined · Alphex Studio</div>
      </footer>
    </section>
    <button id="ax-launch" type="button" aria-label="Open Alphex Studio chat" aria-expanded="false">
      <span class="ax-bot-face" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none">
          <g class="ax-antenna"><path d="M32 8V4.8" stroke="#F4E747" stroke-width="2.2" stroke-linecap="round"/><circle cx="32" cy="3.7" r="2.4" fill="#F4E747"/></g>
          <rect x="7.5" y="11" width="49" height="43" rx="15" fill="rgba(18,22,26,.88)" stroke="rgba(255,255,255,.62)" stroke-width="1.2"/>
          <path d="M10 24c2-7 8-11 15-11h14c7 0 13 4 15 11" stroke="rgba(255,255,255,.28)" stroke-width="1.1" stroke-linecap="round"/>
          <path d="M4.5 27v10M59.5 27v10" stroke="#F4E747" stroke-width="2.1" stroke-linecap="round"/>
          <g class="ax-eye-left">
            <rect x="15" y="25" width="14" height="13" rx="6.5" fill="#F4E747"/>
            <circle class="ax-bot-pupil" cx="22" cy="31.5" r="3.05" fill="#111318"/>
            <rect class="ax-bot-lid" x="14.5" y="24.5" width="15" height="14" rx="6.5" fill="#171b20"/>
          </g>
          <g class="ax-eye-right">
            <rect x="35" y="25" width="14" height="13" rx="6.5" fill="#F4E747"/>
            <circle class="ax-bot-pupil" cx="42" cy="31.5" r="3.05" fill="#111318"/>
            <rect class="ax-bot-lid" x="34.5" y="24.5" width="15" height="14" rx="6.5" fill="#171b20"/>
          </g>
          <path d="M25 45c2.2 2.3 4.5 3.3 7 3.3s4.8-1 7-3.3" stroke="#F4E747" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M14 18h36" stroke="rgba(255,255,255,.16)" stroke-width="1" stroke-linecap="round"/>
        </svg>
      </span>
    </button>`;
  document.body.appendChild(root);

  const panel = root.querySelector("#ax-panel");
  const launch = root.querySelector("#ax-launch");
  const feed = root.querySelector("#ax-feed");
  const form = root.querySelector("#ax-form");
  const input = root.querySelector("#ax-input");
  const sendButton = root.querySelector("#ax-send");
  const history = [];
  let busy = false;

  function openChat() {
    panel.classList.add("ax-open");
    launch.setAttribute("aria-expanded", "true");
    input.focus();
  }
  function closeChat() {
    panel.classList.remove("ax-open");
    launch.setAttribute("aria-expanded", "false");
    launch.focus();
  }
  launch.addEventListener("click", () => panel.classList.contains("ax-open") ? closeChat() : openChat());
  // The robot glances toward pointer movement, then returns to its idle eye animation.
  const botEyes = root.querySelectorAll(".ax-bot-pupil");
  launch.addEventListener("pointermove", e => {
    const r = launch.getBoundingClientRect();
    const dx = Math.max(-2.2, Math.min(2.2, (e.clientX - (r.left + r.width / 2)) / 8));
    const dy = Math.max(-1.2, Math.min(1.2, (e.clientY - (r.top + r.height / 2)) / 12));
    botEyes.forEach(eye => { eye.style.animation = "none"; eye.style.transform = `translate(${dx}px,${dy}px)`; });
  });
  launch.addEventListener("pointerleave", () => botEyes.forEach(eye => { eye.style.transform = ""; eye.style.animation = ""; }));
  root.querySelector("#ax-close").addEventListener("click", closeChat);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && panel.classList.contains("ax-open")) closeChat();
  });

  function bubble(text, type) {
    const el = document.createElement("div");
    el.className = `ax-bubble ${type}`;
    el.textContent = text;
    feed.appendChild(el);
    feed.scrollTop = feed.scrollHeight;
  }
  function typing() {
    const el = document.createElement("div");
    el.className = "ax-bubble bot";
    el.innerHTML = '<span class="ax-typing"><i></i><i></i><i></i></span>';
    feed.appendChild(el);
    feed.scrollTop = feed.scrollHeight;
    return el;
  }
  function contactActions() {
    if (feed.querySelector(".ax-actions")) return;
    const wrap = document.createElement("div");
    wrap.className = "ax-actions";
    const quote = document.createElement("a");
    quote.className = "ax-link";
    quote.href = "#contact";
    quote.textContent = "Get a free quote ↗";
    quote.addEventListener("click", closeChat);
    const wa = document.createElement("a");
    wa.className = "ax-link";
    wa.href = "https://wa.me/919182419070?text=Hi%20Alphex%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project.";
    wa.target = "_blank";
    wa.rel = "noopener noreferrer";
    wa.textContent = "WhatsApp ↗";
    wrap.append(quote, wa);
    feed.appendChild(wrap);
    feed.scrollTop = feed.scrollHeight;
  }
  async function send(text) {
    const message = (text || "").trim();
    if (!message || busy) return;
    bubble(message, "user");
    input.value = "";
    busy = true;
    sendButton.disabled = true;
    const indicator = typing();
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history: history.slice(-10) })
      });
      const data = await response.json().catch(() => ({}));
      indicator.remove();
      if (!response.ok && !data.answer) throw new Error(data.error || "Request failed");
      const answer = data.answer || "Sorry, I couldn't prepare a response. Please try again.";
      bubble(answer, "bot");
      history.push({ role: "user", content: message }, { role: "assistant", content: answer });
      if (/quote|project|contact|enquir|talk to|start a/i.test(message + " " + answer)) contactActions();
    } catch (error) {
      indicator.remove();
      bubble("I’m having trouble connecting right now. You can still reach our team directly.", "bot");
      contactActions();
    } finally {
      busy = false;
      sendButton.disabled = false;
      input.focus();
      feed.scrollTop = feed.scrollHeight;
    }
  }
  form.addEventListener("submit", e => { e.preventDefault(); send(input.value); });
  root.querySelectorAll("[data-prompt]").forEach(button => button.addEventListener("click", () => send(button.dataset.prompt)));

  // Keep the launcher clear of the existing fixed quick-action dock.
  const dock = document.querySelector(".dock");
  if (dock) {
    const syncDock = () => root.classList.toggle("ax-dock-visible", dock.classList.contains("show"));
    new MutationObserver(syncDock).observe(dock, { attributes: true, attributeFilter: ["class"] });
    syncDock();
  }

  // Reuse the page's liquid-glass pointer highlight behavior.
  const panelMove = e => {
    const r = panel.getBoundingClientRect();
    panel.style.setProperty("--mx", `${e.clientX - r.left}px`);
    panel.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  panel.addEventListener("pointermove", panelMove, { passive: true });
  window.AlphexChat = { open: openChat, close: closeChat, send };
})();
