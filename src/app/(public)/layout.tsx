import ButtonChatTrigger from "@/components/ButtonChatTrigger";
import { Footer } from "@/components/Foooter";
import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
      <ButtonChatTrigger />
    </main>
  );
}
