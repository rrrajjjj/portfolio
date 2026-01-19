import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import flowgradGif from "../img/flowgrad.gif";
import latentLearningImg from "../img/latent-learning.png";
import representationsImg from "../img/representations.png";
import evolMusicImg from "../img/evol-music.png";
import soloBassImg from "../img/solo-bass.png";

export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 font-sans">
          <div className="text-sm font-semibold tracking-wide">Rajsuryan Singh</div>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <nav className="flex items-center gap-4">
              <a href="#research" className="hover:underline">
                Research
              </a>
              <a href="#music" className="hover:underline">
                Music
              </a>
            </nav>
            <div className="flex items-center gap-3 text-slate-500">
              <a href="mailto:rajsuryan.singh@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4 hover:text-slate-900" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=Be5lDt8AAAAJ&hl"
                aria-label="Google Scholar"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 hover:text-slate-900"
                  fill="currentColor"
                >
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                </svg>
              </a>
              <a href="https://github.com/rrrajjjj" aria-label="GitHub">
                <Github className="h-4 w-4 hover:text-slate-900" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajsuryan-singh/"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 hover:text-slate-900" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-12 text-[0.95rem]">
        <section className="space-y-8">
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm sm:grid-cols-[120px_1fr] sm:items-center">
            <img
              src="/img/profile.jpg"
              alt="Rajsuryan Singh"
              className="h-28 w-28 rounded-full object-cover"
              onError={(event) => {
                event.currentTarget.src =
                  "https://placehold.co/280x280/png?text=Profile";
              }}
            />
            <div className="space-y-2 font-sans text-slate-700">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Senior ML Engineer · Eodyne Systems
              </p>
              <p className="text-sm font-medium text-slate-600">
                ML for Stroke Neurorehabilitation
              </p>
            </div>
          </div>

          <div className="space-y-6 font-serif text-slate-700">
            <div className="border-l-2 border-slate-300 pl-4 text-[0.95rem] italic leading-relaxed text-slate-700">
              The most effective way to understand and steer complex systems is
              through their incentives. In machine learning, evaluation
              determines what models learn and, by extension, what the field
              itself optimizes for.
            </div>
            <p>
              This sentiment informs my current research interests in{" "}
              <strong className="font-semibold text-slate-900">
                model evaluation
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-slate-900">
                mechanistic interpretability 
              </strong>{" "}
              of multimodal models.
            </p>
          </div>

          <div className="space-y-6 font-serif leading-relaxed text-slate-700">
            <p>
              The dynamics of my path to this state have been non-linear and
              shaped by a sequence of attractors. I started with building on
              Alan Turing's work on morphogenesis, which led me to{" "}
              <strong className="font-semibold text-slate-900">
                developmental biology
              </strong>{" "}
              and the study of gene
              regulatory networks in rice roots. Speaking of roots, gene
              descends from the Proto-Indo-European <em>ǵenh₁</em>, and so does
              genre. How genres evolve was the crux of my next academic
              inquiry, where we modeled the{" "}
              <strong className="font-semibold text-slate-900">
                cultural evolution
              </strong>{" "}
              of popular music—this being my entry point to{" "}
              <strong className="font-semibold text-slate-900">audio-ML</strong>.
            </p>
            <p>
              At the same time, my day job was to build{" "}
              <strong className="font-semibold text-slate-900">
                computer vision
              </strong>{" "}
              systems for marine conservation to monitor fisheries and coral
              reefs. This phase was marked by the tug between an ever-growing
              fascination with deep networks' ability to learn rich
              representations and frustration with the opacity of said
              representations. Subsequently, the two threads of audio and
              vision intertwined during my master's thesis, where I studied{" "}
              <strong className="font-semibold text-slate-900">
                video understanding
              </strong>{" "}
              and audio-visual representation learning.
            </p>
            <p>
              An often intersecting and complimentary thread has been a keen
              interest in{" "}
              <strong className="font-semibold text-slate-900">
                Neuroscience
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-slate-900">
                Cognitive Science
              </strong>
              - the machine learning literature is rife with cross-pollination
              between these fields, and my long-term goal is to contribute to
              this dialogue to further our understanding of both biological and
              artificial cognition.
            </p>
          </div>
        </section>

        <section id="research" className="space-y-8">
          <h2 className="font-sans text-2xl font-semibold tracking-tight">
            Research
          </h2>
          <div className="space-y-10 font-serif text-slate-700">
            <div>
              <h3 className="mb-3 font-sans text-lg font-semibold text-slate-900">
                Projects
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title:
                      "FlowGrad: Using Motion for Visual Sound Source Localization",
                    image: flowgradGif,
                    description:
                      "Introducing temporal context into sound source localization using optical flow to encode motion information for challenging urban traffic scenarios.",
                    links: [
                      {
                        label: "Paper",
                        href: "https://ieeexplore.ieee.org/document/10094965",
                      },
                      {
                        label: "Code",
                        href: "https://github.com/rrrajjjj/flowgrad",
                      },
                    ],
                  },
                  {
                    title: "Latent Learning in Reward-Free Exploration",
                    image: latentLearningImg,
                    description:
                      "Replicated findings from Edward Tolman's latent learning experiment using RL",
                    links: [
                      {
                        label: "Code",
                        href: "https://github.com/rrrajjjj/latent-learning-with-go-explore",
                      },
                      {
                        label: "Presentation",
                        href: "https://youtu.be/zEJE5SpAHUY",
                      },
                    ],
                  },
                  {
                    title: "Representations in Biological and Artificial Cognition",
                    image: representationsImg,
                    description:
                      "Comparing internal representations in biological and artificial cognitive agents through the lenses of psychology, neuroscience, and artificial intelligence.",
                    links: [
                      {
                        label: "Paper",
                        href: "https://rrrajjjj.github.io/representations-paper/Representations_in_Biological_and_Artificial_Cognition.pdf",
                      },
                    ],
                  },
                  {
                    title: "Evolutionary Dynamics of Popular Music",
                    image: evolMusicImg,
                    description:
                      "Dynamic cluster structure and predictive modelling of music creation style distributions",
                    links: [
                      {
                        label: "Paper",
                        href: "https://royalsocietypublishing.org/rsos/article/9/11/220516/96686/Dynamic-cluster-structure-and-predictive-modelling",
                      },
                    ],
                  },
                  {
                    title: "Solo Bass Performance Toolkit",
                    image: soloBassImg,
                    description:
                      "Rhythm-guided drum generation and loop-station for solo-bass guitar performances",
                    links: [
                      {
                        label: "Presentation",
                        href: "https://youtu.be/W_6oMSJZHE8",
                      },
                    ],
                  },
                ].map((project) => (
                  <div
                    key={project.title}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-44 w-full object-cover"
                    />
                    <div className="space-y-3 p-4">
                      <div className="font-sans text-sm font-semibold text-slate-900">
                        {project.title}
                      </div>
                      <p className="text-sm italic text-slate-600">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-indigo-600">
                        {project.links.map((link) => (
                          <a key={link.href} href={link.href} className="hover:underline">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between gap-4">
                <h3 className="font-sans text-lg font-semibold text-slate-900">
                  Publications
                </h3>
                <a
                  href="https://scholar.google.com/citations?user=Be5lDt8AAAAJ&hl"
                  className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                  </svg>
                  Google Scholar
                </a>
              </div>
              <ul className="space-y-6 text-[0.95rem] font-sans">
                {[
                  {
                    title:
                      "Cybernetic Intervention in Stroke Neurorehabilitation",
                    authors: "D. Aviñó, R. Singh, A. Mura, P. Verschure",
                    venue: "Living Machines 2025",
                    year: "2025",
                  },
                  {
                    title:
                      "FlowGrad: Using Motion for Visual Sound Source Localization",
                    authors:
                      "R. Singh, P. Zinemanas, X. Serra, J. P. Bello and M. Fuentes",
                    venue: "ICASSP 2023",
                    year: "2023",
                  },
                  {
                    title:
                      "Dynamic cluster structure and predictive modelling of music creation style distributions",
                    authors: "R Singh, E Nakamura",
                    venue: "Royal Society Open Science 9 (11), 220516",
                    year: "2022",
                  },
                  {
                    title:
                      "Species-specific function of conserved regulators in orchestrating rice root architecture",
                    authors:
                      "T. Garg, Z. Singh, K. Chennakesavulu, A. K. Dwivedi, V. Varapparambathu, H. Singh, R. Singh, D. Sircar, D. Chandran, K. Prasad, M. Jain, S. R. Yadav",
                    venue: "Development",
                    year: "2022",
                  },
                ].map((pub) => (
                  <li key={pub.title} className="space-y-1">
                    <div className="font-sans font-semibold text-slate-900">
                      {pub.title}
                    </div>
                    <div>{pub.authors}</div>
                    <div className="text-slate-500 italic">
                      {pub.venue} · {pub.year}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="music" className="space-y-6">
          <h2 className="font-sans text-2xl font-semibold tracking-tight">
            Music
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-600">
                tinkerings of my own
              </p>
              <iframe
                title="Raj on Spotify"
                className="h-80 w-full rounded-xl"
                src="https://open.spotify.com/embed/artist/2HYPVoDDl7hyC8SiFuESZ0?utm_source=generator"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-600">
                bassist at Damare!
              </p>
              <iframe
                title="Damare on Spotify"
                className="h-80 w-full rounded-xl"
                src="https://open.spotify.com/embed/artist/2Cjh5og71p6Rx5cNOAEuRT?utm_source=generator"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
