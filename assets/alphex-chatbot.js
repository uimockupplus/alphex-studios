(() => {
  if (window.__alphexChatMounted) return;
  window.__alphexChatMounted = true;

  const css = `
  #alphex-chat{--ax-y:#F4E747;--ax-bg:#06070A;--ax-text:#F6F6EF;--ax-muted:#B3B3A9;position:fixed;right:26px;bottom:26px;z-index:99990;font-family:Inter,system-ui,-apple-system,sans-serif;color:var(--ax-text)}
  #alphex-chat *{box-sizing:border-box}
  #alphex-chat button,#alphex-chat input{font:inherit}
  #ax-launch{width:62px;height:62px;border-radius:50%;border:1px solid rgba(255,255,255,.58);background:linear-gradient(145deg,#fff98a,var(--ax-y) 55%,#e8d52a);color:#101008;display:grid;place-items:center;cursor:pointer;box-shadow:inset 0 1.5px 0 #fff,0 12px 38px #0009,0 0 34px #f4e74744;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}
  #ax-launch:hover{transform:translateY(-4px) scale(1.035);box-shadow:inset 0 1.5px 0 #fff,0 16px 44px #000b,0 0 44px #f4e74766}
  #ax-launch svg{width:26px;height:26px}
  #ax-panel{position:absolute;right:0;bottom:78px;width:min(390px,calc(100vw - 32px));height:min(610px,calc(100dvh - 125px));min-height:430px;display:none;grid-template-rows:auto 1fr auto;overflow:hidden;border-radius:27px;border:1px solid rgba(255,255,255,.19);background:linear-gradient(140deg,rgba(36,37,29,.94),rgba(8,9,7,.97) 48%,rgba(18,17,10,.96));-webkit-backdrop-filter:blur(28px) saturate(185%);backdrop-filter:blur(28px) saturate(185%);box-shadow:inset 0 1.5px 0 rgba(255,255,255,.38),inset 0 0 36px rgba(255,255,255,.035),0 30px 85px #000b,0 0 55px #f4e74718;transform-origin:bottom right}
  #ax-panel::before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(340px circle at 100% 0%,rgba(244,231,71,.12),transparent 68%)}
  #ax-panel.ax-open{display:grid;animation:ax-enter .34s cubic-bezier(.2,.8,.2,1) both}
  @keyframes ax-enter{from{opacity:0;transform:translateY(14px) scale(.965)}to{opacity:1;transform:none}}
  .ax-head{position:relative;z-index:1;display:flex;align-items:center;gap:11px;padding:16px 17px 14px;border-bottom:1px solid #ffffff18;background:#ffffff06}
  .ax-logo{width:40px;height:40px;flex:none;border-radius:14px;display:grid;place-items:center;background:linear-gradient(145deg,#fff98a,#f4e747 60%,#d8c928);color:#111;font:700 21px Sora,Inter,sans-serif;box-shadow:inset 0 1px #fff,0 0 22px #f4e74732}
  .ax-brand{font:700 11px Sora,Inter,sans-serif;letter-spacing:.13em}
  .ax-sub{display:flex;align-items:center;gap:6px;margin-top:4px;color:#aaa99f;font-size:10px}
  .ax-online{width:6px;height:6px;border-radius:50%;background:#d8ed78;box-shadow:0 0 8px #d8ed78}
  #ax-close{margin-left:auto;width:33px;height:33px;border-radius:11px;border:1px solid #ffffff24;background:#ffffff09;color:#eee;font-size:20px;line-height:1;cursor:pointer}
  #ax-feed{position:relative;z-index:1;overflow:auto;display:flex;flex-direction:column;gap:11px;padding:17px 15px 14px;scroll-behavior:smooth}
  .ax-intro{padding:2px 2px 5px}
  .ax-kicker{color:var(--ax-y);font-size:9px;font-weight:750;letter-spacing:.16em;text-transform:uppercase}
  .ax-intro h3{font:600 23px/1.16 Sora,Inter,sans-serif;letter-spacing:-.045em;margin:8px 0}
  .ax-intro h3 em{font-style:normal;color:var(--ax-y)}
  .ax-intro p{font-size:11px;line-height:1.7;color:var(--ax-muted);margin:0}
  .ax-bubble{max-width:88%;padding:10px 12px;border-radius:15px;font-size:12px;line-height:1.65;white-space:pre-wrap;overflow-wrap:anywhere}
  .ax-bubble.bot{align-self:flex-start;border:1px solid #ffffff19;background:linear-gradient(145deg,#ffffff14,#ffffff07);border-top-left-radius:5px;color:#f0f0e9}
  .ax-bubble.user{align-self:flex-end;border:1px solid #fff9a0;background:linear-gradient(145deg,#fff98a,#f4e747);border-top-right-radius:5px;color:#15150c;font-weight:550}
  .ax-quick{display:flex;flex-wrap:wrap;gap:7px;margin-top:11px}
  .ax-quick button{border:1px solid #f4e74755;border-radius:999px;background:#f4e7470d;color:#eeeeda;padding:7px 10px;font-size:10px;cursor:pointer;transition:background .2s,border-color .2s}
  .ax-quick button:hover{background:#f4e74720;border-color:#f4e747a8}
  .ax-typing{display:flex;align-items:center;gap:4px;height:15px}
  .ax-typing i{width:5px;height:5px;border-radius:50%;background:var(--ax-y);animation:ax-dot .8s infinite alternate}
  .ax-typing i:nth-child(2){animation-delay:.15s}.ax-typing i:nth-child(3){animation-delay:.3s}
  @keyframes ax-dot{to{transform:translateY(-5px);opacity:.4}}
  .ax-link{color:var(--ax-y);font-size:11px;text-decoration:underline;text-underline-offset:3px}
  .ax-foot{position:relative;z-index:1;padding:11px 13px 13px;border-top:1px solid #ffffff17;background:#06070acc}
  #ax-form{display:flex;align-items:center;gap:8px;padding:5px 5px 5px 12px;border:1px solid #ffffff26;border-radius:16px;background:linear-gradient(140deg,#ffffff12,#ffffff06);box-shadow:inset 0 1px #ffffff10}
  #ax-input{flex:1;min-width:0;padding:8px 0;border:0;outline:0;background:transparent;color:#f6f6ef;font-size:12px}
  #ax-input::placeholder{color:#818177}
  #ax-send{width:36px;height:36px;border:0;border-radius:12px;background:linear-gradient(145deg,#fff98a,#f4e747);color:#111;cursor:pointer;font-size:18px;font-weight:800}
  #ax-send:disabled{opacity:.55;cursor:wait}
  .ax-note{text-align:center;margin-top:7px;color:#77776e;font-size:9px}
  @media(max-width:540px){#alphex-chat{right:14px;bottom:14px}#ax-launch{width:57px;height:57px}#ax-panel{position:fixed;right:10px;bottom:82px;width:calc(100vw - 20px);height:min(72dvh,620px);min-height:410px;border-radius:23px}}
  @media(prefers-reduced-motion:reduce){#ax-panel.ax-open{animation:none}#ax-launch{transition:none}}
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const root = document.createElement("div");
  root.id = "alphex-chat";
  root.innerHTML = `
    <section id="ax-panel" role="dialog" aria-label="Chat with Alphex Studio" aria-modal="false">
      <header class="ax-head">
        <div class="ax-logo" aria-hidden="true">α</div>
        <div><div class="ax-brand">ALPHEX STUDIO</div><div class="ax-sub"><i class="ax-online"></i> Website assistant</div></div>
        <button id="ax-close" type="button" aria-label="Close chat">×</button>
      </header>
      <div id="ax-feed" aria-live="polite">
        <div class="ax-intro">
          <div class="ax-kicker">Your digital partner</div>
          <h3>Let's build something<br><em>that works.</em></h3>
          <p>Ask about our services, pricing or timelines. If you have a project in mind, I can help you take the next step.</p>
          <div class="ax-quick">
            <button type="button" data-prompt="What services does Alphex Studio offer?">Explore services</button>
            <button type="button" data-prompt="Show me your website packages and starting prices.">View pricing</button>
            <button type="button" data-prompt="I want to discuss a website project.">Start a project</button>
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-9.5A7.5 7.5 0 0 1 10.5 4h2A7.5 7.5 0 0 1 20 11.5Z"/><path d="M8 11h8M8 14.5h5"/></svg>
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
    return el;
  }
  function typing() {
    const el = document.createElement("div");
    el.className = "ax-bubble bot";
    el.innerHTML = '<span class="ax-typing"><i></i><i></i><i></i></span>';
    feed.appendChild(el);
    feed.scrollTop = feed.scrollHeight;
    return el;
  }
  function addContactLinks() {
    const wrap = document.createElement("div");
    wrap.style.cssText = "display:flex;gap:14px;flex-wrap:wrap;padding:0 2px 2px";
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
      if (/quote|project|contact|enquir|talk to|start a/i.test(message + " " + answer)) addContactLinks();
    } catch (error) {
      indicator.remove();
      bubble("I’m having trouble connecting right now. You can still reach our team directly.", "bot");
      addContactLinks();
    } finally {
      busy = false;
      sendButton.disabled = false;
      input.focus();
      feed.scrollTop = feed.scrollHeight;
    }
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    send(input.value);
  });
  root.querySelectorAll("[data-prompt]").forEach(button => {
    button.addEventListener("click", () => send(button.dataset.prompt));
  });
  window.AlphexChat = { open: openChat, close: closeChat, send };
})();