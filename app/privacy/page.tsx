import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "퀀트뷰 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="퀀트뷰 개인정보처리방침" effectiveDate="2026년 5월 2일">
      <p>
        퀀트뷰(이하 &quot;서비스&quot;)는 「개인정보 보호법」 및 관련 법령을 준수하며,
        이용자의 개인정보를 보호하고 권익을 존중합니다.
      </p>

      <h2>제1조 (개인정보 수집 및 이용 목적)</h2>
      <p>서비스는 다음의 목적을 위해 개인정보를 수집·이용합니다.</p>
      <ol>
        <li>회원 가입 및 계정 관리</li>
        <li>서비스 제공 (AI 분석, 포트폴리오, 알림 등)</li>
        <li>부정 이용 방지 및 보안</li>
        <li>고객 문의 응대</li>
        <li>서비스 개선을 위한 통계 분석</li>
        <li>광고 식별자(AAID) 기반 광고 노출 (Google AdMob)</li>
      </ol>

      <h2>제2조 (수집하는 개인정보 항목)</h2>

      <h3>가. 회원 가입 시 수집</h3>
      <ul>
        <li>
          <strong>Google OAuth 인증 정보</strong>: 이메일, 이름, Google 계정 식별자(google_sub), 프로필 사진 URL
        </li>
      </ul>

      <h3>나. 서비스 이용 과정에서 수집</h3>
      <ul>
        <li><strong>사용량 기록</strong>: AI 분석 사용 횟수, 광고 시청 횟수, 일자별 이용 통계</li>
        <li><strong>포트폴리오 데이터</strong>: 보유 종목, 평균 단가, 수량 (이용자가 직접 입력)</li>
        <li><strong>관심종목 및 폴더</strong>: 등록한 종목 목록 및 폴더 분류</li>
        <li><strong>FCM 토큰</strong>: 푸시 알림 발송 (Firebase)</li>
        <li><strong>텔레그램 chat_id</strong>: 텔레그램 봇 연동 시 (MAX/VIP 티어, 이용자 선택)</li>
        <li><strong>광고 식별자(AAID)</strong>: AdMob 광고 노출 (Google에서 자동 수집)</li>
      </ul>

      <h3>다. 자동 수집</h3>
      <ul>
        <li>서비스 이용 로그, 접속 IP, 기기 정보, 앱 버전</li>
      </ul>

      <h2>제3조 (개인정보 보유 및 이용 기간)</h2>
      <ol>
        <li>
          회원 탈퇴 시 즉시 파기합니다. 단, 다음의 경우 관련 법령에 따라 일정 기간 보관합니다.
          <ul>
            <li>결제 기록: 5년 (전자상거래법)</li>
            <li>로그인 기록: 3개월 (통신비밀보호법)</li>
          </ul>
        </li>
        <li>정상적인 서비스 이용 기간 동안에는 회원이 등록한 정보를 보관합니다.</li>
      </ol>

      <h2>제4조 (개인정보 처리 위탁)</h2>
      <p>서비스는 다음과 같이 개인정보 처리를 위탁하고 있습니다.</p>
      <table>
        <thead>
          <tr>
            <th>위탁 대상</th>
            <th>위탁 업무</th>
            <th>처리 정보</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google LLC</td>
            <td>OAuth 인증, 광고 식별자(AAID), Firebase 푸시·Crashlytics, Google Play 결제</td>
            <td>이메일, google_sub, AAID, 결제 정보</td>
          </tr>
          <tr>
            <td>Google AdMob</td>
            <td>광고 게재 및 수익 정산</td>
            <td>AAID, 광고 노출/클릭 통계</td>
          </tr>
          <tr>
            <td>Google Cloud (Gemini API)</td>
            <td>AI 분석 텍스트 생성</td>
            <td>분석 요청 종목명 (개인 식별 정보 미포함)</td>
          </tr>
        </tbody>
      </table>
      <p>
        위탁받은 자는 위탁 업무 수행 목적 외 개인정보를 처리할 수 없으며, 안전하게 관리하도록 계약상 의무를
        부과하고 있습니다.
      </p>

      <h2>제5조 (이용자의 권리)</h2>
      <p>이용자는 언제든지 다음 권리를 행사할 수 있습니다.</p>
      <ol>
        <li>개인정보 열람·정정·삭제 요구</li>
        <li>개인정보 처리 정지 요구</li>
        <li>회원 탈퇴 (계정 삭제)</li>
      </ol>
      <p>
        권리 행사는 카카오톡 채널 또는 이메일을 통해 요청할 수 있으며, 회사는 지체 없이 조치를 취합니다.
        계정 삭제 요청 흐름은 <a href="/account-delete">계정 삭제 페이지</a>를 참고하시기 바랍니다.
      </p>

      <h2>제6조 (광고 식별자 및 맞춤형 광고)</h2>
      <ol>
        <li>본 서비스는 Google AdMob을 통해 광고를 게재합니다.</li>
        <li>광고 게재 과정에서 광고 식별자(AAID, Android Advertising ID)가 수집되며, 이는 맞춤형 광고 노출 및 광고 효과 측정 목적으로 사용됩니다.</li>
        <li>
          이용자는 다음 경로로 맞춤형 광고를 거부할 수 있습니다.
          <ul>
            <li>Android: 설정 &gt; Google &gt; 광고 &gt; 맞춤형 광고 거부</li>
            <li>광고 ID 재설정: 설정 &gt; Google &gt; 광고 &gt; 광고 ID 재설정</li>
          </ul>
        </li>
        <li>
          자세한 사항은{" "}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
            Google 광고 정책
          </a>
          을 참고하시기 바랍니다.
        </li>
      </ol>

      <h2>제7조 (Google Play Family Policy)</h2>
      <p>
        본 서비스는 만 18세 이상 성인을 대상으로 제공되며, Google Play Family Policy를 준수합니다.
        만 14세 미만 아동의 가입 및 이용은 제한될 수 있습니다.
      </p>

      <h2>제8조 (개인정보의 안전성 확보 조치)</h2>
      <p>회사는 개인정보 보호를 위해 다음 조치를 취합니다.</p>
      <ol>
        <li><strong>기술적 조치</strong>: HTTPS 통신, 비밀번호 암호화 (Google OAuth 위임), JWT 토큰 30일 만료</li>
        <li><strong>관리적 조치</strong>: 개인정보 접근 권한 최소화, 정기 보안 점검</li>
        <li><strong>물리적 조치</strong>: 서버 접근 통제</li>
      </ol>

      <h2>제9조 (개인정보 보호책임자)</h2>
      <p>
        서비스의 개인정보 처리에 관한 업무 총괄 및 이용자 권리 행사 등 관련 문의는 다음 연락처로 접수할 수 있습니다.
      </p>
      <ul>
        <li><strong>개인정보 보호책임자</strong>: 이병하</li>
        <li><strong>이메일</strong>: <a href="mailto:lbh939@gmail.com">lbh939@gmail.com</a></li>
        <li>
          <strong>카카오톡 채널</strong>:{" "}
          <a href="https://pf.kakao.com/_CAIxbX" target="_blank" rel="noopener noreferrer">
            @quantapp
          </a>
        </li>
      </ul>

      <h2>제10조 (개정)</h2>
      <p>
        본 처리방침은 변경되는 경우 변경 사항의 적용일자 7일 전부터 서비스 내 공지사항을 통해 공지합니다.
        중요한 변경의 경우 30일 전 공지합니다.
      </p>

      <hr />

      <h3>부칙</h3>
      <p>본 처리방침은 2026년 5월 2일부터 시행합니다.</p>
    </LegalLayout>
  );
}
