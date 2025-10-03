import {
  FacebookIcon,
  Instagram,
  LinkedinIcon,
  TwitchIcon,
} from "lucide-react";

const links = {
  "Quick Links": ["Home", "Shop", "Our Science", "About Us", "Contact Us"],
  "About Us": [
    "Company Info",
    "Press Releases",
    "Careers",
    "Reviews",
    "Investor Relations",
  ],
  "Contact Us": ["Privacy Policy", "Accessibility", "Disclaimer", "Sitemap"],
};

const socialIcons = [
  { icon: <FacebookIcon />, alt: "Facebook" },
  { icon: <TwitchIcon />, alt: "Twitch" },
  { icon: <Instagram />, alt: "Instagram" },
  { icon: <LinkedinIcon />, alt: "Linkedin" },
];

const payments = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg",
    alt: "Amex",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple Pay",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
    alt: "Visa",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    alt: "Paypal",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black light">
      <div className="h-padding pt-12 pb-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mb-10">
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl">🍃</span>
              <h2 className="light">NaturaVive</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-gray-400 text-sm">
              <span>📞 (+123) 123 456 7890</span>
              <span>✉️ contact@loremipsum.com</span>
              <span>💬 Live chat</span>
            </div>
            <div className="flex gap-4 secondary text-lg">
              {socialIcons.map(({ icon, alt }, i) => (
                <span key={i} className="cursor-pointer">
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Links & Subscribe */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-grey pt-10">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h3 className="font-semibold mb-4">{title}</h3>
                <ul className="space-y-2 grey">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="nav-link">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="mb-2 primary text-center">
                Get 10% Off Your First Purchase
              </h2>
              <p className="grey mb-4">
                Sign up to receive our special offers.
              </p>
              <div className="flex flex-col gap-2">
                <button className="btn-secondary">Email Address</button>
                <button className="btn-primary">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-grey pt-6 flex flex-col md:flex-row justify-between items-center grey text-sm">
            <p>© {new Date().getFullYear()} NaturaVive. All rights reserved</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {payments.map(({ src, alt }) => (
                <img key={alt} src={src} alt={alt} className="h-6" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
