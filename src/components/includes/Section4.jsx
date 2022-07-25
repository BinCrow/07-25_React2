import React from 'react'

const Poster1 = [
    {
        id: 1,
        image: "assets/img/mu1.jpg",
        title: "웃는남자",
        desc: "2022 THE MAN WHO LAUGHS",
        link: "MORE",
    },
    {
        id: 2,
        image: "assets/img/mu2.jpg",
        title: "마타하리",
        desc: "2022 MATA HARI",
        link: "MORE",
    },
    {
        id: 3,
        image: "assets/img/mu5.jpg",
        title: "레베카",
        desc: "2022 REBECCA",
        link: "MORE",
    },
    {
        id: 4,
        image: "assets/img/mu6.jpg",
        title: "팬텀",
        desc: "2022 PHANTOM",
        link: "MORE",
    },
]

const Poster2 = [
    {
        id: 1,
        image: "assets/img/mu8.jpg",
        title: "몬테크리스토",
        desc: "2022 MONTE CRISTO",
        link: "MORE",
    },
    {
        id: 2,
        image: "assets/img/mu7.jpg",
        title: "모차르트",
        desc: "2022 MOZART!",
        link: "MORE",
    },
    {
        id: 3,
        image: "assets/img/mu4.jpg",
        title: "엑스칼리버",
        desc: "2022 XCALIBUR",
        link: "MORE",
    },
    {
        id: 4,
        image: "assets/img/mu3.jpg",
        title: "프리다",
        desc: "2022 FRIDA",
        link: "MORE",
    },
]

function Posterlist1({id, title, desc, link, image}) {
    return (
        <li>
            <img className="img" src={image} alt={title} />
            <strong>{title}</strong>
            <p>{desc}</p>
            <a href="/">{link}</a>
        </li>
    )
}
function Posterlist2({id, title, desc, link, image}) {
    return (
        <li>
            <img className="img" src={image} alt={title} />
            <strong>{title}</strong>
            <p>{desc}</p>
            <a href="/">{link}</a>
        </li>
    )
}

function Section4() {
  return (
    <section id="section4">
        <article className="sec4_inner container">
            <div className="sec4_title">
                <h2>다른작품 구경하기</h2>
                <p>emk가 선사하는 다양한 뮤지컬</p>
            </div>
            <ul className="sec4_top">
                {Poster1.map((txt) => (
                    <Posterlist1
                        key={txt.id} 
                        image={txt.image}
                        name={txt.name} 
                        link={txt.link}
                    />
                ))}
            </ul>
            <ul className="sec4_bottom">
                {Poster2.map((txt) => (
                    <Posterlist2
                        key={txt.id} 
                        image={txt.image}
                        name={txt.name} 
                        link={txt.link}
                    />
                ))}
            </ul>
        </article>
    </section>
  )
}

export default Section4