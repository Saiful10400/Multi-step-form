export  interface TformData {
  // Step 1: Personal Info
  fullName: string;
  email: string;
  phone: string;
  dob: string; // or Date if you prefer

  // Step 2: Address Info
  division: string;
  district: string;
  postalCode: string;
  sameAsPermanent: boolean;

  // Step 3: Bank Info
  bankName: string;
  accountNumber: string;
  accountType: "Savings" | "Current";
  bankDocument: File | null; // uploaded file
};

const initialFormData: TformData = {
  // Step 1: Personal Info
  fullName: "",
  email: "",
  phone: "",
  dob: "",

  // Step 2: Address Info
  division: "",
  district: "",
  postalCode: "",
  sameAsPermanent: false,

  // Step 3: Bank Info
  bankName: "",
  accountNumber: "",
  accountType: "Savings", // default option
  bankDocument: null
};


export default initialFormData