const GitLabLink = () => {
  return (
    <a
      href="https://gitlab.com"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-4 right-4 text-[#FC6D26] hover:text-[#E24329] transition-colors"
    >
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 21.6L7.8 11.4L4.8 3.6C4.7 3.3 4.3 3.3 4.2 3.6L1.2 11.4L12 21.6Z" />
        <path d="M12 21.6L16.2 11.4L19.2 3.6C19.3 3.3 19.7 3.3 19.8 3.6L22.8 11.4L12 21.6Z" />
        <path d="M1.2 11.4H22.8L12 21.6L1.2 11.4Z" />
      </svg>
    </a>
  );
};

export default GitLabLink;