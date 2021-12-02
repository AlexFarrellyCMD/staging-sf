import clsx from "clsx";
import Accordion from "components/molecules/Accordion";

import styles from "./FAQs.module.scss";

const FAQs = () => {
  return (
    <div className={styles.wrap}>
      <div className={clsx("container", styles.container)}>
        <h2 className={styles.title}>Boilers Buyers Guide</h2>

        <Accordion title="How do you offer such cheap prices?" open>
          <p>
            Over the past 10 years we've built outstanding relationships with
            leading manufacturers. After negotiating rock bottom prices, we
            opted to keep overheads low by selling exclusively on our intuitive
            digital platform. Bringing a full range of boilers to the comfort of
            your home, and all at trade prices.
          </p>
        </Accordion>

        <Accordion title="How much value would a new boiler add to my home?">
          <p>
            Having the right heating system – one that works in harmony with
            your space, carefully balancing form and function can really
            increase the value of your home. However, the knowledge that you're
            getting the best price, and connected with reliable, trusted and
            reviewed installers is priceless.
          </p>
        </Accordion>

        <Accordion title="Where do I start when buying a new Boiler?">
          <p>
            Now you've come across Trade Prices Direct you won't need to shop
            anywhere else. If you're unsure which boiler is the right fit for
            your home, our expert team is here to help. Speak to a member of our
            team for a free consultation with no commitment or obligation.
          </p>
        </Accordion>

        <Accordion title="How much does it cost to put in a new Boiler?">
          <p>
            The old saying is true: you get what you pay for. But that doesn't
            mean you need to pay big retail mark-ups. At Trade Prices Direct, we
            make it easier to get a luxurious fitted kitchen with exclusive
            trade pricing and great finance. That's why our customers love us.
            And why our competitors don't.
          </p>
        </Accordion>

        <Accordion title="What should I look for when buying a Boiler?">
          <p>
            Finding the right fit for your space, family and requirements can be
            tricky. Trying to juggle quality, costs and tradespeople will never
            be a problem again now you've found Trade Prices Direct. With so
            many products in stock and affordable financing the only limit is
            your imagination.
          </p>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
