import clsx from "clsx";
import Link from "next/link";
import paths from "core/paths";

import styles from "./FooterBottom.module.scss";

const FooterBottom = () => {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <div className={clsx("row", styles.row)}>
          <div className="col-md-auto">
            <small className={styles.copyright}>
              &copy; 2021 TradePricesDirect.com | All rights reserved
            </small>
          </div>
          <div className="col-md-auto">
            <ul className={styles.menu}>
              <li>
                <Link href={paths.privacy}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={paths.terms}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p
          className={styles.trademark}
        >{`Construction Materials Direct Trademark No. UK00003849764 is a trading name of By Degrees 2 Ltd a company registered in United Kingdom. Registered Company No. 11303606. VAT Reg No. GB 310 3382 53. Registered Office Address: 25A Market Square, Bicester, Oxfordshire OX26 6AD.`}</p>
      </div>
    </div>
  );
};

export default FooterBottom;
