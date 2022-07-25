import React from 'react'

const Award1 = [
    {
      id: 1,
      title: "조선일보",
      desc: " 압도적인 무대로 관객을 빨아들인다.\n5년 제작기간이 헛되지 않았음을\n증명하는 장업한 무대미술",
    },
    {
      id: 2,
      title: "국민일보",
      desc: "베일벗은 '웃는 남자'\n미치도록 매혹적인\n그와 함께하는 황홀경",
    },
]
const Award2 = [
    {
      id: 1,
      title: "뉴시스",
      desc: "웰메이드 뮤지컬의 탄생!\n눈부셨고, 귀는 황홀했으며,\n마음은 어릿했다.",
    },
    {
      id: 2,
      title: "국민일보",
      desc: "탄탄한 서사와 환상적인 무대,\n중독성 강한 음악까지\n한국 창작 뮤지컬사에 한 획을 그은 작품",
    },
]

function Awardtext1({id, title, desc}) {
    return (
        <>
            <div className="top_t">
                <span>{title}</span>
                <p>{desc}</p>
            </div>
        </>
    )
}

function Awardtext2({id, title, desc}) {
  return (
      <>
          <div className="bottom_t">
              <span>{title}</span>
              <p>{desc}</p>
          </div>
      </>
  )
}
function Section2() {
  return (
    <section id="section2">
            <article className="sec2_inner container">
                <div className="sec2_wrap">
                    <div className="sec2_title">
                        <span>award</span>
                        <h2>best<br/>musical</h2>
                        <p>한국 뮤지컬 최초<br/>그랜드슬램 달성</p>
                    </div>
                    <div className="news_top">
                        {Award1.map((txt) => (
                            <Awardtext1 
                            key={txt.id} 
                            title={txt.title} 
                            desc={txt.desc} />
                        ))}
                    </div>
                    <div className="news_bottom">
                        {Award2.map((txt) => (
                            <Awardtext2
                            key={txt.id} 
                            title={txt.title} 
                            desc={txt.desc} />
                        ))}
                    </div>
                </div>
            </article>
        </section>
  )
}

export default Section2