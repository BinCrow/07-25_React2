import React from 'react'

const youtube = [
  {
      id: 1,
      title: "웃는 남자 유튜브",
      desc: "웃는 남자 배우들의 무대인사 커튼 콜",
      link: "바로가기",
  }
]

function Youtubetext({id, title, desc, link}) {
  return (
    <>
      <h2>{title}</h2>
      <p>{desc}</p>
      <a href="/">{link}</a>
    </>
  )
}

function Section5() {
  return (
    <section id="section5">
        <article className="sec5_inner container">
            <div className="yt">
              {youtube.map((txt) => (
                <Youtubetext
                  key={txt.id}
                  title={txt.title}
                  desc={txt.desc} 
                  link={txt.link}
                />
              ))}
            </div>
        </article>
    </section>
  )
}

export default Section5