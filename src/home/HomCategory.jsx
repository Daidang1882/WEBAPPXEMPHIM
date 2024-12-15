import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";


const subTitle = "Những bộ phim bạn muốn tìm kiếm";
const title = "PHIM THỊNH HÀNH";
const btnText = "Xem thêm";

const categoryList = [
    {
      imgUrl: "https://saostyle.vn/wp-content/uploads/2023/01/chi-chi-em-em-2-teaser-poster.jpg",
      imgAlt: "Chị Chị em em 2",
      iconName: "icofont-film",
      title: "Chị Chị em em 2",
    },
    {
      imgUrl: "https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2022/12/giai-ma-cai-ket-dao-doc-dac-tu-mau-thien-linh-cai_63aa610ccf131.jpeg",
      imgAlt: "Đảo độc đắc",
      iconName: "icofont-film",
      title: "Đảo độc đắc",
    },
    {
      imgUrl: "https://upload.wikimedia.org/wikipedia/vi/b/b0/Demaitinh.jpg",
      imgAlt: "Để Mai Tính poster",
      iconName: "icofont-film",
      title: "Để Mai Tính",
    },
    {
      imgUrl: "https://upload.wikimedia.org/wikipedia/vi/1/1f/Em_ch%C6%B0a_18_poster.jpg",
      imgAlt: "Em Chưa 18 poster",
      iconName: "icofont-film",
      title: "Em Chưa 18",
    },
    {
      imgUrl: "https://upload.wikimedia.org/wikipedia/vi/thumb/8/84/%C3%81p_ph%C3%ADch_phim_C%C3%B4_g%C3%A1i_t%E1%BB%AB_qu%C3%A1_kh%E1%BB%A9.jpg/220px-%C3%81p_ph%C3%ADch_phim_C%C3%B4_g%C3%A1i_t%E1%BB%AB_qu%C3%A1_kh%E1%BB%A9.jpg",
      imgAlt: "Cô Gái Từ Quá Khứ poster",
      iconName: "icofont-film",
      title: "Cô Gái Từ Quá Khứ",
    },
    {
      imgUrl: "https://upload.wikimedia.org/wikipedia/vi/4/41/Hai_Phuong_-_Furie_poster.jpg",
      imgAlt: "Hai Phượng poster",
      iconName: "icofont-film",
      title: "Hai Phượng",
    },
  ];
  
  

export const HomeCategory = () => {
  return (
    <section>
      <div className="container">
        {/* section header */}
        <div className="section-header text-left fw-bold mt-5 d-flex-column align-items-center gap-3">
            <h2>{title}</h2>
        </div>

        {/* section body */}
        <div className="section-body">
        <Swiper
  spaceBetween={30}
  centeredSlides={true}
  slidesPerView={4} // Điều chỉnh số lượng slide hiển thị cùng một lúc
  loop={true}
  breakpoints={{
    320: {
      slidesPerView: 1, // 1 slide trên màn hình nhỏ
    },
    768: {
      slidesPerView: 2, // 2 slide trên màn hình trung bình
    },
    1024: {
      slidesPerView: 3, // 3 slide trên màn hình lớn
    },
  }}
>
  {categoryList.map((item, index) => (
    <SwiperSlide key={index}>
      <Link to="/phim">
        <div className="category-item">
          {/* ảnh thumbnail */}
          <div className="image-thumbnail">
            <img
              src={item.imgUrl}
              alt={item.imgAlt}
              className="img-fluid"
            />
          </div>
          {/* nội dung */}
          <div className="category-content d-flex justify-content-center align-items-center gap-2">
            <div className="cate-icon text-dark bg-warning p-2">
              <i className={item.iconName}></i>
            </div>
            <Link to="/phim" className="normal-link">
              <h6 className="pt-2">{item.title}</h6>
            </Link>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ))}
</Swiper>

        </div>

        <div className="text-center mt-5 pb-3">
          <Link to="/phim" className="btn btn-outline-warning btn-lg text-dark">
            {btnText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
