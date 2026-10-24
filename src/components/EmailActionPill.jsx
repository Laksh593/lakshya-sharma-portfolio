import { useState, useRef, useEffect } from 'react';
import { Mail, Copy, Check, ChevronDown, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function EmailActionPill() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const email = personalInfo.email; // lakshyasharma593@gmail.com

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  const outlookComposeUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}`;

  // Close menu on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <div ref={containerRef} className="relative inline-flex items-center">
      {/* Main Pill Wrapper */}
      <div className="inline-flex items-stretch rounded-full border border-glass-border bg-glass-bg shadow-sm transition-all duration-300 hover:border-primary-cyan/40 hover:bg-[rgba(0,240,255,0.04)] hover:-translate-y-0.5 group">
        {/* Direct Link: Opens Gmail Compose in new tab */}
        <a
          href={gmailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Send an email to ${email} via Gmail`}
          className="inline-flex items-center gap-2 pl-4 pr-2.5 py-2 text-xs sm:text-sm font-mono text-gray-300 group-hover:text-primary-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan rounded-l-full break-all sm:break-normal"
        >
          <Mail size={16} className="text-primary-cyan flex-shrink-0" />
          <span>{email}</span>
        </a>

        {/* Copy Button (Does NOT open email) */}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy email address to clipboard"
          title={copied ? 'Email copied!' : 'Copy email address'}
          className="relative inline-flex items-center justify-center px-2 py-2 text-gray-400 hover:text-primary-cyan hover:bg-[rgba(0,240,255,0.08)] transition-colors border-l border-glass-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
        >
          {copied ? (
            <Check size={15} className="text-emerald-400" />
          ) : (
            <Copy size={15} />
          )}

          {/* Feedback Tooltip */}
          {copied && (
            <span
              role="status"
              className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0A0A0A] border border-emerald-400/60 text-emerald-300 text-[11px] font-mono rounded-md shadow-lg whitespace-nowrap z-30 pointer-events-none"
            >
              Email copied!
            </span>
          )}

          {copyError && (
            <span
              role="alert"
              className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0A0A0A] border border-amber-400/60 text-amber-300 text-[11px] font-mono rounded-md shadow-lg whitespace-nowrap z-30 pointer-events-none"
            >
              Please copy: {email}
            </span>
          )}
        </button>

        {/* Dropdown Menu Toggle (Gmail / Outlook / Mailto / Copy) */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsMenuOpen((prev) => !prev);
          }}
          aria-label="Email client options"
          aria-expanded={isMenuOpen}
          aria-haspopup="menu"
          title="More email options (Gmail, Outlook)"
          className="inline-flex items-center justify-center pr-3 pl-2 py-2 text-gray-400 hover:text-primary-cyan hover:bg-[rgba(0,240,255,0.08)] transition-colors border-l border-glass-border rounded-r-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-cyan"
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              isMenuOpen ? 'rotate-180 text-primary-cyan' : ''
            }`}
          />
        </button>
      </div>

      {/* Floating Options Dropdown (Gmail & Outlook) */}
      {isMenuOpen && (
        <div
          role="menu"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl border border-glass-border bg-[#0E0E12]/95 backdrop-blur-xl shadow-2xl z-50 py-1.5 text-xs font-mono animate-in fade-in"
        >
          {/* Header */}
          <div className="px-3.5 py-1.5 text-[10px] text-gray-500 uppercase tracking-wider border-b border-glass-border font-semibold">
            Choose Email Client
          </div>

          {/* Option 1: Gmail */}
          <a
            role="menuitem"
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-between px-3.5 py-2 text-gray-300 hover:text-primary-cyan hover:bg-[rgba(0,240,255,0.08)] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-primary-cyan" />
              <span>Open Gmail</span>
            </span>
            <ExternalLink size={12} className="text-gray-500" />
          </a>

          {/* Option 2: Outlook */}
          <a
            role="menuitem"
            href={outlookComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-between px-3.5 py-2 text-gray-300 hover:text-primary-purple hover:bg-[rgba(138,43,226,0.12)] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-purple-400" />
              <span>Open Outlook</span>
            </span>
            <ExternalLink size={12} className="text-gray-500" />
          </a>
        </div>
      )}
    </div>
  );
}
