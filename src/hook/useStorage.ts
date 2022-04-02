import React, { useEffect, useState } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";

export const useStorage = (storeName: string, defaultData: any) => {
    var [value, setValue] = useState(defaultData)

    // var [value, setValue, isPersistent, error] = useChromeStorageLocal(
    //     storeName,
    //     defaultData
    // );
    return [value, setValue]
}