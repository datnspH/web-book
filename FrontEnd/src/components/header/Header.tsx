import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../search";
import { useAppSelector } from "../../store/hook";
const Header = () => {
  // const { users } = useAppSelector((state) => state.auth);
  // console.log(users);

  // console.log("users", users.user.user_role);
  const { carts } = useAppSelector((item: any) => item.carts);
  const dataCarts = Array.isArray(carts) ? carts : [];
  const userStr = localStorage.getItem("users");
  const user = userStr ? JSON.parse(userStr) : null;
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(dataCarts.length);
  }, [dataCarts]);
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <header className=" w-full shadow-lg max-md:w-[90%] mx-auto">
      <div className=" px-5 pt-2 mb-2 page-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className='object-cover w-[50px] h-full max-md:hidden mr-3' src="././././public/logo.png" alt="" />
            <span className='block text-2xl font-bold text-red-300 uppercase'>Book store</span>
          </div>
          <div className="w-[300px] max-md:hidden">
            <Search />
          </div>
        </div>
        <div className=" header-tell">
        </div>
      </div>
      <nav className="flex items-center justify-between px-5 nav page-container ">
        <ul className="flex items-center py-2 pb-2 font-medium capitalize ">
          <li className="pr-3 transition-all hover:text-blue-500 border-b-2 hover:border-b-blue-500 max-md:text-xs">
            <Link to="/" className="font-bold">
              Trang chủ
            </Link>
          </li>
          <li className="px-3 transition-all hover:text-blue-500 border-b-2 hover:border-b-blue-500 max-md:text-xs">
            <Link to="/products" className="font-bold ">
              Sản phẩm
            </Link>
          </li>
          <li className="px-3 transition-all hover:text-blue-500 border-b-2 hover:border-b-blue-500 max-md:hidden">
            <Link to="/about" className="font-bold ">
              Giới thiệu
            </Link>
          </li>
          <li className="px-3 transition-all hover:text-blue-500 border-b-2 hover:border-b-blue-500 max-md:hidden">
            <Link to="/contact" className="font-bold ">
              Liên hệ
            </Link>
          </li>
          <li className="px-3 transition-all hover:text-blue-500 border-b-2 hover:border-b-blue-500 max-md:hidden">
            <Link to="/news" className="font-bold ">
              Tin tức
            </Link>
          </li>
        </ul>
        <div className="flex cursor-pointer items-center gap-x-5">
        <span className="max-md:hidden">{user?.user?.user_fullName}</span>
          <div className="account menu-item">
            {user ? (
              <Link to="#">
               
                <img
                  width={20}
                  className="rounded-full max-md:w-[50%] mx-auto"
                  src={user?.user?.user_avatar}
                  alt="Avata"
                />
              </Link>
            ) : (
              <Link to="/signin">
                <i className="fa-solid fa-user"></i>
              </Link>
            )}
            {user ? (
              <ul className="submenu">
                <li>
                  <Link to="#">Thông tin tài khoản</Link>
                </li>
                <li>
                  <button onClick={logout}>Đăng xuất</button>
                </li>
              </ul>
            ) : (
              <ul className="submenu">
                <li>
                  <Link to="/signin">Đăng nhập</Link>
                </li>
                <li>
                  <Link to="/signup">Đăng ký</Link>
                </li>
              </ul>
            )}
            {user?.user?.user_role === "admin" ? (
              <ul className="submenu">
                <li>
                  <Link to="#">Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to="/admin">Trang quản trị</Link>
                </li>
                <li>
                  <button onClick={logout}>Đăng xuất</button>
                </li>
              </ul>
            ) : (
              <div className="cart"></div>
            )}
          </div>
          <div className="flex  hover:text-secondary transition-all space-x-2 items-center">
            <div className="relative mr-20">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping text-[20px]"></i>
              </Link>
              <span className="absolute top-[-10px] z-10 border rounded-full px-2">
                {cartCount}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
