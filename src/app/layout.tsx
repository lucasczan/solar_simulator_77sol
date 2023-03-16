import StyledComponentsRegistry from './lib/registry';
import './globals.css';
import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'Simulador 77sol'
};
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
