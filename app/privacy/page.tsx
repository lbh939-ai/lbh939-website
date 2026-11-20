import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "퀀트뷰 개인정보처리방침",
};

// 원본 = quant_app 저장소 docs/legal/privacy_policy.md (내용을 같이 고친다).
export default function PrivacyPage() {
  return (
    <LegalLayout title="퀀트뷰 개인정보처리방침" effectiveDate="2026년 11월 27일 (공고 2026년 11월 20일)">
      <p>
        강하스튜디오(이하 &quot;회사&quot;)는 퀀트뷰(이하 &quot;서비스&quot;)를 운영하면서 「개인정보 보호법」 등 관련
        법령을 지키고 이용자의 개인정보를 보호하기 위해 다음과 같이 개인정보처리방침을 정합니다.
      </p>

      <h2>제1조 (개인정보의 처리 목적)</h2>
      <p>
        회사는 다음 목적을 위해 개인정보를 처리합니다. 목적이 바뀌면 법령에 따라 미리 알리고 필요한 동의를 받습니다.
      </p>
      <ol>
        <li>회원 가입·로그인과 계정 관리</li>
        <li>서비스 제공 (AI 분석, 관심종목·포트폴리오, 푸시 알림)</li>
        <li>유료 구독(광고 제거) 결제 확인과 이용 권한 관리</li>
        <li>광고 게재와 광고 시청 보상 지급 (Google AdMob)</li>
        <li>부정 이용 방지와 보안</li>
        <li>고객 문의 응대</li>
        <li>앱 오류 확인과 서비스 개선을 위한 통계 분석</li>
      </ol>

      <h2>제2조 (처리하는 개인정보 항목)</h2>

      <h3>가. 회원 가입·로그인 시</h3>
      <ul>
        <li><strong>Google 로그인</strong>: 이메일, 이름, Google 계정 식별자</li>
        <li>
          <strong>Apple 로그인</strong>: Apple 계정 식별자, 이메일(이용자가 &apos;나의 이메일 가리기&apos;를 고른 경우
          Apple이 만든 대리 이메일), 이름(처음 로그인할 때 이용자가 제공한 경우에만)
        </li>
      </ul>

      <h3>나. 서비스 이용 과정에서</h3>
      <ul>
        <li><strong>이용 기록</strong>: AI 분석 이용 횟수·일시, 광고 시청 보상 기록, 일자별 이용량, 가입·최근 로그인 일시</li>
        <li><strong>AI 분석 기록</strong>: 이용자가 요청한 분석 결과</li>
        <li><strong>포트폴리오</strong>: 보유 종목, 평균 단가, 수량 (이용자가 직접 입력)</li>
        <li><strong>관심종목과 폴더</strong>: 등록한 종목과 폴더 분류</li>
        <li><strong>알림</strong>: 푸시 알림 토큰, 알림 설정</li>
        <li>
          <strong>유료 구독 시</strong>: 구독 상품, 스토어 거래 번호(Apple 원거래 번호, Google 주문 번호·구매 토큰),
          구매·만료 일시 — 카드 번호 등 결제 수단 정보는 Apple·Google이 직접 처리하며 회사는 받지 않습니다.
        </li>
        <li><strong>쿠폰 사용 기록</strong></li>
      </ul>

      <h3>다. 자동으로 생성·수집되는 정보</h3>
      <ul>
        <li>
          <strong>광고 식별자</strong>: Android 광고 ID(AAID), iPhone 광고 식별자(IDFA — &apos;추적 허용&apos;을 한
          경우에만)
        </li>
        <li><strong>기기 정보</strong>: 기기 모델, 운영체제 버전, 앱 버전</li>
        <li><strong>앱 오류 기록과 이용 통계</strong>: Firebase Crashlytics·Firebase Analytics</li>
        <li><strong>서버 접속 기록</strong>: IP 주소, 접속 일시, 요청 내용</li>
      </ul>

      <h2>제3조 (개인정보의 처리 및 보유 기간)</h2>
      <ol>
        <li>회원 정보와 서비스 이용 중 생긴 정보는 계정을 삭제하면 바로 파기합니다.</li>
        <li>다만 다음 정보는 아래 기간 동안 보관한 뒤 파기합니다.</li>
      </ol>
      <table>
        <thead>
          <tr>
            <th>정보</th>
            <th>보관 기간</th>
            <th>근거</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>구독 결제 기록 (상품, 거래 번호, 구매·만료 일시)</td>
            <td>5년</td>
            <td>전자상거래 등에서의 소비자보호에 관한 법률</td>
          </tr>
          <tr>
            <td>서버 접속 기록 (IP 주소, 접속 일시)</td>
            <td>3개월</td>
            <td>통신비밀보호법</td>
          </tr>
          <tr>
            <td>광고 시청 보상 처리 기록 (광고 거래 번호, 계정 번호)</td>
            <td>6개월</td>
            <td>보상 중복 지급 방지</td>
          </tr>
          <tr>
            <td>서버 운영 기록 (오류·로그인 확인용)</td>
            <td>7일</td>
            <td>장애 확인</td>
          </tr>
        </tbody>
      </table>

      <h2>제4조 (개인정보의 파기 절차 및 방법)</h2>
      <ol>
        <li>보유 기간이 끝나거나 처리 목적을 달성한 개인정보는 지체 없이 파기합니다.</li>
        <li>전자 파일은 복구할 수 없는 방법으로 삭제합니다. 회사는 개인정보를 종이 문서로 보관하지 않습니다.</li>
        <li>법령에 따라 보관하는 정보는 다른 개인정보와 분리해 보관하고, 보관 목적 외에는 쓰지 않습니다.</li>
      </ol>

      <h2>제5조 (개인정보의 제3자 제공)</h2>
      <p>
        회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 법령에 특별한 규정이 있거나 수사기관이 법령에
        정한 절차에 따라 요구하는 경우는 예외로 합니다.
      </p>

      <h2>제6조 (개인정보 처리의 위탁)</h2>
      <p>
        회사는 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 맡기고 있습니다. 해외 회사에 맡기는 내용은 제7조에
        자세히 적었습니다.
      </p>
      <table>
        <thead>
          <tr>
            <th>수탁자</th>
            <th>맡기는 업무</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>오라클 클라우드 (대한민국 춘천 데이터센터)</td>
            <td>서버·데이터베이스 운영</td>
          </tr>
          <tr>
            <td>Google LLC</td>
            <td>
              Google 로그인, 광고 게재(AdMob), 푸시 알림 발송(Firebase Cloud Messaging), 앱 오류·이용 통계 분석(Firebase
              Crashlytics·Analytics), Google Play 구독 결제 확인
            </td>
          </tr>
          <tr>
            <td>Apple Inc.</td>
            <td>Apple 로그인과 계정 삭제 시 연결 해제, iPhone 푸시 알림 전달, App Store 구독 결제 확인</td>
          </tr>
          <tr>
            <td>Anthropic, PBC</td>
            <td>AI 분석 글 생성</td>
          </tr>
        </tbody>
      </table>
      <p>
        회사는 수탁자가 맡긴 업무 외의 목적으로 개인정보를 처리하지 않도록 각 회사의 데이터 처리 약관 등을 통해
        관리합니다.
      </p>

      <h2>제7조 (개인정보의 국외 이전)</h2>
      <p>
        회사는 서비스 제공(이용 계약 이행)에 필요한 처리를 해외 회사에 맡기면서 아래와 같이 개인정보를 국외로
        이전합니다(근거: 개인정보 보호법 제28조의8 제1항 제3호). 이전은 앱을 이용할 때 수시로, 암호화된 네트워크를 통해
        이루어집니다.
      </p>

      <h3>1. Google LLC (연락처: googlekrsupport@google.com)</h3>
      <ul>
        <li><strong>이전 국가</strong>: 미국</li>
        <li>
          <strong>이전 항목</strong>: Google 로그인 정보(이메일, 이름, 계정 식별자), 광고 식별자, 푸시 알림 토큰, 기기
          정보, 앱 오류 기록·이용 통계, Google Play 구독 거래 정보
        </li>
        <li><strong>이용 목적</strong>: Google 로그인, 광고 게재, 푸시 알림 발송, 앱 오류·이용 분석, 구독 결제 확인</li>
        <li><strong>보유·이용 기간</strong>: 위탁 목적을 달성할 때까지 (각 서비스의 보관 정책에 따름)</li>
      </ul>

      <h3>
        2. Apple Inc. (연락처:{" "}
        <a href="https://www.apple.com/kr/privacy/contact/" target="_blank" rel="noopener noreferrer">
          apple.com/kr/privacy/contact
        </a>
        )
      </h3>
      <ul>
        <li><strong>이전 국가</strong>: 미국</li>
        <li>
          <strong>이전 항목</strong>: Apple 로그인 정보(계정 식별자, 이메일, 이름), 계정 삭제 시 연결 해제를 위한 인증
          정보, iPhone 푸시 알림 토큰, App Store 구독 거래 정보
        </li>
        <li><strong>이용 목적</strong>: Apple 로그인과 연결 해제, iPhone 푸시 알림 전달, 구독 결제 확인</li>
        <li><strong>보유·이용 기간</strong>: 위탁 목적을 달성할 때까지 (Apple의 보관 정책에 따름)</li>
      </ul>

      <h3>3. Anthropic, PBC (연락처: privacy@anthropic.com)</h3>
      <ul>
        <li><strong>이전 국가</strong>: 미국</li>
        <li>
          <strong>이전 항목</strong>: AI 분석 요청 내용 — 종목과 시장 데이터, 그리고 이용자가 그 종목을 포트폴리오에 넣어
          둔 경우 평균 단가·수량·손익. 이름·이메일·계정 번호처럼 이용자를 알아볼 수 있는 정보는 보내지 않습니다.
        </li>
        <li><strong>이용 목적</strong>: AI 분석 글 생성</li>
        <li><strong>보유·이용 기간</strong>: 처리 후 Anthropic의 데이터 보관 정책에 따른 기간</li>
      </ul>

      <h3>거부 방법과 효과</h3>
      <ul>
        <li>
          국외 이전을 원하지 않으면 계정을 삭제하거나 서비스 이용을 멈추면 됩니다. 위 처리는 로그인·알림·AI 분석 등
          서비스 제공에 꼭 필요해, 거부하면 서비스를 이용할 수 없습니다.
        </li>
        <li>AI 분석을 요청하지 않으면 Anthropic으로 정보가 전송되지 않습니다.</li>
        <li>광고 식별자는 제9조의 방법으로 거부할 수 있으며, 거부해도 서비스를 이용할 수 있습니다.</li>
        <li>문의는 제12조의 연락처로 하면 됩니다.</li>
      </ul>

      <h2>제8조 (이용자의 권리와 행사 방법)</h2>
      <ol>
        <li>이용자는 언제든지 자신의 개인정보 열람·정정·삭제·처리정지를 요구할 수 있습니다.</li>
        <li>
          <strong>계정 삭제</strong>: 앱 &apos;내 정보&apos; 탭 맨 아래 &apos;계정 삭제&apos;에서 바로 삭제할 수
          있습니다. Apple로 로그인한 계정은 Apple 로그인 연결도 함께 해제됩니다. 앱을 쓸 수 없는 경우의 방법은{" "}
          <a href="/account-delete">계정 삭제 안내</a>를 참고하시기 바랍니다.
        </li>
        <li>그 밖의 요구는 제12조의 이메일 또는 카카오톡 채널로 하면 회사가 지체 없이 처리하고 결과를 알려드립니다.</li>
        <li>법정대리인이나 위임받은 사람을 통해서도 요구할 수 있습니다.</li>
        <li>
          유료 구독은 계정을 삭제해도 자동으로 해지되지 않습니다. App Store 또는 Google Play의 구독 관리에서 해지해
          주세요.
        </li>
      </ol>

      <h2>제9조 (광고 식별자와 맞춤형 광고)</h2>
      <ol>
        <li>회사는 Google AdMob으로 광고를 게재하며, 광고 노출·효과 측정과 맞춤형 광고에 광고 식별자가 쓰입니다.</li>
        <li>
          <strong>iPhone</strong>: 앱을 처음 실행하면 &apos;추적 허용&apos; 여부를 묻습니다. 허용하지 않으면 광고
          식별자(IDFA)를 쓰지 않습니다. 설정 &gt; 개인정보 보호 및 보안 &gt; 추적에서 언제든 바꿀 수 있습니다.
        </li>
        <li>
          <strong>Android</strong>: 설정 &gt; Google &gt; 광고(기기에 따라 설정 &gt; 개인정보 보호 &gt; 광고)에서 광고
          ID를 삭제하거나 재설정할 수 있습니다.
        </li>
        <li>
          자세한 사항은{" "}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
            Google 광고 정책
          </a>
          을 참고하시기 바랍니다.
        </li>
      </ol>

      <h2>제10조 (이용 연령)</h2>
      <p>
        서비스는 만 18세 이상 성인을 대상으로 제공되며, Google Play 가족 정책을 준수합니다. 만 14세 미만 아동의 가입 및
        이용은 제한될 수 있습니다.
      </p>

      <h2>제11조 (개인정보의 안전성 확보 조치)</h2>
      <ol>
        <li>
          <strong>기술적 조치</strong>: 모든 통신 HTTPS 암호화, 비밀번호를 받거나 저장하지 않음(Google·Apple 로그인
          사용), 로그인 토큰 유효기간 30일
        </li>
        <li><strong>관리적 조치</strong>: 개인정보 접근 권한 최소화, 정기 점검</li>
        <li><strong>물리적 조치</strong>: 클라우드 데이터센터의 출입 통제, 서버 접근 통제</li>
      </ol>

      <h2>제12조 (개인정보 보호책임자)</h2>
      <p>개인정보 처리에 관한 업무 총괄과 이용자 권리 행사 등 관련 문의는 다음 연락처로 접수할 수 있습니다.</p>
      <ul>
        <li><strong>개인정보 보호책임자</strong>: 강하스튜디오 대표</li>
        <li><strong>이메일</strong>: <a href="mailto:lbh939@gmail.com">lbh939@gmail.com</a></li>
        <li>
          <strong>카카오톡 채널</strong>:{" "}
          <a href="https://pf.kakao.com/_CAIxbX" target="_blank" rel="noopener noreferrer">
            @quantapp
          </a>
        </li>
      </ul>

      <h2>제13조 (권익침해 구제 방법)</h2>
      <p>개인정보 침해에 대한 상담·신고는 아래 기관에 할 수 있습니다.</p>
      <ul>
        <li>개인정보분쟁조정위원회: (국번 없이) 1833-6972, www.kopico.go.kr</li>
        <li>개인정보침해신고센터: (국번 없이) 118, privacy.kisa.or.kr</li>
        <li>대검찰청: (국번 없이) 1301, www.spo.go.kr</li>
        <li>경찰청: (국번 없이) 182, ecrm.police.go.kr</li>
      </ul>

      <h2>제14조 (처리방침의 변경)</h2>
      <ol>
        <li>
          이 처리방침이 바뀌면 시행 7일 전부터 이 페이지와 앱 공지사항으로 알리고, 이용자 권리에 중요한 변경은 30일 전에
          알립니다.
        </li>
        <li>변경 이력</li>
      </ol>
      <table>
        <thead>
          <tr>
            <th>시행일</th>
            <th>주요 변경 내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026년 11월 27일 (공고 11월 20일)</td>
            <td>
              Apple 로그인·유료 구독·iPhone 광고 식별자 항목 추가 / AI 분석 수탁자를 Google(Gemini)에서
              Anthropic(Claude)으로 정정 / 국외 이전·파기·제3자 제공·권익침해 구제 조항 신설 / 앱 안 계정 삭제 반영 /
              보관 기간 구체화 / 텔레그램 연동·프로필 사진 항목 삭제(수집하지 않음) / 보호책임자 표기를 상호로 변경
            </td>
          </tr>
          <tr>
            <td>2026년 5월 2일</td>
            <td>최초 시행</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>부칙</h3>
      <p>본 처리방침은 2026년 11월 27일부터 시행합니다.</p>
    </LegalLayout>
  );
}
