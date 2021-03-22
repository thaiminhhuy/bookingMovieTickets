import React from "react";
import "./styled-components/footer.css";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <img src="/img/wedlogo.png" alt="" />
            <p className="mt-4">
              TIX – Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
              rạp và đổi quà hấp dẫn.
            </p>
          </div>
          <div className="col-sm-3 ">
            <h6 className="text-center mb-3">Hệ Thống Rạp Chiếu</h6>
            <ul>
              <li>
                <img src="/img/bhb.jpg" alt="" />
              </li>
              <li>
                <img src="/img/cgv.jpg" alt="" />
              </li>
              <li>
                <img src="/img/CNS.jpeg" alt="" />
              </li>
              <li>
                <img src="/img/galaxy.jpg" alt="" />
              </li>
              <li>
                <img src="/img/lotte.jpg" alt="" />
              </li>
              <li>
                <img src="/img/mega.png" alt="" />
              </li>
            </ul>
          </div>
          <div className="col-sm-3 text-center">
            <h6>Mobile App</h6>
            <ul>
              <li>
                <img src="/img/android-logo.png" alt="" />
              </li>
              <li>
                <img src="/img/apple-logo.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
