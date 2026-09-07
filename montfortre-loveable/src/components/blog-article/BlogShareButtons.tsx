interface BlogShareButtonsProps {
  shareUrl: string;
}

export default function BlogShareButtons({ shareUrl }: BlogShareButtonsProps) {
  const encoded = encodeURIComponent(shareUrl);
  return (
    <div className="bsg-share">
      <a
        href="https://www.facebook.com/montfortrealestate"
        target="_blank"
        rel="noopener"
        className="bsg-share-btn bsg-share-fb"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 9h3V5.5h-3c-2.2 0-3.8 1.7-3.8 3.9V11H7.5v3.5h2.7V22h3.6v-7.5h2.7l.5-3.5h-3.2V9.6c0-.4.3-.6.7-.6z" />
        </svg>
        Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}`}
        target="_blank"
        rel="noopener"
        className="bsg-share-btn bsg-share-x"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.9 2.3h3.3l-7.2 8.2 8.5 11.2h-6.6l-5.2-6.8-6 6.8H1.4l7.7-8.8L1 2.3h6.8l4.7 6.2 5.4-6.2zm-1.2 17.7h1.8L7.1 4.1H5.2l12.5 15.9z" />
        </svg>
        X
      </a>
      <a
        href={`https://pinterest.com/pin/create/button/?url=${encoded}`}
        target="_blank"
        rel="noopener"
        className="bsg-share-btn bsg-share-pin"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.6-1.8-4.4-4.5-4.4-3 0-4.8 2.3-4.8 4.6 0 .9.3 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.4.1-1.4-.6-2.2-2.7-2.2-4.3 0-3.5 2.6-6.8 7.4-6.8 3.9 0 6.9 2.8 6.9 6.5 0 3.9-2.4 7-5.9 7-1.2 0-2.3-.6-2.6-1.3l-.7 2.7c-.3 1-1 2.3-1.4 3 .9.3 1.8.4 2.8.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
        Pinterest
      </a>
      <a
        href="https://www.linkedin.com/in/stanley-p-montfort-b3675548/"
        target="_blank"
        rel="noopener"
        className="bsg-share-btn bsg-share-in"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 8.5v10H3.3v-10h3.2zM4.9 3.5a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7zM20.7 18.5h-3.2v-5.2c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8v5.5H10.7s.04-9 0-10h3.2v1.4c.4-.7 1.2-1.6 3-1.6 2.2 0 3.8 1.4 3.8 4.5v5.7z" />
        </svg>
        LinkedIn
      </a>
    </div>
  );
}
