import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState('node');

  const curlString = `curl -X POST https://api-pswh5n2g2a-uc.a.run.app/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENII_API_KEY" \
  -d '{
    "model": "gpt-4o-2024-08-06",
    "messages": [
      {
        "role": "user",
        "content": "Hello, how can you help me?"
      }
    ]
  }'`;

  const nodeString = `import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api-pswh5n2g2a-uc.a.run.app",
});

const completion = await openai.chat.completions.create({
  model: "gpt-evan",
  messages: [
      {
        role: "user",
        content: "Why do you not pay your interns?",
      }
  ],
});

console.log(completion.choices[0].message.content);`;

  const handleCopy = () => {
    navigator.clipboard.writeText(tab === 'curl' ? curlString : nodeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToQuickstart = () => {
    // Implement the logic to scroll to the quickstart section
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-left">
          <h1 className="logo">OpenII</h1>
        </div>
        <div className="nav-right">
          <a
            className="byline"
            href="https://x.com/many_sql/"
            target="_blank"
            rel="noopener noreferrer"
          >
            by @many_sql
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Introducing OpenII</h1>
          <p className="hero-subtitle">The next generation of AI assistance</p>
          <div className="hero-cta">
            <button className="cta-button primary" onClick={() => window.open('https://join.slack.com/t/testbot-1bk4088/shared_invite/zt-364puwdom-E8eDela7a7PeYJVtXGatpQ', '_blank', 'noopener,noreferrer')}>Try OpenII</button>
            <a
              className="cta-button secondary"
              href="https://join.slack.com/t/testbot-1bk4088/shared_invite/zt-364puwdom-E8eDela7a7PeYJVtXGatpQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us
            </a>
          </div>
        </div>
      </section>

      {/* Quickstart Flex Section */}
      <section className="quickstart-flex">
        <div className="code-container">
          <div className="code-header">
            <span className="code-header-title">Quick Start</span>
            <div className="tab-buttons">
              <button className={tab === 'curl' ? 'tab active' : 'tab'} onClick={() => setTab('curl')}>cURL</button>
              <button className={tab === 'node' ? 'tab active' : 'tab'} onClick={() => setTab('node')}>Node.js</button>
            </div>
            <button 
              className={`copy-button ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          {tab === 'curl' ? (
            <SyntaxHighlighter 
              language="bash" 
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: '0 0 8px 8px',
                padding: '1rem'
              }}
              wrapLines={true}
              showLineNumbers={false}
            >
              {curlString}
            </SyntaxHighlighter>
          ) : (
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: '0 0 8px 8px',
                padding: '1rem'
              }}
              wrapLines={true}
              showLineNumbers={false}
            >
              {nodeString}
            </SyntaxHighlighter>
          )}
        </div>
        <section className="quickstart-guide">
          <h2>How to use OpenII</h2>
          <ol>
            <li>Copy the code example.</li>
            <li>Run the code and wait for the first response!</li>
            <li>Join our Slack and see our interns reply to your message thread (or do it yourself).</li>
            <li>Responses time out after 45 seconds, sometimes our intellience is sleeping.</li>
          </ol>
        </section>
      </section>

      {/* Explore Models Header */}
      {/* Models Section */}
      <section className="models-list" style={{ maxWidth: '900px', margin: '2rem auto', background: '#fafafa', borderRadius: '10px', border: '1px solid #eee', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.2rem', color: '#111', textAlign: 'center' }}>Explore Models Including:</h2>
        <ul style={{ fontSize: '1.15rem', color: '#222', margin: '0 auto', paddingLeft: 0, display: 'inline-block', textAlign: 'left', listStyle: 'disc inside' }}>
          <li>gpt-evan</li>
          <li>gpt-evan-mini</li>
          <li>gpt-evan-o1-4o-mini-high-reasoning-preview-2024-07-18-3.5-turbo</li>
          <li>gpt-evan-2024-08-06-next-4o-o4-turbo-deprecated-plain-text-web-search-preview-high-low-mini</li>
        </ul>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>Advanced AI</h3>
          <p>Powered by state-of-the-art language models</p>
        </div>
        <div className="feature-card">
          <h3>Trusted Technology</h3>
          <p>Intern Intelligence is used by hundreds of YC startups, probably</p>
        </div>
        <div className="feature-card">
          <h3>Easy Integration</h3>
          <p>Simple API for seamless implementation</p>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us">
        <h2>Join Us</h2>
        <p>We are hiring unpaid interns. Join our absolutely cracked team. No onboarding, no interviews, no resume, no application needed. Become jobful in seconds and make mom proud.</p>
        <a
          className="cta-button primary"
          href="https://join.slack.com/t/testbot-1bk4088/shared_invite/zt-364puwdom-E8eDela7a7PeYJVtXGatpQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Our Slack
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>OpenII</h4>
            <p>Building the future of AI</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Documentation</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 OpenII. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
