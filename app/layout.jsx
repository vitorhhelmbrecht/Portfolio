import "./globals.css";

export const metadata = {
  title: "Vitor Helmbrecht — Independent Web Developer",
  description:
    "Quietly fast websites for serious people. Modern, secure and performant web apps for businesses of every size.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased font-sans bg-brand-bg">
        {children}
      </body>
    </html>
  );
}
