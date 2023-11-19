import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getAllProduct } from "../../actions/product";
import { useEffect } from "react";
import { IProduct } from "../../interface/Product";
import ProductItem from "../../components/product/ProductItem";
const HomePage = () => {
  const { products } = useAppSelector((state: any) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <main className="body">
        <div className="bg-[url('././public/banner.jpg')] bg-no-repeat bg-cover w-full bg-fixed grid grid-cols-2 items-center">
          <img src="././public/book.png" alt="" className="w-[670px]" />
          <div className="text">
            <h2 className="text-white text-3xl text-center mb-5">
              One Piece - Tập 99: “Luffy Mũ Rơm”
            </h2>
            <p className="text-white text-center">
              One Piece, từng được xuất bản tại Việt Nam dưới tên gọi Đảo Hải
              Tặc là bộ manga dành cho lứa tuổi thiếu niên của tác giả Oda
              Eiichiro
            </p>
            <button className="mt-10 block mx-auto bg-yellow-500 shadow-lg shadow-yellow-500 rounded-full px-8 py-3 text-white text-2xl transition-all delay-75 hover:bg-blue-300 hover:shadow-blue-300">
              See more
            </button>
          </div>
        </div>

        <div className="my-10">
          <img
            src="././public/logo1.jpg"
            alt=""
            className="w-[200px] mx-auto "
          />

          <div className="grid grid-cols-4 gap-4  max-w-7xl mx-auto max-md:grid max-md:grid-cols-2 max-md:gap-2">
            {products?.docs?.map((item: IProduct) => (
              <ProductItem key={item._id} item={item}></ProductItem>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
