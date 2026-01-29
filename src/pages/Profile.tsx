import { useState } from "react";

// 커리어데이터
const careerData = [
  {
    period: "2022.10 ~ 2024.9",
    company: "(주)토브지엠피",
    position: "운영실장",
  },
  {
    period: "2022.10 ~ 2024.9",
    company: "한국미용아카데미",
    position: "교육실장",
  },
  {
    period: "2023.6 ~ 2025.3",
    company: "한국미용학회",
    position: "간사",
  },
  { period: "2025.3 ~ -", company: "베스페르", position: "대표",},
  { period: "2026.1 ~ -", company: "nowk", position: "대표",},
];

// 자격데이터
const certData = [
  {
    date: "2022.5",
    title: "맞춤형화장품조제관리사",
    issuer: "식품의약품안전처",
  },
  {
    date: "2022.8",
    title: "연성대학교 뷰티제조전문과 양성과정 수료",
    issuer: "연성대학교",
  },
  { date: "2022.10", title: "조향사 1급", issuer: "한국자격검정평가진흥원" },
  {
    date: "2023.01",
    title: "TM ACADEMY 기초 메이크업 과정 수료",
    issuer: "프랑스 파리 itm 아카데미",
  },
];

// 아코디언 컴포넌트
function Accordion({
  title,
  open,
  onClick,
  children,
}: {
  title: React.ReactNode;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[#111]/15 py-5">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left text-xl font-normal cursor-pointer text-[#111]"
      >
        {title}
        <span className="text-xl">{open ? "− Close" : "+ Open"}</span>
      </button>

      {open && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );
}

// 메인---------------------------------------------------------------------------------------------------------

function Profile() {
  // 현재 선택된 탭 상태
  const [open, setOpen] = useState<string | null>("career");

  return (
    // 메인영역
    <div className="mx-auto w-full max-w-400 px-5 sm:px-6 lg:px-8 text-[#111] overflow-hidden">
      {/* 메인이미지 */}
      <img
        className="m-auto w-full max-w-180 h-auto"
        src="/images/nowl.png"
        alt="main"
      />

      {/* 메인인포 */}
      <div className="info flex flex-col gap-6 text-center sm:flex-row sm:justify-between sm:items-end pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-5">
          <h1 className="text-3xl sm:text-5xl font-normal">Minseo Kwon</h1>
          <span className="text-xl sm:text-2xl">권민서</span>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          <p className="text-xl sm:text-2xl">+82 10 5214 7713</p>
          <p className="text-xl sm:text-2xl">kwon@nowk.co.kr</p>
        </div>
      </div>

      {/* nowk링크 */}
      <div className="w-full pt-10 sm:pt-16 flex items-center">
        <i
          onClick={() =>
            window.open(
              "https://www.nowk.co.kr/",
              "_blank",
              "noopener,noreferrer",
            )
          }
          className="m-auto text-center text-2xl sm:text-4xl underline decoration-2 font-light cursor-pointer"
        >
          nowk.co.kr
        </i>
      </div>

      {/* ---------------------------- 이미지 섹션------------------------------------- */}
      <section className="mx-auto max-w-400 py-10 sm:py-16 under">
        {/* 오른쪽 정렬 + hover 그룹 */}
        <div
          className="ml-auto w-full justify-end group flex flex-col-reverse sm:flex-row items-start sm:items-end gap-3 sm:gap-4 cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.ceojhn.com/news/articleView.html?idxno=8677",
              "_blank",
              "noopener,noreferrer",
            )
          }
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ")
              window.open(
                "https://www.ceojhn.com/news/articleView.html?idxno=8677",
                "_blank",
                "noopener,noreferrer",
              );
          }}
        >
          {/* 오른쪽에서 왼쪽으로 슬라이드되는 텍스트 */}
          <span
            className="
            select-none
            px-0 sm:px-4
            text-xl sm:text-4xl
            font-extralight text-[#555]
          "
          >
            Open Link to CEO Journal
          </span>

          {/* 이미지 */}
          <img
            src="/images/min.png"
            alt="newsimg"
            className="block w-full sm:w-130 md:w-150 h-auto transition duration-300 group-hover:opacity-50"
          />
        </div>

        {/* 왼쪽정렬 */}
        <div className="pt-10 sm:pt-16 max-w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <img src="/images/min2.png" alt="img" />

          <span
            className="
            ml-auto
            select-none
            px-0 sm:px-4
            text-lg sm:text-4xl
            text-right
            font-extralight text-[#555]
          "
          >
            A brand that creates artistic experiences <br /> through ( fragrance
            )
          </span>
        </div>
      </section>

      {/* ----------------------------아코디언섹션---------------------------------- */}
      <section className="mx-auto max-w-400 py-10 sm:py-16">
        {/* 경력 및 활동 */}
        <Accordion
          title={
            <span>
              <span className="block sm:inline">Experience & Activities</span>
              <span className="block sm:inline sm:ml-2">
                | 경력 및 활동
              </span>
            </span>
          }
          open={open === "career"}
          onClick={() => setOpen(open === "career" ? null : "career")}
        >
          {careerData.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-2 text-md sm:grid-cols-[160px_1fr_230px] sm:items-center"
            >
              <span className="text-[#111]/60 text-left">{item.period}</span>

              <span className="font-medium text-left sm:text-center">
                {item.company}
              </span>

              <span className="text-[#111]/70 text-left sm:text-right">{item.position}</span>

            </div>
          ))}
        </Accordion>

        {/* 자격 및 교육사항 */}
        <Accordion
          title={
            <span>
              <span className="block sm:inline">Certificates & Training</span>
              <span className="block sm:inline sm:ml-2">
                | 자격 및 교육사항
              </span>
            </span>
          }
          open={open === "cert"}
          onClick={() => setOpen(open === "cert" ? null : "cert")}
        >
          {certData.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-2 text-md sm:grid-cols-[160px_1fr_230px] sm:items-center"
            >
              <span className="text-[#111]/60 text-left">{item.date}</span>

              <span className="font-medium text-left sm:text-center">
                {item.title}
              </span>
              <span className="text-[#111]/70 text-left sm:text-right">
                {item.issuer}
              </span>
            </div>
          ))}
        </Accordion>
      </section>

      {/* 사이트 아이프레임 */}
      <div
        className="flex justify-center py-10 sm:py-16 cursor-pointer"
        onClick={() =>
          window.open(
            "https://www.nowk.co.kr/",
            "_blank",
            "noopener,noreferrer",
          )
        }
      >
        <div className="relative w-full sm:w-[70%] max-w-400 aspect-30/16 overflow-hidden">
          <iframe
            src="https://www.nowk.co.kr/"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>

      {/* footer */}
      <p className="py-10 text-base sm:text-lg text-[#555] font-light">
        Design & Development by Dongmi Jin | miyaajd@nowk.co.kr
      </p>
    </div>
  );
}

export default Profile;
