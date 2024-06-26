import { FaUserCircle } from "react-icons/fa";

const Avatar = ({ src }) => {
  if (src) {
    return <img src={src} alt="avatar" width="30px" height="30px" />;
  }
  return <FaUserCircle size={24} />;
};
export default Avatar;
