import React from "react";
import { Footer } from "../../component/layouts/footer/Footer";

export const Setting = () => {
    return (
      <div id="setting">
        <ul>
        <li>
            <a>reset all setting</a>
          </li>
          <li>
            <a>url</a>
          </li>
          <li>
            <a>my web site</a>
          </li>
        </ul>
        <Footer />
      </div>
    );
  };