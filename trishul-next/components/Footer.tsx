import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo size={48} />
          <h4>Trishul Aero</h4>
          <p>
            Designing and manufacturing autonomous aerial systems for India and partner nations.
            A Trishul Advanced Solutions company.
          </p>
        </div>
        <div className="footer__col">
          <h5>Systems</h5>
          <ul>
            <li><Link href="/products/kalki">Kalki Interceptor</Link></li>
            <li><Link href="/trishuleye">TrishulC2</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h5>Company</h5>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/about">R&amp;D</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Press</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h5>Compliance</h5>
          <ul>
            <li><a href="#">DGCA Type Cert</a></li>
            <li><a href="#">MoD AON</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div className="footer__col footer__newsletter">
          <h5>Field Notes</h5>
          <p className="text-soft" style={{ fontSize: 14 }}>
            Engineering log entries and programme updates. No marketing.
          </p>
          <form data-demo>
            <input type="email" placeholder="you@operator.in" required />
            <button type="submit">Subscribe →</button>
          </form>
        </div>
      </div>
      <div className="footer__bar">
        <span>© 2026 Trishul Advanced Solutions Pvt. Ltd. · All rights reserved.</span>
        <span>HQ Manipal · R&amp;D Bengaluru · IN</span>
      </div>
    </footer>
  );
}
