import React, { useReducer, createContext } from "react";

export const intradayPricesContext = createContext();
export const intradayPricesDispatchContext = createContext();

const intradayPricesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    }
    case "FETCH_ERROR": {
      return {
        loading: false,
        data: {},
        error: "Something went wrong!",
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const IntradayPricesContextProvider = ({ children }) => {
  const [stockIntradayPrices, dispatch] = useReducer(intradayPricesReducer, {
    loading: true,
    data: {},
    error: "",
  });

  return (
    <intradayPricesDispatchContext.Provider value={dispatch}>
      <intradayPricesContext.Provider value={stockIntradayPrices}>
        {children}
      </intradayPricesContext.Provider>
    </intradayPricesDispatchContext.Provider>
  );
};
