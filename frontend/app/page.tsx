"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-lg">
        <h1 className="text-3xl font-extrabold text-blue-600 tracking-wide">LOAN MANAGER</h1>
        <div className="space-x-4">
          <Button 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
            onClick={() => router.push('/signup')}
          >
            Register
          </Button>
          <Button 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
            onClick={() => router.push('/login')}
          >
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative text-center py-24 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Take Control of Your Finances</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6 font-light">
          A seamless way to track loans, manage payments, and secure your financial future.
        </p>
        <Button onClick={() => router.push('/login')} size="lg" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-200 transition-transform">Start Now</Button>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {["Quick Processing", "Secure Payments", "Smart Loan Management"].map((title, index) => (
          <Card key={title} className="shadow-xl hover:shadow-2xl bg-opacity-90 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-600">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              {title === "Quick Processing" && "Get your loan applications processed in no time with our efficient system."}
              {title === "Secure Payments" && "Enjoy encrypted and safe transactions for peace of mind."}
              {title === "Smart Loan Management" && "Easily track your loans, payments, and due dates from anywhere."}
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 shadow-md">
        <p className="text-xl font-bold">Built with ❤️ by Rajeev Ranjan</p>
      </footer>
    </div>
  );
}

