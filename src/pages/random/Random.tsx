import React, { useEffect, useState } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import { CardRandom } from "../../component/cards/CardRandom/CardRandom";
import { Footer } from "../../component/layouts/footer/Footer";
import { useStorage } from "../../hook/useStorage";
import "./random.scss";
import { randomService } from "../../service/random.service";
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
    let payload = randomService('th_citizen_id');
    setIdCard(payload);
    copy(payload);
  };

  const randomRegex = () => {
    let payload = randomService('regexp', 'Pinpong[a-z]{3} (Tongpat|Pattong|Pinpong)')
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
      <CardRandom
        onCopy={() => {
          copy(idCard);
        }}
        onRandom={randomIdCard}
        randomName={"random IdCard"}
        randomValue={idCard}
      />

      <CardRandom
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
