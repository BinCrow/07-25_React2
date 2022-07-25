import React from 'react'

function Footer() {
  return (
    <footer id="footer">
        <h2 className="ir_so">푸터 영역</h2>
        <div className="footer__inner container">
            <div className="footer__menu">
                <div className="sns_wrap">
                    <h2>emk</h2>
                    <p>sns를 통해<br/>더 많은 정보를 확인!</p>
                    <ul className="sns">
                        <li><a href="/"><i className="fab fa-instagram"></i><span className="ir_so">인스타</span></a></li>
                        <li><a href="/"><i className="fab fa-facebook-square"></i><span className="ir_so">페이스북</span></a></li>
                        <li><a href="/"><i className="fab fa-twitter"></i><span className="ir_so">트위터</span></a></li>
                        <li><a href="/"><i className="fab fa-youtube"></i><span className="ir_so">유튜브</span></a></li>
                    </ul>
                </div>
                <div>
                    <h3>사이트</h3>
                    <ul>
                        <li><a href="/">레이아웃 유형01</a></li>
                        <li><a href="/">레이아웃 유형02</a></li>
                        <li><a href="/">레이아웃 유형03</a></li>
                        <li><a href="/">레이아웃 유형04</a></li>
                    </ul>
                </div>
                <div>
                    <h3>사이트</h3>
                    <ul>
                        <li><a href="/">레이아웃 유형01</a></li>
                        <li><a href="/">레이아웃 유형02</a></li>
                        <li><a href="/">레이아웃 유형03</a></li>
                        <li><a href="/">레이아웃 유형04</a></li>
                    </ul>
                </div>
                <div>
                    <h3>사이트</h3>
                    <ul>
                        <li><a href="/">레이아웃 유형01</a></li>
                        <li><a href="/">레이아웃 유형02</a></li>
                        <li><a href="/">레이아웃 유형03</a></li>
                        <li><a href="/">레이아웃 유형04</a></li>
                    </ul>
                </div>
                <div>
                    <h3>사이트</h3>
                    <ul>
                        <li><a href="/">레이아웃 유형01</a></li>
                        <li><a href="/">레이아웃 유형02</a></li>
                        <li><a href="/">레이아웃 유형03</a></li>
                        <li><a href="/">레이아웃 유형04</a></li>
                    </ul>
                </div>
            </div>
            <address className="footer__right">
                ©2022 KwonYongBin. All rights reserved.
            </address>
        </div>
    </footer>
  )
}

export default Footer