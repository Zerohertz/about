import Payload from "@/components/common/Payload";

const openSources: Payload = {
  title: "OPEN SOURCES",
  disable: false,
  list: [
    {
      title: "Technical Blog",
      href: "https://zerohertz.github.io/",
      descriptions: [
        {
          content:
            "Customized a technical blog based on the Hexo NexT theme to document and share solutions to challenges encountered during personal learning and professional work.",
        },
        {
          content: "Achieved 1,500 MAU and 2,600 monthly page views by consistently writing over 200 posts since 2018.",
        },
      ],
    },
    {
      title: "Zerohertz/awesome-jmy",
      href: "https://github.com/Zerohertz/awesome-jmy",
      descriptions: [
        {
          content:
            "Implemented an automated data ingestion and preprocessing pipeline leveraging GitHub Actions to enhance data workflow efficiency.",
        },
        {
          content:
            "Delivered actionable insights to technical research personnel (전문연구요원) through data visualizations created with Matplotlib, supporting decision-making from multiple analytical perspectives.",
        },
      ],
    },
    {
      title: "Zerohertz/awesome-sgy",
      href: "https://github.com/Zerohertz/awesome-sgy",
      descriptions: [
        {
          content:
            "Implemented an automated data ingestion and preprocessing pipeline leveraging GitHub Actions to enhance data workflow efficiency.",
        },
        {
          content:
            "Delivered actionable insights to skilled industrial personnel (산업기능요원) through data visualizations created with Matplotlib, supporting decision-making from multiple analytical perspectives.",
        },
      ],
    },
    {
      title: "streamlit/streamlit",
      href: "https://github.com/streamlit/streamlit/issues?q=author%3AZerohertz",
      descriptions: [
        {
          content:
            "Dentified and verified a dependency mismatch with `Image.Resampling.BILINEAR` usage, accessible only in `Pillow >=9.1.0`.",
        },
        {
          content:
            "Conducted version testing and recommended updating Streamlit’s requirements to prevent compatibility issues, improving reliability for developers.",
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
            "Corrected variable type mismatch by aligning the depths variable to a list type for consistency with its default value, enhancing code clarity and reducing runtime errors.",
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
            "Resolved IndexError in training with customized data by fixing shape mismatches in GT data when augmenting datasets, ensuring stability in SPTSv2’s data handling.",
        },
        {
          content: "Solving tensor dimension erros and generalizing prediction, evaluation, and visualization.",
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
  ],
};

export default openSources;
