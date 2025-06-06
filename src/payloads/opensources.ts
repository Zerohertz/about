import Payload from "@/components/common/Payload";

const openSources: Payload = {
  title: "OPEN SOURCES",
  disable: false,
  list: [
    {
      title: "vllm-project/vllm",
      href: "https://github.com/vllm-project/vllm/issues?q=author%3AZerohertz%20OR%20reviewed-by%3AZerohertz%20",
      descriptions: [
        {
          content:
            "Led comprehensive documentation modernization initiative by converting legacy Sphinx-style directives to MkDocs-compatible format, improving cross-referencing and API documentation linking.",
        },
        {
          content:
            "Resolved critical markdown rendering issues by implementing proper list indentation configuration in `pymarkdown`, enhancing documentation readability for MkDocs-based system.",
        },
        {
          content:
            "Updated deprecation message for `--enable-reasoning` argument, correcting version reference from non-existent `v0.8.6` to accurate `v0.9.0` deprecation timeline.",
        },
        {
          content:
            "Conducted comprehensive performance analysis comparing [v0 vs. v1 engines](https://github.com/vllm-project/vllm/issues/17540) and [version stability](https://github.com/vllm-project/vllm/issues/18619) (`v0.8.4` vs. `v0.8.5.post1`) across multi-GPU environments, providing detailed technical documentation for engine optimization and issue reproduction.",
        },
      ],
    },
    {
      title: "fastapi/fastapi",
      href: "https://github.com/fastapi/fastapi/issues?q=author%3AZerohertz%20OR%20reviewed-by%3AZerohertz%20",
      descriptions: [
        {
          content:
            "Reviewed and enhanced the Korean FastAPI documentation by addressing missing content and improving formatting.",
        },
        { content: "Fixed issues in FastAPI docs by updating code for the latest version." },
      ],
    },
    {
      title: "microsoft/DeepSpeed",
      href: "https://github.com/microsoft/DeepSpeed/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: "Remove duplicate declaration of pandas in `Dockerfile`.",
        },
      ],
    },
    {
      title: "bytedance/SPTSv2",
      href: "https://github.com/bytedance/SPTSv2/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content:
            "Enhanced environment compatibility by removing `python==3.7` from `requirements.txt`, enabling broader setup compatibility for SPTSv2.",
        },
        {
          content:
            "Corrected variable type mismatch by aligning the `depths` variable to a list type for consistency with its default value, enhancing code clarity and reducing runtime errors.",
        },
        {
          content:
            "Generalized configuration by implementing customizable parameters like `max_length` in data loading and model setup, improving SPTSv2 adaptability for varied use cases.",
        },
        {
          content:
            "Optimized memory usage in inference by adding the `@torch.no_grad` decorator in `predict.py`, significantly reducing GPU memory requirements.",
        },
        {
          content:
            "Resolved `IndexError` during training with customized data by fixing shape mismatches in GT data, ensuring stability in data handling.",
        },
        {
          content:
            "Addressed tensor dimension errors and generalized prediction, evaluation, and visualization processes.",
        },
      ],
    },
    {
      title: "streamlit/streamlit",
      href: "https://github.com/streamlit/streamlit/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: "Identified and verified a dependency mismatch with `Image.Resampling.BILINEAR` (`Pillow >=9.1.0`).",
        },
        {
          content:
            "Conducted version testing and recommended an update to Streamlit’s requirements, improving reliability for developers by preventing compatibility issues.",
        },
      ],
    },
    {
      title: "next-theme/hexo-theme-next",
      href: "https://github.com/next-theme/hexo-theme-next/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content:
            "Added a `motion.duration` parameter in [Hexo](https://github.com/hexojs)'s NexT theme `_config.yml`, enabling flexible configuration of motion animation duration.",
        },
        {
          content:
            "Modified `source/js/motion.js` to retrieve `motion.duration` dynamically, with a default value fallback for robustness.",
        },
      ],
    },
    {
      title: "kubernetes/website",
      href: "https://github.com/kubernetes/website/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content: "Contributed minor wording refinements to improve grammatical accuracy.",
        },
      ],
    },
    {
      title: "Technical Blog",
      href: "https://zerohertz.github.io/",
      descriptions: [
        {
          content:
            "Customized a technical blog based on the Hexo NexT theme to document and share solutions to challenges encountered during personal learning and professional work.",
        },
        {
          content: "Achieved 1,500+ MAU and 2,600+ monthly page views by consistently writing 200+ posts since 2018.",
        },
      ],
    },
    {
      title: "Zerohertz/awesome-jmy",
      href: "https://github.com/Zerohertz/awesome-jmy",
      descriptions: [
        {
          content:
            "Implemented an automated data ingestion and preprocessing pipeline using GitHub Actions to enhance data workflow efficiency.",
        },
        {
          content:
            "Delivered insights to technical research personnel (전문연구요원) through data visualizations created with Matplotlib, supporting decision-making from multiple analytical perspectives.",
        },
      ],
    },
    {
      title: "Zerohertz/awesome-sgy",
      href: "https://github.com/Zerohertz/awesome-sgy",
      descriptions: [
        {
          content:
            "Implemented an automated data ingestion and preprocessing pipeline using GitHub Actions to enhance data workflow efficiency.",
        },
        {
          content:
            "Delivered insights to skilled industrial personnel (산업기능요원) through data visualizations created with Matplotlib, supporting decision-making from multiple analytical perspectives.",
        },
      ],
    },
  ],
};

export default openSources;
