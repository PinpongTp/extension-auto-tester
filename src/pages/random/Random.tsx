import React, { useEffect, useState } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import { useStorage } from "../../hook/useStorage";
const RandExp = require("randexp");

export const Random = () => {
  //   const [idCard, setIdCard] = useState("00000000000000");
  const [idCard, setIdCard] = useStorage("idCard", "0000000000000")
  const [random, setRandom] = useStorage("regex", "XXXXXXXXX");
  //   const [random, setRandom] = useState("");

  const copy = (payload: string) => {
    navigator.clipboard.writeText(payload);
  };

  const randomIdCard = () => {
    const random = Math.floor(100000000000 + Math.random() * 900000000000);
    let sum = 0;
    random
      .toString()
      .split("")
      .reverse()
      .forEach((number, index) => {
        sum += +number * (index + 2);
      });
    let suffix = 11 - (sum % 11);
    if (suffix > 9) suffix -= 10;
    let payload = `${random}${suffix}`;

    setIdCard(payload);
    copy(payload);
  };

  const randomRegex = () => {
    const regex = /hello[a-z]{10}/i;
    const payload = new RandExp(regex).gen();
    setRandom(payload);
    copy(payload);
  };

  //http://fent.github.io/randexp.js/

  return (
    <div id="random">
      <ul>
        <li>
          <a onClick={randomIdCard} className="btn">
            random IdCard
          </a>
          <br />
          <a
            className="copy"
            onClick={() => {
              copy(idCard);
            }}
          >
            {idCard}
          </a>
        </li>
        <li>
          <a onClick={randomRegex} className="btn">
            random
          </a>
          <br />
          <a
            className="copy"
            onClick={() => {
              copy(random);
            }}
          >
            {random}
          </a>
        </li>
      </ul>
    </div>
  );
};
