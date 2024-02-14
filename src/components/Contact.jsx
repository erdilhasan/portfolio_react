import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div id="contact" className="bg-slate-300 text-black py-24 px-32">
      <h1 className="text-4xl py-5">Contact</h1>
      <div className="flex justify-between">
        <div>
          <p>You can send an email to this address:</p>
          <a href="mailto:hasanerdilaskar@gmail.com">
            hasanerdilaskar@gmail.com
          </a>
        </div>
        <div className="space-x-4">
          <a
            href="https://github.com/erdilhasan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gray-700  px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <FontAwesomeIcon icon={faGithub} />
              <span>Github</span>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/hasanaskar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#0A66C2] px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
