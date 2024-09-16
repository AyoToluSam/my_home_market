export type FormValues = {
  name: string;
  price: number;
  description: string;
  condition: string;
  location: string;
  fullName: string;
  email: string;
  phone: string;
  bank: string;
  accountNo: string;
};

export type Bank = {
  name: string;
  code: string;
};

// Props for SellForm component
export type SellFormProps = {
  setProductID: (id: string) => void;
  setOpen: (open: boolean) => void;
};
