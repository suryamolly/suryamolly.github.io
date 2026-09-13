import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surya Mouly | Staff Engineer & Mobile App Architect",
  description:
    "Portfolio of Surya Mouly — Staff Engineer @ Nagarro specializing in Flutter, Android, scalable mobile systems, enterprise architecture, and CI/CD.",
  keywords: [
    "Surya Mouly",
    "Staff Engineer",
    "Nagarro",
    "Mobile App Architect",
    "Flutter Expert",
    "Android Architect",
    "Miles & More",
    "Samsung ONE UI",
    "muscle_mapper",
    "pub.dev",
    "Clean Architecture",
    "Agentic AI",
    "Product Architecture",
    "AI Autonomous Agents",
  ],
  authors: [{ name: "Surya Mouly", url: "https://www.linkedin.com/in/suryamouly" }],
  creator: "Surya Mouly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suryamouly.in",
    title: "Surya Mouly | Staff Engineer & Mobile App Architect",
    description:
      "Staff Engineer @ Nagarro specializing in Flutter, Android, Samsung ONE UI, and enterprise mobile system architecture.",
    siteName: "Surya Mouly Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Mouly | Staff Engineer & Mobile App Architect",
    description:
      "Staff Engineer @ Nagarro specializing in Flutter, Android, Samsung ONE UI, and enterprise mobile system architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Surya Mouly",
    jobTitle: "Staff Engineer & Mobile App Architect",
    worksFor: {
      "@type": "Organization",
      name: "Nagarro",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "IIMT College of Engineering / Uttar Pradesh Technical University",
    },
    url: "https://suryamouly.github.io/Surya_Mouly_Portfolio/",
    sameAs: [
      "https://www.linkedin.com/in/suryamouly",
      "https://github.com/suryamolly",
      "https://medium.com/@suryamouly",
      "https://pub.dev/publishers/suryamouly.in",
      "https://pub.dev/packages/muscle_mapper",
    ],
    knowsAbout: [
      "Flutter",
      "Android SDK",
      "Dart",
      "Kotlin",
      "Java",
      "Mobile System Architecture",
      "Clean Architecture",
      "CI/CD Automation",
      "Performance Optimization",
      "Samsung ONE UI",
      "Agentic AI",
      "Product Architecture",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased selection:bg-sky-500/20 selection:text-sky-400"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
