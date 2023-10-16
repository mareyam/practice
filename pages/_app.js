import Layout from "@/components/layout";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router"; // Import the useRouter from Next.js

export default function App({ Component, pageProps }) {
  const router = useRouter(); // Get the router object

  // Check if the route is /login
  const isLoginPage = router.pathname === "/login";

  return (
    <ChakraProvider>
      {/* Conditionally include the Layout component */}
      {isLoginPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  );
}
