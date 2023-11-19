import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="grid grid-cols-3 justify-items-center bg-gray-100 py-5">

        <div className='space-y-1'>
          <img className='w-[100px] mx-auto' src="././././public/logo.png" alt="" />
          <span className='block text-2xl font-bold text-red-300 uppercase'>Book store</span>
          <span className='block hover:text-red-500 cursor-pointer'>Tuyển dụng</span>
          <span className='block hover:text-red-500 cursor-pointer'>Khuyến mãi</span>
        </div>
        <div className='space-y-2'>
          <span className='block text-xl font-bold  '>Chính sách</span>
          <span className='block hover:text-red-500 cursor-pointer '>Chính sách giao hàng</span>
          <span className='block hover:text-red-500 cursor-pointer'>Chính sách thanh toán</span>
          <span className='block hover:text-red-500 cursor-pointer'>Chính sách đổi trả</span>
          <span className='block hover:text-red-500 cursor-pointer'>Chính sách kiểm hàng</span>
          <span className='block hover:text-red-500 cursor-pointer'>Chính sách bảo mật thông tin </span>
        </div>
        <div className='space-y-2'>
          <span className='block text-xl font-bold  '>Liên hệ</span>
          <span className='flex items-center hover:text-red-500 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
            : datplt2003qm@gmail.com</span>
          <span className='flex items-center hover:text-red-500 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
            :0364649978</span>
          <span className='block hover:text-red-500 cursor-pointer'>zalo:0364649978</span>
        </div>
      </footer>
  );
};

export default Footer;
