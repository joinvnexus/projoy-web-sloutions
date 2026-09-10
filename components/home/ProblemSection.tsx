// components/home/ProblemSection.tsx
import { Search, AlertTriangle, TrendingDown } from "lucide-react";
import { Eyebrow } from "@/components/shared/Typography";
import { StaggerContainer, StaggerItem } from "@/components/shared/RevealWrapper";

const problems = [
  {
    icon: Search,
    title: "Not Getting Found",
    description:
      "Your customers are searching for your services, but they can't find you. Competitors are capturing the calls, visits, and revenue meant for you.",
  },
  {
    icon: AlertTriangle,
    title: "Technical SEO Issues",
    description:
      "Your website has technical barriers — crawlability issues, missing metadata, slow performance — that prevent search engines from understanding and ranking your pages.",
  },
  {
    icon: TrendingDown,
    title: "Website Not Converting",
    description:
      "Traffic arrives but doesn't convert. Poor user experience, slow load times, and unclear messaging turn visitors into bounces instead of leads.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="problem-heading">
      <div className="container mx-auto max-w-[1200px]">
        <div className="max-w-3xl mb-16">
          <Eyebrow>The Problem</Eyebrow>
          <h2
            id="problem-heading"
            className="font-display font-bold text-slate-900 text-3xl lg:text-4xl leading-tight mb-5"
          >
            Being online isn&apos;t enough. <br />
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">You need to be found.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Most businesses invest in a website and hope for the best. Without the right technical foundation and local visibility strategy, that website becomes an expensive brochure no one reads.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <StaggerItem key={problem.title}>
                <div className="card p-8 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-red-500" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">
                    {problem.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
