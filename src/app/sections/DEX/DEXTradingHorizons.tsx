import React from "react";
import styles from "./DEXTradingHorizons.module.scss";
import Image from "next/image";

export default function DEXTradingHorizons() {
  const mobileWidth = "350";
  const mobileHeight = "450";
  return (
    <>
      <div className={styles.tradingHorizons}>
        {/* <div className={`${styles.tradingHorizons_heading} heading_primary`}> */}
        <h1 className="heading_primary">
          Expand your Trading Horizons with Variable
        </h1>
        <div className="heading_primary_sub">
          Get unparalleled precision and limitless growth opportunities with
          Variable’s cutting-edge features and user-centric approach
        </div>
        {/* <div className={styles.parent}>
        <div className={styles.div1}>
          <Image
            width={450}
            height={450}
            alt="Trading horizon"
            src={"/H4_Minimum_Fees.svg"}
          />
        </div>
        <div className={styles.div2}>
          <Image
            width={300}
            height={300}
            alt="Trading horizon"
            src={"/H3_High_Speed_Trading.svg"}
          />
        </div>
        <div className={styles.div3}>
          <Image
            width={300}
            height={300}
            alt="Trading horizon"
            src={"/H6_Upto_100x_Leverage.svg"}
          />
        </div>
        <div className={styles.div4}>
          <Image
            width={300}
            height={300}
            alt="Trading horizon"
            src={"/H1_Additional_Rewards.svg"}
          />
        </div>
        <div className={styles.div5}>
          <Image
            width={600}
            height={500}
            alt="Trading horizon"
            src={"/H5_Permissionless_Listing.svg"}
          />
        </div>
        <div className={styles.div6}>
          <Image
            width={880}
            height={300}
            alt="Trading horizon"
            src={"/H2_Decentralized_Trading.svg"}
          />
        </div>
      </div> */}
        <div className={`${styles.tradingHorizons_container}`}>
          <div className={styles.tradingHorizons_left}>
            <div className={styles.tradingHorizons_left_row1}>
              <div className={styles.tradingHorizons_left_row1_left}>
                <Image
                  width={450}
                  height={226}
                  alt="Trading horizon"
                  src={"/H4_Minimum_Fees.svg"}
                />
                <div className={styles.horizontalGap}></div>
                <Image
                  width={450}
                  height={450}
                  alt="Trading horizon"
                  src={"/Near_to_zero_Gas_fees.svg"}
                />
              </div>
              <div className={styles.tradingHorizons_left_row1_right}>
                <Image
                  width={250}
                  height={250}
                  alt="Trading horizon"
                  src={"/H1_Additional_Rewards.svg"}
                />
                <div className={styles.horizontalGap}></div>
                <Image
                  width={250}
                  height={300}
                  alt="Trading horizon"
                  src={"/H6_Upto_100x_Leverage.svg"}
                />
              </div>
            </div>
            <div className={styles.tradingHorizons_left_row2_left}>
              <div className={styles.horizontalGap}></div>
              <Image
                width={705}
                height={300}
                alt="Trading horizon"
                src={"/H2_Decentralized_Trading.svg"}
              />
            </div>
            <div className={styles.tradingHorizons_list_items}></div>
            <div className={styles.tradingHorizons_right}></div>
          </div>
          <div className={styles.tradingHorizons_right}>
            <Image
              width={250}
              height={300}
              alt="Trading horizon"
              src={"/H3_High_Speed_Trading.svg"}
            />
            <div className={styles.horizontalGap}></div>
            <Image
              width={250}
              height={300}
              alt="Trading horizon"
              src={"/H5_Permissionless_Listing.svg"}
            />
          </div>
        </div>
        {/* <div className={`${styles.tradingHorizons_list} container mx-auto`}>
        <div className={styles.tradingHorizons_list_items}>
          <Image
            width={300}
            height={300}
            alt="Trading horizon"
            src={"/Section10_1.png"}
          />
        </div>
        <div className={styles.tradingHorizons_list_items}>
          <Image
            width={300}
            height={300}
            alt="Trading horizon"
            src={"/Section10_2.svg"}
          />
        </div>
        <div className={styles.tradingHorizons_list_items}>
          <Image
            width={300}
            height={300}
            alt="Trading horizon"
            src={"/Section10_3.svg"}
          />
        </div>
        <div className={styles.tradingHorizons_list_items}>
          <Image
            width={300}
            height={300}
            alt="Trading horizon"
            src={"/Section10_4.svg"}
          />
        </div>
        <div className={styles.tradingHorizons_list_items}>
          <Image
            width={300}
            height={300}
            alt="Trading horizon"
            src={"/Section10_5.png"}
          />
        </div>
        <div className={styles.tradingHorizons_list_items}>
          <Image
            width={300}
            height={300}
            alt="Trading horizon"
            src={"/Section10_6.png"}
          />
        </div>
      </div> */}
      </div>
      <div className={styles.tradingHorizons_mobile}>
        <ul className={styles.tradingHorizons_mobile_list}>
          <li className={styles.tradingHorizons_mobile_list_item}>
            <Image
              width={mobileWidth}
              height={mobileHeight}
              alt="Trading horizon"
              src={"/MinimumTradingFees_mobile.svg"}
            />
          </li>
          <li className={styles.tradingHorizons_mobile_list_item}>
            <Image
              width={mobileWidth}
              height={mobileHeight}
              alt="Trading horizon"
              src={"/NearToZeroGasFees_mobile.svg"}
            />
          </li>
          <li className={styles.tradingHorizons_mobile_list_item}>
            <Image
              width={mobileWidth}
              height={mobileHeight}
              alt="Trading horizon"
              src={"/AdditionalRewards_mobile.svg"}
            />
          </li>
          <li className={styles.tradingHorizons_mobile_list_item}>
            <Image
              width={mobileWidth}
              height={mobileHeight}
              alt="Trading horizon"
              src={"/Upto100xLeverage_mobile.svg"}
            />
          </li>
          <li className={styles.tradingHorizons_mobile_list_item}>
            <Image
              width={mobileWidth}
              height={mobileHeight}
              alt="Trading horizon"
              src={"/HighSpeed Trading_mobile.svg"}
            />
          </li>
          <li className={styles.tradingHorizons_mobile_list_item}>
            <Image
              width={mobileWidth}
              height={mobileHeight}
              alt="Trading horizon"
              src={"/PermissionlessListing_mobile.svg"}
            />
          </li>
          <li className={styles.tradingHorizons_mobile_list_item}>
            <Image
              width={mobileWidth}
              height={mobileHeight}
              alt="Trading horizon"
              src={"/DecentrlizedTrading_mobile.svg"}
            />
            </li>
        </ul>
      </div>
    </>
  );
}
