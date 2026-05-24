import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "계정 삭제 요청",
  description: "퀀트뷰 계정 삭제 요청 안내",
};

export default function AccountDeletePage() {
  return (
    <LegalLayout title="계정 삭제 요청" effectiveDate="2026년 5월 12일">
      <p>
        퀀트뷰는 이용자가 계정을 삭제하고 모든 개인정보 처리를 중단할 수 있는 권리를 보장합니다.
        본 페이지는 Google Play 정책에 따라 앱 외부에서 계정 삭제 요청을 진행할 수 있는 흐름을 안내합니다.
      </p>

      <h2>1. 앱 안에서 직접 삭제 (= 권장 흐름)</h2>
      <ol>
        <li>퀀트뷰 앱 실행</li>
        <li>하단 메뉴에서 <strong>내정보</strong> 탭 진입</li>
        <li><strong>계정 삭제</strong> 메뉴 선택</li>
        <li>안내 확인 후 삭제 진행</li>
      </ol>
      <p>
        삭제 요청 시점에 본인 확인을 위해 Google OAuth 재인증을 진행합니다. 인증 통과 후 즉시 계정 비활성화 +
        7일 이내 데이터 영구 삭제가 진행됩니다.
      </p>

      <h2>2. 카카오톡 채널을 통한 요청</h2>
      <p>앱 진입이 어려운 경우 카카오톡 채널을 통해 요청을 보내주세요.</p>
      <ul>
        <li>
          카카오톡 채널:{" "}
          <a href="https://pf.kakao.com/_CAIxbX" target="_blank" rel="noopener noreferrer">
            @quantapp
          </a>
        </li>
        <li>
          메시지 내용 (= 양식):
          <ul>
            <li>가입 이메일 주소</li>
            <li>계정 삭제 요청 사유 (선택)</li>
          </ul>
        </li>
      </ul>

      <h2>3. 이메일을 통한 요청</h2>
      <p>
        이메일로 요청하시는 경우 가입에 사용한 Google 이메일에서 다음 주소로 보내주세요.
      </p>
      <ul>
        <li>
          이메일: <a href="mailto:lbh939@gmail.com?subject=%5B%ED%80%80%ED%8A%B8%EB%B7%B0%5D%20%EA%B3%84%EC%A0%95%20%EC%82%AD%EC%A0%9C%20%EC%9A%94%EC%B2%AD">lbh939@gmail.com</a>
        </li>
        <li>제목: [퀀트뷰] 계정 삭제 요청</li>
      </ul>

      <h2>4. 삭제 범위</h2>
      <p>계정 삭제 요청이 완료되면 다음 데이터가 영구 삭제됩니다.</p>
      <ul>
        <li>회원 정보 (이메일, Google 계정 식별자, 프로필 사진 URL)</li>
        <li>AI 분석 히스토리 (종합 분석 · 물타기 분석 결과)</li>
        <li>포트폴리오 데이터 (보유 종목, 평균 단가, 수량)</li>
        <li>관심종목 + 사용자 폴더</li>
        <li>FCM 토큰 + 알림 설정</li>
        <li>텔레그램 chat_id (연동 시점)</li>
        <li>일별 사용량 기록</li>
      </ul>

      <h2>5. 보존되는 정보 (= 법령 정합)</h2>
      <p>다음 정보는 관련 법령에 따라 일정 기간 보관됩니다.</p>
      <ul>
        <li><strong>결제 기록</strong>: 5년 (전자상거래 등에서의 소비자 보호에 관한 법률)</li>
        <li><strong>로그인 기록</strong>: 3개월 (통신비밀보호법)</li>
        <li><strong>광고 시청 트랜잭션 기록</strong>: 6개월 (부정 이용 진단 흐름)</li>
      </ul>
      <p>법령 보존 기간 종료 후 즉시 영구 삭제됩니다.</p>

      <h2>6. 처리 기간</h2>
      <ul>
        <li>요청 접수: 24시간 이내 확인 응답</li>
        <li>계정 비활성화: 본인 확인 통과 즉시</li>
        <li>데이터 영구 삭제: 요청 접수 후 7일 이내</li>
      </ul>

      <h2>7. 주의 사항</h2>
      <ul>
        <li>계정 삭제 후에는 같은 데이터를 복구할 수 없습니다.</li>
        <li>같은 Google 계정으로 재가입은 가능하나, 옛 데이터는 가져올 수 없습니다.</li>
        <li>유료 구독 중인 경우 Google Play 콘솔에서 구독 해지를 먼저 진행해주세요.</li>
      </ul>

      <h2>8. 문의</h2>
      <p>계정 삭제 요청에 관한 문의는 다음 경로로 접수할 수 있습니다.</p>
      <ul>
        <li><strong>개인정보 보호책임자</strong>: 이병하</li>
        <li>이메일: <a href="mailto:lbh939@gmail.com">lbh939@gmail.com</a></li>
        <li>
          카카오톡 채널:{" "}
          <a href="https://pf.kakao.com/_CAIxbX" target="_blank" rel="noopener noreferrer">
            @quantapp
          </a>
        </li>
      </ul>
    </LegalLayout>
  );
}
