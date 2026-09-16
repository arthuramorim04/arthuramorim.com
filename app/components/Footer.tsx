export default function Footer({ backLink }: { backLink?: { href: string; label: string } }) {
  return (
    <footer>
      <div className="wrap footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} Arthur Amorim</p>
        {backLink ? (
          <a className="back-link" href={backLink.href}>
            {backLink.label}
          </a>
        ) : (
          <div className="footer-social">
            <a
              className="social-icon"
              href="https://github.com/arthuramorim04"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/arthur-amorim/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M13.23 0H2.77C1.24 0 0 1.21 0 2.71v10.58C0 14.79 1.24 16 2.77 16h10.46c1.53 0 2.77-1.21 2.77-2.71V2.71C16 1.21 14.76 0 13.23 0zM4.75 13.4H2.4V5.98h2.35v7.42zM3.58 4.95c-.75 0-1.36-.61-1.36-1.36 0-.75.61-1.36 1.36-1.36.75 0 1.36.61 1.36 1.36 0 .75-.61 1.36-1.36 1.36zM13.6 13.4h-2.35V9.8c0-.86-.02-1.97-1.2-1.97-1.2 0-1.39.94-1.39 1.91v3.66H6.32V5.98h2.26v1.01h.03c.31-.59 1.08-1.2 2.22-1.2 2.37 0 2.81 1.56 2.81 3.59v4.02z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
