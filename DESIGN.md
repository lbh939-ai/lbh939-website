---
name: lbh939
description: 직접 쓰려고 만든 앱이 주인공인, 애플 제품 페이지 같은 1인 개발자 사이트
colors:
  cobalt: "#1858d8"
  cobalt-deep: "#1449b8"
  cobalt-on-dark: "#7aa2ff"
  paper: "#fcfcfd"
  sheet-gray: "#f3f4f7"
  card-white: "#fdfdfe"
  hairline: "#d8dbe2"
  ink: "#16181d"
  ink-soft: "#5f6470"
  mute-icon: "#8a8f9b"
  night: "#0b0d12"
  night-soft-text: "#a3a8b4"
  graphite-device: "#1c1f27"
typography:
  display:
    fontFamily: "Wanted Sans Variable, Wanted Sans, -apple-system, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "46px / 68px / 80px"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Wanted Sans Variable, Wanted Sans, -apple-system, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "34px / 48px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  manifesto:
    fontFamily: "Wanted Sans Variable, Wanted Sans, -apple-system, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "27px / 38px / 44px"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Wanted Sans Variable, Wanted Sans, -apple-system, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "24px / 30px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Wanted Sans Variable, Wanted Sans, -apple-system, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "17px / 21px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Wanted Sans Variable, Wanted Sans, -apple-system, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "16px / 18px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Wanted Sans Variable, Wanted Sans, -apple-system, Apple SD Gothic Neo, Noto Sans KR, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  wordmark:
    fontFamily: "Archivo, sans-serif"
    fontWeight: 800
    letterSpacing: "-0.04em"
rounded:
  icon: "22%"
  list: "18px"
  tile: "28px"
  sheet: "36px"
  sheet-wide: "48px"
  device: "14cqw"
  pill: "9999px"
spacing:
  gutter: "16px"
  gutter-wide: "24px"
  section: "80px"
  section-wide: "112px"
  title-gap: "48px"
  title-gap-wide: "64px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.cobalt}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.card-white}"
  app-tile-light:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "48px 32px 0"
  app-tile-dark:
    backgroundColor: "{colors.night}"
    textColor: "{colors.sheet-gray}"
    rounded: "{rounded.tile}"
    padding: "48px 32px 0"
  list-group:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.list}"
    padding: "12px 16px"
  status-chip:
    backgroundColor: "rgb(24 88 216 / 0.08)"
    textColor: "{colors.cobalt}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    typography: "{typography.label}"
  nav-bar:
    backgroundColor: "rgb(11 13 18 / 0.78)"
    textColor: "{colors.sheet-gray}"
    height: "52px"
---

# Design System: lbh939

## Overview

**Creative North Star: "직접 쓰는 도구의 진열대"**

애플 홈페이지처럼, 넓은 흰 바탕 위에 실제 앱 화면을 담은 폰이 주인공으로 서 있는 사이트입니다. 글은 짧고 크게, 색은 코발트 하나만 씁니다. 화면은 빽빽하지 않고, 한 구역에 한 가지 이야기만 합니다.

움직임은 스크롤이 이끕니다. 첫 화면은 멈춘 채 작아지며 물러나고, 둥근 회색 시트가 위를 덮고, 선언문이 한 단어씩 또렷해지고, 어두운 무대에서 코발트 선이 그려지며 만든 것이 하나씩 켜집니다. 모든 움직임은 CSS만으로 만들며, "동작 줄이기" 사용자나 스크롤 연동을 지원하지 않는 브라우저에서는 완성된 모습이 그대로 보입니다.

밝은 구역(흰색·연회색)과 어두운 구역(코발트가 섞인 거의 검정)이 번갈아 나오며 리듬을 만듭니다. 사진은 실제 앱 화면과, 주인이 인스타에 올린 실제 러닝 사진만 씁니다. 숫자는 지어내지 않습니다.

**Key Characteristics:**
- 코발트 한 색 + 코발트가 살짝 섞인 회색·검정
- 원티드 산스 하나로 모든 한글, Archivo 는 bbing_he 로고에만
- 실제 앱 화면을 담은 흑연색 둥근 폰이 제품 사진 역할
- 알약 모양 버튼, 크게 둥근 타일(28px), 위가 둥근 시트(36/48px)
- 스크롤이 이야기를 진행시키는 CSS 전용 움직임, 줄이기 설정이면 정지 화면

## Colors

코발트 하나와, 그 코발트가 아주 조금 섞인 흰색·회색·검정으로 이루어진 팔레트입니다. 모든 값은 `app/globals.css` 의 CSS 변수가 기준이며, 다크 모드 값도 거기 있습니다.

### Primary
- **러닝뷰 코발트** (`--accent` / `--accent-fill`): 러닝뷰 앱 아이콘에서 뽑은 파랑. 주 버튼 바탕, 링크 글자, 선택 영역, 포커스 테두리, 텔레그램 봇 아이콘 바탕. 다크 모드에서 글자·링크용은 밝은 코발트로 바뀌고, 버튼 바탕은 그대로입니다.
- **짙은 코발트** (`--accent-hover`): 버튼·링크에 마우스를 올렸을 때.
- **밤 코발트** (`--accent-on-dark`): 어두운 구역 위의 링크, 만든 앱 코스의 선, 머리글 아래 진행 막대. 어두운 바탕에서 또렷하게 보이는 밝은 코발트.

### Neutral
- **종이 흰색** (`--background`): 기본 페이지 바탕 (첫 화면, 만드는 중, 연락).
- **시트 회색** (`--section-bg`): 선언문·출시한 앱·소개 구역 바탕, 링크 페이지 전체 바탕, 푸터. 어두운 구역 위 글자색(`--inverse-fg`)과 같은 값입니다.
- **카드 흰색** (`--card-bg`): 밝은 앱 타일, 링크 페이지의 묶음 목록.
- **가는 선 회색** (`--card-border`): 아이콘 테두리, 목록 구분선, 약관 표. 대부분 60% 이하 투명도로 씁니다.
- **먹색** (`--foreground`): 본문과 제목 글자.
- **옅은 먹색** (`--secondary`): 한 줄 소개, 설명 글.
- **아이콘 회색** (`--tertiary`): 목록 끝 화살표 같은 장식 전용. 작은 글자 대비가 모자라 글씨에는 쓰지 않습니다.
- **밤색** (`--inverse-bg`): 만든 앱 코스 무대, 어두운 앱 타일, 러닝뷰 링크 카드, 머리글(78% 반투명).
- **밤 위 옅은 글자** (`--inverse-secondary`): 어두운 구역의 설명 글.
- **흑연 폰** (`--device`): 폰 테두리와 다이내믹 아일랜드. 어두운 타일 위에서도 보이게 밤색보다 밝습니다.

### Named Rules
**The One Cobalt Rule.** 강조색은 코발트 한 가족(코발트·짙은 코발트·밤 코발트)뿐입니다. 두 번째 강조색을 들이지 않습니다.

**The Tinted Neutral Rule.** 흰색·회색·검정은 모두 코발트가 살짝 섞인 값입니다. 순수 `#000`·`#fff` 는 쓰지 않습니다.

**The Single-Hue Glow Rule.** 빛 번짐은 선언문 뒤의 코발트 두 겹 원형 그라데이션 하나뿐입니다. 코발트와 밤 코발트만 쓰고, 흐림 필터 없이 그라데이션만으로 만듭니다.

## Typography

**Display Font:** Wanted Sans Variable (with Apple SD Gothic Neo, Noto Sans KR)
**Body Font:** Wanted Sans Variable (같은 글꼴)
**Logo Font:** Archivo (bbing_he 로고 전용)

**Character:** 원티드 산스 하나로 제목부터 본문까지 모두 씁니다. 크기와 굵기 차이만으로 위계를 만들고, 큰 제목은 자간을 좁혀 단단하게 보이게 합니다. 한글은 낱말 단위로 줄을 바꾸고(`word-break: keep-all`), 제목은 줄 길이를 고르게 맞춥니다.

### Hierarchy
- **Display** (700, 46 → 68 → 80px, 1.06): 첫 화면 제목 "직접 쓰려고 만듭니다." 한 곳. 소개 제목(40 → 56px)도 같은 결.
- **Headline** (700, 34 → 48px, 1.1): 구역 제목. 아래에 한 줄 소개(Lead)를 붙여 가운데 정렬.
- **Manifesto** (600, 27 → 38 → 44px, 1.45): 선언문 문장. 앱 이름 앞에 그 앱 아이콘이 글자 크기로 붙습니다.
- **Title** (700, 24 → 30px): 앱 이름, 만드는 중인 항목 이름. 앱 타일의 앱 이름은 32 → 40px.
- **Lead** (400, 17 → 21px, 1.5): 제목 아래 한 줄 소개, 버튼 글자(600, 17px).
- **Body** (400, 16 → 19px, 1.6~1.65): 설명 문단. 옅은 먹색.
- **Label** (600, 13px): 상태 칩("개발 중" 등), 머리글 메뉴(12 → 13px).

### Named Rules
**The Tight-But-Not-Crushed Rule.** 큰 제목의 자간은 -0.04em 까지만 좁힙니다. 제목 기본은 -0.03em, 본문은 -0.01em.

**The Logo-Only Archivo Rule.** Archivo 는 bbing_he 로고(모양 A 똑바른 굵은 소문자 800 / 모양 C 기울인 좁은 대문자 900)에만 씁니다. 사이트 글자와 공유 이미지의 한글은 원티드 산스입니다.

**로고 색 세트.** 로고는 모양(A/C)은 그대로 두고 색 세트만 그때그때 바꿔 씁니다: dark(기본), light, blue, neon, gradient (`app/projects.ts` 의 `LOGO`, 색 값은 `components/Wordmark.tsx`). 사용자가 직접 고른 인스타용 변형이라 neon·gradient 는 사이트 색 규칙 밖이어도 로고 안에서만 허용합니다. 사이트 본문과 공유 이미지는 dark 입니다.

## Layout

본문 폭은 최대 1024px, 첫 화면 제목 묶음은 980px, 한 줄 소개는 600px 입니다. 좌우 여백은 휴대폰 16px, 넓은 화면 24px. 구역 위아래 여백은 80px(휴대폰) → 112px(넓은 화면), 구역 제목 아래 간격은 48 → 64px 입니다.

첫 화면과 구역 제목은 가운데 정렬이고, 아래로 갈수록 변화를 줍니다: 앱 타일은 두 칸(밝은 것 하나, 어두운 것 하나), 만드는 중은 왼쪽 점선 길을 따라 내려가는 목록, 소개는 가운데 글 아래에 사진 벽(3줄 × 6칸, 4:5)이 옵니다. 사진은 날짜순으로 세로 3장씩 채워져 왼쪽이 2023년, 오른쪽이 최근입니다. 휴대폰에서는 모든 구역이 한 줄로 쌓입니다.

머리글 높이는 52px 이고, 스크롤 무대(첫 화면, 선언문, 만든 앱 코스)는 그 아래에 붙어 멈춥니다. 무대 길이는 선언문 200svh, 만든 앱 코스 320svh 입니다. 첫 화면이 멈춰 있고 뒤 구역이 위를 덮는 구조라, 뒤따르는 구역은 반드시 바탕색을 가져야 합니다.

링크 페이지(`/links`)는 휴대폰 기준 한 줄 세로 배치(최대 440px)이고, 아이폰 설정 화면처럼 묶인 목록을 씁니다.

## Elevation & Depth

기본은 평평합니다. 깊이는 밝은 구역과 어두운 구역의 교대, 그리고 겹쳐 올라오는 시트로 만듭니다. 그림자는 실제 물건처럼 보여야 하는 곳에만 씁니다.

### Shadow Vocabulary
- **제품 그림자** (`--shadow-product`): 실제 앱 화면을 담은 폰에만.
- **시트 윗그림자** (`box-shadow: 0 -16px 48px rgb(11 13 18 / 0.07)`): 첫 화면 위로 올라오는 선언문 시트의 윗가장자리.
- **아이콘 그림자** (`box-shadow: 0 4px 14px rgb(11 13 18 / 0.12)`): 선언문 속 앱 아이콘.
- **머리글 유리**: 78% 밤색 + 배경 흐림(`backdrop-blur-xl`, 채도 1.8배).

### Named Rules
**The Real-Object Shadow Rule.** 그림자는 폰·아이콘처럼 실제 물건에만 씁니다. 타일과 목록은 바탕색 차이로 구분하고 그림자를 주지 않습니다(`--shadow-card: none`).

## Shapes

크게 둥근 모서리와 알약 모양이 기본입니다. 버튼·칩은 완전한 알약, 앱 아이콘은 폭의 22%, 링크 페이지 목록 18px, 러닝뷰 링크 카드 26px, 앱 타일 28px, 소개 사진 벽 10px(넓은 화면 14px, 사이 간격 6 → 10px), 선언문 시트는 위만 36px(넓은 화면 48px) 둥급니다. 폰은 자기 폭에 비례해서 둥글어(테두리 14cqw, 화면 11cqw) 작아져도 같은 비율을 지킵니다. 로고는 동그라미 안에 들어갑니다.

선은 거의 쓰지 않습니다. 목록 구분선과 아이콘 테두리 정도이며, 약관 안내 상자도 한쪽 굵은 줄 대신 옅은 바탕 + 얇은 테두리입니다.

## Components

### Buttons
탭하고 싶은 알약 모양, 44px 이상 높이.
- **Shape:** 완전한 알약 (`rounded-full`), 좌우 24px, 글자 17px 600.
- **Primary:** 코발트 바탕 + 흰 글자. 한 화면의 대표 행동에만 ("앱 둘러보기", "무료로 받기", 첫 연락 버튼).
- **Hover / Active:** 짙은 코발트로, 누르면 95% 로 살짝 작아짐. 포커스는 2px 코발트 테두리(3px 띄움).
- **Secondary:** 코발트 테두리 + 코발트 글자, 올리면 코발트로 채워짐. 연락 구역의 나머지 버튼.
- **Text link:** 코발트 글자 + 오른쪽 작은 화살표(`ChevronRight`), 올리면 밑줄. "연락하기", "자세히 보기". 어두운 구역에선 밤 코발트.

### Chips
- **Style:** 코발트 8% 바탕 + 코발트 글자, 13px 600, 알약 모양. 만드는 중인 항목의 상태("개발 중", "테스트 중")에만.

### Cards / Containers
- **앱 타일:** 28px 둥근 큰 타일, 밝은 것(카드 흰색)과 어두운 것(밤색) 한 쌍. 아이콘 → 이름 → 한 줄 → 버튼, 아래에 실제 앱 화면 폰의 윗부분이 올라와 잘려 있습니다. 그림자 없음.
- **묶음 목록 (링크 페이지):** 18px 둥근 카드 흰색 목록, 줄마다 가는 구분선, 끝에 회색 화살표, 줄 높이 56px 이상. 목록 제목은 목록 바로 위 13px 옅은 먹색.

### Navigation
- **머리글:** 항상 짙은 반투명 막대(52px), 왼쪽 "lbh939", 가운데 구역 바로가기 4개(휴대폰에서도 보임), 오른쪽 밝게/어둡게 버튼. 아래 가장자리에 스크롤 진행 막대(밤 코발트 2px).
- **푸터:** 시트 회색 바탕, 약관 링크 3개와 저작권, 14/12px 옅은 먹색.

### 폰 (Phone)
실제 앱 화면을 담은 흑연색 폰. 화면 위에 앱과 같은 흰 상태 표시줄 자리와 다이내믹 아일랜드가 있고, 제품 그림자를 받습니다. 첫 화면에선 두 대가 엇갈려 서 있고(하나는 조금 아래), 앱 타일에선 위쪽만 보이는 `peek` 형태로 씁니다. 가짜 화면을 만들지 않고 `public/shots/` 의 실제 캡처만 넣습니다.

### 만든 앱 코스 (BuildRoute)
사이트의 서명 동작. 밤색 무대에 고정된 채 스크롤하면 코발트 곡선이 그려지고, 선이 20%·40%… 지점에 닿을 때마다 만든 것(아이콘 + 이름 + 만든 이유)이 하나씩 켜지며 위의 큰 숫자가 0에서 5로 오릅니다. 넓은 화면은 가로 물결, 휴대폰은 왼쪽을 따라 내려가는 세로 코스입니다. 코스는 "만드는 중" 구역의 코발트 점선 길로 이어집니다.

### 스크롤 움직임
- 첫 화면: 들어올 때 제목·소개·버튼·폰이 차례로 떠오름(0.9초, `cubic-bezier(0.16, 1, 0.3, 1)`), 스크롤하면 84% 로 작아지며 사라짐.
- 선언문: 단어가 52% 흐림에서 또렷해짐(켜지기 전에도 읽히는 대비), 뒤에서 코발트 빛이 커지며 돎.
- 앱 아이콘은 크게 날아와 제자리에 앉고, 목록은 아래에서 떠오르며, 소개 사진은 달리는 사진 한 장이 화면을 가득 채웠다가(4배) 스크롤하면 뒤로 물러나며 3줄 사진 벽이 되고, 벽이 화면보다 넓으면(휴대폰·태블릿) 옆으로 흘러 최근 사진까지 보여 준 뒤 "인스타그램에서 더 보기"가 떠오릅니다. 벽 사진은 무대 밖에 가려져 있으므로 구역이 가까워지면 미리 받습니다(`components/LoadEarly.tsx`).

## Do's and Don'ts

### Do:
- **Do** 강조색은 코발트 한 가족만 쓰고, 어두운 바탕 위 글자·선은 밤 코발트로 바꿉니다.
- **Do** 실제 앱 화면은 흑연색 폰에 담아 보여 줍니다.
- **Do** 밝은 구역과 어두운(밤색) 구역을 번갈아 두어 리듬을 만듭니다.
- **Do** 모든 스크롤 움직임은 CSS 로, "동작 줄이기"와 미지원 브라우저에서는 완성된 모습이 그대로 보이게 합니다.
- **Do** 누를 수 있는 곳은 44px 이상, 글자는 WCAG AA 대비 이상으로 둡니다(아이콘 회색은 글씨에 쓰지 않음).
- **Do** 버튼은 알약, 타일은 28px, 폰은 자기 폭 비례로 둥글게 합니다.

### Don't:
- **Don't** 보라·파랑이 섞인 여러 색 그라데이션 빛을 쓰지 않습니다(코발트 한 색 선언문 빛만 허용).
- **Don't** Inter, Pretendard, 시스템 글꼴을 제목 글꼴로 쓰지 않습니다. 한글은 원티드 산스, 로고만 Archivo.
- **Don't** 같은 크기 카드 세 개를 한 줄에 늘어놓지 않습니다.
- **Don't** 제목 위에 작은 라벨(눈썹 글)을 달지 않습니다.
- **Don't** 카드나 안내 상자에 한쪽 굵은 색 줄을 긋지 않습니다(만드는 중 구역의 점선 길은 줄이 아니라 길입니다).
- **Don't** 순수 `#000`·`#fff` 를 쓰지 않습니다.
- **Don't** 화면에 보이는 글에 긴 줄표(—)를 쓰지 않습니다(약관 문서만 예외).
- **Don't** 러닝 기록을 중심 소재로 쓰거나, 이용자 수 같은 숫자를 지어내지 않습니다.
