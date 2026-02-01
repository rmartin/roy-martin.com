# Roy Martin - Personal Website

A modern, Awwwards-quality personal portfolio built with React + Vite + Tailwind CSS.

## Features

- ✨ Smooth scroll animations & micro-interactions
- 🌓 Dark/Light mode with system preference detection
- 📱 Fully responsive, mobile-first design
- ⚡ Lightning-fast Vite build
- 🎨 Clean component architecture

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Personal Info
Edit these files to customize content:
- `src/components/Hero.jsx` - Name, tagline, role
- `src/components/About.jsx` - Bio and story
- `src/components/Experience.jsx` - Roles, achievements, skills
- `src/components/Portfolio.jsx` - Projects array
- `src/components/Writing.jsx` - Blog posts
- `src/components/Contact.jsx` - Email, social links

### Colors
Edit `src/index.css` to change the accent color:
```css
@theme {
  --color-accent: #6366f1; /* Change this */
}
```

Or swap the Tailwind color classes throughout (e.g., `indigo-500` → `emerald-500`).

### Images
- Replace the emoji placeholder in `About.jsx` with an `<img>` tag
- Add project screenshots to `public/` and reference in `Portfolio.jsx`

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag `dist/` folder to Netlify dashboard
# Or connect your GitHub repo
```

### GitHub Pages
```bash
# Add to vite.config.js: base: '/repo-name/'
npm run build
# Push dist/ to gh-pages branch
```

---

## Alternative Themes

### Theme 1: Ultra Minimal

For a stripped-back aesthetic, apply these changes:

```css
/* src/index.css - Replace @theme */
@theme {
  --color-accent: #171717; /* Monochrome */
}
```

```jsx
// Hero.jsx - Simpler hero
<h1 className="text-4xl font-light tracking-tight mb-4">Roy Martin</h1>
<p className="text-neutral-500">Developer</p>
```

Remove gradient backgrounds from Portfolio tiles, use solid colors:
```jsx
<div className="bg-neutral-900 dark:bg-neutral-100" />
```

### Theme 2: Creative Portfolio (Awwwards Style)

For maximum visual impact:

```css
/* Add to index.css */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float { animation: float 3s ease-in-out infinite; }

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

```jsx
// Hero.jsx - Bold gradient hero
<h1 className="text-7xl md:text-9xl font-black gradient-text">
  ROY<br/>MARTIN
</h1>
```

Add floating shapes behind hero:
```jsx
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
</div>
```

---

## Optional Enhancements

### Animated Signature Logo

Create `src/components/Signature.jsx`:

```jsx
export default function Signature() {
  return (
    <svg viewBox="0 0 100 40" className="w-24 h-10">
      <path
        d="M10 30 Q 25 10, 40 30 T 70 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="100"
        strokeDashoffset="100"
        className="animate-[draw_2s_ease-out_forwards]"
      />
    </svg>
  )
}
```

Add to `index.css`:
```css
@keyframes draw {
  to { stroke-dashoffset: 0; }
}
```

### AI Chat Widget

Create `src/components/ChatWidget.jsx`:

```jsx
import { useState } from 'react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Roy's AI assistant. Ask me anything about his work." }
  ])
  const [input, setInput] = useState('')

  const send = () => {
    if (!input.trim()) return
    setMessages(m => [...m, { role: 'user', content: input }])
    // Add your local inference logic here (e.g., WebLLM, Ollama API)
    setTimeout(() => {
      setMessages(m => [...m, { role: 'assistant', content: "Thanks for your message! Roy will get back to you soon." }])
    }, 500)
    setInput('')
  }

  if (!open) return (
    <button
      onClick={() => setOpen(true)}
      className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      💬
    </button>
  )

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-4 bg-indigo-500 text-white flex justify-between">
        <span>Chat with AI</span>
        <button onClick={() => setOpen(false)}>✕</button>
      </div>
      <div className="h-64 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`text-sm ${m.role === 'user' ? 'text-right' : ''}`}>
            <span className={`inline-block px-3 py-2 rounded-lg ${
              m.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-neutral-100 dark:bg-neutral-700'
            }`}>{m.content}</span>
          </div>
        ))}
      </div>
      <div className="p-3 border-t dark:border-neutral-700 flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 text-sm bg-neutral-100 dark:bg-neutral-700 rounded-lg"
        />
        <button onClick={send} className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm">
          Send
        </button>
      </div>
    </div>
  )
}
```

Add to `App.jsx`:
```jsx
import ChatWidget from './components/ChatWidget'
// ... inside return, before </div>:
<ChatWidget />
```

### Markdown Blog Reader

Create `src/components/BlogPost.jsx`:

```jsx
import { useState, useEffect } from 'react'

export default function BlogPost({ slug }) {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then(r => r.text())
      .then(text => {
        // Simple markdown parsing (or use marked/remark)
        const html = text
          .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-6 mb-2">$1</h3>')
          .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-3">$1</h2>')
          .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/`(.*?)`/g, '<code class="px-1 bg-neutral-100 dark:bg-neutral-800 rounded">$1</code>')
          .replace(/\n\n/g, '</p><p class="mb-4">')
        setContent(`<p class="mb-4">${html}</p>`)
      })
  }, [slug])

  return (
    <article 
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
```

---

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Portfolio.jsx
│   ├── Writing.jsx
│   └── Contact.jsx
├── hooks/
│   └── useInView.js
├── App.jsx
├── main.jsx
└── index.css
```

## License

MIT
