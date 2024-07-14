import ExploreCards from "@/components/explore-cards"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  IconArrowRight,
  IconBook,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBuildingBridge,
  IconCode,
  IconMail,
  IconUsers,
  IconVectorTriangle,
} from "@tabler/icons-react"

export default function Home() {
  return (
    <main className="flex lg:h-[calc(100vh-theme(spacing.16))] overscroll-contain flex-col items-start p-10 gap-10">
      <div className="flex flex-1 w-full flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
        <div className="flex flex-[2] flex-col items-start gap-4 lg:gap-6">
          <div className="font-medium text-2xl lg:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-50% to-slate-600">{`Hey there, I'm Mohit Kumar`}</div>
          <div className="font-normal text-4xl lg:text-7xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-600/60 to-50% to-slate-700">
            {`I turn ideas into reality by `}
            <span className="inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide text-left leading-tight [&_li]:block font-bold">
                <li>
                  <div className="flex flex-row items-center gap-2 text-violet-500">
                    Coding <IconCode className="h-10 w-10 lg:h-16 lg:w-16" />
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2 text-yellow-400">
                    Designing{" "}
                    <IconVectorTriangle className="h-10 w-10 lg:h-16 lg:w-16" />
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2 text-blue-500">
                    Building{" "}
                    <IconBuildingBridge className="h-10 w-10 lg:h-16 lg:w-16" />
                  </div>
                </li>

                <li>
                  <div className="flex flex-row items-center gap-2 text-cyan-500">
                    Learning <IconBook className="h-10 w-10 lg:h-16 lg:w-16" />
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2 text-red-400">
                    Collabrating{" "}
                    <IconUsers className="h-10 w-10 lg:h-16 lg:w-16" />
                  </div>
                </li>
                <li aria-hidden="true">
                  <div className="flex flex-row items-center gap-2 text-violet-500">
                    Coding <IconCode className="h-10 w-10 lg:h-16 lg:w-16" />
                  </div>
                </li>
              </ul>
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="font-bold rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"
                size="lg"
              >
                {`Let's Talk`}
                <IconArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{"Contact me"}</DialogTitle>
                <DialogDescription>
                  {"Let's get in touch and find out how I can help you."}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-6 py-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" defaultValue="" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  className="font-bold bg-gradient-to-r from-indigo-600 to-blue-500"
                  size="lg"
                >
                  Submit
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="relative flex flex-1 w-72 h-72">
          {/* <Image src="/bento.png" alt="sticker" fill objectFit="contain" /> */}
        </div>
      </div>
      <ExploreCards />
    </main>
  )
}
