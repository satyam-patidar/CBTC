import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <hr className="border-[#334155]" />

      <div className="section-wrapper grid grid-cols-1 lg:grid-cols-6 gap-x-[48px] gap-y-[32px] py-[48px]">
        <div>
          <h4 className="text-white">
            Event {""}
            <span
              className="text-secondary
          "
            >
              360
            </span>
          </h4>
        </div>

        <div className="space-y-3 text-light-sky">
          <p className="font-medium text-white">Product</p>
          <p>Pricing</p>
          <p>Overview</p>
          <p>Browse</p>
          <p>Accessibility</p>
        </div>

        <div className="space-y-3 text-light-sky">
          <p className="font-medium text-white">Solutions</p>
          <p>Brainstorming</p>
          <p>Ideation</p>
          <p>Wireframing</p>
          <p>Resarch</p>
        </div>

        <div className="space-y-3 text-light-sky">
          <p className="font-medium text-white">Resources</p>
          <p>Help Center</p>
          <p>Blog</p>
          <p>Tutorials</p>
          <p>FAQs</p>
        </div>

        <div className="space-y-3 text-light-sky">
          <p className="font-medium text-white">Support</p>
          <p>Contact Us</p>
          <p>Developers</p>
          <p>Documentation</p>
          <p>Integrations</p>
        </div>

        <div className="space-y-3 text-light-sky">
          <p className="font-medium text-white">Company</p>
          <p>About</p>
          <p>Press</p>
          <p>Events</p>
          <div className="flex items-center gap-2">
            <p>Request Demo</p>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>

      <div className="section-wrapper">
        <hr className="border-[#334155]" />

        <div className="flex justify-between py-[24px]">
          <div>
            <p>@ 2023. All rights reserved.</p>
          </div>

          <div className="flex gap-[12px] text-light-sky">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
