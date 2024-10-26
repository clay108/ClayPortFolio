const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/clay108" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
        
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/himanshu-singh-557b92238/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src="/assets/linkedin1.jpg" alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
        
        <div className="social-icon">
          <a href="https://www.instagram.com/imhsg000/?igsh=MWJrbnVicHh1ODZxeQ%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src="/assets/instagram.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Himanshu Singh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
