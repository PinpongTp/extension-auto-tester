import React, { useState } from "react";
import { CardFill } from "../../component/cards/CardFill/CardFill";
import { Footer } from "../../component/layouts/footer/Footer";
import { randomService } from "../../service/random.service";
import "./fill.scss";

export const Fill = () => {
  const fillSet = [
    {
      name: "SPW register",
      fill: [
        {
          inputName: "firstname_en",
          random: {
            type: "regexp",
            option: "Pinpong",
          },
        },
        {
          inputName: "lastname_en",
          random: {
            type: "regexp",
            option: "Tongpat",
          },
        },
        {
          inputName: "citizen_id",
          random: {
            type: "th_citizen_id",
            option: null,
          },
        },
        {
          inputName: "mobile_no",
          random: {
            type: "regexp",
            option: "0815967897",
          },
        },
      ],
    },
    {
      name: "google test",
      fill: [
        {
          inputName: "q",
          random: {
            type: "th_citizen_id",
            option: null,
          },
        },
        {
          inputName: "id_card",
          random: {
            type: "regexp",
            option: "Pinpong[a-z]{3} (Tongpat|Pattong|Pinpong)",
          },
        },
      ],
    },
  ];

  function fill(fillSetIndex: number) {
    console.log("fillSetIndex", fillSetIndex);

    chrome.windows.getCurrent((w) => {
      chrome.tabs.query({ active: true, windowId: w.id }, (tabs) => {
        const tabId = tabs[0].id;
        if (!tabId) return;

        console.log("run script");
        // todo 
        // not fill read only
        // not fill disable

        fillSet[fillSetIndex].fill.forEach((fill) => {
          chrome.scripting.executeScript({
            target: { tabId: tabId, allFrames: true },
            func: (inputName: string, value: string) => {
              let inputs = document.querySelectorAll<HTMLElement>(
                `[name=${inputName}]`
              );
              inputs.forEach((input) => {
                (input as HTMLInputElement).value = value;
                input.dispatchEvent(
                  new Event("input", {
                    bubbles: true,
                    cancelable: true,
                  })
                );
              });
            },
            args: [
              fill.inputName,
              randomService(fill.random.type, fill.random.option),
            ],
          });
        });
      });
    });
  }

  const menu = [
    {
      title: "create fill set",
      callback: () => {
        console.log("edit");
      },
    },
  ];

  return (
    <div id="fill">
      {fillSet.map((card, index) => {
        return (
          <CardFill
            key={index}
            onFill={() => {
              fill(index);
            }}
            onEdit={() => {}}
            fillSetName={card.name}
          />
        );
      })}

      <Footer menu={menu} />
    </div>
  );
};
