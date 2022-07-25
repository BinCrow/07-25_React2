import React from 'react'

function slider() {
  return (
    <section id="section1">
    <article className="sec1_wrap">
        <div className="slider">
            <div className="sec1_inner container">
                <div className="desc">
                    <h2>2022 THE MAN WHO LAUGHS</h2>
                    <p>‘부자들의 낙원은 가난한 자들의 지옥으로 세워진 것이다’</p>
                    <a href="/">MORE</a>
                </div>
                <div className="bullet">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="prev"><i className="fas fa-chevron-left"></i></div>
                <div className="next"><i className="fas fa-chevron-right"></i></div>
            </div>
        </div>
    </article>
</section>
  )
}

export default slider