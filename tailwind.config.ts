import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        cal: ["Cal Sans", "Cal Sans fallback"],
      },
    },
  },
};
