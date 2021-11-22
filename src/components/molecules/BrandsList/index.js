import Image from "next/image";
import { formatNumber } from "utils/number";

import styles from "./BrandsList.module.scss";

const BrandsList = ({ totalCounts }) => {
  const all = formatNumber(totalCounts.all.totalCount);
  const inStock = formatNumber(totalCounts.inStock.totalCount);

  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-auto">
            <div className={styles.title}>
              Shop 1000's of <br />
              Brands Under One Roof
            </div>
          </div>
          <div className="col-md">
            <ul className={styles.list}>
              <li>
                <div className={styles.image}>
                  <Image
                    src="/images/logos/bosch-logo.png"
                    alt="Bosch"
                    width={400}
                    height={89}
                  />
                </div>
              </li>
              <li>
                <div className={styles.stat}>
                  <strong>{all}</strong> No. of Products
                </div>
              </li>
              <li>
                <div className={styles.image}>
                  <Image
                    src="/images/logos/siemens-logo.svg"
                    alt="Siemens"
                    width={400}
                    height={89}
                  />
                </div>
              </li>
              <li>
                <div className={styles.stat}>
                  <strong>{inStock}</strong> Products in Stock
                </div>
              </li>
              <li>
                <div className={styles.image}>
                  <Image
                    src="/images/logos/quooker-logo.svg"
                    alt="Quooker"
                    width={400}
                    height={89}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsList;
