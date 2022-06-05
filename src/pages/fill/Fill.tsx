import { connect } from "http2";
import React, { useState } from "react";
import { CardFill } from "../../component/cards/CardFill/CardFill";
import { Footer } from "../../component/layouts/footer/Footer";
import { randomService } from "../../service/random.service";
import "./fill.scss";

export const Fill = () => {
  const fillSet = [
    {
      name: "SPW register test",
      fill: [
        {
          inputName: "ชื่อ (อังกฤษ)",
          random: {
            type: "regexp",
            option: "Pinpong",
          },
        },
        {
          inputName: "นามสกุล (อังกฤษ)",
          random: {
            type: "regexp",
            option: "Tongpat",
          },
        },
        {
          inputName: "เลขบัตรประชาชน",
          random: {
            type: "th_citizen_id",
            option: null,
          },
        },
        {
          inputName: "เบอร์โทรศัพท์",
          random: {
            type: "regexp",
            option: "0815967897",
          },
        },
      ],
    },
    {
      name: "SPW register step 2",
      fill: [
        {
          inputName: "address",
          random: {
            type: "regexp",
            option: "Test",
          },
        },
        {
          inputName: "จังหวัด",
          random: {
            type: "regexp",
            option: "กระบี่",
          },
        },
        {
          inputName: "อำเภอ",
          random: {
            type: "regexp",
            option: "ลำทับ",
          },
        },
        {
          inputName: "ตำบล",
          random: {
            type: "regexp",
            option: "ดินอุดม",
          },
        },
        {
          inputName: "sub_district",
          random: {
            type: "regexp",
            option: "Chanuman",
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
                `[name="${inputName}"] , [id="${inputName}"]`
              );

              let labels = document.querySelectorAll<HTMLElement>(`label`);
              labels.forEach((label) => {
                if (label.innerHTML.includes(inputName)) {
                  // input child parent label
                  let elements = label.parentElement?.childNodes;
                  elements &&
                    elements.forEach((element) => {
                      if (element.nodeName === "INPUT") {
                        (element as HTMLInputElement).value = value;
                        element.dispatchEvent(
                          new Event("input", {
                            bubbles: true,
                            cancelable: true,
                          })
                        );

                        element.dispatchEvent(
                          new Event("change", {
                            bubbles: true,
                            cancelable: true,
                          })
                        );
                      }
                    });
                }
                // todo add input child label 
              });

              inputs.forEach((input) => {
                (input as HTMLInputElement).value = value;
                input.dispatchEvent(
                  new Event("input", {
                    bubbles: true,
                    cancelable: true,
                  })
                );

                input.dispatchEvent(
                  new Event("change", {
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
