import Payload from "@/components/common/Payload";

const openSources: Payload = {
  title: "OPEN SOURCES",
  disable: false,
  list: [
    {
      title: {
        en: "vllm-project/vllm",
        ko: "vllm-project/vllm",
      },
      href: "https://github.com/vllm-project/vllm/issues?q=author%3AZerohertz%20OR%20reviewed-by%3AZerohertz%20",
      descriptions: [
        {
          content: {
            en: "Led comprehensive documentation modernization initiative by converting legacy Sphinx-style directives to MkDocs-compatible format, improving cross-referencing and API documentation linking.",
            ko: "기존 Sphinx 스타일 지시어를 MkDocs 호환 형식으로 변환하여 포괄적 문서 현대화 주도 및 교차 참조와 API 문서 링크 개선",
          },
        },
        {
          content: {
            en: "Resolved critical markdown rendering issues by implementing proper list indentation configuration in `pymarkdown`, enhancing documentation readability for MkDocs-based system.",
            ko: "`pymarkdown`에서 적절한 목록 들여쓰기 구성 구현을 통한 중요 마크다운 렌더링 문제 해결 및 MkDocs 기반 시스템의 문서 가독성 향상",
          },
        },
        {
          content: {
            en: "Updated deprecation message for `--enable-reasoning` argument, correcting version reference from non-existent `v0.8.6` to accurate `v0.9.0` deprecation timeline.",
            ko: "`--enable-reasoning` 인수의 deprecation 메시지 업데이트, 존재하지 않는 `v0.8.6`에서 정확한 `v0.9.0` deprecation 타임라인으로 버전 참조 수정",
          },
        },
        {
          content: {
            en: "Conducted comprehensive performance analysis comparing [v0 vs. v1 engines](https://github.com/vllm-project/vllm/issues/17540) and [version stability](https://github.com/vllm-project/vllm/issues/18619) (`v0.8.4` vs. `v0.8.5.post1`) across multi-GPU environments, providing detailed technical documentation for issue reproduction.",
            ko: "멀티 GPU 환경에서 [v0 vs. v1 엔진](https://github.com/vllm-project/vllm/issues/17540) 및 [버전 안정성](https://github.com/vllm-project/vllm/issues/18619) (`v0.8.4` vs. `v0.8.5.post1`) 비교 포괄적 성능 분석 수행 및 이슈 재현을 위한 상세 기술 문서 제공",
          },
        },
      ],
    },
    {
      title: {
        en: "fastapi/fastapi",
        ko: "fastapi/fastapi",
      },
      href: "https://github.com/fastapi/fastapi/issues?q=author%3AZerohertz%20OR%20reviewed-by%3AZerohertz%20",
      descriptions: [
        {
          content: {
            en: "Reviewed and enhanced the Korean FastAPI documentation by addressing missing content and improving formatting.",
            ko: "누락된 콘텐츠 해결 및 형식 개선을 통한 한국어 FastAPI 문서 검토와 향상",
          },
        },
        {
          content: {
            en: "Fixed issues in FastAPI docs by updating code for the latest version.",
            ko: "최신 버전 코드 업데이트를 통한 FastAPI 문서 문제 수정",
          },
        },
      ],
    },
    {
      title: {
        en: "microsoft/DeepSpeed",
        ko: "microsoft/DeepSpeed",
      },
      href: "https://github.com/microsoft/DeepSpeed/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: {
            en: "Remove duplicate declaration of pandas in `Dockerfile`.",
            ko: "`Dockerfile`에서 pandas 중복 선언 제거",
          },
        },
      ],
    },
    {
      title: {
        en: "bytedance/SPTSv2",
        ko: "bytedance/SPTSv2",
      },
      href: "https://github.com/bytedance/SPTSv2/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: {
            en: "Enhanced environment compatibility by removing `python==3.7` from `requirements.txt`, enabling broader setup compatibility for SPTSv2.",
            ko: "`requirements.txt`에서 `python==3.7` 제거를 통한 환경 호환성 향상 및 SPTSv2의 광범위한 설정 호환성 지원",
          },
        },
        {
          content: {
            en: "Corrected variable type mismatch by aligning the `depths` variable to a list type for consistency with its default value, enhancing code clarity and reducing runtime errors.",
            ko: "기본값 일치를 위한 `depths` 변수 목록 타입 정렬로 변수 타입 불일치 수정 및 코드 명확성 향상과 런타임 오류 감소",
          },
        },
        {
          content: {
            en: "Generalized configuration by implementing customizable parameters like `max_length` in data loading and model setup, improving SPTSv2 adaptability for varied use cases.",
            ko: "데이터 로딩 및 모델 설정에서 `max_length` 등 사용자 지정 매개변수 구현으로 구성 일반화 및 다양한 사용 사례에 대한 SPTSv2 적응성 향상",
          },
        },
        {
          content: {
            en: "Optimized memory usage in inference by adding the `@torch.no_grad` decorator in `predict.py`, significantly reducing GPU memory requirements.",
            ko: "`predict.py`에 `@torch.no_grad` 데코레이터 추가로 추론 메모리 사용량 최적화 및 GPU 메모리 요구사항 대폭 감소",
          },
        },
        {
          content: {
            en: "Resolved `IndexError` during training with customized data by fixing shape mismatches in GT data, ensuring stability in data handling.",
            ko: "GT 데이터 형태 불일치 수정으로 사용자 정의 데이터 학습 시 `IndexError` 해결 및 데이터 처리 안정성 보장",
          },
        },
        {
          content: {
            en: "Addressed tensor dimension errors and generalized prediction, evaluation, and visualization processes.",
            ko: "텐서 차원 오류 해결 및 예측, 평가, 시각화 프로세스 일반화",
          },
        },
      ],
    },
    {
      title: {
        en: "streamlit/streamlit",
        ko: "streamlit/streamlit",
      },
      href: "https://github.com/streamlit/streamlit/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: {
            en: "Identified and verified a dependency mismatch with `Image.Resampling.BILINEAR` (`Pillow >=9.1.0`).",
            ko: "`Image.Resampling.BILINEAR` (`Pillow >=9.1.0`) 종속성 불일치 식별 및 검증",
          },
        },
        {
          content: {
            en: "Conducted version testing and recommended an update to Streamlit's requirements, improving reliability for developers by preventing compatibility issues.",
            ko: "버전 테스트 수행 및 Streamlit 요구사항 업데이트 추천으로 호환성 문제 방지 및 개발자 신뢰성 향상",
          },
        },
      ],
    },
    {
      title: {
        en: "next-theme/hexo-theme-next",
        ko: "next-theme/hexo-theme-next",
      },
      href: "https://github.com/next-theme/hexo-theme-next/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: {
            en: "Added a `motion.duration` parameter in [Hexo](https://github.com/hexojs)'s NexT theme `_config.yml`, enabling flexible configuration of motion animation duration.",
            ko: "[Hexo](https://github.com/hexojs) NexT 테마 `_config.yml`에 `motion.duration` 매개변수 추가로 모션 애니메이션 지속 시간 유연한 구성 지원",
          },
        },
        {
          content: {
            en: "Modified `source/js/motion.js` to retrieve `motion.duration` dynamically, with a default value fallback for robustness.",
            ko: "`source/js/motion.js` 수정으로 `motion.duration` 동적 검색 및 강건성을 위한 기본값 폴백 제공",
          },
        },
      ],
    },
    {
      title: {
        en: "kubernetes/website",
        ko: "kubernetes/website",
      },
      href: "https://github.com/kubernetes/website/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: {
            en: "Contributed minor wording refinements to improve grammatical accuracy.",
            ko: "문법적 정확성 향상을 위한 소소한 문구 개선 기여",
          },
        },
      ],
    },
    {
      title: {
        en: "Technical Blog",
        ko: "Technical Blog",
      },
      href: "https://zerohertz.github.io/",
      descriptions: [
        {
          content: {
            en: "Customized a technical blog based on the Hexo NexT theme to document and share solutions to challenges encountered during personal learning and professional work.",
            ko: "Hexo NexT 테마 기반 기술 블로그 커스터마이징을 통해 개인 학습 및 업무 문제 해결책 문서화와 공유",
          },
        },
        {
          content: {
            en: "Achieved 1,500+ MAU and 2,600+ monthly page views by consistently writing 200+ posts since 2018.",
            ko: "2018년부터 끊임없이 200여 편의 글 작성으로 1,500명 이상 MAU 및 월 2,600회 이상 페이지 뷰 달성",
          },
        },
      ],
    },
    {
      title: {
        en: "Zerohertz/awesome-jmy",
        ko: "Zerohertz/awesome-jmy",
      },
      href: "https://github.com/Zerohertz/awesome-jmy",
      descriptions: [
        {
          content: {
            en: "Implemented an automated data ingestion and preprocessing pipeline using GitHub Actions to enhance data workflow efficiency.",
            ko: "GitHub Actions 기반 자동화된 데이터 수집 및 전처리 파이프라인 구현으로 데이터 워크플로우 효율성 향상",
          },
        },
        {
          content: {
            en: "Delivered insights to technical research personnel (전문연구요원) through data visualizations created with Matplotlib, supporting decision-making from multiple analytical perspectives.",
            ko: "Matplotlib 기반 데이터 시각화를 통한 전문연구요원 인사이트 제공 및 다양한 분석 관점 기반 의사결정 지원",
          },
        },
      ],
    },
    {
      title: {
        en: "Zerohertz/awesome-sgy",
        ko: "Zerohertz/awesome-sgy",
      },
      href: "https://github.com/Zerohertz/awesome-sgy",
      descriptions: [
        {
          content: {
            en: "Implemented an automated data ingestion and preprocessing pipeline using GitHub Actions to enhance data workflow efficiency.",
            ko: "GitHub Actions 기반 자동화된 데이터 수집 및 전처리 파이프라인 구현으로 데이터 워크플로우 효율성 향상",
          },
        },
        {
          content: {
            en: "Delivered insights to skilled industrial personnel (산업기능요원) through data visualizations created with Matplotlib, supporting decision-making from multiple analytical perspectives.",
            ko: "Matplotlib 기반 데이터 시각화를 통한 산업기능요원 인사이트 제공 및 다양한 분석 관점 기반 의사결정 지원",
          },
        },
      ],
    },
  ],
};

export default openSources;
