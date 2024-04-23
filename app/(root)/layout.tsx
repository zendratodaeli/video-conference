import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Solid V_C",
  description: "Making a video conference with anyone",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
        <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  )
}

export default RootLayout;