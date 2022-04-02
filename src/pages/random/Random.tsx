import React, { useEffect, useState } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import { Card } from "../../component/cards/card/Card";
import { Footer } from "../../component/layouts/footer/Footer";
import { useStorage } from "../../hook/useStorage";
import "./random.scss";
const RandExp = require("randexp");

export const Random = () => {
  //   const [idCard, setIdCard] = useState("00000000000000");
  const [idCard, setIdCard] = useStorage("idCard", "0000000000000");
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
    const regex = /Pinpong[a-z]{3} (Tongpat|Pattong|Pinpong)/i;
    const payload = new RandExp(regex).gen();
    setRandom(payload);
    copy(payload);
  };

  const menu = [
    {
      title: "edit",
      callback: () => {
        console.log("edit");
      },
    },
  ];

  //http://fent.github.io/randexp.js/

  return (
    <div id="random">
      <Card
        onCopy={() => {
          copy(idCard);
        }}
        onRandom={randomIdCard}
        randomName={"random IdCard"}
        randomValue={idCard}
      />

      <Card
        onCopy={() => {
          copy(random);
        }}
        onRandom={randomRegex}
        randomName={"random"}
        randomValue={random}
      />

      <Footer menu={menu} />
    </div>
  );
};
