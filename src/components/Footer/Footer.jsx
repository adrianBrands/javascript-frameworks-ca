import { FaStar  } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <p className="d-flex text-warning justify-content-center align-items-center">
        &copy;{new Date().getFullYear()} All rights reserved <FaStar  style={{color: 'f5eb3b'}} />
      </p>
    </div>
  );
}

