import type { ThemeType } from "~/core/Themes/types/types";
interface Config {
  baseTheme: keyof typeof ThemeType;
  PrefixVariable: Record<string, string>;
  [key: string]: string | Record<string, string>;
}
export const config: Config = {
  baseUrl: "https://rico-chat.liara.run/",
  conversationBaseUrl: "https://rico-chat-test.liara.run/",
  baseTheme: "dark",
  PrefixVariable: {
    background: "--",
  },
  themeColorPrefix: "--color-",
};
