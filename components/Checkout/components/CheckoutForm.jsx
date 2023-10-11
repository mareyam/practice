import React, { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  FormHelperText,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  SimpleGrid,
} from "@chakra-ui/react";

const CheckoutForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Card");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const isEmailError = email === "";
  const isFullNameError = fullName === ""; //field is empty i.e ""  the err of fullname should display
  const isCountryError = country === "";
  const isAddressError = address === "";

  const PaymentToggleButton = (payment) => {
    setPayment(payment);
    // setPayment(payment === "Card" ? "Bank" : "Card");
    console.log(payment);
  };

  return (
    <Box w="100%">
      <FormControl p="1" isInvalid={isEmailError}>
        <FormLabel fontWeight="700" fontSize="20px">
          Contact Info
        </FormLabel>
        <Box border="1px solid blue" p="2" borderRadius="10px">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            border="none"
          />
        </Box>
        {!isEmailError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl p="1" isInvalid={isFullNameError}>
        <FormLabel fontWeight="700" fontSize="20px">
          Shipping
        </FormLabel>

        <Box border="1px solid blue" p="2" borderRadius="10px">
          <FormLabel fontWeight="700" fontSize="15px">
            Full Name
          </FormLabel>
          <Input
            placeholder="Full Name"
            type="text"
            value={fullName}
            border="none"
            onChange={handleFullNameChange}
          />
          {!isFullNameError ? (
            <FormHelperText>Enter your full name.</FormHelperText>
          ) : (
            <FormErrorMessage>Full Name is required.</FormErrorMessage>
          )}

          <FormLabel fontWeight="700" fontSize="15px">
            Country or region
          </FormLabel>
          <Input
            placeholder="Country"
            type="text"
            border="none"
            value={country}
            onChange={handleCountryChange}
          />
          {!isCountryError ? (
            <FormHelperText>Enter your country or region.</FormHelperText>
          ) : (
            <FormErrorMessage>Country is required.</FormErrorMessage>
          )}

          <FormLabel fontWeight="700" fontSize="15px">
            Address
          </FormLabel>
          <Input
            placeholder="Address"
            type="text"
            value={address}
            border="none"
            onChange={handleAddressChange}
          />
          {!isAddressError ? (
            <FormHelperText>Enter your shipping address.</FormHelperText>
          ) : (
            <FormErrorMessage>Address is required.</FormErrorMessage>
          )}
        </Box>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="700" fontSize="20px">
          Payment
        </FormLabel>

        <Box border="1px solid blue" p="2" borderRadius="10px">
          <Tabs position="relative" variant="unstyled">
            <TabList justifyContent="space-between" w="100%">
              <Tab
                as="Button"
                onClick={() => PaymentToggleButton("Card")}
                // onClick={PaymentToggleButton}
                py="2"
                bgColor={payment === "Card" ? "black" : "initial"}
                color={payment === "Card" ? "white" : "initial"}
                borderRadius="10px"
                w="100%"
              >
                Card
              </Tab>
              <Tab
                as="Button"
                onClick={() => PaymentToggleButton("Bank")}
                py="2"
                bgColor={payment === "Bank" ? "black" : "initial"}
                color={payment === "Bank" ? "white" : "initial"}
                borderRadius="10px"
                w="100%"
              >
                Bank
              </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel border="2px solid red">
                <Input
                  placeholder="Card number"
                  type="text"
                  value={fullName}
                  border="none"
                  onChange={handleFullNameChange}
                />
                {!isFullNameError ? (
                  <FormHelperText>Enter your card number.</FormHelperText>
                ) : (
                  <FormErrorMessage>Card number is required.</FormErrorMessage>
                )}
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={{ base: 2, md: 3 }} border="2px solid red">
                  <Button>Chase</Button>
                  <Button>America</Button>
                  <Button>Wells</Button>
                  <Button>Citi</Button>
                  <Button>Bank</Button>
                  <Button>Capital</Button>
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </FormControl>
    </Box>
  );
};

export default CheckoutForm;
