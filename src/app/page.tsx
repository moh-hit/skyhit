import ExploreCards from "@/components/explore-cards"
import LetsTalk from "@/components/lets-talk"
import {
  IconBook,
  IconBuildingBridge,
  IconCode,
  IconUsers,
  IconVectorTriangle,
} from "@tabler/icons-react"

export default function Home() {
  return (
    <main className="flex xl:h-[calc(100vh-theme(spacing.16))] overscroll-contain flex-col items-start p-10 gap-10">
      <div className="flex flex-1 w-full flex-col xl:flex-row items-center justify-between gap-10 xl:gap-0">
        <div className="flex flex-[2] flex-col items-start gap-4 xl:gap-6">
          <div className="font-medium text-2xl xl:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-50% to-slate-600">{`Hey there, I'm Mohit Kumar`}</div>
          <div className="font-normal text-4xl xl:text-7xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-600/60 to-50% to-slate-700">
            {`I turn ideas into reality by `}
            <span className="inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] xl:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide text-left leading-tight [&_li]:block font-bold">
                <li>
                  <div className="flex flex-row items-center gap-2 text-violet-500">
                    Coding <IconCode className="h-10 w-10 xl:h-16 xl:w-16" />
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2 text-yellow-400">
                    Designing{" "}
                    <IconVectorTriangle className="h-10 w-10 xl:h-16 xl:w-16" />
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2 text-blue-500">
                    Building{" "}
                    <IconBuildingBridge className="h-10 w-10 xl:h-16 xl:w-16" />
                  </div>
                </li>

                <li>
                  <div className="flex flex-row items-center gap-2 text-cyan-500">
                    Learning <IconBook className="h-10 w-10 xl:h-16 xl:w-16" />
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2 text-red-400">
                    Collabrating{" "}
                    <IconUsers className="h-10 w-10 xl:h-16 xl:w-16" />
                  </div>
                </li>
                <li aria-hidden="true">
                  <div className="flex flex-row items-center gap-2 text-violet-500">
                    Coding <IconCode className="h-10 w-10 xl:h-16 xl:w-16" />
                  </div>
                </li>
              </ul>
            </span>
          </div>
          <LetsTalk />
        </div>
        <div className="relative flex flex-1 w-72 h-72">
          {/* <Image src="/bento.png" alt="sticker" fill objectFit="contain" /> */}
        </div>
      </div>
      <ExploreCards />
    </main>
  )
}
