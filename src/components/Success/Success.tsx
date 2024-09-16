import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Close, SuccessContainer } from "./SuccessStyles";

type SuccessProps = {
  msg: string;
  btnText?: string;
  btnLink?: string;
  onClose?: () => void;
};

const Success = ({ msg, btnText, btnLink, onClose }: SuccessProps) => {
  return (
    <SuccessContainer>
      <Close>
        <MdClose size={20} onClick={onClose} />
      </Close>
      <span className="check">
        <IoMdCheckmark size={24} />
      </span>
      <h2>
        Success! <sup>🎉</sup>
      </h2>
      <p dangerouslySetInnerHTML={{ __html: msg }} />
      {btnLink && <Link href={btnLink}>{btnText || "Continue"}</Link>}
    </SuccessContainer>
  );
};

export default Success;
