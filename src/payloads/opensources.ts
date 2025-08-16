import Payload from "@/components/common/Payload";

const openSources: Payload = {
  title: "OPEN SOURCES",
  disable: false,
  list: [
    {
      title: {
        ko: "vllm-project/vllm",
        en: "vllm-project/vllm",
      },
      href: "https://github.com/vllm-project/vllm/issues?q=author%3AZerohertz%20OR%20reviewed-by%3AZerohertz%20",
      descriptions: [
        {
          content: {
            ko: "기존 Sphinx 스타일 지시어를 MkDocs 호환 형식으로 변환하여 포괄적인 문서 현대화 이니셔티브를 주도하고, 교차 참조 및 API 문서 링크를 개선했습니다.",
            en: "Led comprehensive documentation modernization initiative by converting legacy Sphinx-style directives to MkDocs-compatible format, improving cross-referencing and API documentation linking.",
          },
        },
        {
          content: {
            ko: "`pymarkdown`에서 적절한 목록 들여쓰기 구성을 구현하여 중요한 마크다운 렌더링 문제를 해결하고, MkDocs 기반 시스템의 문서 가독성을 향상시켰습니다.",
            en: "Resolved critical markdown rendering issues by implementing proper list indentation configuration in `pymarkdown`, enhancing documentation readability for MkDocs-based system.",
          },
        },
        {
          content: {
            ko: "`--enable-reasoning` 인수의 deprecation 메시지를 업데이트하여 존재하지 않는 `v0.8.6`에서 정확한 `v0.9.0` deprecation 타임라인으로 버전 참조를 수정했습니다.",
            en: "Updated deprecation message for `--enable-reasoning` argument, correcting version reference from non-existent `v0.8.6` to accurate `v0.9.0` deprecation timeline.",
          },
        },
        {
          content: {
            ko: "멀티 GPU 환경에서 [v0 vs. v1 엔진](https://github.com/vllm-project/vllm/issues/17540) 및 [버전 안정성](https://github.com/vllm-project/vllm/issues/18619) (`v0.8.4` vs. `v0.8.5.post1`)을 비교하는 포괄적인 성능 분석을 수행하고, 엔진 최적화 및 이슈 재현을 위한 상세한 기술 문서를 제공했습니다.",
            en: "Conducted comprehensive performance analysis comparing [v0 vs. v1 engines](https://github.com/vllm-project/vllm/issues/17540) and [version stability](https://github.com/vllm-project/vllm/issues/18619) (`v0.8.4` vs. `v0.8.5.post1`) across multi-GPU environments, providing detailed technical documentation for engine optimization and issue reproduction.",
          },
        },
      ],
    },
    {
      title: {
        ko: "fastapi/fastapi",
        en: "fastapi/fastapi",
      },
      href: "https://github.com/fastapi/fastapi/issues?q=author%3AZerohertz%20OR%20reviewed-by%3AZerohertz%20",
      descriptions: [
        {
          content: {
            ko: "누락된 콘텐츠를 해결하고 형식을 개선하여 한국어 FastAPI 문서를 검토하고 향상시켰습니다.",
            en: "Reviewed and enhanced the Korean FastAPI documentation by addressing missing content and improving formatting.",
          },
        },
        {
          content: {
            ko: "최신 버전에 맞게 코드를 업데이트하여 FastAPI 문서의 문제를 수정했습니다.",
            en: "Fixed issues in FastAPI docs by updating code for the latest version.",
          },
        },
      ],
    },
    {
      title: {
        ko: "microsoft/DeepSpeed",
        en: "microsoft/DeepSpeed",
      },
      href: "https://github.com/microsoft/DeepSpeed/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: {
            ko: "`Dockerfile`에서 pandas의 중복 선언을 제거했습니다.",
            en: "Remove duplicate declaration of pandas in `Dockerfile`.",
          },
        },
      ],
    },
    {
      title: {
        ko: "bytedance/SPTSv2",
        en: "bytedance/SPTSv2",
      },
      href: "https://github.com/bytedance/SPTSv2/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: {
            ko: "`requirements.txt`에서 `python==3.7`을 제거하여 환경 호환성을 향상시키고 SPTSv2의 광범위한 설정 호환성을 가능하게 했습니다.",
            en: "Enhanced environment compatibility by removing `python==3.7` from `requirements.txt`, enabling broader setup compatibility for SPTSv2.",
          },
        },
        {
          content: {
            ko: "`depths` 변수를 기본값과 일치하도록 목록 타입으로 정렬하여 변수 타입 불일치를 수정하고, 코드 명확성을 향상시키며 런타임 오류를 줄였습니다.",
            en: "Corrected variable type mismatch by aligning the `depths` variable to a list type for consistency with its default value, enhancing code clarity and reducing runtime errors.",
          },
        },
        {
          content: {
            ko: "데이터 로딩 및 모델 설정에서 `max_length`와 같은 사용자 지정 매개변수를 구현하여 구성을 일반화하고, 다양한 사용 사례에 대한 SPTSv2의 적응성을 향상시켰습니다.",
            en: "Generalized configuration by implementing customizable parameters like `max_length` in data loading and model setup, improving SPTSv2 adaptability for varied use cases.",
          },
        },
        {
          content: {
            ko: "`predict.py`에 `@torch.no_grad` 데코레이터를 추가하여 추론 시 메모리 사용량을 최적화하고 GPU 메모리 요구사항을 크게 줄였습니다.",
            en: "Optimized memory usage in inference by adding the `@torch.no_grad` decorator in `predict.py`, significantly reducing GPU memory requirements.",
          },
        },
        {
          content: {
            ko: "GT 데이터의 형태 불일치를 수정하여 사용자 정의 데이터로 학습 시 `IndexError`를 해결하고 데이터 처리의 안정성을 보장했습니다.",
            en: "Resolved `IndexError` during training with customized data by fixing shape mismatches in GT data, ensuring stability in data handling.",
          },
        },
        {
          content: {
            ko: "텐서 차원 오류를 해결하고 예측, 평가 및 시각화 프로세스를 일반화했습니다.",
            en: "Addressed tensor dimension errors and generalized prediction, evaluation, and visualization processes.",
          },
        },
      ],
    },
    {
      title: {
        ko: "streamlit/streamlit",
        en: "streamlit/streamlit",
      },
      href: "https://github.com/streamlit/streamlit/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: {
            ko: "`Image.Resampling.BILINEAR` (`Pillow >=9.1.0`)와의 종속성 불일치를 식별하고 검증했습니다.",
            en: "Identified and verified a dependency mismatch with `Image.Resampling.BILINEAR` (`Pillow >=9.1.0`).",
          },
        },
        {
          content: {
            ko: "버전 테스트를 수행하고 Streamlit의 요구사항 업데이트를 추천하여 호환성 문제를 방지하고 개발자들의 신뢰성을 향상시켰습니다.",
            en: "Conducted version testing and recommended an update to Streamlit's requirements, improving reliability for developers by preventing compatibility issues.",
          },
        },
      ],
    },
    {
      title: {
        ko: "next-theme/hexo-theme-next",
        en: "next-theme/hexo-theme-next",
      },
      href: "https://github.com/next-theme/hexo-theme-next/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: {
            ko: "[Hexo](https://github.com/hexojs)의 NexT 테마 `_config.yml`에 `motion.duration` 매개변수를 추가하여 모션 애니메이션 지속 시간의 유연한 구성을 가능하게 했습니다.",
            en: "Added a `motion.duration` parameter in [Hexo](https://github.com/hexojs)'s NexT theme `_config.yml`, enabling flexible configuration of motion animation duration.",
          },
        },
        {
          content: {
            ko: "`source/js/motion.js`를 수정하여 `motion.duration`을 동적으로 검색하도록 하고, 강건성을 위해 기본값 폴백을 제공했습니다.",
            en: "Modified `source/js/motion.js` to retrieve `motion.duration` dynamically, with a default value fallback for robustness.",
          },
        },
      ],
    },
    {
      title: {
        ko: "kubernetes/website",
        en: "kubernetes/website",
      },
      href: "https://github.com/kubernetes/website/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: {
            ko: "문법적 정확성을 향상시키기 위해 소소한 문구 개선에 기여했습니다.",
            en: "Contributed minor wording refinements to improve grammatical accuracy.",
          },
        },
      ],
    },
    {
      title: {
        ko: "Technical Blog",
        en: "Technical Blog",
      },
      href: "https://zerohertz.github.io/",
      descriptions: [
        {
          content: {
            ko: "Hexo NexT 테마를 기반으로 기술 블로그를 커스터마이즈하여 개인 학습과 업무 중 마주한 문제에 대한 해결책을 문서화하고 공유했습니다.",
            en: "Customized a technical blog based on the Hexo NexT theme to document and share solutions to challenges encountered during personal learning and professional work.",
          },
        },
        {
          content: {
            ko: "2018년부터 꺼임없이 200여 편의 글을 작성하여 1,500명 이상의 MAU와 월 2,600회 이상의 페이지 비유를 달성했습니다.",
            en: "Achieved 1,500+ MAU and 2,600+ monthly page views by consistently writing 200+ posts since 2018.",
          },
        },
      ],
    },
    {
      title: {
        ko: "Zerohertz/awesome-jmy",
        en: "Zerohertz/awesome-jmy",
      },
      href: "https://github.com/Zerohertz/awesome-jmy",
      descriptions: [
        {
          content: {
            ko: "GitHub Actions를 사용하여 자동화된 데이터 수집 및 전처리 파이프라인을 구현하여 데이터 워크플로우 효율성을 향상시켰습니다.",
            en: "Implemented an automated data ingestion and preprocessing pipeline using GitHub Actions to enhance data workflow efficiency.",
          },
        },
        {
          content: {
            ko: "Matplotlib로 생성한 데이터 시각화를 통해 전문연구요원에게 인사이트를 제공하고, 다양한 분석 관점에서 의사결정을 지원했습니다.",
            en: "Delivered insights to technical research personnel (전문연구요원) through data visualizations created with Matplotlib, supporting decision-making from multiple analytical perspectives.",
          },
        },
      ],
    },
    {
      title: {
        ko: "Zerohertz/awesome-sgy",
        en: "Zerohertz/awesome-sgy",
      },
      href: "https://github.com/Zerohertz/awesome-sgy",
      descriptions: [
        {
          content: {
            ko: "GitHub Actions를 사용하여 자동화된 데이터 수집 및 전처리 파이프라인을 구현하여 데이터 워크플로우 효율성을 향상시켰습니다.",
            en: "Implemented an automated data ingestion and preprocessing pipeline using GitHub Actions to enhance data workflow efficiency.",
          },
        },
        {
          content: {
            ko: "Matplotlib로 생성한 데이터 시각화를 통해 산업기능요원에게 인사이트를 제공하고, 다양한 분석 관점에서 의사결정을 지원했습니다.",
            en: "Delivered insights to skilled industrial personnel (산업기능요원) through data visualizations created with Matplotlib, supporting decision-making from multiple analytical perspectives.",
          },
        },
      ],
    },
  ],
};

export default openSources;
