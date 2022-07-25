import React from 'react'

const Actor = [
    {
        id: 1,
        image: "assets/img/sec3_img01.jpg",
        name: "박효신",
        link: "자세히보기",
    },
    {
        id: 2,
        image: "assets/img/sec3_img03.jpg",
        name: "박은태",
        link: "자세히보기",
    },
    {
        id: 3,
        image: "assets/img/sec3_img02.jpg",
        name: "박강현",
        link: "자세히보기",
    },
]

function Actorname({id, name, link, image}) {
    return (
        <div className="actor">
            <img className="img" src={image} alt={name} />
            <div className="text">
                <strong>{name}</strong>
                <a href="/">{link}</a>
            </div>
        </div>
    )
}

function Section3() {
  return (
    <section id="section3">
        <article className="sec3_inner container">
            <h2>웃는 남자 출연배우</h2>
            <div className="actor_wrap">
                {Actor.map((txt) => (
                    <Actorname
                        key={txt.id} 
                        image={txt.image}
                        name={txt.name} 
                        link={txt.link}
                    />
                ))}
            </div>
            <div className="more"><a href="/">배우 더 보기</a></div>
        </article>
    </section>
  )
}

export default Section3