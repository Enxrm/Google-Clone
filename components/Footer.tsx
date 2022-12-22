function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>Australia</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 px-8 py-3">
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className="footer-link">Adertising</p>
          <p className="footer-link">Business</p>
          <p className="footer-link">How Search works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p className="footer-link">Privacy</p>
          <a
            className="footer-link"
            href="https://policies.google.com/terms?hl=en-AU&fg=1"
          >
            Terms
          </a>
          <p className="footer-link">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
