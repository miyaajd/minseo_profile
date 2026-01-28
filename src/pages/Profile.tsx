import { useState } from "react";

// type 정의

// type CareerItem = {
//   periodStart: string;
//   periodEnd: string; // "-" 가능
//   company: string;
//   position: string;
//   role: string;
// };

// type CerItem = {
//   date: string; // "2022.5" 같은 형태
//   title: string;
//   grade?: string; // 없으면 빈칸
//   issuer: string;
// };

// 커리어데이터
const careerData = [
  {
    period: "2022.10 ~ 2024.9",
    company: "(주)토브지엠피",
    position: "운영실장",
    role: "운영 총괄",
  },
  {
    period: "2022.10 ~ 2024.9",
    company: "한국미용아카데미",
    position: "교육실장",
    role: "교육 총괄",
  },
  {
    period: "2023.6 ~ 2025.3",
    company: "한국미용학회",
    position: "간사",
    role: "편집간사",
  },
  { period: "2025.3 ~ -", company: "베스페르", position: "대표", role: "대표" },
  { period: "2026.1 ~ -", company: "nowk", position: "대표", role: "대표" },
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
  title: string;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-black/15 py-5">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left text-xl font-normal cursor-pointer"
      >
        {title}
        <span className="text-xl">{open ? "− Close" : "+ Open"}</span>
      </button>

      {open && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );
}

// // 탭버튼 컴포넌트
// function TabButton({
//   active,
//   children,
//   onClick,
// }: {
//   active: boolean;
//   children: React.ReactNode;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={[
//         "rounded-full border px-4 py-2 text-sm transition cursor-pointer",
//         active
//           ? "border-black bg-black text-white"
//           : "border-black/15 bg-white text-black hover:bg-black/5",
//       ].join(" ")}
//     >
//       {children}
//     </button>
//   );
// }

// 메인---------------------------------------------------------------------------------------------------------

function Profile() {
  // 현재 선택된 탭 상태
  const [open, setOpen] = useState<string | null>("career");

  return (
    // 메인영역
    <div className="mx-auto w-full max-w-400 px-5 sm:px-6 lg:px-8">
      {/* 메인이미지 */}
      <img className="m-auto" src="/images/nowl.png" alt="main" />
      {/* 메인인포 */}
      <div className="info text-center flex justify-between items-end pb-6">
        <div className="flex items-end gap-5">
          <h1 className="text-5xl font-normal">Minseo Kwon</h1>
          <span className="text-2xl">권민서</span>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl">+82 10 5214 7713</p>
          <p className="text-2xl">kwon@nowk.co.kr</p>
        </div>
      </div>
      {/* nowk링크 */}
      <div className="w-full pt-16 flex aline-center">
        <i
          onClick={() =>
            window.open(
              "https://www.nowk.co.kr/",
              "_blank",
              "noopener,noreferrer",
            )
          }
          className="m-auto text-center text-4xl underline decoration-2 font-light cursor-pointer"
        >
          nowk.co.kr
        </i>
      </div>
      {/* ---------------------------- 이미지 섹션------------------------------------- */}
      <section className="mx-auto max-w-400 py-16 under">
        {/* 오른쪽 정렬 + hover 그룹 */}
        <div
          className="ml-auto w-fit group flex items-end gap-4 cursor-pointer"
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
            select-none whitespace-nowrap
            px-4 text-4xl font-extralight text-[#555]
          "
          >
            Open Link to CEO Journal
          </span>
          {/* 이미지 */}
          <img
            src="/images/min.png"
            alt="newsimg"
            className="block transition duration-300 group-hover:opacity-50"
          />
        </div>
        {/* 왼쪽정렬 */}
        <div className="pt-16 max-w-full flex items-center gap-4 justify-between">
          <img src="/images/min2.png" alt="img" className="w-[40%]" />
          <span
            className="
            select-none whitespace-nowrap
            px-4 text-4xl
            text-right font-extralight text-[#555]
          "
          >
            A brand that creates artistic experiences <br /> through ( fragrance
            )
          </span>
        </div>
      </section>
      {/* ----------------------------아코디언섹션---------------------------------- */}
      <section className="mx-auto max-w-400  py-16">
        {/* 경력 및 활동 */}
        <Accordion
          title="Experience & Activities | 경력 및 활동"
          open={open === "career"}
          onClick={() => setOpen(open === "career" ? null : "career")}
        >
          {careerData.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-2 text-md sm:grid-cols-[160px_1fr_70px_160px] sm:items-center"
            >
              <span className="text-black/60 text-left">{item.period}</span>
              <span className="font-medium text-center">{item.company}</span>
              <span className="text-center">{item.position}</span>
              <span className="text-black/70 md:text-right">{item.role}</span>
            </div>
          ))}
        </Accordion>

        {/* 자격 및 교육사항 */}
        <Accordion
          title="Certificates & Training | 자격 및 교육사항"
          open={open === "cert"}
          onClick={() => setOpen(open === "cert" ? null : "cert")}
        >
          {certData.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-2 text-md sm:grid-cols-[160px_1fr_70px_160px] sm:items-center"
            >
              <span className="text-black/60">{item.date}</span>
              <span className="font-medium text-center">{item.title}</span>
              <span></span> {/*빈칸*/}
              <span className="text-black/70 text-right">{item.issuer}</span>
            </div>
          ))}
        </Accordion>
      </section>
      {/* 사이트 아이프레임 */}
      <div
        className="flex justify-center py-16 cursor-pointer"
        onClick={() =>
          window.open(
            "https://www.nowk.co.kr/",
            "_blank",
            "noopener,noreferrer",
          )
        }
      >
        <div className="relative w-[70%] max-w-400 aspect-30/16 overflow-hidden">
          <iframe
            src="https://www.nowk.co.kr/"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
      {/* footer */}
      <p className="py-10 text-lg text-[#555] font-light">
        Design & Development by Dongmi Jin | miyaajd@nowk.co.kr
      </p>
      {/* ---------------------------이력 토글 & 테이블--------------------------------------- */}
      {/* <section className="mx-auto max-w-[1200px] px-6 py-16"> */}
      {/* ===== 탭 영역 ===== */}
      {/* <div className="flex gap-2 mb-8">
          <TabButton active={tab === "career"} onClick={() => setTab("career")}>
            경력 및 활동
          </TabButton>

          <TabButton active={tab === "cert"} onClick={() => setTab("cert")}>
            자격 및 교육사항
          </TabButton>
        </div> */}

      {/* ===== 경력 테이블 ===== */}
      {/* {tab === "career" && (
          <table className="w-full border text-sm">
            <thead className="bg-black/5">
              <tr>
                <th className="p-3">근무기간</th>
                <th className="p-3">근무처</th>
                <th className="p-3">직위</th>
                <th className="p-3">담당 직무</th>
              </tr>
            </thead>
            <tbody>
              {careerData.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3">
                    {item.periodStart} ~ {item.periodEnd}
                  </td>
                  <td className="p-3">{item.company}</td>
                  <td className="p-3">{item.position}</td>
                  <td className="p-3">{item.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )} */}

      {/* ===== 자격/교육 테이블 ===== */}
      {/* {tab === "cert" && (
          <table className="w-full border text-sm">
            <thead className="bg-black/5">
              <tr>
                <th className="p-3">취득일자</th>
                <th className="p-3">자격 및 교육명</th>
                <th className="p-3">등급</th>
                <th className="p-3">발급기관</th>
              </tr>
            </thead>
            <tbody>
              {certData.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.grade ?? "-"}</td>
                  <td className="p-3">{item.issuer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )} */}
      {/* </section> */}
    </div>
  );
}

export default Profile;
