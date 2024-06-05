import Wrapper from "../assets/wrappers/SearchAndCartUserWrapper";

const SearchAndCartUser = () => {
  return (
    <Wrapper className="search-cart-user">
      <div className="search">Search</div>
      <div className="cart-username-container">
        <div className="cart">cart</div>
        <div className="username">username</div>
      </div>
    </Wrapper>
  );
};
export default SearchAndCartUser;
