import React from 'react'

const Story = [
    {
        id: 1,
        desc: "기이하게 찢긴 입, 기형의 모습이지만, 관능적인 젊은 청년. 지울 수 없는 영원한 미소 뒤엔 다른 사람과 똑같이 꿈을 꾸는 영혼이 있다.",
        simple: "그윈플렌",
        link: "바로가기",
    },
    {
        id: 2,
        desc: "순백의 여린 마음을 갖고 있는 천사 같은 존재. 눈에는 빛이 가득하나, 앞을 보지 못한다. 눈이 아닌 영혼으로 그윈플렌을 바라보며 마음의 상처를 보듬어 준다.",
        simple: "우르수스",
        link: "바로가기",
    },
    {
        id: 3,
        desc: "17세기 유럽의 어딘가, 눈보라를 헤치고 우르수스(제라르 드 빠르디유)가 살고 있는 집을 두 고아가 찾아온다. 유랑극단 공연자인 우르수스는 기이하게 찢어진 그윈플렌(마크-앙드레 그롱당)의 입을 보고 깜짝 놀라지만, 두 아이를 불쌍히 여겨 그윈플렌과 눈이 먼 데아(크리스타 테레)를 자신의 아이들로 받아들인다.",
        simple: "데아",
        link: "바로가기",
    },
  ]

  function StoryText({id, simple, desc, link}) {
    return (
    <>
      <li>
          <p>{desc}</p>
          <span>{simple}</span>
          <a href="/">{link}</a>
      </li>
    </>
    )
  }

function Section6() {
  return (
    <section id="section6">
        <article className="sec6_inner container">
            <div className="sec6_title">
                <h2>관람 후기</h2>
                <p>관람 객들이 전하는 후기</p>
            </div>
            <div className="sec6_box">
                <ul>
                    {Story.map((txt) => (
                        <StoryText
                            key={txt.id}
                            desc={txt.desc}
                            simple={txt.simple} 
                            link={txt.link}
                        />
                    ))}
                </ul>
                <a href="/" className="po">more</a>
            </div>
        </article>
    </section>
  )
}

export default Section6