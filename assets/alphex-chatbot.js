(() => {
  if (window.__alphexStudioAssistant) return;
  window.__alphexStudioAssistant = true;

  const style = document.createElement("style");
  style.textContent = `
  #alphex-assistant{
    --ax-bg:#08090b;--ax-panel:#0d0f12;--ax-surface:#121519;--ax-text:#f4f4ed;
    --ax-muted:#a1a49d;--ax-subtle:#73776f;--ax-y:#f4e747;--ax-line:rgba(255,255,255,.09);
    position:fixed;right:28px;bottom:28px;z-index:54;color:var(--ax-text);
    font-family:Inter,system-ui,sans-serif;isolation:isolate
  }
  #alphex-assistant *{box-sizing:border-box}
  #alphex-assistant button,#alphex-assistant input{font:inherit}
  /* Compact dark launcher: yellow is used as a precise accent, never as a glossy fill. */
  #ax-launch{
    position:relative;width:62px;height:62px;border-radius:21px;display:grid;place-items:center;
    cursor:pointer;color:var(--ax-y);border:1px solid rgba(244,231,71,.42);
    background:linear-gradient(145deg,#171a1d,#090a0c 72%);
    box-shadow:0 12px 34px rgba(0,0,0,.48),inset 0 1px rgba(255,255,255,.08),0 0 0 1px rgba(0,0,0,.35);
    transition:transform .24s ease,border-color .24s ease,box-shadow .24s ease
  }
  #ax-launch:hover{transform:translateY(-3px);border-color:var(--ax-y);box-shadow:0 16px 38px rgba(0,0,0,.55),0 0 24px rgba(244,231,71,.13),inset 0 1px rgba(255,255,255,.08)}
  #ax-launch:focus-visible,#ax-close:focus-visible,#ax-send:focus-visible{outline:2px solid var(--ax-y);outline-offset:4px}
  #ax-launch svg{width:27px;height:27px}
  #ax-launch .ax-pulse{position:absolute;inset:-5px;border:1px solid rgba(244,231,71,.28);border-radius:25px;animation:ax-pulse 3s ease-out infinite;pointer-events:none}
  #ax-launch::after{content:"";position:absolute;right:8px;top:8px;width:7px;height:7px;border-radius:50%;background:var(--ax-y);box-shadow:0 0 10px rgba(244,231,71,.65);border:1px solid #090a0c}
  @keyframes ax-pulse{0%{transform:scale(.94);opacity:.55}100%{transform:scale(1.28);opacity:0}}
  #ax-panel{
    position:absolute;right:0;bottom:80px;width:min(405px,calc(100vw - 32px));
    height:min(640px,calc(100dvh - 130px));min-height:470px;display:none;
    grid-template-rows:auto 1fr auto;overflow:hidden;border-radius:25px;
    border:1px solid rgba(255,255,255,.12);
    background:linear-gradient(150deg,rgba(244,231,71,.035),transparent 34%),#0b0d10;
    -webkit-backdrop-filter:blur(26px) saturate(145%);backdrop-filter:blur(26px) saturate(145%);
    box-shadow:0 30px 90px rgba(0,0,0,.72),0 0 0 1px rgba(0,0,0,.5),inset 0 1px rgba(255,255,255,.07);
    transform-origin:bottom right
  }
  #ax-panel::before{content:"";position:absolute;inset:0;pointer-events:none;border-radius:inherit;background:radial-gradient(460px circle at var(--mx,90%) var(--my,0%),rgba(244,231,71,.07),transparent 48%)}
  #ax-panel.ax-open{display:grid;animation:ax-enter .32s cubic-bezier(.2,.8,.2,1) both}
  @keyframes ax-enter{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:none}}
  .ax-head{position:relative;z-index:1;display:flex;align-items:center;gap:12px;padding:16px 17px;border-bottom:1px solid var(--ax-line);background:rgba(255,255,255,.018)}
  .ax-mark{width:39px;height:39px;flex:none;display:grid;place-items:center;border-radius:13px;color:var(--ax-y);font:700 19px Sora,Inter,sans-serif;background:#171a1d;border:1px solid rgba(244,231,71,.32);box-shadow:inset 0 1px rgba(255,255,255,.06)}
  .ax-brand{font:700 11px Sora,Inter,sans-serif;letter-spacing:.16em;color:#f5f5ef}
  .ax-sub{display:flex;align-items:center;gap:7px;margin-top:5px;color:var(--ax-muted);font-size:10px}
  .ax-online{width:6px;height:6px;border-radius:50%;background:var(--ax-y);box-shadow:0 0 8px rgba(244,231,71,.6)}
  #ax-close{margin-left:auto;width:33px;height:33px;border-radius:11px;border:1px solid var(--ax-line);background:rgba(255,255,255,.035);color:#c9cbc4;font-size:19px;line-height:1;cursor:pointer;transition:background .2s,border-color .2s,color .2s}
  #ax-close:hover{background:rgba(244,231,71,.08);border-color:rgba(244,231,71,.38);color:var(--ax-y)}
  #ax-feed{position:relative;z-index:1;overflow:auto;display:flex;flex-direction:column;gap:13px;padding:20px 18px 18px;scroll-behavior:smooth;overscroll-behavior:contain}
  #ax-feed::-webkit-scrollbar{width:5px}#ax-feed::-webkit-scrollbar-thumb{background:#30342d;border-radius:8px}
  .ax-intro{padding:2px 1px 7px}
  .ax-kicker{display:inline-flex;align-items:center;gap:8px;color:var(--ax-y);font-size:9px;font-weight:750;letter-spacing:.17em;text-transform:uppercase}
  .ax-kicker::before{content:"";width:16px;height:1px;background:var(--ax-y)}
  .ax-intro h3{font:600 26px/1.13 Sora,Inter,sans-serif;letter-spacing:-.055em;margin:12px 0 9px;color:#f5f5ef}
  .ax-intro h3 em{font-style:normal;color:var(--ax-y)}
  .ax-intro p{font-size:11.5px;line-height:1.75;color:var(--ax-muted);margin:0;max-width:315px}
  .ax-quick{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:18px}
  .ax-quick button{
    position:relative;min-height:58px;text-align:left;padding:11px 30px 11px 12px;
    border:1px solid rgba(255,255,255,.09);border-radius:13px;
    background:linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.015));
    color:#e7e8e0;font-size:10.5px;line-height:1.45;cursor:pointer;
    transition:background .2s,border-color .2s,transform .2s
  }
  .ax-quick button::after{content:"↗";position:absolute;right:11px;top:10px;color:var(--ax-y);font-size:13px}
  .ax-quick button:hover{background:rgba(244,231,71,.055);border-color:rgba(244,231,71,.36);transform:translateY(-1px)}
  .ax-bubble{max-width:88%;padding:11px 13px;border-radius:15px;font-size:12px;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere}
  .ax-bubble.bot{align-self:flex-start;border:1px solid rgba(255,255,255,.09);background:#15181c;border-top-left-radius:5px;color:#e9eae4}
  .ax-bubble.user{align-self:flex-end;border:1px solid rgba(244,231,71,.34);background:rgba(244,231,71,.11);border-top-right-radius:5px;color:#f7f5d8;font-weight:550}
  .ax-typing{display:flex;align-items:center;gap:4px;height:15px}
  .ax-typing i{width:5px;height:5px;border-radius:50%;background:var(--ax-y);animation:ax-dot .8s infinite alternate}
  .ax-typing i:nth-child(2){animation-delay:.15s}.ax-typing i:nth-child(3){animation-delay:.3s}
  @keyframes ax-dot{to{transform:translateY(-5px);opacity:.4}}
  .ax-actions{display:flex;gap:16px;flex-wrap:wrap;padding:0 2px 3px}
  .ax-link{color:var(--ax-y);font-size:11px;text-decoration:none;border-bottom:1px solid rgba(244,231,71,.38);padding-bottom:3px}
  .ax-link:hover{border-color:var(--ax-y)}
  .ax-foot{position:relative;z-index:1;padding:13px 15px 14px;border-top:1px solid var(--ax-line);background:rgba(7,8,10,.88)}
  #ax-form{display:flex;align-items:center;gap:9px;padding:5px 5px 5px 14px;border:1px solid rgba(255,255,255,.12);border-radius:14px;background:#121519;transition:border-color .2s,box-shadow .2s}
  #ax-form:focus-within{border-color:rgba(244,231,71,.52);box-shadow:0 0 0 3px rgba(244,231,71,.055)}
  #ax-input{flex:1;min-width:0;padding:9px 0;border:0;outline:0;background:transparent;color:var(--ax-text);font-size:12px}
  #ax-input::placeholder{color:#777c75}
  #ax-send{width:37px;height:37px;flex:none;border:1px solid rgba(244,231,71,.48);border-radius:11px;background:var(--ax-y);color:#11120b;cursor:pointer;font-size:19px;font-weight:800;transition:transform .2s,background .2s}
  #ax-send:hover{transform:translateY(-1px);background:#e8db39}
  #ax-send:disabled{opacity:.5;cursor:wait}
  .ax-note{text-align:center;margin-top:9px;color:#686d66;font-size:9px;letter-spacing:.025em}
  @media(max-width:900px){#alphex-assistant{right:16px;bottom:88px}#alphex-assistant.ax-dock-visible{bottom:92px}}
  @media(max-width:540px){
    #alphex-assistant{right:14px;bottom:86px}
    #ax-launch{width:57px;height:57px;border-radius:19px}
    #ax-panel{position:fixed;right:9px;bottom:70px;width:calc(100vw - 18px);height:min(72dvh,650px);min-height:430px;border-radius:22px}
    #ax-feed{padding:17px 15px}.ax-intro h3{font-size:24px}
  }
  @media(max-width:360px){.ax-quick{grid-template-columns:1fr}.ax-quick button{min-height:45px}}
  @media(prefers-reduced-motion:reduce){#ax-panel.ax-open{animation:none}#ax-launch .ax-pulse{display:none}#ax-launch{transition:none}}
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
      <span class="ax-pulse" aria-hidden="true"></span>
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M14 3.5 23.5 9v10L14 24.5 4.5 19V9L14 3.5Z" stroke="currentColor" stroke-width="1.35"/><path d="M9 13.8h10M9 17.2h6.2" stroke="currentColor" stroke-width="1.55" stroke-linecap="round"/><circle cx="19.5" cy="8.7" r="1.5" fill="currentColor"/></svg>
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
